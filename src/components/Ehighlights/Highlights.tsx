"use client";

import { motion } from "framer-motion";
import { highlightsConfig } from "./highlights.config";

const Highlights = () => {
  const { section, highlights } = highlightsConfig;

  return (
    <section id={section.id} className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-7 max-w-2xl"
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

          <p className="mt- text-[color:var(--muted-foreground)]">
            {section.description}
          </p>
        </motion.div>

        <div className="hide-scrollbar max-h-[420px] overflow-y-auto overscroll-contain scroll-smooth pr-2 md:max-h-none md:overflow-visible">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;

            return (
              <motion.article
                key={highlight.title}
                className="
          grid grid-cols-[20px_1fr] gap-x-3 gap-y-1
          border-b border-[color:var(--border)]
          py-3
          md:grid-cols-[40px_220px_1fr] md:items-center md:gap-6 md:py-4
        "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
              >
                <Icon
                  size={19}
                  strokeWidth={1.8}
                  className="text-[color:var(--foreground)]"
                  aria-hidden="true"
                />

                <h3 className="text-base font-semibold leading-5 md:text-lg">
                  {highlight.title}
                </h3>

                <p className="col-start-2 text-xs leading-5 text-[color:var(--muted-foreground)] md:col-start-auto md:text-sm">
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
