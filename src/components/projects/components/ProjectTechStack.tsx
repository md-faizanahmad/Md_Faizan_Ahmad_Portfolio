"use client";

import TechIconMap from "@/shared/TechIconMap";
import React from "react";

interface ProjectTechStackProps {
  frontend: string[];
  // backend: Record<string, string[]>;

  backend: Partial<Record<string, string[]>>;
  security?: string[];
}

export default function ProjectTechStack({
  frontend,
  backend,
  security = [],
}: ProjectTechStackProps) {
  const toolsAndServices = [
    ...(backend?.deployment || []),
    ...(backend?.payments || []),
    ...(backend?.fileUploads || []),
  ];

  const coreBackend = Object.entries(backend || {})
    .filter(([key]) => !["deployment", "payments", "fileUploads"].includes(key))
    .flatMap(([_, values]) => values);

  const stackCategories = [
    { title: "Frontend", data: frontend },
    { title: "Backend", data: coreBackend },
    { title: "Tools & Services", data: toolsAndServices },
    ...(security.length
      ? [{ title: "Security & Authentication", data: security }]
      : []),
  ];

  return (
    <section className="cursor-pointer w-full overflow-hidden bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .animate-marquee-loop {
              display: flex;
              width: max-content;
              animation: marquee 32s linear infinite;
            }

            .animate-marquee-loop:hover {
              animation-play-state: paused;
            }
          `,
        }}
      />

      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-3">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Tech Stack
          </h2>

          <p className="text-base leading-7 text-neutral-700 dark:text-neutral-300">
            The technologies, tools, and services I used to build, secure, and
            deploy this project.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          {/* Left Navigation */}
          <div className="hidden lg:block">
            <div className="sticky top-32 space-y-5 border-l border-neutral-200 pl-4 dark:border-neutral-800">
              {stackCategories.map((category) => (
                <div
                  key={category.title}
                  className="text-sm font-medium text-neutral-500 dark:text-neutral-400"
                >
                  {category.title}
                </div>
              ))}
            </div>
          </div>

          {/* Tech Marquees */}
          <div className="space-y-12 overflow-hidden cursor-pointer">
            {stackCategories.map((category) => {
              if (!category.data?.length) return null;

              const marqueeItems = [
                ...category.data,
                ...category.data,
                ...category.data,
                ...category.data,
              ];

              return (
                <div key={category.title} className="space-y-4">
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {category.title}
                  </h3>

                  <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)]">
                    <div className="animate-marquee-loop items-center gap-12 py-2 cursor-pointer">
                      {marqueeItems.map((tech, idx) => (
                        <div
                          key={`${tech}-${idx}`}
                          className="flex shrink-0 cursor-default select-none items-center gap-2.5 text-sm font-medium text-neutral-800 transition-colors duration-150 hover:text-black dark:text-neutral-200 dark:hover:text-white"
                        >
                          <TechIconMap name={tech} />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
