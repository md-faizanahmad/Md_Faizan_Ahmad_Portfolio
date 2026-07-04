"use client";

import { useState } from "react";

interface ProjectFeaturesProps {
  features: Record<string, string[]>;
}

export default function ProjectFeatures({ features }: ProjectFeaturesProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(
    Object.keys(features)[0] || null,
  ); // Defaults to opening the first architectural category module

  const formatTitle = (title: string) => {
    const titles: Record<string, string> = {
      authentication: "Authentication & Security",
      catalog: "Product & Catalog Management",
      commerce: "Cart, Checkout & Payments",
      orders: "Orders & Post-Purchase",
      analytics: "Admin & Business Capabilities",
    };

    return titles[title] || title;
  };

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  if (!Object.keys(features).length) return null;

  return (
    <section className="w-full bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white select-none">
      {/* Structural layout alignment boundaries matching overview/gallery wrappers */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Standout Section Header Group */}
        <div className="space-y-1.5 max-w-4xl text-left mb-10">
          <h2 className="text-xl font-extrabold uppercase tracking-tight sm:text-2xl md:text-3xl font-sans text-neutral-900 dark:text-white">
            Key Features
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 font-sans">
            Core capabilities and system operations deployed within this
            application instance.
          </p>
        </div>

        {/* Master Asymmetric Layout Grid Structure */}
        <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* LEFT INDEX TRACK - Sidebar registry guide list */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-4 border-l border-neutral-100 dark:border-neutral-900 pl-4 text-[11px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
              <div className="text-neutral-300 dark:text-neutral-700 font-bold"></div>
              {Object.keys(features).map((category) => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`block text-left transition-colors duration-150 ${
                    openCategory === category
                      ? "text-black dark:text-white font-bold"
                      : "hover:text-black dark:hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </aside>

          {/* RIGHT VIEWPORT CONTENT - Interactive Progressive Disclosure List */}
          <div className="divide-y divide-neutral-100 dark:divide-neutral-900">
            {Object.entries(features).map(([category, items]) => {
              const isOpen = openCategory === category;

              return (
                <div key={category} className="py-4 first:pt-0 last:pb-0">
                  {/* Interactive Header Button Trigger */}
                  <button
                    onClick={() => toggleCategory(category)}
                    className="group flex w-full items-center justify-between py-3 text-left transition-colors duration-150"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-neutral-300 dark:text-neutral-700 group-hover:text-black dark:group-hover:text-white transition-colors"></span>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-neutral-900 dark:text-white font-sans">
                        {formatTitle(category)}
                      </h3>
                    </div>

                    {/* Micro-interactive status token bracket */}
                    <span className="font-mono text-xs text-neutral-400 group-hover:text-black dark:group-hover:text-white pl-4 transition-colors">
                      {isOpen ? "[-]" : "[+]"}
                    </span>
                  </button>

                  {/* Collapsible Feature Log Panel */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pt-2 pb-5"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden pl-8">
                      <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 font-sans text-sm">
                        {items.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400 transition-colors hover:text-black dark:hover:text-white duration-150"
                          >
                            {/* Replaced solid circular bullet arrays with clean inline operational symbols */}
                            <span className="font-mono text-xs text-neutral-300 dark:text-neutral-700 select-none mt-0.5">
                              &bull;
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
