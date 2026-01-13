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
    <div
      className="flex  overflow-x-auto snap-x snap-mandatory gap-6 pb-10 no-scrollbar
      sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3 
      px-4 sm:px-0"
    >
      {projects.map((project, index) => (
        <div key={index} className="flex-shrink-0 snap-center m-auto">
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
