interface FrontendStackProps {
  techStack: string[];
}

export default function FrontendStack({ techStack }: FrontendStackProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Frontend Stack</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Technologies and tools used to build the user interface and
          client-side experience.
        </p>
      </div>

      <div className="rounded-xl border bg-card p-6">
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                px-4
                py-2
                text-sm
                font-medium
                transition
                hover:scale-105
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
