"use client";

import { useState, useEffect, useRef } from "react";

interface ProjectFeaturesProps {
  features: Record<string, string[]>;
}

export default function ProjectFeatures({ features }: ProjectFeaturesProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(
    Object.keys(features)[0] || null,
  );

  // Track which section is currently centered in the browser viewport
  const [activeScrollSection, setActiveScrollSection] = useState<string | null>(
    Object.keys(features)[0] || null,
  );

  const containerRef = useRef<HTMLDivElement>(null);

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

  // Click handler to manually navigate and sync focus targets
  const handleSidebarClick = (category: string) => {
    setOpenCategory(category);
    setActiveScrollSection(category);

    const element = document.getElementById(`feature-section-${category}`);
    if (element) {
      // Adjusted scroll offset bounding box for smooth viewport targeting
      element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null, // target browser viewport bounds
      rootMargin: "-25% 0px -55% 0px", // calibrated layout focal sweet-spot
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const categoryId = entry.target.getAttribute("data-category");
          if (categoryId) {
            setActiveScrollSection(categoryId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    const sections = containerRef.current?.querySelectorAll("[data-category]");
    sections?.forEach((section) => observer.observe(section));

    return () => {
      sections?.forEach((section) => observer.unobserve(section));
    };
  }, [features]);

  if (!Object.keys(features).length) return null;

  return (
    <section className="w-full bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white select-none">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Section Header */}
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
          {/* LEFT INDEX TRACK - Sidebar Dynamic Scroll Highlighter Nav */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-4 border-l border-neutral-100 dark:border-neutral-800 pl-4 transition-colors duration-300">
              <div className="text-[10px] font-bold font-mono uppercase tracking-widest text-neutral-300 dark:text-neutral-600"></div>
              <nav
                className="space-y-3"
                aria-label="Feature tracking scroll navigation"
              >
                {Object.keys(features).map((category) => {
                  const isCurrentlyViewed = activeScrollSection === category;
                  return (
                    <button
                      key={category}
                      onClick={() => handleSidebarClick(category)}
                      className={`block w-full text-left text-xs font-bold font-mono uppercase tracking-wider transition-all duration-300 will-change-transform cursor-pointer relative pl-1 ${
                        isCurrentlyViewed
                          ? "text-black dark:text-white translate-x-1.5 font-extrabold"
                          : "text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white"
                      }`}
                    >
                      {isCurrentlyViewed && (
                        <span className="absolute -left-4 text-black dark:text-white font-mono animate-fade-in">
                          &gt;
                        </span>
                      )}
                      {category}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* RIGHT VIEWPORT CONTENT - Dynamic Scroll-Monitored Accordions */}
          <div
            ref={containerRef}
            className="divide-y divide-neutral-100 dark:divide-neutral-900 border-t border-b border-neutral-100 dark:border-neutral-900 lg:border-b-0"
          >
            {Object.entries(features).map(([category, items]) => {
              const isOpen = openCategory === category;
              const isCurrentlyViewed = activeScrollSection === category;

              return (
                <div
                  key={category}
                  id={`feature-section-${category}`}
                  data-category={category}
                  className={`py-3 px-2 sm:px-4 first:rounded-t-sm last:rounded-b-sm transition-all duration-500 ease-out will-change-[opacity,background-color] ${
                    isCurrentlyViewed
                      ? "opacity-100 bg-neutral-50/60 dark:bg-neutral-900/20"
                      : "opacity-40 hover:opacity-75"
                  }`}
                >
                  {/* Interactive Trigger Surface */}
                  <button
                    onClick={() => toggleCategory(category)}
                    className="group flex w-full items-center justify-between py-4 text-left transition-colors duration-150 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-xs font-bold transition-transform duration-300 will-change-transform ${
                          isOpen
                            ? "rotate-90 text-black dark:text-white"
                            : "text-neutral-300 dark:text-neutral-600 group-hover:text-black dark:group-hover:text-white"
                        }`}
                      >
                        &gt;
                      </span>
                      <h3 className="text-base font-extrabold uppercase tracking-wide text-neutral-900 dark:text-white font-sans sm:text-lg">
                        {formatTitle(category)}
                      </h3>
                    </div>

                    {/* UI status tracking indicator */}
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white pl-4 transition-colors duration-200">
                      {isOpen ? "[ Collapse ]" : "[ Expand ]"}
                    </span>
                  </button>

                  {/* Collapsible Panel Area */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-5 pt-1"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden pl-6">
                      <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 font-sans text-sm">
                        {items.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400 transition-colors hover:text-black dark:hover:text-white duration-150"
                          >
                            <span className="font-mono text-xs text-neutral-300 dark:text-neutral-600 select-none mt-0.5">
                              &bull;
                            </span>
                            <span className="leading-relaxed">{feature}</span>
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
