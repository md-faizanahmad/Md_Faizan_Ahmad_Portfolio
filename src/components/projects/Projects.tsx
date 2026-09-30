"use client";

import React, { useEffect, useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { Project, ProjectsProps } from "@/@types/project";
import ProjectSkeleton from "@/shared/ProjectSkeleton";
import ProjectFilter from "./ProjectFilter";

interface ExtendedProjectsProps extends ProjectsProps {
  showFilter?: boolean;
}

const Projects: React.FC<ExtendedProjectsProps> = ({
  limit,
  showFilter = true,
}) => {
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
        setTimeout(() => setIsLoading(false), 600);
      }
    };

    loadData();
  }, [limit]);

  const categories = useMemo(() => {
    if (projects.length === 0) return ["All"];

    return [
      "All",
      ...new Set(projects.flatMap((project) => project.techStack)),
    ].slice(0, 8);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (!showFilter || activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) =>
      project.techStack.includes(activeFilter),
    );
  }, [activeFilter, projects, showFilter]);

  return (
    <div className="projects relative min-h-fit w-full space-y-10">
      {/* Filter */}
      {!isLoading && showFilter && (
        <ProjectFilter
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      )}

      {/* Projects */}
      <div
        className="
          flex w-full
          gap-5
          overflow-x-auto
          snap-x snap-mandatory
          pb-10
          no-scrollbar
          px-4

          sm:grid
          sm:grid-cols-2
          sm:overflow-visible
          sm:px-6

          lg:grid-cols-3
          lg:px-10
        "
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {isLoading
            ? [...Array(limit || 6)].map((_, index) => (
                <motion.div
                  key={`skeleton-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="
                    mt-4
                    w-[85vw]
                    max-w-[380px]
                    flex-shrink-0
                    snap-center

                    sm:w-full
                    sm:max-w-[380px]
                    sm:mx-auto
                  "
                >
                  <ProjectSkeleton />
                </motion.div>
              ))
            : filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{
                    opacity: 0,
                    y: 24,
                    scale: 0.98,
                    filter: "blur(10px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: (index % 3) * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    mt-4
                    w-[85vw]
                    max-w-[380px]
                    flex-shrink-0
                    snap-center

                    sm:w-full
                    sm:max-w-[380px]
                    sm:flex-shrink
                    sm:mx-auto
                  "
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
        </AnimatePresence>
      </div>

      {/* Mobile swipe hint */}
      {!isLoading && filteredProjects.length > 1 && (
        <div className="mb-4 flex items-center justify-center gap-2 text-sm font-medium text-sky-500 sm:hidden">
          <span className="animate-pulse">
            ← Swipe to see {filteredProjects.length} projects →
          </span>
        </div>
      )}

      {/* Empty state */}
      <AnimatePresence>
        {!isLoading && filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="py-20 text-center"
          >
            <p className="text-lg text-[color:var(--muted-foreground)]">
              No projects matching{" "}
              <span className="font-bold text-sky-500">
                &quot;{activeFilter}&quot;
              </span>
            </p>

            <button
              onClick={() => setActiveFilter("All")}
              className="
                mt-4 cursor-pointer
                text-sm text-sky-500
                underline
                hover:text-sky-400
              "
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
