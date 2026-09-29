"use client";

import { motion } from "framer-motion";
import { highlightsConfig } from "./highlights.config";

const Highlights = () => {
  const { section, highlights } = highlightsConfig;

  return (
    <section id={section.id} className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-4 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-medium text-[color:var(--muted-foreground)]">
            {section.eyebrow}
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-3xl">
            {section.title}
          </h2>

          <p className="mt-3 text-[color:var(--muted-foreground)]">
            {section.description}
          </p>
        </motion.div>

        <div>
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;

            return (
              <motion.article
                key={highlight.title}
                className="grid gap-4 py-3 md:grid-cols-[40px_220px_1fr] md:items-center md:gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
              >
                <Icon
                  size={20}
                  strokeWidth={1.8}
                  className="text-[color:var(--foreground)] hover:text-secondary"
                  aria-hidden="true"
                />

                <h3 className="text-lg font-semibold">{highlight.title}</h3>

                <p className="text-sm leading-5 text-[color:var(--muted-foreground)]">
                  {highlight.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
