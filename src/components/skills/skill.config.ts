// config/skill.config.ts

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "tools"
  | "performance"
  | "other";

export type Skill = {
  name: string;
  category: SkillCategory;
};

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript (ES6+)", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },

  // Database
  { name: "MongoDB", category: "database" },

  // Tools
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Vercel", category: "tools" },
  { name: "Firebase", category: "tools" },
  { name: "Postman", category: "tools" },

  // Performance / SEO
  { name: "SEO Optimization", category: "performance" },
  { name: "Lazy Loading", category: "performance" },
  { name: "Code Splitting", category: "performance" },

  // Other
  { name: "REST APIs", category: "other" },
];
