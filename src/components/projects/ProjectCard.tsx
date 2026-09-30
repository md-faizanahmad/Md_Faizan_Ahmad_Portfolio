"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe, Info } from "lucide-react";

interface ProjectCardProps {
  slug: string;
  title: string;
  image: string;
  liveUrl: string;
  codeUrl: string;
  techStack: string[];
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  slug,
  title,
  image,
  liveUrl,
  techStack,
  description,
}) => {
  return (
    <article
      className="
        group relative mx-auto w-full max-w-[380px]
        overflow-hidden
        rounded-xl
        border border-neutral-200
        bg-white
        shadow-[0_-6px_18px_-12px_rgba(0,0,0,0.4)]
        transition-all duration-300
        hover:-translate-y-1

        dark:border-neutral-800
        dark:bg-neutral-950
        dark:shadow-[0_-8px_20px_-12px_rgba(238,236,236,0.3)]
      "
    >
      {/* Project Image */}
      <div
        className="
          relative aspect-[16/10]
          overflow-hidden
          bg-neutral-100
          dark:bg-neutral-900
        "
      >
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          sizes="
            (max-width: 640px) 85vw,
            (max-width: 1024px) 45vw,
            25vw
          "
          className="
            object-contain
            transition-transform duration-500
            group-hover:scale-[1.03]
          "
        />

        {/* Image overlay */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-t
            from-black/45
            via-transparent
            to-transparent
          "
        />

        {/* Live Project */}
        <Link
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title} live website`}
          onClick={(e) => e.stopPropagation()}
          className="
            absolute bottom-3 right-3
            flex h-8 w-8
            items-center justify-center
            rounded-full
            border border-white/20
            bg-white/90
            text-black
            opacity-0
            shadow-md
            backdrop-blur-sm
            translate-y-1
            transition-all duration-300
            hover:scale-105
            group-hover:translate-y-0
            group-hover:opacity-100

            dark:bg-black/80
            dark:text-white
            dark:border-white/15
          "
        >
          <Globe size={15} />
        </Link>

        {/* Project Details */}
        <Link
          href={`/projects/${slug}`}
          aria-label={`View ${title} details`}
          onClick={(e) => e.stopPropagation()}
          className="
            absolute bottom-3 left-3
            flex h-8 w-8
            items-center justify-center
            rounded-full
            border border-white/20
            bg-white/90
            text-black
            opacity-0
            shadow-md
            backdrop-blur-sm
            translate-y-1
            transition-all duration-300
            hover:scale-105
            group-hover:translate-y-0
            group-hover:opacity-100

            dark:bg-black/80
            dark:text-white
            dark:border-white/15
          "
        >
          <Info size={15} />
        </Link>
      </div>

      {/* Card Footer */}
      <div className="p-3">
        {/* Title */}
        <div className="flex items-center justify-between gap-2">
          <h2
            className="
              truncate
              text-sm font-semibold
              tracking-tight
              text-neutral-900
              dark:text-neutral-100
            "
          >
            {title}
          </h2>

          <Link
            href={`/projects/${slug}`}
            aria-label={`View ${title} details`}
            onClick={(e) => e.stopPropagation()}
            className="
              shrink-0
              text-neutral-400
              transition-colors
              hover:text-neutral-900
              dark:text-neutral-500
              dark:hover:text-neutral-100
            "
          >
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Tech Stack */}
        <div className="mt-2 flex flex-wrap gap-1">
          {techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="
                rounded-md
                border
                border-neutral-200
                bg-neutral-100
                px-1.5 py-0.5
                text-[9px] font-medium
                text-neutral-600

                dark:border-neutral-800
                dark:bg-neutral-900
                dark:text-neutral-400
              "
            >
              {tech}
            </span>
          ))}

          {techStack.length > 3 && (
            <span
              className="
                rounded-md
                border
                border-neutral-200
                px-1.5 py-0.5
                text-[9px]
                text-neutral-500

                dark:border-neutral-800
                dark:text-neutral-500
              "
            >
              +{techStack.length - 3}
            </span>
          )}
        </div>

        {/* Description */}
        <p
          className="
            mt-2
            line-clamp-2
            min-h-[30px]
            text-[11px]
            leading-[1.4]
            text-neutral-500

            dark:text-neutral-400
          "
        >
          {description}
        </p>
      </div>
    </article>
  );
};

export default ProjectCard;
