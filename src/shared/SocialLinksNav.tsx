"use client";

import React from "react";
import { motion } from "framer-motion";
import { Email, GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";

const socialData = [
  {
    icon: <Email />,
    name: "Mail Us",
    url: "mailto:md.faizan.ahmad.web@gmail.com",
    bgcolorG: "linear-gradient(45deg, #D93025, #FBBC05)",
    color: "#fff",
  },
  {
    icon: <WhatsApp />,
    name: "Whatsapp Us",
    url: "https://wa.me/+917563092029",
    bgcolorG: "linear-gradient(45deg, #25D366, #075E54)",
    color: "#fff",
  },
  {
    icon: <LinkedIn />,
    name: "Lets Connect",
    url: "https://www.linkedin.com/in/mdfaizandahmad",
    bgcolorG: "linear-gradient(45deg, #0077B5, #004471)",
    color: "#fff",
  },
  {
    icon: <GitHub />,
    name: "Github",
    url: "https://github.com/md-faizanahmad",
    bgcolorG: "linear-gradient(45deg, #1a1919, #ffffff)",
    color: "#fff",
  },
];

interface SocialLinksProps {
  className?: string;
  variant?: "ghost" | "outline" | "filled";
}

const SocialLinksNav: React.FC<SocialLinksProps> = ({
  className = "",
  variant = "outline",
}) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  return (
    <div
      className={`flex m-auto mt-4 justify-center items-center gap-4 ${className}`}
    >
      {socialData.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          whileHover={{ y: -4, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            // Apply gradient only when this specific icon is hovered
            background:
              hoveredIndex === index ? social.bgcolorG : "transparent",
          }}
          className={`
         
            flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300
            ${
              variant === "outline"
                ? "border border-[color:var(--border)] bg-[color:var(--card)]/50"
                : ""
            }
            ${
              variant === "filled"
                ? "bg-[color:var(--secondary)] text-[color:var(--secondary-foreground)]"
                : ""
            }
            ${variant === "ghost" ? "hover:bg-[color:var(--secondary)]" : ""}
            ${social.color}
          `}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinksNav;
