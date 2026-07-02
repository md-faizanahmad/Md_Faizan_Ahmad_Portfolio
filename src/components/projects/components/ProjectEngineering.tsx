import { Wrench } from "lucide-react";

interface ProjectEngineeringProps {
  engineeringHighlights: string[];
}

export default function ProjectEngineering({
  engineeringHighlights,
}: ProjectEngineeringProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">
          Engineering Highlights
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Architectural decisions, engineering practices, and implementation
          approaches used throughout the project.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {engineeringHighlights.map((item) => (
          <div
            key={item}
            className="
              flex gap-4
              rounded-xl
              border
              bg-card
              p-5
            "
          >
            <div className="mt-1">
              <Wrench size={18} className="text-blue-500" />
            </div>

            <p className="text-sm leading-7">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
