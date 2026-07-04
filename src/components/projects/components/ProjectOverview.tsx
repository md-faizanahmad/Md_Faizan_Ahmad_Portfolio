"use client";

interface ProjectOverviewProps {
  overview: string;
  problem: string;
  solution: string;
}

export default function ProjectOverview({
  overview,
  problem,
  solution,
}: ProjectOverviewProps) {
  return (
    <section className="w-full bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      {/* 
        The max-w-7xl grid centers the main workspace section container perfectly on high-res monitors, 
        while all interior header text blocks and column elements align cleanly to the same left margin line.
      */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top Block Container */}

        <div className="space-y-1.5 max-w-4xl text-left">
          <h2 className="text-xl font-extrabold uppercase tracking-tight sm:text-2xl md:text-3xl">
            Project Overview
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {overview}
          </p>
        </div>
        {/* Clean, low-contrast structural break line */}
        <hr className="my-10 border-neutral-100 dark:border-neutral-900" />

        {/* Dynamic Two Column Grid Layer */}
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:gap-16">
          {/* Challenge / Problem Space */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              The Challenge
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {problem}
            </p>
          </div>

          {/* Execution / Solution Space */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              The Execution
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {solution}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
