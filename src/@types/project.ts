export interface Project {
  slug: string;
  title: string;
  image: string;
  liveUrl: string;
  codeUrl: string;
  techStack: string[];
  description: string;
}

export interface ProjectsProps {
  limit?: number;
}
export interface ProjectDetails {
  slug: string;
  title: string;
  category: string;
  featured: boolean;
  image: string;
  gallery: string[];
  description: string;
  overview: string;
  liveUrl: string;
  codeUrl: string;
  status: string;
  role: string;
  duration: string;
  techStack: string[];
  features: Record<string, string[]>;
  backend?: {
    overview: string;
    techStack: Record<string, string[]>;
  };
  security?: string[];
  engineeringHighlights?: string[];
  problem?: string;
  solution?: string;
  challenges?: {
    problem: string;
    solution: string;
  }[];
  learning?: string[];
  futureImprovements?: string[];
}
