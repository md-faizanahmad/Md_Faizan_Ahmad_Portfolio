// components/SocialBox.tsx
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { SocialIcon } from "./SocialIcon";

const SOCIAL_LINKS = [
  {
    label: "Email",
    href: "mailto:md.faizan.ahmad.web@gmail.com",
    icon: Mail,
    color: "text-red-500",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mdfaizandahmad",
    icon: Linkedin,
    color: "text-blue-600",
  },
  {
    label: "GitHub",
    href: "https://github.com/md-faizanahmad",
    icon: Github,
    color: "text-gray-900",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/917563092029",
    icon: MessageCircle,
    color: "text-emerald-500",
  },
];

export default function SocialBox() {
  return (
    <div className="flex flex-col items-center gap-3 p-6">
      <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
        Quick Connect
      </h3>

      {/* The "Box" Container */}
      <div className="flex flex-row items-center gap-3 p-2 bg-gray-50/50 rounded-2xl border border-gray-100">
        {SOCIAL_LINKS.map((link) => (
          <SocialIcon key={link.label} {...link} />
        ))}
      </div>
    </div>
  );
}
