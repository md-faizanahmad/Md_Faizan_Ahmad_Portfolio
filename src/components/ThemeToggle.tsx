"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ThemeToggle({
  className = "",
}: {
  className?: string;
}) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className={`inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] p-2 shadow-sm ${className}`}
      />
    );
  }

  const current = theme === "system" ? systemTheme : theme;
  const isDark = current === "dark";

  return (
    <motion.button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileTap={{ scale: 0.88, rotate: -8 }}
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`
        relative inline-flex items-center justify-center
        overflow-hidden rounded-full 
        bg-[var(--card)] p-2 shadow-sm
        transition-colors duration-300
        hover:bg-neutral-100 dark:hover:bg-neutral-800
        ${className}
      `}
    >
      <span className="sr-only">Toggle theme</span>

      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "sun" : "moon"}
          initial={{ opacity: 0, rotate: -90, scale: 0.4 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.4 }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Sun size={18} strokeWidth={1.8} className="text-amber-500" />
          ) : (
            <Moon
              size={18}
              strokeWidth={1.8}
              className="text-neutral-700 dark:text-neutral-200"
            />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
