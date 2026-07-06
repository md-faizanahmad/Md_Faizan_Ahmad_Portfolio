"use client";

import React from "react";
import { Shield, ShieldAlert, Key, Lock, Eye } from "lucide-react";

interface ProjectSecurityProps {
  security: string[];
}

export default function ProjectSecurity({ security }: ProjectSecurityProps) {
  if (!security?.length) return null;

  const getSecurityMeta = (item: string) => {
    const text = item.toLowerCase();

    if (
      text.includes("auth") ||
      text.includes("jwt") ||
      text.includes("session")
    ) {
      return {
        scope: "Identity & Access Control",
        icon: <Key size={18} className="text-amber-500" />,
      };
    }
    if (
      text.includes("encrypt") ||
      text.includes("hash") ||
      text.includes("crypto")
    ) {
      return {
        scope: "Cryptographic Layer",
        icon: <Lock size={18} className="text-blue-500" />,
      };
    }
    if (
      text.includes("cors") ||
      text.includes("helmet") ||
      text.includes("rate")
    ) {
      return {
        scope: "Network & Perimeter Guard",
        icon: <ShieldAlert size={18} className="text-emerald-500" />,
      };
    }
    return {
      scope: "Data Integrity & Audit",
      icon: <Eye size={18} className="text-purple-500" />,
    };
  };

  return (
    <section
      className="w-full bg-neutral-50 cursor-pointer text-neutral-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-neutral-50 py-16 sm:py-24"
      aria-labelledby="security-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Two-Column Layout */}
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16 items-start">
          {/* Left Sticky Header Panel */}
          <aside className="lg:sticky lg:top-24 lg:self-start space-y-4">
            <div className="space-y-1.5 max-w-4xl text-left">
              <h2
                className="text-xl font-extrabold uppercase tracking-tight sm:text-2xl md:text-3xl"
                id="security-heading"
              >
                Security Architecture
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                Authentication protocols, telemetry layers, and perimeter threat
                remediation.
              </p>
            </div>
          </aside>

          {/* Right Card Stacking Panel */}
          <main className="w-full max-w-2xl">
            <ul className="relative list-none p-0 m-0 space-y-6">
              {security.map((item, index) => {
                const meta = getSecurityMeta(item);

                return (
                  <li
                    key={index}
                    className="sticky w-full list-none"
                    /* Adjusted top offset so cards clear the layout header container neatly */
                    style={{ top: `calc(6rem + ${index * 20}px)` }}
                  >
                    <div className="w-full p-6 rounded-xl border border-neutral-200/60 bg-white/90 dark:border-zinc-800/80 dark:bg-zinc-900/90 backdrop-blur-md shadow-sm transition-all duration-200 hover:shadow-md">
                      {/* Card Header */}
                      <div className="flex items-center gap-3 border-b border-neutral-100 dark:border-zinc-800/60 pb-3 mb-4">
                        {meta.icon}
                        <span className="text-xs font-medium tracking-wide text-neutral-500 dark:text-neutral-400">
                          {meta.scope}
                        </span>
                      </div>

                      {/* Card Content */}
                      <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </main>
        </div>
      </div>
    </section>
  );
}
