"use client";

import React from "react";
import { Terminal, Plus, SquareSquare, ChevronRight } from "lucide-react";

interface ProjectEngineeringProps {
  engineeringHighlights: string[];
}

export default function ProjectEngineering({
  engineeringHighlights,
}: ProjectEngineeringProps) {
  if (!engineeringHighlights?.length) return null;

  return (
    <section
      className="w-full bg-neutral-50 text-neutral-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-neutral-50 py-12 sm:py-16"
      aria-labelledby="engineering-heading"
    >
      <div className="space-y-1.5 max-w-4xl text-left">
        <h2
          className="text-xl font-extrabold uppercase tracking-tight sm:text-2xl md:text-3xl"
          id="security-heading"
        >
          Engineering Highlights
        </h2>
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          System architectural traces and runtime performance logs.
        </p>
      </div>
      <div className="mx-auto max-w-4xl px-6">
        {/* VS Code Terminal Shell */}
        <div className="w-full rounded-lg border border-neutral-200 bg-neutral-900 shadow-xl dark:border-zinc-800 text-neutral-300 overflow-hidden font-mono text-xs selection:bg-zinc-700">
          {/* Terminal Tabs / Header Control Bar */}
          <div className="flex items-center justify-between bg-neutral-950 px-4 py-2 border-b border-neutral-800">
            <div className="flex items-center gap-6">
              <span className="text-neutral-400 font-sans font-medium uppercase tracking-wider text-[10px]">
                Terminal
              </span>
              <div className="flex items-center gap-1 border-b border-neutral-400 pb-2 -mb-2 text-white">
                <Terminal size={12} className="text-neutral-400" />
                <span>node</span>
              </div>
              <div className="flex items-center gap-1 text-neutral-500 pb-2 -mb-2 hover:text-neutral-300 cursor-pointer">
                <span>bash</span>
              </div>
              <div className="flex items-center gap-1 text-neutral-500 pb-2 -mb-2 hover:text-neutral-300 cursor-pointer">
                <span>git</span>
              </div>
            </div>

            {/* Window Actions */}
            <div className="flex items-center gap-3 text-neutral-500">
              <Plus
                size={14}
                className="hover:text-neutral-300 cursor-pointer"
              />
              <SquareSquare
                size={14}
                className="hover:text-neutral-300 cursor-pointer"
              />
            </div>
          </div>

          {/* Terminal Core Buffer Screen */}
          <div className="p-4 space-y-4 min-h-[320px] bg-neutral-900/95 overflow-y-auto">
            {/* Environment Init Line */}
            <div className="text-neutral-500">
              <span>user@production-runtime:~/architecture$ </span>
              <span className="text-neutral-300">
                cat engineering_highlights.log
              </span>
            </div>

            {/* Simulated Live Output Stream */}
            <ul className="space-y-4 list-none p-0 m-0">
              {engineeringHighlights.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 group">
                  {/* Prompt Pointer */}
                  <ChevronRight
                    size={14}
                    className="text-emerald-500 shrink-0 mt-0.5"
                  />

                  {/* Detailed Log Output String */}
                  <div className="space-y-1">
                    <span className="text-neutral-500 block text-[10px]">
                      [LOG_0{index + 1} - LOCAL_THREAD]
                    </span>
                    <p className="text-neutral-200 font-sans sm:font-mono text-sm leading-relaxed max-w-3xl">
                      {item}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Trailing Active Input Line */}
            <div className="flex items-center gap-1 pt-2 border-t border-neutral-800/60 text-neutral-500">
              <span>user@production-runtime:~/architecture$</span>
              <span className="w-1.5 h-3.5 bg-neutral-400 animate-pulse inline-block align-middle" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
