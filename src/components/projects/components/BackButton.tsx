"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  fallbackUrl?: string;
  label?: string;
}

export default function BackButton({
  fallbackUrl = "/projects",
  label = "Back to Projects",
}: BackButtonProps) {
  const router = useRouter();

  const handleNavigation = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackUrl);
    }
  };

  return (
    <button
      onClick={handleNavigation}
      aria-label={label}
      className="
      cursor-pointer
        group
        inline-flex
        items-center
        gap-2
        rounded-md
        border
        border-neutral-200
        bg-white
        px-3
        py-2
        text-sm
        font-medium
        text-neutral-700
        transition-all
        hover:bg-neutral-50
        hover:text-black
        dark:border-neutral-800
        dark:bg-black
        dark:text-neutral-300
        dark:hover:bg-neutral-900
        dark:hover:text-white
      "
    >
      <ArrowLeft
        size={16}
        className="
          transition-transform
          duration-200
          group-hover:-translate-x-1
        "
      />

      <span>{label}</span>
    </button>
  );
}
