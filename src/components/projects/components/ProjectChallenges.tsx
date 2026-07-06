"use client";

import React from "react";

interface Challenge {
  problem: string;
  solution: string;
}

interface ProjectChallengesProps {
  challenges: Challenge[];
}

export default function ProjectChallenges({
  challenges,
}: ProjectChallengesProps) {
  if (!challenges?.length) return null;

  return (
    <section
      className="w-full bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white font-mono select-none"
      aria-labelledby="challenges-solutions-heading"
      itemScope
      itemType="https://schema.org/TechArticle"
    >
      {/* Structural layout alignment tracking with standard grid margins */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Unified Layout Primary Section Header */}
        <div className="space-y-1.5 max-w-4xl text-left mb-12 font-sans">
          <h2
            id="challenges-solutions-heading"
            className="text-xl font-extrabold uppercase tracking-tight sm:text-2xl md:text-3xl text-neutral-900 dark:text-white"
            itemProp="name"
          >
            Engineering Challenges
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            Critical bottlenecks identified during systemic architectural
            execution and the remediation steps taken.
          </p>
        </div>

        {/* Master Incident Log Matrix Tracking Layout */}
        <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* LEFT COLUMN: Sidebar Indicator Registry Directory */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-4 border-l border-neutral-100 dark:border-neutral-900 pl-4 text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              <div className="text-neutral-300 dark:text-neutral-700 font-bold">
                Incident Log
              </div>
              <div className="text-black dark:text-white font-bold">
                [ Total Bugs: Resolved ]
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: Asymmetric Split Problem/Solution Rows */}
          <main className="space-y-12 lg:space-y-16">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="group border-t border-neutral-100 pt-8 dark:border-neutral-900 first:border-0 first:pt-0"
                itemProp="review"
                itemScope
                itemType="https://schema.org/Review"
              >
                {/* Visual Structural Index Token */}
                <div className="text-[10px] font-bold text-neutral-400 dark:text-neutral-600 uppercase tracking-widest mb-6">
                  [ Issue #{String(index + 1).padStart(2, "0")} ]
                </div>

                {/* Split Layout Engine: 
                  - Mobile: Vertical blocks
                  - Laptops/Desktops: Side-by-side problem and resolution columns 
                */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 lg:gap-16">
                  {/* The Problem Scope Block */}
                  <div className="space-y-2">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                      Found Exception
                    </span>
                    <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200 font-sans md:font-mono">
                      {challenge.problem}
                    </p>
                  </div>

                  {/* The Solution Resolution Scope Block */}
                  <div className="space-y-2">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-black dark:text-white">
                      Patch Applied
                    </span>
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 font-sans">
                      {challenge.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </section>
  );
}
