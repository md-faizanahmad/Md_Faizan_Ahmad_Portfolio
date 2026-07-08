"use client";

interface ProjectFeatureSectionProps {
  category: string;
  title: string;
  items: string[];
  isOpen: boolean;
  isActive: boolean;
  onToggle: () => void;
}

export default function ProjectFeatureSection({
  title,
  items,
  isOpen,
  isActive,
  onToggle,
}: ProjectFeatureSectionProps) {
  return (
    <div
      className={`cursor-pointer py-3 px-2 sm:px-4 transition-all duration-500 ${
        isActive
          ? "bg-neutral-50 dark:bg-neutral-900/20 opacity-100"
          : "opacity-70 hover:opacity-100"
      }`}
    >
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between py-4 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white">
          {title}
        </h3>

        <span className="text-sm cursor-pointer text-neutral-500 dark:text-neutral-400">
          {isOpen ? "Hide" : "Show"}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 pb-5"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {items.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300"
              >
                <span className="mt-1">•</span>
                <span className="leading-7">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
