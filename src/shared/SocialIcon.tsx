// components/SocialIcon.tsx
import { LucideIcon } from "lucide-react";

interface SocialIconProps {
  href: string;
  icon: LucideIcon;
  color: string;
  label: string;
}

export const SocialIcon = ({
  href,
  icon: Icon,
  color,
  label,
}: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-gray-200 active:scale-95"
    >
      {/* Icon */}
      <Icon
        size={22}
        className={`${color} transition-transform duration-300 group-hover:scale-110`}
      />

      {/* Tooltip (Optional: visible only on hover) */}
      <span className="absolute -top-10 scale-0 rounded bg-gray-900 px-2 py-1 text-[10px] font-bold text-black transition-all group-hover:scale-100">
        {label}
      </span>
    </a>
  );
};
