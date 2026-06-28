"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";

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
        group relative w-100 max-w-sm cursor-pointer
        overflow-hidden rounded-2xl
        border border-[color:var(--border)]
        bg-[color:var(--card)]
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        backdrop-blur-xl
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
      "
      onClick={() => setHovered(!hovered)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Premium Glow */}
      <div
        className="
          absolute -inset-px rounded-2xl
          bg-gradient-to-r
          from-violet-500/20
          via-cyan-500/20
          to-blue-500/20
          opacity-0 blur-xl
          transition duration-500
          group-hover:opacity-100
        "
      />

      {/* Image */}
      <div className="relative h-66 w-100 sm:w-100 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 300px"
          className="
            object-cover
            transition-transform duration-700
            group-hover:scale-105
          "
        />

        {/* Accent Line */}
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-violet-500 via-cyan-500 to-blue-500" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Live Icon */}
        <Link
          href={liveUrl}
          target="_blank"
          onClick={(e) => e.stopPropagation()}
          className="
    absolute right-6 bottom-4 z-10
    flex items-center gap-2
    rounded-full
    border border-emerald-500/20
    bg-black/50
    px-3 py-1.5
    text-xs font-medium
    text-white
    backdrop-blur-xl
    transition-all duration-300
    hover:scale-105
    hover:bg-black/70
    hover:border-emerald-500/40
  "
        >
          {/* Blinking green dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          Live
        </Link>

        {/* Title */}
        <h2 className="absolute bottom-4 left-4 text-lg font-semibold tracking-tight text-white drop-shadow-lg">
          {title}
        </h2>
      </div>

      {/* Hover Panel */}
      <div
        className={`
          absolute inset-0 flex flex-col justify-between p-5
          backdrop-blur-2xl transition-all duration-500
          ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }
          bg-black/75 text-white
        `}
      >
        <div className="overflow-hidden">
          {/* Title */}
          <h3 className="mb-3 text-xl font-semibold">{title}</h3>

          {/* Description */}
          <p
            className={`
              mb-3 text-sm leading-6 text-white/75
              transition-all duration-300
              ${showMore ? "max-h-32 overflow-y-auto pr-2" : "line-clamp-3"}
            `}
          >
            {description}
          </p>

          {/* Show More */}
          {description.length > 100 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowMore((s) => !s);
              }}
              className="
                mb-4 cursor-pointer
                text-xs font-medium
                text-white/70
                transition
                hover:text-white
              "
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          )}

          {/* Tech Stack */}
          <div className="mb-4 flex flex-wrap gap-2">
            {techStack.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border border-white/10
                  bg-white/10
                  px-3 py-1
                  text-[11px]
                  font-medium
                  text-white/90
                  backdrop-blur-md
                "
              >
                {tech}
              </span>
            ))}

            {techStack.length > 6 && (
              <span
                className="
                  rounded-full
                  border border-white/10
                  bg-white/5
                  px-3 py-1
                  text-[11px]
                  text-white/60
                "
              >
                +{techStack.length - 6}
              </span>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-4">
          <p className="text-xs text-white/50">
            Click the globe icon to visit the live project
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
