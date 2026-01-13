"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProjectFilterProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (category: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  activeFilter,
  onFilterChange,
}) => {
  return (
    <div className="md:flex flex-wrap items-center justify-center gap-2 px-4 mb-8 hidden">
      {categories.map((cat) => (
        <motion.button
          key={cat}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange(cat)}
          className={`
            px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 border shrink-0
            ${
              activeFilter === cat
                ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/30"
                : "bg-[color:var(--card)] border-[color:var(--border)] text-[color:var(--muted-foreground)] hover:border-indigo-500/50"
            }
          `}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );
};

export default ProjectFilter;
