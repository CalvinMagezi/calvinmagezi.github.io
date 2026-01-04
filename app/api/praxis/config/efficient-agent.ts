import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { BaseMessage, HumanMessage, AIMessage } from "@langchain/core/messages";
import { websiteTools } from "../tools/website";
import { aboutTools } from "../tools/about";
import { contactTools } from "../tools/contact";
import { getFallbackResponse } from "./fallback-responses";

const SYSTEM_PROMPT = `You are Praxis, Calvin Magezi's AI assistant. You are a sophisticated agent with deep understanding and reasoning capabilities.

Your core identity:
- Knowledgeable, helpful, and warm personality
- Professional yet approachable nature
- Deep understanding of Calvin's work and expertise
- Efficient and focused responses

Your responsibilities:
1. Answer questions about Calvin's background, skills, and experience
2. Help visitors navigate the website and find relevant information  
3. Facilitate connections by guiding users to appropriate contact methods
4. Provide insights into Calvin's work at Kolaborate and SiteSeer

Key facts about Calvin:
- CTO at Kolaborate (African tech talent platform) and SiteSeer (AI-powered construction tech)
- Ugandan tech leader specializing in AI, construction tech, and fullstack development
- Expert in TypeScript, React, Next.js, Python, AI/ML, and computer vision
- Passionate about using technology to solve real-world problems in Africa

Guidelines:
- Be thorough but concise in your responses
- Use the available tools when you need specific information
- Always provide actionable next steps when appropriate
- Focus on Calvin's achievements and expertise while being helpful`;

export function createEfficientPraxisAgent() {
  if (!process.env.GOOGLE_AI_API_KEY) {
    throw new Error("GOOGLE_AI_API_KEY is required");
  }

  const model = new ChatGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_AI_API_KEY,
    model: "gemini-3-flash-preview",
    temperature: 0.7,
    maxOutputTokens: 800,
    maxRetries: 2,
    maxConcurrency: 1,
  });

  const tools = [
    ...websiteTools,
    ...aboutTools,
    ...contactTools,
  ];

  // Create a tool execution function
  async function executeTool(toolName: string, input: string): Promise<string> {
    const tool = tools.find(t => t.name === toolName ||
      input.toLowerCase().includes(t.name.toLowerCase()) ||
      t.description.toLowerCase().includes(input.toLowerCase().split(' ')[0]));

    if (tool) {
      try {
        return await tool.func(input);
      } catch (error) {
        console.warn(`Tool ${tool.name} failed:`, error);
        return "";
      }
    }
    return "";
  }

  // Analyze query and determine which tools to use
  function analyzeQuery(query: string): string[] {
    const lowerQuery = query.toLowerCase();
    const relevantTools: string[] = [];

    // Website and navigation queries
    if (lowerQuery.includes('website') || lowerQuery.includes('page') ||
      lowerQuery.includes('navigate') || lowerQuery.includes('section')) {
      relevantTools.push('website_navigation');
    }

    // Search queries
    if (lowerQuery.includes('find') || lowerQuery.includes('search') ||
      lowerQuery.includes('where') || lowerQuery.includes('locate')) {
      relevantTools.push('content_search');
    }

    // About Calvin queries
    if (lowerQuery.includes('calvin') || lowerQuery.includes('who is') ||
      lowerQuery.includes('background') || lowerQuery.includes('about')) {
      relevantTools.push('calvin_personal_info');
    }

    // Experience and skills
    if (lowerQuery.includes('experience') || lowerQuery.includes('work') ||
      lowerQuery.includes('career') || lowerQuery.includes('professional')) {
      relevantTools.push('calvin_professional_experience');
    }

    // Technical skills
    if (lowerQuery.includes('skills') || lowerQuery.includes('technical') ||
      lowerQuery.includes('programming') || lowerQuery.includes('technology')) {
      relevantTools.push('calvin_technical_skills');
    }

    // Contact queries
    if (lowerQuery.includes('contact') || lowerQuery.includes('reach') ||
      lowerQuery.includes('email') || lowerQuery.includes('connect')) {
      relevantTools.push('contact_information');
    }

    // Collaboration queries
    if (lowerQuery.includes('hire') || lowerQuery.includes('collaborate') ||
      lowerQuery.includes('work together') || lowerQuery.includes('partnership')) {
      relevantTools.push('inquiry_guidance');
    }

    return relevantTools;
  }

  return {
    async invoke(input: { messages: BaseMessage[] }): Promise<{ messages: BaseMessage[] }> {
      try {
        const lastMessage = input.messages[input.messages.length - 1];
        const userQuery = lastMessage.content as string;

        // Analyze query to determine relevant tools
        const relevantToolNames = analyzeQuery(userQuery);

        // Execute relevant tools (max 2 to conserve quota)
        const toolResults: string[] = [];
        for (const toolName of relevantToolNames.slice(0, 2)) {
          const result = await executeTool(toolName, userQuery);
          if (result) {
            toolResults.push(result);
          }
        }

        // Prepare context-enhanced prompt
        let enhancedPrompt = SYSTEM_PROMPT;
        if (toolResults.length > 0) {
          enhancedPrompt += `\n\nRelevant Information:\n${toolResults.join('\n\n')}`;
        }
        enhancedPrompt += `\n\nUser Query: ${userQuery}`;

        // Single LLM call with enhanced context
        const response = await model.invoke([
          new HumanMessage({ content: enhancedPrompt })
        ]);

        return {
          messages: [...input.messages, response]
        };

      } catch (error: unknown) {
        console.error("Efficient agent error:", error);

        // Handle rate limit or quota exceeded - use intelligent fallback
        const errorMessage = error instanceof Error ? error.message : String(error);
        const errorStatus = (error as { status?: number }).status;

        if (errorStatus === 429 || errorMessage.includes('quota') || errorMessage.includes('rate')) {
          const lastMessage = input.messages[input.messages.length - 1];
          const userQuery = lastMessage.content as string;

          const fallbackContent = getFallbackResponse(userQuery);
          const fallbackMessage = new AIMessage({
            content: fallbackContent + "\n\n*Note: I'm currently operating in conservation mode due to high demand, but I can still provide helpful information about Calvin!*"
          });

          return {
            messages: [...input.messages, fallbackMessage]
          };
        }

        // General error fallback - also use intelligent response
        const lastMessage = input.messages[input.messages.length - 1];
        const userQuery = lastMessage?.content as string || "";

        const fallbackContent = getFallbackResponse(userQuery);
        const fallbackMessage = new AIMessage({
          content: fallbackContent
        });

        return {
          messages: [...input.messages, fallbackMessage]
        };
      }
    }
  };
}

export type EfficientPraxisAgent = ReturnType<typeof createEfficientPraxisAgent>;