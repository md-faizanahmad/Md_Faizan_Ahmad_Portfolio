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
      className="relative cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group w-80 max-w-sm"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative w-full h-55">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover transform group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 300px"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Title overlay */}
        <h2 className="absolute bottom-3 left-4 text-white text-lg font-bold drop-shadow-lg">
          {title}
        </h2>
      </div>

      {/* Hover content */}
      <div
        className={`absolute inset-0 bg-white/55 backdrop-blur-lg p-5 flex flex-col justify-between transition-all duration-300 ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
        }`}
      >
        <div>
          {/* Description with toggle */}
          <p
            className={`text-gray-600 text-sm mb-2 transition-all duration-200 ${
              showMore ? "" : "line-clamp-3"
            }`}
          >
            {description}
          </p>

          {/* Toggle link */}
          {description.length > 100 && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-blue-600 text-xs hover:underline mb-2"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          )}

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1 mb-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 text-gray-700 px-3 py-1 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 ">
          <Link
            href={codeUrl}
            target="_blank"
            className="flex items-center gap-2 bg-gray-800 text-white px-3 py-2 rounded-md text-xs hover:bg-black transition"
          >
            <Github size={14} /> Code
          </Link>
          <Link
            href={liveUrl}
            target="_blank"
            className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-md text-xs hover:bg-blue-700 transition"
          >
            <ExternalLink size={14} /> Live
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
