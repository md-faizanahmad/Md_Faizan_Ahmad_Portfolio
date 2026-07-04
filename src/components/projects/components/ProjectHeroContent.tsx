"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ProjectHeroContentProps {
  title: string;
  category: string;
  description: string;
  liveUrl: string;
  codeUrl: string;
  techStack: string[];
  status?: string;
  role?: string;
  duration?: string;
}

export default function ProjectHeroContent({
  title,
  category,
  description,
  liveUrl,
  techStack,
  status,
  role,
  duration,
}: ProjectHeroContentProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-6">
        {/* Category */}
        <p className="text-sm font-medium tracking-wide text-neutral-500">
          {category}
        </p>

        {/* Title */}
        <h1 className="max-w-3xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl">
          {title}
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
          {description}
        </p>

        {/* Meta */}
        <div className="grid grid-cols-3 gap-8  py-4">
          {role && (
            <div>
              <p className="mb-1 text-xs uppercase tracking-wide text-neutral-500">
                Role
              </p>
              <p className="font-semibold">{role}</p>
            </div>
          )}

          {duration && (
            <div>
              <p className="mb-1 text-xs uppercase tracking-wide text-neutral-500">
                Duration
              </p>
              <p className="font-semibold">{duration}</p>
            </div>
          )}

          {status && (
            <div>
              <p className="mb-1 text-xs uppercase tracking-wide text-neutral-500">
                Status
              </p>
              <p className="font-semibold">{status}</p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <Link
            href={liveUrl}
            target="_blank"
            className="
              inline-flex
              items-center
              gap-2
              rounded-md
              bg-black
              px-5
              py-3
              text-sm
              font-medium
              text-white
              transition
              hover:opacity-90
              dark:bg-white
              dark:text-black
            "
          >
            Live Demo
            <ExternalLink size={16} />
          </Link>
        </div>

        {/* Tech Stack */}
        {/* <div>
          <h2 className="mb-4 text-sm font-semibold text-neutral-500">
            Technologies Used
          </h2>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-md
                  border
                  px-3
                  py-1.5
                  text-sm
                  text-neutral-700
                  dark:text-neutral-300
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
