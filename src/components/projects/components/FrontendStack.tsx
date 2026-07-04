"use client";

interface FrontendStackProps {
  techStack: string[];
}

export default function FrontendStack({ techStack }: FrontendStackProps) {
  if (!techStack?.length) return null;

  return (
    <section className="w-full bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      {/* Standardized layout padding without inner structural rules */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Section Heading Group */}
        <div className="space-y-1.5 max-w-4xl text-left mb-6">
          <h2 className="text-xl font-extrabold uppercase tracking-tight sm:text-2xl md:text-3xl">
            Frontend Stack
          </h2>
          {/* <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            Technologies, systems, and runtime libraries used to engineer the
            user interface.
          </p> */}
        </div>

        {/* Clean, High-Readability Pill Array:
          - Uses a strict, low-contrast neutral foundation to prevent visual clutter
          - Flat design ensures instant readability across mobile and wide viewports
        */}
        <div className="w-full max-w-5xl">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-block bg-neutral-50 border border-neutral-200 px-3 py-1 text-xs font-mono uppercase tracking-wide text-neutral-800 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-300 rounded-sm select-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
