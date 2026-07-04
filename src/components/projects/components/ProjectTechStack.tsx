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

  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      <div className="grid gap-16 lg:grid-cols-[220px_1fr]">
        {/* LEFT STICKY */}
        <div className="hidden lg:block">
          <div className="sticky top-32">
            <div className="space-y-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                Frontend
              </h3>

              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                Backend
              </h3>

              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                Security
              </h3>

              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                API & Infrastructure
              </h3>
            </div>
          </div>
        </div>

        {/* RIGHT SCROLL */}
        <div className="space-y-20">
          {/* Frontend */}
          <section>
            <h3 className="mb-6 text-2xl font-semibold lg:hidden">Frontend</h3>

            <div className="flex flex-wrap gap-2">
              {frontend.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border px-3 py-1.5 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Backend */}
          <section>
            <h3 className="mb-6 text-2xl font-semibold lg:hidden">Backend</h3>

            <div className="flex flex-wrap gap-2">
              {Object.entries(backend)
                .filter(
                  ([key]) =>
                    !["deployment", "payments", "fileUploads"].includes(key),
                )
                .flatMap(([_, values]) => values)
                .map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border px-3 py-1.5 text-sm"
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </section>

          {/* Security */}
          <section>
            <h3 className="mb-6 text-2xl font-semibold lg:hidden">Security</h3>

            <div className="flex flex-wrap gap-2">
              {security.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border px-3 py-1.5 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Infrastructure */}
          <section>
            <h3 className="mb-6 text-2xl font-semibold lg:hidden">
              API & Infrastructure
            </h3>

            <div className="flex flex-wrap gap-2">
              {infrastructure.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border px-3 py-1.5 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
