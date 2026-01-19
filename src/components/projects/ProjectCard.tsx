"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  image: string;
  liveUrl: string;
  codeUrl: string;
  techStack: string[];
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  liveUrl,
  codeUrl,
  techStack,
  description,
}) => {
  const [hovered, setHovered] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className="
        relative w-80 max-w-sm cursor-pointer overflow-hidden rounded-xl
        border border-[color:var(--border)]
        bg-[color:var(--card)] shadow-sm
        transition-all duration-300 hover:shadow-lg
      "
      onClick={() => setHovered(!hovered)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-66 w-80  sm:w-80">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-fit transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay gradient (top-to-bottom) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
        {/* Title */}
        <h2 className="absolute bottom-3 left-4 text-base font-bold text-white drop-shadow">
          {title}
        </h2>
      </div>

      {/* Hover panel */}
      <div
        className={`
          absolute inset-0 flex flex-col justify-between p-5
          backdrop-blur-lg transition-all duration-300
          ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
          }
          bg-[color:var(--background)]/65
          text-[color:var(--foreground)]
        `}
      >
        <div>
          {/* Description */}
          <p
            className={`
    mb-2 text-sm text-[color:var(--muted-foreground)]
    transition-all duration-300
    ${showMore ? "max-h-32 overflow-y-auto pr-2" : "line-clamp-3"}
  `}
          >
            {description}
          </p>

          {/* Toggle link */}
          {description.length > 100 && (
            <button
              onClick={() => setShowMore((s) => !s)}
              className="mb-2 cursor-pointer text-xs text-[color:var(--foreground)]/80 underline-offset-2 hover:underline"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          )}

          {/* Tech stack */}
          <div className="mb-2 flex flex-wrap gap-1">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full px-3 py-1 text-xs
                  bg-[color:var(--secondary)] text-[color:var(--secondary-foreground)]
                  border border-[color:var(--border)]
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            href={codeUrl}
            target="_blank"
            className="
              inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs
              bg-[color:var(--foreground)] text-[color:var(--primary-foreground)]
              hover:opacity-90 transition
            "
          >
            <Github size={14} /> Code
          </Link>
          <Link
            href={liveUrl}
            target="_blank"
            className="
              inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs
              bg-indigo-600 text-white hover:bg-indigo-700 transition
            "
          >
            <ExternalLink size={14} /> Live
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
