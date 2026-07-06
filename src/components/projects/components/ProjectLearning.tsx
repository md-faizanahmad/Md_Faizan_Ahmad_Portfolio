"use client";

import React from "react";

interface ProjectLearningProps {
  learning: string[];
}

export default function ProjectLearning({ learning }: ProjectLearningProps) {
  if (!learning?.length) return null;

  return (
    <section
      className="w-full bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white font-mono select-none"
      aria-labelledby="key-learnings-heading"
      itemScope
      itemType="https://schema.org/TechArticle"
    >
      {/* Structural layout alignment tracking with core grid margins */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Unified Layout Primary Section Header */}
        <div className="space-y-1.5 max-w-4xl text-left mb-12 font-sans">
          <h2
            id="key-learnings-heading"
            className="text-xl font-extrabold uppercase tracking-tight sm:text-2xl md:text-3xl text-neutral-900 dark:text-white"
            itemProp="name"
          >
            Key Learnings
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            Technical skills, architectural paradigm shifts, and engineering
            takeaways gained during development.
          </p>
        </div>

        {/* Master Retrospective Log Matrix Tracking Layout */}
        <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* LEFT COLUMN: Sidebar Indicator Registry Directory */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-4 border-l border-neutral-100 dark:border-neutral-900 pl-4 text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              <div className="text-neutral-300 dark:text-neutral-700 font-bold">
                Knowledge Base
              </div>
              <div className="text-black dark:text-white font-bold">
                [ Scope: Expanded ]
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: Flat Minimalist Review Viewport */}
          <main>
            <ul
              className="divide-y divide-neutral-100 dark:divide-neutral-900 border-t border-b border-neutral-100 dark:border-neutral-900 lg:border-b-0 font-mono text-xs tracking-wide"
              aria-label="Core engineering takeaways and lessons learned"
              itemProp="educationalUse"
            >
              {learning.map((item, index) => (
                <li
                  key={item}
                  className="group grid grid-cols-1 gap-2 py-5 sm:grid-cols-[120px_1fr] sm:gap-6 items-start transition-all duration-300 opacity-85 hover:opacity-100"
                >
                  {/* Technical Log Protocol Indicator */}
                  <div className="text-neutral-400 dark:text-neutral-600 font-bold text-[10px] sm:text-xs">
                    [ #{String(index + 1).padStart(2, "0")} TAKEAWAY ]
                  </div>

                  {/* Core Takeaway Description Asset */}
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
