import Link from "next/link";
import homeTechStack from "@/public/home-tech-stack.json";

export default function HomeTechStack() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-sm font-medium text-[color:var(--muted-foreground)]">
            Core Stack
          </p>

          <h2 className="mt-1 text-2xl font-bold sm:text-2xl">
            Technologies I Work With
          </h2>
        </div>

        <Link
          href="/skills"
          className="text-sm font-medium text-[color:var(--foreground)] underline"
        >
          View all
        </Link>
      </div>

      <div className="flex flex-wrap gap-3">
        {homeTechStack.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2  hover:border-[color:var(--border)] bg-[color:var(--card)] px-4 py-3 transition-colors hover:bg-[color:var(--secondary)]"
          >
            <i className={`${skill.icon} text-xl`} />

            <span className="text-sm font-medium text-[color:var(--foreground)]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
