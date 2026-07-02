import { GraduationCap } from "lucide-react";

interface ProjectLearningProps {
  learning: string[];
}

export default function ProjectLearning({ learning }: ProjectLearningProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Key Learnings</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Technical skills, architectural concepts, and development practices
          gained while building this project.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {learning.map((item) => (
          <div
            key={item}
            className="
              flex items-start gap-3
              rounded-xl
              border
              bg-card
              p-5
            "
          >
            <div className="mt-1">
              <GraduationCap size={18} className="text-blue-500" />
            </div>

            <p className="text-sm leading-6">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
