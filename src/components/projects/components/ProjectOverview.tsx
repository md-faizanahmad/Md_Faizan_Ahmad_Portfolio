interface ProjectOverviewProps {
  overview: string;
  problem: string;
  solution: string;
}

export default function ProjectOverview({
  overview,
  problem,
  solution,
}: ProjectOverviewProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      {/* Section Title */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Project Overview</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Background, business problem, and solution approach.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Overview */}
        <div className="rounded-xl border bg-card p-6">
          <h3 className="mb-4 text-xl font-semibold">Overview</h3>

          <p className="leading-7 text-muted-foreground">{overview}</p>
        </div>

        {/* Problem */}
        <div className="rounded-xl border bg-card p-6">
          <h3 className="mb-4 text-xl font-semibold">Problem</h3>

          <p className="leading-7 text-muted-foreground">{problem}</p>
        </div>

        {/* Solution */}
        <div className="rounded-xl border bg-card p-6">
          <h3 className="mb-4 text-xl font-semibold">Solution</h3>

          <p className="leading-7 text-muted-foreground">{solution}</p>
        </div>
      </div>
    </section>
  );
}
