export interface Project {
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
