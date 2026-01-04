import { DynamicTool } from "@langchain/core/tools";

const personalInfo = new DynamicTool({
  name: "calvin_personal_info",
  description: "Get information about Calvin Magezi's background, education, and personal details. Use this for questions about who Calvin is.",
  func: async (input: string) => {
    const query = input.toLowerCase();
    
    const personalData = {
      background: `Calvin Magezi is a Ugandan tech leader and Chief Technology Officer at both Kolaborate and SiteSeer. He's passionate about using technology to solve real-world problems, particularly in Africa. Based in Uganda, he serves global markets while maintaining a strong focus on African tech solutions.`,
      
      education: `Calvin has a strong technical educational background that formed the foundation for his expertise in software engineering, AI, and technology leadership. His education focused on computer science and engineering disciplines.`,
      
      personality: `Calvin is known for being innovative, solution-oriented, and deeply committed to using technology for social impact. He combines technical excellence with business acumen, making him effective as a CTO. He's approachable, collaborative, and passionate about mentoring others in tech.`,
      
      values: `Calvin believes in the power of technology to drive positive change, particularly in emerging markets. He values innovation, collaboration, continuous learning, and building solutions that have real-world impact. He's committed to advancing African tech talent and creating opportunities across the continent.`,
      
      interests: `Beyond his professional work, Calvin is interested in AI/ML research, construction technology innovation, developer tools, and fostering tech communities in Africa. He enjoys sharing knowledge through articles and engaging with the global tech community.`,
    };

    if (query.includes("background") || query.includes("who is")) {
      return personalData.background;
    }
    
    if (query.includes("education") || query.includes("studied") || query.includes("school")) {
      return personalData.education;
    }
    
    if (query.includes("personality") || query.includes("character") || query.includes("like")) {
      return personalData.personality;
    }
    
    if (query.includes("values") || query.includes("beliefs") || query.includes("philosophy")) {
      return personalData.values;
    }
    
    if (query.includes("interests") || query.includes("hobbies") || query.includes("passion")) {
      return personalData.interests;
    }

    return `Calvin Magezi is a Ugandan tech leader and CTO at Kolaborate & SiteSeer. He specializes in AI-powered solutions, fullstack development, and construction technology. Calvin is passionate about using technology to solve real-world problems in Africa while serving global markets. He's known for his technical expertise, leadership skills, and commitment to advancing African tech talent.`;
  },
});

const professionalExperience = new DynamicTool({
  name: "calvin_professional_experience", 
  description: "Get information about Calvin's professional experience, roles, and career achievements. Use this for questions about his work experience.",
  func: async (input: string) => {
    const query = input.toLowerCase();
    
    const experience = {
      current_roles: `Calvin currently serves as Chief Technology Officer at two innovative companies:

1. **Kolaborate** - An African tech talent platform that connects skilled professionals across the continent with global opportunities. Calvin leads the technical architecture and product development.

2. **SiteSeer** - An AI-powered construction technology platform that uses computer vision and machine learning for project monitoring and management. Calvin oversees the AI/ML systems and technical strategy.`,

      expertise_areas: `Calvin's core expertise spans:
- **AI & Machine Learning**: Computer vision, RAG chat systems, predictive analytics
- **Fullstack Development**: TypeScript, React, Next.js, Python, Node.js  
- **Cloud Architecture**: Azure infrastructure, scalable systems design
- **Construction Tech**: Prop tech solutions, IoT integration, data visualization
- **Team Leadership**: CTO responsibilities, technical strategy, product development`,

      achievements: `Key professional achievements include:
- Built and scaled two successful tech companies as CTO
- Developed AI-powered construction monitoring systems
- Created a platform connecting African tech talent globally  
- Established technical teams and development processes
- Led successful product launches serving global markets
- Contributed to advancing African tech ecosystem`,

      leadership: `As a technology leader, Calvin excels at:
- Setting technical vision and strategy
- Building and mentoring engineering teams
- Bridging business needs with technical solutions
- Driving innovation in emerging markets
- Creating scalable, maintainable systems
- Fostering collaborative development culture`,
    };

    if (query.includes("current") || query.includes("cto") || query.includes("role")) {
      return experience.current_roles;
    }
    
    if (query.includes("expertise") || query.includes("skills") || query.includes("specialization")) {
      return experience.expertise_areas;
    }
    
    if (query.includes("achievements") || query.includes("accomplishments") || query.includes("success")) {
      return experience.achievements;
    }
    
    if (query.includes("leadership") || query.includes("management") || query.includes("team")) {
      return experience.leadership;
    }

    return experience.current_roles + "\n\n" + experience.expertise_areas;
  },
});

const technicalSkills = new DynamicTool({
  name: "calvin_technical_skills",
  description: "Get detailed information about Calvin's technical skills, programming languages, frameworks, and technologies. Use this for technical questions.",
  func: async (input: string) => {
    const query = input.toLowerCase();
    
    const skills = {
      programming_languages: `**Core Languages:**
- **TypeScript/JavaScript** - Expert level, primary languages for web development
- **Python** - Advanced, used for AI/ML, data processing, and backend systems
- **SQL** - Proficient in database design and complex queries
- **HTML/CSS** - Expert level for web development`,

      frontend_technologies: `**Frontend Stack:**
- **React** - Expert level with modern hooks, context, and patterns
- **Next.js** - Advanced, current portfolio built with Next.js 16
- **Tailwind CSS** - Preferred styling framework, modern design systems
- **Framer Motion** - Animations and interactive UI elements
- **TypeScript** - Full type safety across frontend applications`,

      backend_systems: `**Backend & Cloud:**
- **Node.js** - Server-side JavaScript development
- **Azure** - Cloud infrastructure and services
- **GraphQL** - API development and data fetching
- **RESTful APIs** - Microservices architecture
- **Database Management** - SQL and NoSQL systems`,

      ai_ml_expertise: `**AI & Machine Learning:**
- **Computer Vision** - Image processing and analysis for SiteSeer
- **RAG Chat Systems** - Retrieval-augmented generation implementations
- **Machine Learning** - Model development and deployment
- **Data Visualization** - Analytics dashboards and insights
- **AI Integration** - Incorporating AI into web applications`,

      tools_frameworks: `**Development Tools:**
- **Git/GitHub** - Version control and collaboration
- **Docker** - Containerization and deployment
- **Testing Frameworks** - Unit and integration testing
- **CI/CD** - Automated deployment pipelines
- **Bun** - Modern JavaScript runtime and package manager`,
    };

    if (query.includes("programming") || query.includes("languages")) {
      return skills.programming_languages;
    }
    
    if (query.includes("frontend") || query.includes("react") || query.includes("next")) {
      return skills.frontend_technologies;
    }
    
    if (query.includes("backend") || query.includes("cloud") || query.includes("azure")) {
      return skills.backend_systems;
    }
    
    if (query.includes("ai") || query.includes("ml") || query.includes("machine learning")) {
      return skills.ai_ml_expertise;
    }
    
    if (query.includes("tools") || query.includes("frameworks") || query.includes("development")) {
      return skills.tools_frameworks;
    }

    return `Calvin is a fullstack developer with expertise in:

**Primary Technologies:**
- TypeScript/React/Next.js for frontend development
- Python for AI/ML and backend systems
- Azure cloud infrastructure
- Computer vision and AI integration

**Specializations:**
- AI-powered web applications
- Construction technology solutions
- Scalable cloud architectures
- African tech talent platforms

He combines deep technical skills with business understanding to build solutions that solve real-world problems.`;
  },
});

export const aboutTools = [personalInfo, professionalExperience, technicalSkills];