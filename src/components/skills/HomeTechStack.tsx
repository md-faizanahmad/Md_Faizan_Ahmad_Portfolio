import Link from "next/link";
import homeTechStack from "@/public/home-tech-stack.json";

export default function HomeTechStack() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4">
      <div className="mb-10 flex flex-row items-end justify-between gap-4 sm:mb-14">
        <h2
          className="
      text-[clamp(3.5rem,9vw,7rem)]
      font-semibold
      leading-[0.7]
      tracking-[-0.099em]
      text-[color:var(--foreground)]
    "
        >
          Tech Stack<span className="text-green-600">.</span>
        </h2>

        <Link
          href="/skills"
          className="
      mb-1 inline-flex w-fit shrink-0 items-center
      text-sm font-medium
      text-[color:var(--foreground)]
      underline underline-offset-4
      transition-colors duration-300
      hover:text-green-600
    "
        >
          View all
        </Link>
      </div>

      <div className="flex flex-wrap gap-3">
        {homeTechStack.skills.map((skill) => (
          <div
            key={skill.name}
            className="
              flex items-center gap-2
              bg-[color:var(--card)]
              px-4 py-3
              transition-colors duration-300
              hover:bg-[color:var(--secondary)]
            "
          >
            <i
              className={`${skill.icon} ${skill.class} text-xl transition-transform duration-300 hover:scale-110`}
              aria-hidden="true"
            />

            <span className="text-sm font-medium text-[color:var(--foreground)]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
