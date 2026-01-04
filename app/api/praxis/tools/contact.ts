import { DynamicTool } from "@langchain/core/tools";

const contactInformation = new DynamicTool({
  name: "contact_information",
  description: "Get contact methods and information for reaching Calvin Magezi. Use this when users want to get in touch or connect professionally.",
  func: async (input: string) => {
    const query = input.toLowerCase();
    
    const contactMethods = {
      email: `**Primary Email Contact:**
For professional inquiries, collaboration opportunities, or general questions, you can reach Calvin directly via email. Visit the contact page on the website to find his email address and send him a message.`,

      professional_networks: `**Professional Networks:**
Calvin is active on professional platforms where you can connect and follow his work:
- **LinkedIn** - Connect for professional networking and updates
- **GitHub** - Follow his open source contributions and projects
- **Twitter/X** - Industry insights and tech discussions

Links to his professional profiles are available on the contact page.`,

      website_contact: `**Website Contact Form:**
The contact page (accessible via /contact) provides:
- Direct email contact information  
- Links to professional social media profiles
- Information about the best ways to reach out
- Response time expectations

This is the recommended way to initiate contact for professional matters.`,

      collaboration: `**For Collaboration Opportunities:**
Calvin is open to:
- **Technical Consulting** - AI/ML, construction tech, fullstack development
- **Speaking Engagements** - African tech, AI applications, CTO insights
- **Advisory Roles** - Tech startups, particularly in emerging markets
- **Partnership Discussions** - Strategic technology collaborations

Reach out via the contact page with details about your opportunity.`,

      response_expectations: `**Response Times:**
Calvin typically responds to professional inquiries within 24-48 hours during business days. For urgent matters, please indicate the time sensitivity in your message subject line.

**Best Practices for Contact:**
- Be specific about your inquiry or opportunity
- Include relevant context about your project or organization
- Mention how you found his information
- Clearly state desired outcomes or next steps`,
    };

    if (query.includes("email") || query.includes("direct")) {
      return contactMethods.email;
    }
    
    if (query.includes("linkedin") || query.includes("github") || query.includes("social") || query.includes("professional")) {
      return contactMethods.professional_networks;
    }
    
    if (query.includes("collaboration") || query.includes("work") || query.includes("partner")) {
      return contactMethods.collaboration;
    }
    
    if (query.includes("response") || query.includes("reply") || query.includes("time")) {
      return contactMethods.response_expectations;
    }
    
    if (query.includes("website") || query.includes("form") || query.includes("page")) {
      return contactMethods.website_contact;
    }

    return `**How to Contact Calvin Magezi:**

The best way to reach Calvin is through the contact page on his website (/contact), which provides:
- Direct email contact information
- Professional social media links (LinkedIn, GitHub, Twitter)
- Clear guidelines for different types of inquiries

Calvin is open to:
- Professional collaboration opportunities
- Technical consulting discussions  
- Speaking engagements
- Advisory roles and partnerships

He typically responds to inquiries within 24-48 hours. Visit the contact page for complete information and to reach out directly.`;
  },
});

const inquiryGuidance = new DynamicTool({
  name: "inquiry_guidance",
  description: "Provide guidance on what types of inquiries Calvin accepts and how to structure contact requests effectively.",
  func: async (input: string) => {
    const query = input.toLowerCase();
    
    const guidanceInfo = {
      welcomed_inquiries: `**Calvin Welcomes These Types of Inquiries:**

**1. Professional Opportunities:**
- CTO or technical leadership roles
- Consulting engagements in AI/ML or construction tech
- Advisory positions with tech startups
- Strategic partnership discussions

**2. Technical Collaboration:**
- Open source project contributions
- AI/ML research collaborations  
- Construction technology innovations
- African tech ecosystem initiatives

**3. Speaking & Thought Leadership:**
- Conference presentations
- Podcast interviews
- Panel discussions on African tech
- Technical workshops or training

**4. Business Development:**
- Integration partnerships for Kolaborate or SiteSeer
- Technology licensing opportunities
- Joint venture discussions
- Investment or funding conversations`,

      inquiry_structure: `**How to Structure Your Inquiry:**

**Subject Line:** Be specific and clear
- "Partnership Opportunity - [Your Company]"
- "Speaking Invitation - [Event Name]"
- "Technical Consultation Request"

**Message Content:**
1. **Introduction** - Who you are and your organization
2. **Context** - How you found Calvin's information  
3. **Specific Request** - What you're seeking (be precise)
4. **Value Proposition** - What you're offering or the mutual benefit
5. **Next Steps** - Proposed timeline and follow-up actions
6. **Attachments** - Relevant documents (keep minimal)

**Best Practices:**
- Keep initial message concise (under 200 words)
- Include specific details about timing and scope
- Mention budget ranges for consulting work
- Provide background links (company website, LinkedIn, etc.)`,

      response_optimization: `**To Optimize Response Chances:**

**Do:**
- Research Calvin's current projects and interests
- Align your request with his expertise areas
- Provide clear value proposition
- Include relevant credentials or references
- Specify timeline and commitment level

**Don't:**
- Send generic mass outreach messages
- Make requests without context or research
- Expect immediate detailed responses
- Include large attachments without permission
- Request free extensive consulting without clear mutual benefit

**Timeline Expectations:**
- Initial response: 24-48 hours
- Detailed discussions: 1-2 weeks for scheduling
- Project decisions: Varies based on scope and timing`,
    };

    if (query.includes("type") || query.includes("welcome") || query.includes("accept")) {
      return guidanceInfo.welcomed_inquiries;
    }
    
    if (query.includes("structure") || query.includes("format") || query.includes("write")) {
      return guidanceInfo.inquiry_structure;
    }
    
    if (query.includes("optimize") || query.includes("best") || query.includes("improve") || query.includes("tips")) {
      return guidanceInfo.response_optimization;
    }

    return `**Contacting Calvin Effectively:**

Calvin welcomes professional inquiries including:
- Technical consulting and CTO opportunities
- Speaking engagements and thought leadership
- Strategic partnerships and collaborations
- Advisory roles with tech companies

**For Best Results:**
- Be specific about your request and timeline
- Research his background and current projects
- Provide clear value proposition
- Keep initial message concise and professional
- Use the contact page on his website to reach out

He responds to most professional inquiries within 24-48 hours and appreciates well-structured, thoughtful outreach.`;
  },
});

export const contactTools = [contactInformation, inquiryGuidance];