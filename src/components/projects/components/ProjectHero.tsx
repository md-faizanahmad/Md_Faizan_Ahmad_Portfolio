"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

interface ProjectHeroProps {
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl: string;
  codeUrl: string;
  techStack: string[];
  status?: string;
  role?: string;
  duration?: string;
}

export default function ProjectHero({
  title,
  category,
  description,
  image,
  liveUrl,
  codeUrl,
  techStack,
  status,
  role,
  duration,
}: ProjectHeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left */}
        <div className="flex flex-col justify-center">
          {/* Category */}
          <span className="mb-4 w-fit rounded-full border px-3 py-1 text-sm">
            {category}
          </span>

          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
            {title}
          </h1>

          {/* Description */}
          <p className="mb-6 text-lg text-muted-foreground">{description}</p>

          {/* Meta */}
          <div className="mb-6 flex flex-wrap gap-4 text-sm">
            {status && (
              <div className="rounded-md border px-3 py-2">
                <span className="font-semibold">Status:</span> {status}
              </div>
            )}

            {role && (
              <div className="rounded-md border px-3 py-2">
                <span className="font-semibold">Role:</span> {role}
              </div>
            )}

            {duration && (
              <div className="rounded-md border px-3 py-2">
                <span className="font-semibold">Duration:</span> {duration}
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="mb-8 flex flex-wrap gap-3">
            <Link
              href={liveUrl}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-medium transition hover:opacity-80"
            >
              <ExternalLink size={18} />
              Live Demo
            </Link>

            <Link
              href={codeUrl}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-medium transition hover:opacity-80"
            >
              <Github size={18} />
              Frontend Code
            </Link>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border px-4 py-2 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative overflow-hidden rounded-2xl border">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={700}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
