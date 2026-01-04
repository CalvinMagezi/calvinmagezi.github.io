// Static responses for when API quota is exceeded
export const fallbackResponses = {
  about: `Hi! I'm Praxis, Calvin Magezi's AI assistant. Calvin is a talented Ugandan tech leader and Chief Technology Officer at both Kolaborate and SiteSeer.

**About Calvin:**
- CTO at Kolaborate (African tech talent platform) 
- CTO at SiteSeer (AI-powered construction technology)
- Expert in TypeScript, React, Next.js, Python, AI/ML, and computer vision
- Passionate about using technology to solve real-world problems in Africa

Calvin specializes in fullstack development, AI implementations, and building scalable tech solutions. Would you like to know more about his specific projects or technical expertise?`,

  kolaborate: `Kolaborate is Calvin's African tech talent platform that connects skilled professionals across the continent with global opportunities.

**Key Features:**
- Connects African tech talent with international companies
- Focuses on showcasing the incredible skills available across Africa
- Helps bridge the gap between African developers and global tech opportunities
- Built with modern tech stack including React, TypeScript, and cloud infrastructure

Calvin serves as CTO, leading the technical architecture and product development. The platform represents his commitment to advancing African tech talent on the global stage.`,

  siteseer: `SiteSeer is Calvin's AI-powered construction technology platform that revolutionizes project monitoring and management.

**Key Features:**
- Computer vision and AI for construction site monitoring
- Real-time project progress tracking
- Automated reporting and analytics
- IoT integration for comprehensive data collection
- Advanced data visualization dashboards

As CTO, Calvin oversees the AI/ML systems and technical strategy. SiteSeer demonstrates his expertise in applying cutting-edge AI technology to solve real-world construction industry challenges.`,

  skills: `Calvin has extensive technical expertise across multiple domains:

**Core Programming Languages:**
- TypeScript/JavaScript (Expert level)
- Python (Advanced - AI/ML focus)
- SQL for database management

**Frontend Technologies:**
- React (Expert with modern hooks and patterns)
- Next.js (This portfolio is built with Next.js 16!)
- Tailwind CSS for modern design systems
- Framer Motion for animations

**Backend & Cloud:**
- Node.js development
- Azure cloud infrastructure
- GraphQL and RESTful API design
- Microservices architecture

**AI & Machine Learning:**
- Computer vision implementations
- RAG (Retrieval-Augmented Generation) systems
- Machine learning model development
- AI integration in web applications`,

  contact: `There are several ways to connect with Calvin:

**Professional Contact:**
Visit the contact page on this website for direct email and social media links.

**Best for:**
- Technical consulting opportunities
- CTO or leadership role discussions
- Speaking engagements
- Strategic partnerships
- Open source collaborations

**Response Time:**
Calvin typically responds to professional inquiries within 24-48 hours.

**When reaching out, consider including:**
- Clear description of the opportunity
- Your organization's background
- Specific timeline and requirements
- How the collaboration would be mutually beneficial

You can also connect with him on LinkedIn or follow his work on GitHub!`,

  projects: `Calvin has built impressive projects that showcase his technical leadership:

**Kolaborate** - African tech talent platform
- Connects skilled African developers with global opportunities
- Modern React/TypeScript frontend
- Scalable backend architecture
- Focus on showcasing African tech excellence

**SiteSeer** - AI construction technology
- Computer vision for site monitoring
- Real-time progress tracking
- Advanced analytics and reporting
- IoT integration and data visualization

**This Portfolio Website**
- Built with Next.js 16 and TypeScript
- Tailwind CSS 4 with modern design
- Framer Motion animations
- Optimized for performance and SEO

Calvin's work demonstrates expertise in AI/ML, fullstack development, and building solutions that solve real-world problems.`,

  general: `Hello! I'm Praxis, Calvin Magezi's AI assistant. I can help you learn about:

• Calvin's background and experience as a tech leader
• His work at Kolaborate (African tech talent platform)
• SiteSeer (AI-powered construction technology)
• His technical skills and expertise
• How to contact Calvin for opportunities
• Navigation around this website

What would you like to know about Calvin's work or background?`
};

export function getFallbackResponse(query: string): string {
  const lowerQuery = query.toLowerCase();

  if (lowerQuery.includes('kolaborate')) {
    return fallbackResponses.kolaborate;
  }
  
  if (lowerQuery.includes('siteseer') || lowerQuery.includes('construction')) {
    return fallbackResponses.siteseer;
  }
  
  if (lowerQuery.includes('skills') || lowerQuery.includes('technical') || lowerQuery.includes('programming')) {
    return fallbackResponses.skills;
  }
  
  if (lowerQuery.includes('contact') || lowerQuery.includes('reach') || lowerQuery.includes('email')) {
    return fallbackResponses.contact;
  }
  
  if (lowerQuery.includes('projects') || lowerQuery.includes('work') || lowerQuery.includes('built')) {
    return fallbackResponses.projects;
  }
  
  if (lowerQuery.includes('who is') || lowerQuery.includes('about') || lowerQuery.includes('calvin')) {
    return fallbackResponses.about;
  }
  
  return fallbackResponses.general;
}