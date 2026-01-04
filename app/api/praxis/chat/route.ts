import { NextRequest, NextResponse } from "next/server";
import { createEfficientPraxisAgent } from "../config/efficient-agent";
import {
  getAdvancedSessionMemory
} from "../config/memory";
import { HumanMessage, AIMessage } from "@langchain/core/messages";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required and must be a string" },
        { status: 400 }
      );
    }

    if (!process.env.GOOGLE_AI_API_KEY) {
      return NextResponse.json(
        { error: "Google AI API key not configured" },
        { status: 500 }
      );
    }

    const effectiveSessionId = sessionId || uuidv4();

    try {
      // Initialize efficient agent (optimized for quota conservation)
      const agent = createEfficientPraxisAgent();

      // Get advanced session memory
      const memory = getAdvancedSessionMemory(effectiveSessionId);

      // Create user message
      const userMessage = new HumanMessage({
        content: message.trim()
      });

      // Add user message to memory (but skip summarization to save quota)
      memory.messages.push(userMessage);
      memory.lastAccessed = new Date();

      // For efficiency, use simple context instead of full contextual generation
      let contextualMessage = message.trim();
      if (memory.conversationSummary) {
        contextualMessage = `Context: ${memory.conversationSummary.substring(0, 200)}\nQuery: ${message.trim()}`;
      }

      // Get recent conversation history (limit to save tokens)
      const recentMessages = memory.messages.slice(-4);

      // Invoke efficient agent
      const response = await agent.invoke({
        messages: [
          ...recentMessages,
          new HumanMessage({ content: contextualMessage })
        ]
      });

      // Extract assistant response
      const lastMessage = response.messages[response.messages.length - 1];
      const assistantMessage = lastMessage.content as string;

      // Create AI message and add to memory
      const aiMessage = new AIMessage({
        content: assistantMessage
      });
      memory.messages.push(aiMessage);

      // Simple session context
      const currentTopic = message.toLowerCase().includes('kolaborate') ? 'kolaborate' :
        message.toLowerCase().includes('siteseer') ? 'siteseer' :
          message.toLowerCase().includes('contact') ? 'contact' : undefined;

      return NextResponse.json({
        message: assistantMessage,
        sessionId: effectiveSessionId,
        context: {
          currentTopic,
          messageCount: memory.messages.length,
          hasSummary: !!memory.conversationSummary
        }
      });

    } catch (agentError: unknown) {
      console.error("Agent execution error:", agentError);

      return NextResponse.json({
        message: "I apologize, but I'm experiencing some technical difficulties right now. Please try asking your question again, or feel free to contact Calvin directly through the contact page.",
        sessionId: effectiveSessionId,
      });
    }

  } catch (error: unknown) {
    console.error("Chat API error:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
        message: "I'm sorry, I'm having trouble processing your request right now. Please try again or contact Calvin directly."
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "Praxis AI Agent is running",
    model: process.env.PRAXIS_MODEL || "gemini-3-flash-preview",
    agentName: process.env.PRAXIS_AGENT_NAME || "Praxis",
  });
}