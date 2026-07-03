"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  fallbackUrl?: string;
  label?: string;
}

export default function BackButton({
  fallbackUrl = "/projects",
  label = "Back to Overview",
}: BackButtonProps) {
  const router = useRouter();

  const handleNavigation = () => {
    // Check if there is history to go back to safely, otherwise use custom path fallback
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackUrl);
    }
  };

  return (
    <div className="w-full bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <button
        onClick={handleNavigation}
        className="group inline-flex items-center gap-3 border border-neutral-200 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-black transition-all duration-200 hover:bg-neutral-50 active:scale-95 dark:border-neutral-800 dark:bg-black dark:text-white dark:hover:bg-neutral-900 w-full sm:w-auto justify-center sm:justify-start rounded-sm"
        aria-label={label}
      >
        <ArrowLeft
          size={14}
          className="transition-transform duration-200 group-hover:-translate-x-1"
        />
        <span>{label}</span>
      </button>
    </div>
  );
}
