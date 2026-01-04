import { DynamicTool } from "@langchain/core/tools";

interface PageInfo {
  path: string;
  description: string;
  sections?: string[];
  content?: string;
}

const websiteNavigation = new DynamicTool({
  name: "website_navigation",
  description: "Get information about website pages, sections, and navigation. Use this to help users find specific content or understand the site structure.",
  func: async (input: string) => {
    const query = input.toLowerCase();

    const pages: Record<string, PageInfo> = {
      home: {
        path: "/",
        description: "Main landing page with banner, about section, skills overview, and portfolio highlights",
        sections: ["banner", "about", "skills", "portfolio", "services", "facts", "clients"]
      },
      about: {
        path: "/about-me",
        description: "Detailed information about Calvin's background, education, and professional journey",
        content: "Personal story, career progression, education background"
      },
      biography: {
        path: "/biography",
        description: "Comprehensive biography with detailed career timeline and achievements",
        content: "Professional timeline, major milestones, company roles"
      },
      projects: {
        path: "/projects",
        description: "Portfolio of projects including Kolaborate, SiteSeer, and other tech initiatives",
        content: "Project descriptions, technologies used, impact metrics"
      },
      blog: {
        path: "/blog",
        description: "Technical articles, insights, and thought leadership content",
        content: "Tech tutorials, industry insights, AI/ML articles"
      },
      skills: {
        path: "/skills",
        description: "Technical skills, programming languages, frameworks, and expertise areas",
        content: "TypeScript, React, Next.js, Python, AI/ML, Computer Vision, Cloud technologies"
      },
      contact: {
        path: "/contact",
        description: "Contact information and ways to reach Calvin for collaboration or opportunities",
        content: "Email, social media, professional networks"
      }
    };

    if (query.includes("navigation") || query.includes("pages") || query.includes("sections")) {
      return `Website structure:
- Home (/) - Main page with overview
- About Me (/about-me) - Personal background
- Biography (/biography) - Detailed career timeline  
- Projects (/projects) - Portfolio and work samples
- Blog (/blog) - Articles and insights
- Skills (/skills) - Technical expertise
- Contact (/contact) - Get in touch

Each page provides detailed information about Calvin's professional journey and expertise.`;
    }

    for (const [pageName, pageInfo] of Object.entries(pages)) {
      if (query.includes(pageName) || query.includes(pageInfo.path)) {
        return `${pageName.charAt(0).toUpperCase() + pageName.slice(1)} Page (${pageInfo.path}):
${pageInfo.description}

Content includes: ${pageInfo.content || pageInfo.sections?.join(", ")}

To visit this page, users can navigate to: ${pageInfo.path}`;
      }
    }

    return `I can help you navigate Calvin's website. Available pages include:
- Home page with overview and highlights
- About Me for personal background
- Biography for detailed career timeline
- Projects showcasing his work
- Blog with technical articles
- Skills highlighting expertise areas
- Contact information

What specific section would you like to know about?`;
  },
});

const contentSearch = new DynamicTool({
  name: "content_search",
  description: "Search for specific content topics or information available on the website. Use this to help users find relevant sections or pages.",
  func: async (input: string) => {
    const query = input.toLowerCase();

    const contentMap: Record<string, string> = {
      "kolaborate": "Featured prominently on the projects page and in the about section. Kolaborate is Calvin's African tech talent platform connecting skilled professionals across the continent.",
      "siteseer": "Showcased in the projects section. SiteSeer is Calvin's AI-powered construction technology platform using computer vision for project monitoring.",
      "ai": "Covered extensively in skills, projects, and blog sections. Calvin specializes in AI/ML, computer vision, and RAG chat systems.",
      "typescript": "Listed in the skills section as a core competency. Calvin uses TypeScript extensively in his projects.",
      "react": "Featured in skills and projects. Calvin is an expert React developer with extensive Next.js experience.",
      "construction": "Highlighted through SiteSeer project - Calvin's work in prop tech and construction technology.",
      "uganda": "Mentioned in about and biography sections as Calvin's base and focus on African tech solutions.",
      "cto": "Detailed in biography and about sections covering Calvin's CTO roles at Kolaborate and SiteSeer.",
      "portfolio": "Available on projects page and home page highlights section.",
      "experience": "Comprehensively covered in biography and about sections.",
      "education": "Detailed in about me and biography sections.",
      "contact": "Available on dedicated contact page with email and social media links.",
      "blog": "Technical articles and insights available in the blog section.",
    };

    for (const [topic, location] of Object.entries(contentMap)) {
      if (query.includes(topic)) {
        return `Information about "${topic}" can be found: ${location}`;
      }
    }

    return `I can help you find information about Calvin's work, skills, projects, or background. Popular topics include:
- Kolaborate (talent platform)
- SiteSeer (construction tech)  
- AI/ML expertise
- TypeScript/React development
- CTO experience
- Uganda/African tech focus

What specific topic are you interested in learning about?`;
  },
});

export const websiteTools = [websiteNavigation, contentSearch];