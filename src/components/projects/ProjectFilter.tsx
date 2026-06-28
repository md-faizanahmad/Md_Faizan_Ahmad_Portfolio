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
    <div className="mb-10 hidden justify-center md:flex">
      <div
        className="
          flex flex-wrap items-center justify-center gap-2
          rounded-2xl
cursor-pointer
          p-2
          backdrop-blur-2xl
        "
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileTap={{ scale: 0.97 }}
            whileHover={{ y: -1 }}
            onClick={() => onFilterChange(cat)}
            className={`
              rounded-xl
              cursor-pointer
              px-5
              py-2.5
              text-sm
              font-medium
              tracking-tight
              transition-all
              duration-300
              whitespace-nowrap
              ${
                activeFilter === cat
                  ? `
                    bg-white
                    text-black
                    shadow-md
                  `
                  : `
                    bg-transparent
                    text-[color:var(--muted-foreground)]
                    hover:bg-white/10
                    hover:text-[color:var(--foreground)]
                  `
              }
            `}
          >
            {cat}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;
