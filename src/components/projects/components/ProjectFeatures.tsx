"use client";

import { useEffect, useRef, useState } from "react";
import ProjectFeatureSection from "./ProjectFeatureSection";

interface ProjectFeaturesProps {
  features: Record<string, string[]>;
}

export default function ProjectFeatures({ features }: ProjectFeaturesProps) {
  const categories = Object.keys(features);

  const [openCategory, setOpenCategory] = useState(categories[0] || null);

  const [activeCategory, setActiveCategory] = useState(categories[0] || null);

  const containerRef = useRef<HTMLDivElement>(null);

  const formatTitle = (title: string) => {
    const titles: Record<string, string> = {
      authentication: "Authentication & Security",
      catalog: "Product & Catalog Management",
      commerce: "Cart, Checkout & Payments",
      orders: "Orders & Post-Purchase",
      analytics: "Admin & Business Features",
    };

    return titles[title] || title;
  };

  const handleSidebarClick = (category: string) => {
    setOpenCategory(category);
    setActiveCategory(category);

    document.getElementById(`feature-${category}`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const category = entry.target.getAttribute("data-category");

          if (category) {
            setActiveCategory(category);
          }
        });
      },
      {
        rootMargin: "-25% 0px -55% 0px",
      },
    );

    const sections = containerRef.current?.querySelectorAll("[data-category]");

    sections?.forEach((section) => observer.observe(section));

    return () => sections?.forEach((section) => observer.unobserve(section));
  }, []);

  if (!categories.length) return null;

  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 max-w-4xl space-y-3">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Key Features
          </h2>

          <p className="text-base leading-7 text-neutral-700 dark:text-neutral-300">
            The main features and business workflows implemented in this
            project.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-4 border-l border-neutral-200 pl-4 dark:border-neutral-800">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleSidebarClick(category)}
                  className={`block text-left text-sm transition-colors ${
                    activeCategory === category
                      ? "font-semibold text-black dark:text-white"
                      : "text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                  }`}
                >
                  {formatTitle(category)}
                </button>
              ))}
            </div>
          </aside>

          {/* Content */}
          <div
            ref={containerRef}
            className="divide-y divide-neutral-200 dark:divide-neutral-800"
          >
            {Object.entries(features).map(([category, items]) => (
              <div
                key={category}
                id={`feature-${category}`}
                data-category={category}
              >
                <ProjectFeatureSection
                  category={category}
                  title={formatTitle(category)}
                  items={items}
                  isOpen={openCategory === category}
                  isActive={activeCategory === category}
                  onToggle={() =>
                    setOpenCategory(openCategory === category ? null : category)
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
