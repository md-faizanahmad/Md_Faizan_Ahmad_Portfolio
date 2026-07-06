"use client";

import TechIconMap from "@/shared/TechIconMap";
import React from "react";

interface ProjectTechStackProps {
  frontend: string[];
  backend: Record<string, string[]>;
  security?: string[];
}

export default function ProjectTechStack({
  frontend,
  backend,
  security = [],
}: ProjectTechStackProps) {
  const infrastructure = [
    ...(backend?.deployment || []),
    ...(backend?.payments || []),
    ...(backend?.fileUploads || []),
  ];

  const coreBackend = Object.entries(backend || {})
    .filter(([key]) => !["deployment", "payments", "fileUploads"].includes(key))
    .flatMap(([_, values]) => values);

  const stackCategories = [
    { title: "Frontend Scope", data: frontend },
    { title: "Backend Core", data: coreBackend },
    { title: "API & Infrastructure", data: infrastructure },
    ...(security.length
      ? [{ title: "Security Protocols", data: security }]
      : []),
  ];

  return (
    <section className="w-full mt-3 bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
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

      <div className="space-y-1.5 max-w-4xl text-left lg:ms-21 md:ms-21 ms-5 mb-10">
        <h2 className="text-xl font-extrabold uppercase tracking-tight sm:text-2xl md:text-3xl font-sans text-neutral-900 dark:text-white">
          System Architecture Stack
        </h2>
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 font-sans">
          Modular software components, databases, and microservices running
          across the layout layers.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* LEFT INDEX DIRECTORY */}
          <div className="hidden lg:block">
            <div className="sticky top-32 space-y-6 border-l border-neutral-100 dark:border-neutral-900 pl-4">
              <div className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-8"></div>
              {stackCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors cursor-default"
                >
                  {cat.title}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VIEWPORT CONTENT - Infinite Marquees calling TechIconMap */}
          <div className="space-y-12 max-w-full overflow-hidden">
            {stackCategories.map((category) => {
              if (!category.data?.length) return null;

              // Quadruple arrays to support pristine continuous loops across wide displays
              const marqueeItems = [
                ...category.data,
                ...category.data,
                ...category.data,
                ...category.data,
              ];

              return (
                <div key={category.title} className="space-y-4 relative">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 px-1">
                    [ {category.title} ]
                  </h3>

                  <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)]">
                    <div className="animate-marquee-loop gap-12 py-2 items-center">
                      {marqueeItems.map((tech, idx) => (
                        <div
                          key={`${tech}-${idx}`}
                          className="flex items-center gap-2.5 text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors duration-150 select-none cursor-default shrink-0 text-sm font-sans font-medium tracking-tight"
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
