export type SkillCategory = 'frontend' | 'backend' | 'mobile' | 'tools' | 'infrastructure';

export interface Skill {
  name: string;
  proficiency: number;
  category: SkillCategory;
  years?: number;
  description?: string;
}

export interface CategoryInfo {
  name: string;
  color: string;
  glow: string;
}

export const categoryColors: Record<SkillCategory, CategoryInfo> = {
  frontend: {
    name: 'Frontend',
    color: '#00f0ff',
    glow: 'rgba(0, 240, 255, 0.3)',
  },
  backend: {
    name: 'Backend',
    color: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.3)',
  },
  mobile: {
    name: 'Mobile',
    color: '#22c55e',
    glow: 'rgba(34, 197, 94, 0.3)',
  },
  tools: {
    name: 'Tools',
    color: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.3)',
  },
  infrastructure: {
    name: 'Infrastructure',
    color: '#f43f5e',
    glow: 'rgba(244, 63, 94, 0.3)',
  },
};

export const skills: Skill[] = [
  // Frontend
  { name: "Next.js", proficiency: 90, category: "frontend", years: 4, description: "Full-stack React framework" },
  { name: "React", proficiency: 90, category: "frontend", years: 5, description: "Component-based UI library" },
  { name: "TypeScript", proficiency: 85, category: "frontend", years: 4, description: "Typed JavaScript superset" },
  { name: "Tailwind CSS", proficiency: 95, category: "frontend", years: 4, description: "Utility-first CSS framework" },
  { name: "HTML/CSS", proficiency: 95, category: "frontend", years: 10, description: "Web fundamentals" },
  { name: "JavaScript", proficiency: 90, category: "frontend", years: 8, description: "Core web language" },

  // Backend
  { name: "Node.js", proficiency: 80, category: "backend", years: 5, description: "JavaScript runtime" },
  { name: "Laravel", proficiency: 85, category: "backend", years: 6, description: "PHP web framework" },
  { name: "PHP", proficiency: 80, category: "backend", years: 7, description: "Server-side scripting" },
  { name: "Python", proficiency: 70, category: "backend", years: 3, description: "Versatile programming language" },
  { name: "PostgreSQL", proficiency: 75, category: "backend", years: 5, description: "Relational database" },

  // Mobile
  { name: "React Native", proficiency: 75, category: "mobile", years: 3, description: "Cross-platform mobile" },

  // Tools
  { name: "Figma", proficiency: 80, category: "tools", years: 4, description: "Design & prototyping" },
  { name: "Git", proficiency: 90, category: "tools", years: 8, description: "Version control" },
  { name: "Docker", proficiency: 70, category: "tools", years: 3, description: "Containerization" },

  // Infrastructure
  { name: "Azure", proficiency: 75, category: "infrastructure", years: 3, description: "Microsoft cloud platform" },
  { name: "Vercel", proficiency: 85, category: "infrastructure", years: 4, description: "Frontend deployment" },
  { name: "AWS", proficiency: 65, category: "infrastructure", years: 2, description: "Amazon cloud services" },
];

export const stats = [
  { value: 32, label: "Happy Clients", icon: "smile" },
  { value: 75, label: "Projects", icon: "folder" },
  { value: 10000, label: "Hours Coded", icon: "code" },
  { value: 3, label: "Teams Led", icon: "users" },
];
