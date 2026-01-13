// components/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle({
  className = "",
}: {
  className?: string;
}) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted)
    return (
      <button
        aria-label="Toggle theme"
        className={`p-2 rounded-full ${className}`}
      />
    );

  const current = theme === "system" ? systemTheme : theme;
  const isDark = current === "dark";

  return (
    <motion.button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileTap={{ scale: 0.92, rotate: 3 }}
      whileHover={{ scale: 1.06 }}
      className={`inline-flex cursor-pointer items-center justify-center p-2 rounded-full border border-[var(--border)] bg-[var(--card)] shadow-sm ${className}`}
    >
      <span className="sr-only">Toggle theme</span>
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </motion.button>
  );
}
