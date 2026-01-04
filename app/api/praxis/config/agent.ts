import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { StateGraph, END, START, Annotation } from "@langchain/langgraph";
import { BaseMessage, HumanMessage, AIMessage } from "@langchain/core/messages";
import { ToolNode } from "@langchain/langgraph/prebuilt";
import { websiteTools } from "../tools/website";
import { aboutTools } from "../tools/about";
import { contactTools } from "../tools/contact";
import { planningTool } from "../tools/planning";

// Define the agent state using Annotation
const AgentAnnotation = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: (prev, next) => prev.concat(next),
    default: () => [],
  }),
  plan: Annotation<string | undefined>({
    reducer: (prev, next) => next ?? prev,
    default: () => undefined,
  }),
  currentStep: Annotation<number | undefined>({
    reducer: (prev, next) => next ?? prev,
    default: () => 1,
  }),
  toolResults: Annotation<Record<string, unknown>>({
    reducer: (prev, next) => ({ ...prev, ...next }),
    default: () => ({}),
  }),
  conversationSummary: Annotation<string | undefined>({
    reducer: (prev, next) => next ?? prev,
    default: () => undefined,
  }),
  isComplete: Annotation<boolean>({
    reducer: (prev, next) => next ?? prev,
    default: () => false,
  }),
});

type AgentState = typeof AgentAnnotation.State;

const SYSTEM_PROMPT = `You are Praxis, Calvin Magezi's AI assistant. You are a sophisticated deep agent with advanced reasoning capabilities.

Your core identity:
- Knowledgeable, helpful, and warm personality
- Professional yet approachable nature
- Deep understanding of Calvin's work and expertise
- Capable of complex multi-step reasoning and planning

Your primary responsibilities:
1. Answer questions about Calvin's background, skills, and experience
2. Help visitors navigate the website and find relevant information  
3. Facilitate connections by guiding users to appropriate contact methods
4. Provide insights into Calvin's work at Kolaborate and SiteSeer
5. Plan and execute complex multi-step queries
6. Reason about user needs and provide comprehensive assistance

Key facts about Calvin:
- CTO at Kolaborate (African tech talent platform) and SiteSeer (AI-powered construction tech)
- Ugandan tech leader specializing in AI, construction tech, and fullstack development
- Expert in TypeScript, React, Next.js, Python, AI/ML, and computer vision
- Passionate about using technology to solve real-world problems in Africa

Deep Agent Capabilities:
- Plan complex multi-step responses
- Use tools strategically to gather information
- Synthesize information from multiple sources
- Adapt your approach based on user feedback
- Maintain context across long conversations

Guidelines:
- For complex queries, use the planning tool first to break down the task
- Be thorough but concise in your responses
- Always provide actionable next steps when appropriate
- Use tools to verify information and provide accurate details
- If you don't know something specific, use tools to find it or direct users to contact Calvin
- Focus on Calvin's achievements and expertise while being helpful to the user`;

export function createPraxisDeepAgent() {
  if (!process.env.GOOGLE_AI_API_KEY) {
    throw new Error("GOOGLE_AI_API_KEY is required");
  }

  // Initialize the LLM
  const model = new ChatGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_AI_API_KEY,
    model: process.env.PRAXIS_MODEL || "gemini-3-flash-preview",
    temperature: 0.7,
    maxOutputTokens: 1000, // Reduced to conserve quota
    maxRetries: 3,
    maxConcurrency: 1, // Prevent parallel calls
  });

  // Combine all tools
  const tools = [
    planningTool,
    ...websiteTools,
    ...aboutTools,
    ...contactTools,
  ];

  // Bind tools to model
  const modelWithTools = model.bindTools(tools);

  // Define agent nodes
  async function callModel(state: AgentState): Promise<Partial<AgentState>> {
    const { messages } = state;

    // Prepare system message with current context
    const systemMessage = new HumanMessage({
      content: SYSTEM_PROMPT + (state.plan ? `\n\nCurrent Plan: ${state.plan}` : "")
    });

    const response = await modelWithTools.invoke([systemMessage, ...messages]);

    return {
      messages: [response]
    };
  }

  async function planningNode(state: AgentState): Promise<Partial<AgentState>> {
    const lastMessage = state.messages[state.messages.length - 1];

    if (lastMessage instanceof HumanMessage) {
      const userQuery = lastMessage.content as string;

      // Simplified planning - only for very complex queries to save API quota
      if (userQuery.length > 100 || (userQuery.includes("explain") && userQuery.includes("tell me about"))) {
        try {
          const planResult = await planningTool.func(userQuery);
          return {
            plan: planResult,
            currentStep: 1
          };
        } catch (error) {
          console.warn("Planning failed:", error);
          return {};
        }
      }
    }

    return {};
  }

  async function shouldContinue(state: AgentState): Promise<string> {
    const lastMessage = state.messages[state.messages.length - 1];

    // If the last message has tool calls, continue to tool execution
    if (lastMessage && 'tool_calls' in lastMessage && (lastMessage as AIMessage).tool_calls && (lastMessage as AIMessage).tool_calls!.length > 0) {
      return "tools";
    }

    // If we have a plan and haven't completed all steps, continue planning
    if (state.plan && state.currentStep && state.currentStep < 3) {
      return "planning";
    }

    // Otherwise, end the conversation
    return END;
  }

  // Create tool node
  const toolNode = new ToolNode(tools);

  // Define the graph
  const workflow = new StateGraph(AgentAnnotation);

  // Add nodes
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  workflow.addNode("planning", planningNode as any);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  workflow.addNode("agent", callModel as any);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  workflow.addNode("tools", toolNode as any);

  // Add edges
  workflow.addEdge(START, "planning");
  workflow.addEdge("planning", "agent");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  workflow.addConditionalEdges("agent" as any, shouldContinue as any, {
    tools: "tools",
    planning: "planning",
    [END]: END,
  } as any);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  workflow.addEdge("tools" as any, "agent" as any);

  // Compile the graph
  const app = workflow.compile();

  return {
    async invoke(input: { messages: BaseMessage[] }): Promise<{ messages: BaseMessage[] }> {
      try {
        const result = (await app.invoke({
          messages: input.messages
        })) as AgentState;

        return {
          messages: result.messages || []
        };
      } catch (error) {
        console.error("Deep agent error:", error);

        // Fallback response
        const fallbackMessage = new AIMessage({
          content: "I apologize, but I'm experiencing some technical difficulties. Please try asking your question again, or feel free to contact Calvin directly through the contact page."
        });

        return {
          messages: [...input.messages, fallbackMessage]
        };
      }
    }
  };
}

export type PraxisDeepAgent = ReturnType<typeof createPraxisDeepAgent>;