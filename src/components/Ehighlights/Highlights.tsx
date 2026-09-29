import { highlightsConfig } from "./highlights.config";

const Highlights = () => {
  const { section, highlights } = highlightsConfig;

  return (
    <section id={section.id} className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-sm font-medium text-[color:var(--muted-foreground)]">
            {section.eyebrow}
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {section.title}
          </h2>

          <p className="mt-3 text-[color:var(--muted-foreground)]">
            {section.description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight) => (
            <article
              key={highlight.title}
              className="border border-[color:var(--border)] bg-[color:var(--card)] p-6 transition-colors hover:bg-[color:var(--secondary)]"
            >
              <h3 className="text-lg font-semibold">{highlight.title}</h3>

              <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                {highlight.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
