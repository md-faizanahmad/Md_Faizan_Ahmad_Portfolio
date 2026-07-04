"use client";

interface ProjectTechStackProps {
  frontend: string[];
  backend: Record<string, string[]>;
  security: string[];
}

export default function ProjectTechStack({
  frontend,
  backend,
  security,
}: ProjectTechStackProps) {
  const infrastructure = [
    ...(backend.deployment || []),
    ...(backend.payments || []),
    ...(backend.fileUploads || []),
  ];

  const coreBackend = Object.entries(backend)
    .filter(([key]) => !["deployment", "payments", "fileUploads"].includes(key))
    .flatMap(([_, values]) => values);

  const stackCategories = [
    { title: "Frontend", data: frontend },
    { title: "Backend", data: coreBackend },
    { title: "Security", data: security },
    { title: "API & Infrastructure", data: infrastructure },
  ];

  return (
    <section className="w-full mt-3 bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <div className="space-y-1.5 max-w-4xl text-left ms-21 mb-10">
        <h2 className="text-xl font-extrabold uppercase tracking-tight sm:text-2xl md:text-3xl font-sans text-neutral-900 dark:text-white">
          System Architecture Stack
        </h2>
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 font-sans">
          Modular software components and microservices running across the core
          layout layers.
        </p>
      </div>

      {/* Locked alignment to match your core case study layouts */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* LEFT INDEX DIRECTORY - Clean vertical list linking visually on desktop */}
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

          {/* RIGHT VIEWPORT CONTENT - Borderless High-Readability Blur-Pills */}
          <div className="space-y-12 sm:space-y-16">
            {stackCategories.map((category) => {
              if (!category.data?.length) return null;

              return (
                <div key={category.title} className="space-y-4">
                  {/* Category Section Header */}
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                    [ {category.title} ]
                  </h3>

                  {/* Clean Borderless Soft Blur Matrix */}
                  <div className="flex flex-wrap gap-2">
                    {category.data.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block backdrop-blur-md bg-neutral-100/60 dark:bg-neutral-900/40 text-neutral-800 dark:text-neutral-300 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wide rounded-sm select-none transition-all duration-200 hover:bg-neutral-200/80 dark:hover:bg-neutral-800/80"
                      >
                        {tech}
                      </span>
                    ))}
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
