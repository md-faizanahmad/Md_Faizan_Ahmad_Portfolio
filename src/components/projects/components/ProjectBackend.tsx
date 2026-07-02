interface BackendProps {
  backend: {
    overview: string;
    techStack: Record<string, string[]>;
  };
}

export default function ProjectBackend({ backend }: BackendProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">
          Backend Architecture
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Technologies, services, and architecture used to power the
          application.
        </p>
      </div>

      {/* Overview */}
      <div className="mb-8 rounded-xl border bg-card p-6">
        <p className="leading-7 text-muted-foreground">{backend.overview}</p>
      </div>

      {/* Tech Stack */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(backend.techStack).map(([category, technologies]) => (
          <div key={category} className="rounded-xl border bg-card p-5">
            <h3 className="mb-4 text-lg font-semibold capitalize">
              {category.replace(/([A-Z])/g, " $1")}
            </h3>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                      rounded-full
                      border
                      px-3
                      py-1
                      text-sm
                    "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
