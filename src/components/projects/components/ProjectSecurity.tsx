"use client";

import { Shield } from "lucide-react";

interface ProjectSecurityProps {
  security: string[];
}

export default function ProjectSecurity({ security }: ProjectSecurityProps) {
  if (!security?.length) return null;

  return (
    <section
      className="w-full bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white font-mono select-none"
      aria-labelledby="security-architecture-heading"
      itemScope
      itemType="https://schema.org/TechArticle"
    >
      {/* Aligned to the exact same max-w-7xl layout margin track */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Section Heading Group */}
        <div className="space-y-1.5 max-w-4xl text-left mb-10 font-sans">
          <h2
            id="security-architecture-heading"
            className="text-xl font-extrabold uppercase tracking-tight sm:text-2xl md:text-3xl text-neutral-900 dark:text-white"
            itemProp="name"
          >
            Security Architecture
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            Authentication, cryptographic protocols, and identity access control
            policies deployed across application runtime nodes.
          </p>
        </div>

        {/* Master Asymmetric Splitting Grid Layout */}
        <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* LEFT COLUMN: Sidebar Indicator Registry */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-4 border-l border-neutral-100 dark:border-neutral-900 pl-4 text-[18px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              <div className="text-neutral-300 dark:text-neutral-700 font-bold">
                Compliance Logs
              </div>
              <div className="flex items-center gap-2 text-black dark:text-white font-bold">
                <Shield size={12} className="shrink-0" aria-hidden="true" />
                <span>Verified SecOps</span>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: Minimalist Cryptographic Audit Log Viewport */}
          <main>
            <ul
              className="divide-y divide-neutral-100 dark:divide-neutral-900 border-t border-b border-neutral-100 dark:border-neutral-900 lg:border-b-0 font-mono text-xs tracking-wide"
              aria-label="Implemented security frameworks list"
              itemProp="securityRequirements"
            >
              {security.map((item) => (
                <li
                  key={item}
                  className="group grid grid-cols-1 gap-2 py-5 sm:grid-cols-[100px_1fr] sm:gap-6 items-start transition-all duration-300 opacity-85 hover:opacity-100"
                >
                  {/* Technical Log Protocol Indicator */}
                  <div className="text-neutral-400 dark:text-neutral-600 font-bold text-[10px] sm:text-xs">
                    [ SEC_OK ]
                  </div>

                  {/* Core Protective Description Asset */}
                  <div className="text-neutral-700 dark:text-neutral-300 transition-colors duration-150 group-hover:text-black dark:group-hover:text-white font-sans sm:font-mono text-sm sm:text-xs leading-relaxed">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </div>
      </div>
    </section>
  );
}
