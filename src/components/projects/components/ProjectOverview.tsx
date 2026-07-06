"use client";

interface ProjectOverviewProps {
  overview: string;
}

export default function ProjectOverview({ overview }: ProjectOverviewProps) {
  return (
    <section className="w-full bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-3 text-left">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Project Overview
          </h2>

          <p className="text-base leading-8 text-neutral-700 dark:text-neutral-300">
            {overview}
          </p>
        </div>
      </div>
    </section>
  );
}
