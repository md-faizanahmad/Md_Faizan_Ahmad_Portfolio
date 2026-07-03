"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

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
  codeUrl,
  techStack,
  status,
  role,
  duration,
}: ProjectHeroContentProps) {
  return (
    <div className="w-full bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <div className="flex flex-col space-y-6 sm:space-y-8">
        {/* Category Header */}
        <div className="text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          {category}
        </div>

        {/* Structural Title with adaptive heading sizes */}
        <h1 className="text-3xl font-extrabold tracking-tight uppercase sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>

        {/* High-impact description geared toward clear project impact */}
        <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-2xl md:text-lg">
          {description}
        </p>

        {/* Recruiter-friendly Quick Specs Grid */}
        <div className="grid grid-cols-2 gap-4 border-y border-neutral-200 py-5 text-xs uppercase tracking-wider dark:border-neutral-800 sm:grid-cols-3">
          {role && (
            <div className="space-y-1">
              <div className="text-neutral-400 dark:text-neutral-500">Role</div>
              <div className="font-bold">{role}</div>
            </div>
          )}
          {duration && (
            <div className="space-y-1">
              <div className="text-neutral-400 dark:text-neutral-500">
                Duration
              </div>
              <div className="font-bold">{duration}</div>
            </div>
          )}
          {status && (
            <div className="space-y-1 col-span-2 sm:col-span-1">
              <div className="text-neutral-400 dark:text-neutral-500">
                Status
              </div>
              <div className="font-bold">{status}</div>
            </div>
          )}
        </div>

        {/* Action Buttons: Explicit layout footprint across any screen format */}
        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
          <Link
            href={liveUrl}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 bg-black px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-neutral-800 active:scale-[0.98] dark:bg-white dark:text-black dark:hover:bg-neutral-200 w-full sm:w-auto"
          >
            <span>Launch Application</span>
            <ExternalLink size={14} />
          </Link>
          {/* 
          <Link
            href={codeUrl}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 border border-neutral-200 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-black transition-all hover:bg-neutral-50 active:scale-[0.98] dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-900 w-full sm:w-auto"
          >
            <Github size={14} />
            <span>Review Source</span>
          </Link> */}
        </div>

        {/* Technologies Applied Section */}
        <div className="space-y-3 pt-2">
          <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            Technical Stack Architecture
          </div>
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-neutral-100 border border-neutral-200 px-3 py-1 text-[11px] font-medium text-neutral-800 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-300 rounded-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
