"use client";

import { Mail, Github, Linkedin, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";

const actions = [
  {
    label: "Email",
    href: "mailto:md.faizan.ahmad.web@gmail.com",
    icon: Mail,
    bg: "bg-gradient-to-r from-red-600 to-yellow-500",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/917563092029",
    icon: MessageCircle,
    bg: "bg-gradient-to-r from-green-500 to-emerald-700",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mdfaizandahmad",
    icon: Linkedin,
    bg: "bg-gradient-to-r from-sky-600 to-blue-800",
  },
  {
    label: "GitHub",
    href: "https://github.com/md-faizanahmad",
    icon: Github,
    bg: "bg-gradient-to-r from-neutral-800 to-black",
  },
];

export default function SocialLink() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-3 z-50 sm:hidden">
      {/* Actions */}
      <div
        className={`mb-4 flex flex-col items-center gap-3 transition-all duration-300 ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        {actions.map(({ label, href, icon: Icon, bg }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`group flex items-center gap-3 rounded-full px-4 py-2 text-white shadow-lg ${bg}`}
          >
            <Icon size={18} />
            <span className="text-sm font-medium">{label}</span>
          </a>
        ))}
      </div>

      {/* Main Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex h-14 w-14 cursor-pointer items-center justify-center
          rounded-full
          border border-[color:var(--border)]
          bg-[color:var(--card)]
          text-[color:var(--foreground)]
          shadow-md transition-all duration-200
          hover:scale-105 hover:shadow-lg
        "
        aria-label={open ? "Close social links" : "Open social links"}
        aria-expanded={open}
      >
        <Share2
          size={22}
          className={`transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>
    </div>
  );
}
