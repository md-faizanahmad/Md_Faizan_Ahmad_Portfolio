"use client";

import React, { useEffect, useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion"; // Added for visual feedback

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

const ProjectSkeleton = () => (
  <div className="w-80 h-[400px] rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] overflow-hidden">
    <div className="relative h-56 w-full bg-[color:var(--border)]/40 animate-pulse" />
    <div className="p-5 space-y-4">
      <div className="h-6 w-3/4 bg-[color:var(--border)]/40 animate-pulse rounded" />
      <div className="space-y-2">
        <div className="h-4 w-full bg-[color:var(--border)]/40 animate-pulse rounded" />
        <div className="h-4 w-5/6 bg-[color:var(--border)]/40 animate-pulse rounded" />
      </div>
    </div>
  </div>
);

const Projects: React.FC<ProjectsProps> = ({ limit }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/project.json");
        const data = await res.json();
        setProjects(limit ? data.slice(0, limit) : data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setTimeout(() => setIsLoading(false), 800);
      }
    };
    loadData();
  }, [limit]);

  // Cleaned up the 'allTech' warning by directly spreading the Set
  const categories = useMemo(() => {
    if (projects.length === 0) return ["All"];
    return ["All", ...new Set(projects.flatMap((p) => p.techStack))].slice(
      0,
      6
    ); // Limiting to top 6 for UI
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.techStack.includes(activeFilter));
  }, [activeFilter, projects]);

  return (
    <div className="projects relative w-full space-y-10">
      {/* Filter Bar with Visual Scale Feedback */}
      {!isLoading && (
        <div className="flex flex-wrap items-center justify-center gap-3 px-4">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(cat)}
              className={`
                px-5 py-2 cursor-pointer rounded-full text-xs font-bold transition-all duration-300 border
                ${
                  activeFilter === cat
                    ? "bg-sky-600 border-sky-500 text-white shadow-lg shadow-sky-500/40"
                    : "bg-[color:var(--card)] border-[color:var(--border)] text-[color:var(--muted-foreground)] hover:border-sky-500/50"
                }
              `}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      )}

      {/* Grid Container */}
      <motion.div
        layout
        className="
          flex overflow-x-auto snap-x snap-mandatory gap-6 pb-10 no-scrollbar
          sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible 
          px-4 sm:px-0
        "
      >
        <AnimatePresence mode="popLayout">
          {isLoading
            ? [...Array(limit || 3)].map((_, i) => (
                <div
                  key={`skeleton-${i}`}
                  className="flex-shrink-0 mt-4 snap-center m-auto"
                >
                  <ProjectSkeleton />
                </div>
              ))
            : filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 mt-4 snap-center m-auto"
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
        </AnimatePresence>
      </motion.div>

      {/* Swipe Hint */}
      {!isLoading && filteredProjects.length > 1 && (
        <div className="mb-4 flex items-center justify-center gap-2 text-sm font-medium text-sky-500 sm:hidden">
          <span className="animate-pulse">
            ← Swipe to see {filteredProjects.length} projects →
          </span>
        </div>
      )}

      {/* Empty State Feedback */}
      <AnimatePresence>
        {!isLoading && filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <p className="text-[color:var(--muted-foreground)] text-lg">
              No projects matching{" "}
              <span className="text-sky-500 font-bold">
                &qout;{activeFilter}&qout;
              </span>
            </p>
            <button
              onClick={() => setActiveFilter("All")}
              className="mt-4 text-sm text-sky-500 underline"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
