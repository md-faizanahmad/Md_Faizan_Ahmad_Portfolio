"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import { NAV_LINKS } from "./navbar.config";

interface NavbarDesktopProps {
  pathname: string;
}

export default function NavbarDesktop({ pathname }: NavbarDesktopProps) {
  return (
    <div className="hidden items-center space-x-6 md:flex">
      {NAV_LINKS.map((link) => {
        const active = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`
              group relative text-sm transition-colors duration-200
              ${
                active
                  ? "font-semibold text-[color:var(--foreground)]"
                  : "text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]"
              }
            `}
          >
            <motion.span
              className="relative"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {link.name}

              <span
                className="
                  absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0
                  bg-[color:var(--foreground)]/70 transition-transform duration-300
                  group-hover:scale-x-100
                "
              />
            </motion.span>
          </Link>
        );
      })}

      <ThemeToggle />
    </div>
  );
}
