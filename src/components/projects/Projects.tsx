"use client";

import React, { useEffect, useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { Project, ProjectsProps } from "@/@types/project";
import ProjectSkeleton from "@/shared/ProjectSkeleton";
import ProjectFilter from "./ProjectFilter";

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
        // Reduced timeout slightly for a snappier feel
        setTimeout(() => setIsLoading(false), 600);
      }
    };
    loadData();
  }, [limit]);

  const categories = useMemo(() => {
    if (projects.length === 0) return ["All"];
    // Spreading the Set directly into an array
    return ["All", ...new Set(projects.flatMap((p) => p.techStack))].slice(
      0,
      8
    );
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.techStack.includes(activeFilter));
  }, [activeFilter, projects]);

  return (
    <div className="projects relative w-full space-y-10 min-h-[600px]">
      {/* Filter Bar Section */}
      {!isLoading && (
        <ProjectFilter
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      )}

      {/* Grid / Swipe Container */}
      <motion.div
        layout
        className="
          flex overflow-x-auto snap-x snap-mandatory gap-6 pb-10 no-scrollbar
          sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible 
          px-4 sm:px-0
        "
      >
        <AnimatePresence mode="popLayout" initial={false}>
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
                  /* Added fixed mobile width to prevent layout jump glitches */
                  className="w-[85vw] sm:w-auto flex-shrink-0 mt-4 snap-center m-auto"
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
            exit={{ opacity: 0 }}
            className="text-center py-20"
          >
            <p className="text-[color:var(--muted-foreground)] text-lg">
              No projects matching{" "}
              <span className="text-sky-500 font-bold">
                &quot;{activeFilter}&quot;
              </span>
            </p>
            <button
              onClick={() => setActiveFilter("All")}
              className="mt-4 text-sm text-sky-500 underline cursor-pointer hover:text-sky-400"
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
