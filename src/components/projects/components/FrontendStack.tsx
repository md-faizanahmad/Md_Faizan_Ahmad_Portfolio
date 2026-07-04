interface FrontendStackProps {
  techStack: string[];
}

export default function FrontendStack({ techStack }: FrontendStackProps) {
  if (!techStack?.length) return null;

  return (
    <div>
      <h3 className="mb-5 text-xl font-semibold">Frontend</h3>
      <div className="w-full max-w-5xl">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="inline-block bg-neutral-50 border border-neutral-200 px-3 py-1 text-xs font-mono uppercase tracking-wide text-neutral-800 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-300 rounded-sm select-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
