import { DynamicTool } from "@langchain/core/tools";

const planningTool = new DynamicTool({
  name: "planning_tool",
  description: "Break down complex user queries into structured plans with clear steps. Use this for multi-part questions or when deep reasoning is required.",
  func: async (input: string) => {
    const query = input.toLowerCase();
    
    // Analyze the complexity and intent of the user query
    const analysisPatterns = {
      comparison: /compare|versus|vs|difference|between/,
      explanation: /explain|how does|what is|tell me about|describe/,
      guidance: /help me|guide me|how to|steps to|how can i/,
      comprehensive: /everything about|all about|complete|detailed|comprehensive/,
      technical: /architecture|implementation|technical|development|code/,
      career: /career|experience|background|journey|professional|work/,
      contact: /contact|reach|connect|get in touch|hire|collaborate/,
      project: /project|kolaborate|siteseer|portfolio|work|built/
    };
    
    let planType = "general";
    let complexity = "simple";
    
    // Determine query type and complexity
    for (const [type, pattern] of Object.entries(analysisPatterns)) {
      if (pattern.test(query)) {
        planType = type;
        break;
      }
    }
    
    // Determine complexity based on query characteristics
    if (query.length > 100 || query.split(' ').length > 15) {
      complexity = "complex";
    } else if (query.length > 50 || query.split(' ').length > 8) {
      complexity = "moderate";
    }
    
    // Generate structured plan based on type and complexity
    let plan: string;
    
    switch (planType) {
      case "comparison":
        plan = `COMPARISON ANALYSIS PLAN:
1. IDENTIFY SUBJECTS: Extract the specific items/concepts being compared
2. GATHER INFORMATION: Use relevant tools to collect detailed information about each subject
3. ANALYZE DIFFERENCES: Compare features, benefits, use cases, and characteristics
4. SYNTHESIZE: Provide clear comparison with actionable insights and recommendations`;
        break;
        
      case "explanation":
        plan = `COMPREHENSIVE EXPLANATION PLAN:
1. DEFINE SCOPE: Identify the specific topic and depth required
2. GATHER CONTEXT: Use website and about tools to collect relevant information
3. STRUCTURE RESPONSE: Organize information logically (overview → details → examples)
4. ENHANCE UNDERSTANDING: Add practical examples and connect to Calvin's experience`;
        break;
        
      case "guidance":
        plan = `GUIDANCE AND ASSISTANCE PLAN:
1. UNDERSTAND GOAL: Clarify what the user wants to achieve
2. ASSESS CURRENT STATE: Determine user's starting point and context
3. CREATE ACTION PLAN: Develop step-by-step guidance using available tools
4. PROVIDE RESOURCES: Include relevant links, contacts, or next steps`;
        break;
        
      case "comprehensive":
        plan = `COMPREHENSIVE INFORMATION PLAN:
1. SCOPE ANALYSIS: Break down the broad topic into key areas
2. SYSTEMATIC COLLECTION: Use all relevant tools (website, about, contact) to gather information
3. ORGANIZE CONTENT: Structure information into logical sections
4. PROVIDE DEPTH: Include details, examples, and practical applications
5. SUGGEST FOLLOW-UP: Offer ways to get more specific information or contact Calvin`;
        break;
        
      case "technical":
        plan = `TECHNICAL DEEP DIVE PLAN:
1. IDENTIFY TECHNICAL SCOPE: Determine specific technologies, frameworks, or approaches
2. GATHER TECHNICAL INFO: Use about and skills tools for Calvin's technical expertise
3. PROVIDE CONTEXT: Explain how technologies fit into Calvin's projects
4. INCLUDE EXAMPLES: Reference specific implementations in Kolaborate/SiteSeer
5. SUGGEST TECHNICAL DISCUSSION: Guide toward direct contact for detailed technical questions`;
        break;
        
      case "career":
        plan = `CAREER AND EXPERIENCE PLAN:
1. CAREER TIMELINE: Use about tools to gather chronological career information
2. ROLE ANALYSIS: Detail current and past positions, especially CTO roles
3. ACHIEVEMENT HIGHLIGHTS: Focus on key accomplishments and impact
4. SKILL EVOLUTION: Show how skills developed over time
5. FUTURE OPPORTUNITIES: Connect to potential collaboration or hiring discussions`;
        break;
        
      case "contact":
        plan = `CONNECTION FACILITATION PLAN:
1. UNDERSTAND INTENT: Clarify the purpose of contact (collaboration, hiring, etc.)
2. PROVIDE OPTIONS: Use contact tools to show available communication channels
3. SET EXPECTATIONS: Explain response times and preferred contact methods
4. PREPARE CONTEXT: Suggest what information to include in outreach
5. FACILITATE CONNECTION: Provide direct paths to reach Calvin`;
        break;
        
      case "project":
        plan = `PROJECT EXPLORATION PLAN:
1. PROJECT IDENTIFICATION: Determine which specific projects are of interest
2. PROJECT DETAILS: Use website and about tools to gather comprehensive project information
3. TECHNICAL ANALYSIS: Explain technologies, architecture, and implementation approaches
4. IMPACT ASSESSMENT: Highlight business value and user benefits
5. DEEPER ENGAGEMENT: Suggest ways to learn more or get involved`;
        break;
        
      default:
        plan = `GENERAL RESPONSE PLAN:
1. CLARIFY INTENT: Understand what the user is looking for
2. GATHER RELEVANT INFO: Use appropriate tools based on the query topic
3. PROVIDE FOCUSED RESPONSE: Address the specific question directly
4. ENHANCE VALUE: Add related information that might be helpful
5. SUGGEST NEXT STEPS: Offer ways to get more detailed information`;
    }
    
    // Add complexity-specific enhancements
    if (complexity === "complex") {
      plan += `

COMPLEXITY ENHANCEMENTS:
- Use multiple tools in sequence for comprehensive information gathering
- Provide detailed explanations with examples and context
- Include multiple perspectives or approaches where relevant
- Offer both high-level overview and detailed breakdown
- Suggest follow-up questions or areas for deeper exploration`;
    } else if (complexity === "moderate") {
      plan += `

ENHANCED APPROACH:
- Use 2-3 relevant tools to gather complete information
- Provide clear structure with main points and supporting details
- Include practical examples from Calvin's experience
- Offer additional resources or contact options`;
    }
    
    plan += `

EXECUTION NOTES:
- Query Type: ${planType.toUpperCase()}
- Complexity Level: ${complexity.toUpperCase()}
- Estimated Tools Needed: ${complexity === "complex" ? "3-4" : complexity === "moderate" ? "2-3" : "1-2"}
- Response Style: ${complexity === "complex" ? "Comprehensive and detailed" : "Clear and focused"}`;
    
    return plan;
  },
});

export { planningTool };