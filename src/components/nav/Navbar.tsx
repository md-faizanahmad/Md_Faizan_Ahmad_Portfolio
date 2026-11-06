"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { useNavbarAnimations } from "./useNavbarAnimations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const { navRef } = useNavbarAnimations(isOpen);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <motion.nav
      ref={navRef}
      className="
        navbar-container
        fixed top-0 left-0 z-50 w-full
        backdrop-blur-xl backdrop-filter border-b shadow-sm
        border-[color:var(--border)]
        bg-[color:var(--background)]/70
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex flex-1 justify-start">
            <Link
              href="/"
              className="font-extrabold tracking-tight"
              aria-label="MFA — Front-end Developer"
            >
              <motion.span
                className="navbar-logo group relative inline-flex items-center"
                whileHover={{ scale: 1.06 }}
              >
                <span
                  className="
                    bg-clip-text text-transparent
                    bg-[linear-gradient(90deg,rgba(0,0,0,0.95),rgba(0,0,0,0.65))]
                    dark:bg-[linear-gradient(90deg,rgba(255,255,255,1),rgba(255,255,255,0.7))]
                    [background-size:200%_100%]
                    group-hover:[animation:shimmer_2s_linear_infinite]
                    text-2xl sm:text-3xl
                  "
                >
                  MFA
                  <span className="opacity-70 text-emerald-600 dark:text-emerald-400">
                    .
                  </span>
                </span>

                <span
                  className="
                    ml-2 hidden rounded-full border px-2 py-0.5 text-xs
                    border-[color:var(--border)]
                    bg-[color:var(--card)] text-[color:var(--muted-foreground)]
                    sm:inline-flex
                    translate-y-2 opacity-0 transition
                    group-hover:translate-y-0 group-hover:opacity-100
                  "
                >
                  Front-end Developer
                </span>
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavbarDesktop pathname={pathname} />

          {/* Mobile Navigation */}
          <NavbarMobile
            isOpen={isOpen}
            pathname={pathname}
            onToggle={toggleMenu}
          />
        </div>
      </div>
    </motion.nav>
  );
}
