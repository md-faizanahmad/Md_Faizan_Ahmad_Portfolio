import { Rocket } from "lucide-react";

interface ProjectFutureProps {
  futureImprovements: string[];
}

export default function ProjectFuture({
  futureImprovements,
}: ProjectFutureProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">
          Future Improvements
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Features and enhancements planned to further improve the platform.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {futureImprovements.map((item) => (
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
              <Rocket size={18} className="text-purple-500" />
            </div>

            <p className="text-sm leading-6">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
