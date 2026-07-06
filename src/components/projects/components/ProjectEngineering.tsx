"use client";

import React from "react";

interface ProjectEngineeringProps {
  engineeringHighlights: string[];
}

export default function ProjectEngineering({
  engineeringHighlights,
}: ProjectEngineeringProps) {
  if (!engineeringHighlights?.length) return null;

  return (
    <section
      className="w-full bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white font-mono select-none"
      aria-labelledby="engineering-highlights-heading"
      itemScope
      itemType="https://schema.org/TechArticle"
    >
      {/* Aligned to the unified max-w-7xl layout margin track */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Section Heading Group */}
        <div className="space-y-1.5 max-w-4xl text-left mb-10 font-sans">
          <h2
            id="engineering-highlights-heading"
            className="text-xl font-extrabold uppercase tracking-tight sm:text-2xl md:text-3xl text-neutral-900 dark:text-white"
            itemProp="name"
          >
            Engineering Highlights
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            Architectural tradeoffs, design decisions, and micro-optimization
            strategies executed across the runtime lifecycle.
          </p>
        </div>

        {/* Master Asymmetric Splitting Grid Layout */}
        <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* LEFT COLUMN: Sidebar Indicator Registry */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-4 border-l border-neutral-100 dark:border-neutral-900 pl-4 text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              <div className="text-neutral-300 dark:text-neutral-700 font-bold">
                Quality Metrics
              </div>
              <div className="text-black dark:text-white font-bold">
                [ Compile: Success ]
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: Minimalist Code Manifest Viewport */}
          <main>
            <ul
              className="divide-y divide-neutral-100 dark:divide-neutral-900 border-t border-b border-neutral-100 dark:border-neutral-900 lg:border-b-0 font-mono text-xs tracking-wide"
              aria-label="Core engineering implementation logs"
              itemProp="backlog"
            >
              {engineeringHighlights.map((item, index) => (
                <li
                  key={item}
                  className="group grid grid-cols-1 gap-2 py-5 sm:grid-cols-[110px_1fr] sm:gap-6 items-start transition-all duration-300 opacity-85 hover:opacity-100"
                >
                  {/* Technical Build Status Code Token */}
                  <div className="text-neutral-400 dark:text-neutral-600 font-bold text-[10px] sm:text-xs">
                    [ #{String(index + 1).padStart(2, "0")} EXEC ]
                  </div>

                  {/* Core Highlighting Description */}
                  <div className="text-neutral-700 dark:text-neutral-300 transition-colors duration-150 group-hover:text-black dark:group-hover:text-white font-sans sm:font-mono text-sm sm:text-xs leading-relaxed">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </div>
      </div>
    </section>
  );
}
