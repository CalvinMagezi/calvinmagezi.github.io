import { BaseMessage, HumanMessage, AIMessage } from "@langchain/core/messages";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

interface AdvancedSessionMemory {
  messages: BaseMessage[];
  conversationSummary?: string;
  userPreferences?: Record<string, unknown>;
  lastAccessed: Date;
  sessionContext?: {
    userGoal?: string;
    currentTopic?: string;
    completedTasks?: string[];
    pendingQuestions?: string[];
  };
}

interface ConversationMetrics {
  totalMessages: number;
  averageMessageLength: number;
  topicChanges: number;
  lastActivity: Date;
}

const sessionMemories = new Map<string, AdvancedSessionMemory>();
const sessionMetrics = new Map<string, ConversationMetrics>();

const MEMORY_CLEANUP_INTERVAL = 1000 * 60 * 30; // 30 minutes
const SESSION_TIMEOUT = 1000 * 60 * 60 * 2; // 2 hours
const SUMMARIZATION_THRESHOLD = 10; // Messages before summarization
const MAX_MESSAGE_HISTORY = 20; // Maximum messages to keep in active memory

// Initialize summarization model
let summarizationModel: ChatGoogleGenerativeAI | null = null;

function getSummarizationModel(): ChatGoogleGenerativeAI {
  if (!summarizationModel && process.env.GOOGLE_AI_API_KEY) {
    summarizationModel = new ChatGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_AI_API_KEY,
      model: "gemini-3-flash-preview",
      temperature: 0.3,
      maxOutputTokens: 500,
    });
  }
  return summarizationModel!;
}

export function getAdvancedSessionMemory(sessionId: string): AdvancedSessionMemory {
  const existing = sessionMemories.get(sessionId);

  if (existing) {
    existing.lastAccessed = new Date();
    return existing;
  }

  const newSession: AdvancedSessionMemory = {
    messages: [],
    lastAccessed: new Date(),
    sessionContext: {
      completedTasks: [],
      pendingQuestions: []
    }
  };

  sessionMemories.set(sessionId, newSession);
  sessionMetrics.set(sessionId, {
    totalMessages: 0,
    averageMessageLength: 0,
    topicChanges: 0,
    lastActivity: new Date(),
  });

  return newSession;
}

export async function addMessageToMemory(
  sessionId: string,
  message: BaseMessage
): Promise<void> {
  const memory = getAdvancedSessionMemory(sessionId);
  const metrics = sessionMetrics.get(sessionId)!;

  // Add message to memory
  memory.messages.push(message);
  memory.lastAccessed = new Date();

  // Update metrics
  metrics.totalMessages += 1;
  metrics.lastActivity = new Date();

  if (message instanceof HumanMessage) {
    const messageLength = (message.content as string).length;
    metrics.averageMessageLength =
      (metrics.averageMessageLength * (metrics.totalMessages - 1) + messageLength) / metrics.totalMessages;
  }

  // Check if summarization is needed
  if (memory.messages.length > SUMMARIZATION_THRESHOLD) {
    await summarizeConversation(sessionId);
  }

  // Analyze and update session context
  await updateSessionContext(sessionId, message);
}

async function summarizeConversation(sessionId: string): Promise<void> {
  const memory = getAdvancedSessionMemory(sessionId);

  if (memory.messages.length <= SUMMARIZATION_THRESHOLD) {
    return;
  }

  try {
    const model = getSummarizationModel();

    // Prepare messages for summarization (exclude system messages)
    const messagesToSummarize = memory.messages
      .filter(msg => msg instanceof HumanMessage || msg instanceof AIMessage)
      .slice(0, -5); // Keep last 5 messages unsummarized

    if (messagesToSummarize.length === 0) {
      return;
    }

    const conversationText = messagesToSummarize
      .map(msg => {
        const role = msg instanceof HumanMessage ? "User" : "Praxis";
        return `${role}: ${msg.content}`;
      })
      .join("\n");

    const summarizationPrompt = `Please create a comprehensive summary of this conversation between a user and Praxis (Calvin Magezi's AI assistant). Focus on:

1. Key topics discussed
2. Important information shared about Calvin
3. User's goals or interests
4. Questions answered
5. Any pending items or follow-up needs

Previous summary: ${memory.conversationSummary || "None"}

Recent conversation:
${conversationText}

Create a concise but comprehensive summary that maintains important context:`;

    const summary = await model.invoke([new HumanMessage(summarizationPrompt)]);

    // Update memory with summary and trim old messages
    memory.conversationSummary = summary.content as string;
    memory.messages = [
      ...memory.messages.slice(-MAX_MESSAGE_HISTORY) // Keep recent messages
    ];

  } catch (error) {
    console.error("Conversation summarization failed:", error);
  }
}

