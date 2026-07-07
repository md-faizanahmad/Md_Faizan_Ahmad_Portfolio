"use client";

interface ProjectFutureProps {
  futureImprovements: string[];
}

export default function ProjectFuture({
  futureImprovements,
}: ProjectFutureProps) {
  if (!futureImprovements?.length) return null;

  return (
    <section className="w-full bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-4xl space-y-3">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Future Improvements
          </h2>

          <p className="text-base leading-7 text-neutral-700 dark:text-neutral-300">
            Features and improvements I would like to add if I continue
            developing this project.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-[180px_1fr] lg:gap-16">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 border-l border-neutral-200 pl-4 dark:border-neutral-800">
              <p className="text-1 font-medium text-neutral-500 dark:text-neutral-400">
                Next Steps
              </p>
            </div>
          </aside>

          {/* Future List */}
          <div className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
            {futureImprovements.map((item, index) => (
              <div
                key={item}
                className="grid gap-4 py-6 sm:grid-cols-[60px_1fr] sm:gap-8"
              >
                <div className="text-sm font-medium text-neutral-400 dark:text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="text-base leading-7 text-neutral-700 dark:text-neutral-300">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
