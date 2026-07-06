"use client";

import React from "react";
import { ShieldAlert, Key, Lock, Eye } from "lucide-react";

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
      className="w-full bg-neutral-50 text-neutral-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-neutral-50 py-12 sm:py-20"
      aria-labelledby="security-heading"
    >
      {/* Normalized Centered Container Track */}
      <div className="mx-auto max-w-2xl px-6">
        {/* FIXED ASIDE HEADER: Now acts as a solid, fixed background ceiling panel */}
        <aside className="sticky top-0 z-30 bg-neutral-50 dark:bg-zinc-950 pt-4 pb-6 space-y-1.5 text-left">
          <h2
            className="text-xl font-extrabold uppercase tracking-tight sm:text-2xl"
            id="security-heading"
          >
            Security Architecture
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            Authentication protocols, telemetry layers, and perimeter threat
            remediation.
          </p>
        </aside>

        {/* Card Stacking Track Area */}
        <div className="w-full mt-4">
          <main className="w-full">
            {/* Reduced dynamic offsets since the sticky aside mask tracks padding precisely */}
            <ul className="relative list-none p-0 m-0 space-y-4 sm:space-y-6 [--stack-top:9.5rem] sm:[--stack-top:8.5rem]">
              {security.map((item, index) => {
                const meta = getSecurityMeta(item);

                return (
                  <li
                    key={index}
                    className="sticky w-full list-none"
                    style={{ top: `calc(var(--stack-top) + ${index * 16}px)` }}
                  >
                    <div className="w-full p-5 sm:p-6 rounded-xl border border-neutral-200/60 bg-white/95 dark:border-zinc-800/80 dark:bg-zinc-900/95 backdrop-blur-md shadow-sm transition-all duration-200 hover:shadow-md">
                      {/* Card Header */}
                      <div className="flex items-center gap-3 border-b border-neutral-100 dark:border-zinc-800/60 pb-3 mb-3 sm:mb-4">
                        {meta.icon}
                        <span className="text-xs font-medium tracking-wide text-neutral-500 dark:text-neutral-400">
                          {meta.scope}
                        </span>
                      </div>

                      {/* Card Content */}
                      <p className="text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed">
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