async function updateSessionContext(sessionId: string, message: BaseMessage): Promise<void> {
  const memory = getAdvancedSessionMemory(sessionId);

  if (!memory.sessionContext) {
    memory.sessionContext = {
      completedTasks: [],
      pendingQuestions: []
    };
  }

  // Analyze message content for context updates
  if (message instanceof HumanMessage) {
    const content = message.content as string;
    const lowerContent = content.toLowerCase();

    // Detect topic changes
    const topics = [
      'kolaborate', 'siteseer', 'projects', 'experience', 'skills',
      'contact', 'background', 'education', 'career'
    ];

    const currentTopics = topics.filter(topic => lowerContent.includes(topic));
    if (currentTopics.length > 0 && memory.sessionContext.currentTopic !== currentTopics[0]) {
      memory.sessionContext.currentTopic = currentTopics[0];

      // Update metrics for topic change
      const metrics = sessionMetrics.get(sessionId)!;
      metrics.topicChanges += 1;
    }

    // Detect questions for follow-up tracking
    if (content.includes('?')) {
      memory.sessionContext.pendingQuestions = memory.sessionContext.pendingQuestions || [];
      memory.sessionContext.pendingQuestions.push(content);
    }

    // Detect user goals
    const goalIndicators = [
      'want to', 'need to', 'looking for', 'interested in',
      'hoping to', 'trying to', 'plan to'
    ];

    for (const indicator of goalIndicators) {
      if (lowerContent.includes(indicator)) {
        const goalStart = lowerContent.indexOf(indicator);
        const goalText = content.substring(goalStart, goalStart + 100);
        memory.sessionContext.userGoal = goalText;
        break;
      }
    }
  }
}

export function getSessionContext(sessionId: string): Record<string, unknown> {
  const memory = getAdvancedSessionMemory(sessionId);
  const metrics = sessionMetrics.get(sessionId);

  return {
    summary: memory.conversationSummary,
    context: memory.sessionContext,
    metrics: metrics,
    messageCount: memory.messages.length,
  };
}

export function getConversationHistory(sessionId: string): BaseMessage[] {
  const memory = getAdvancedSessionMemory(sessionId);
  return memory.messages;
}

export async function generateContextualPrompt(sessionId: string, currentMessage: string): Promise<string> {
  const memory = getAdvancedSessionMemory(sessionId);
  // getSessionContext(sessionId) updates metrics, but we don't need its return value here
  getSessionContext(sessionId);

  let contextualPrompt = currentMessage;

  // Add conversation summary if available
  if (memory.conversationSummary) {
    contextualPrompt = `Previous conversation summary: ${memory.conversationSummary}\n\nCurrent message: ${currentMessage}`;
  }

  // Add session context
  if (memory.sessionContext?.userGoal) {
    contextualPrompt += `\n\nUser's apparent goal: ${memory.sessionContext.userGoal}`;
  }

  if (memory.sessionContext?.currentTopic) {
    contextualPrompt += `\n\nCurrent topic: ${memory.sessionContext.currentTopic}`;
  }

  return contextualPrompt;
}

export function clearSessionMemory(sessionId: string): void {
  sessionMemories.delete(sessionId);
  sessionMetrics.delete(sessionId);
}

export function getMemoryStats(): {
  activeSessions: number;
  totalMessages: number;
  avgSessionLength: number;
} {
  const sessions = Array.from(sessionMemories.values());
  const totalMessages = sessions.reduce((sum, session) => sum + session.messages.length, 0);

  return {
    activeSessions: sessions.length,
    totalMessages,
    avgSessionLength: sessions.length > 0 ? totalMessages / sessions.length : 0,
  };
}

// Cleanup interval for expired sessions
setInterval(() => {
  const now = new Date();

  for (const [sessionId, session] of sessionMemories.entries()) {
    const timeDiff = now.getTime() - session.lastAccessed.getTime();

    if (timeDiff > SESSION_TIMEOUT) {
      clearSessionMemory(sessionId);
    }
  }
}, MEMORY_CLEANUP_INTERVAL);