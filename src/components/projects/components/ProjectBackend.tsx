interface BackendProps {
  backend: {
    overview: string;
    techStack: Record<string, string[]>;
  };
}

export default function BackendStack({ backend }: BackendProps) {
  const formatTitle = (title: string) =>
    title.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <h3 className="mb-3 text-xl font-semibold">Backend & Infrastructure</h3>

        <p className="max-w-4xl leading-7 text-neutral-600 dark:text-neutral-400">
          {backend.overview}
        </p>
      </div>

      {/* Scrollable Tech Groups */}
      <div className="flex gap-4 overflow-x-auto pb-3">
        {Object.entries(backend.techStack).map(([category, technologies]) => (
          <div
            key={category}
            className="
                min-w-[220px]
                shrink-0
                rounded-lg
                border
                border-neutral-200
                bg-white
                p-4
                dark:border-neutral-800
                dark:bg-black
              "
          >
            {/* Category */}
            <h4 className="mb-3 text-sm font-semibold text-neutral-500">
              {formatTitle(category)}
            </h4>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                      rounded-md
                      bg-neutral-100
                      px-2.5
                      py-1
                      text-xs
                      font-medium
                      text-neutral-700
                      dark:bg-neutral-900
                      dark:text-neutral-300
                    "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
