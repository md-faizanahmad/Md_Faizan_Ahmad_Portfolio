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
    <div className="fixed bottom-6 lg:right-6 right-1 z-50">
      {/* Actions */}
      <div
        className={`flex flex-col items-center-safe gap-3 mb-4 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 pointer-events-none translate-y-4"
        }`}
      >
        {actions.map(({ label, href, icon: Icon, bg }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-3 px-4 py-2 rounded-full text-white shadow-lg ${bg}`}
          >
            <Icon size={18} />
            <span className="text-sm font-medium hidden sm:block">{label}</span>
          </a>
        ))}
      </div>

      {/* Main Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-14 w-14 items-center cursor-pointer ms-1 lg:ms-11 justify-center rounded-full bg-gradient-to-r from-black to-purple-600 text-white shadow-xl hover:scale-105 transition"
        aria-label="Open social links"
      >
        <Share2
          size={22}
          className={`transition-transform ${open ? "rotate-45" : ""}`}
        />
      </button>
    </div>
  );
}
