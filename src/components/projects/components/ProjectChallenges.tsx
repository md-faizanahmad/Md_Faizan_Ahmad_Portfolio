interface Challenge {
  problem: string;
  solution: string;
}

interface ProjectChallengesProps {
  challenges: Challenge[];
}

export default function ProjectChallenges({
  challenges,
}: ProjectChallengesProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">
          Challenges & Solutions
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Real-world problems encountered during development and the approaches
          used to solve them.
        </p>
      </div>

      <div className="space-y-6">
        {challenges.map((challenge, index) => (
          <div key={index} className="rounded-xl border bg-card p-6">
            {/* Problem */}
            <div className="mb-5">
              <h3 className="mb-2 text-lg font-semibold">
                Challenge {index + 1}
              </h3>

              <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
                <h4 className="mb-2 font-medium text-red-500">Problem</h4>

                <p className="text-sm leading-7 text-muted-foreground">
                  {challenge.problem}
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
              <h4 className="mb-2 font-medium text-green-500">Solution</h4>

              <p className="text-sm leading-7 text-muted-foreground">
                {challenge.solution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
