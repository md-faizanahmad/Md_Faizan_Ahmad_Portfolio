"use client";

interface ProjectOverviewProps {
  overview: string;
}

export default function ProjectOverview({ overview }: ProjectOverviewProps) {
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
          <p className="text-1 leading-relaxed text-neutral-600 dark:text-neutral-400">
            {overview}
          </p>
        </div>
      </div>
    </section>
  );
}
