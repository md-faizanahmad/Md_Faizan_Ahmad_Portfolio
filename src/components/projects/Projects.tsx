"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  image: string;
  liveUrl: string;
  codeUrl: string;
  techStack: string[];
  description: string;
}

interface ProjectsProps {
  limit?: number;
}

const Projects: React.FC<ProjectsProps> = ({ limit }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => setProjects(limit ? data.slice(0, limit) : data));
  }, [limit]);

  return (
    <div className="grid grid-cols-1 justify-items-center gap-6 pb-10 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
