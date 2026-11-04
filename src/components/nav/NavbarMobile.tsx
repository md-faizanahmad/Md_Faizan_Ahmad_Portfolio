"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import SocialLinksNav from "@/shared/SocialLinksNav";
import { NAV_LINKS } from "./navbar.config";

interface NavbarMobileProps {
  isOpen: boolean;
  pathname: string;
  onToggle: () => void;
}

export default function NavbarMobile({
  isOpen,
  pathname,
  onToggle,
}: NavbarMobileProps) {
  return (
    <>
      {/* Mobile Controls */}
      <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle />

        <motion.button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          whileTap={{ scale: 0.9, rotate: 5 }}
          whileHover={{ scale: 1.1, rotate: -3 }}
          onClick={onToggle}
          className="
            navbar-mobile-button
            inline-flex cursor-pointer items-center justify-center p-2 rounded-full
            border border-[color:var(--border)]
            bg-[color:var(--card)] text-[color:var(--foreground)]
            shadow-sm
          "
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="
              mobile-menu
              absolute left-0 top-16 h-[calc(100vh-4rem)] w-full md:hidden
              backdrop-blur-2xl bg-[color:var(--background)]/100
              text-[color:var(--foreground)] border-t border-[color:var(--border)]
              overflow-hidden
            "
          >
            <div className="flex flex-col gap-3 px-6 py-12">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={onToggle}
                    aria-current={isActive ? "page" : undefined}
                    className="mobile-menu-item relative block w-full outline-none"
                  >
                    <motion.div
                      whileTap={{ scale: 0.98 }}
                      className={`
                        flex items-center justify-between px-6 py-5 rounded-2xl
                        border transition-all duration-300
                        ${
                          isActive
                            ? "bg-indigo-600/10 border-sky-500/50 shadow-[0_0_20px_rgba(79,70,229,0.1)]"
                            : "bg-[color:var(--card)]/40 border-[color:var(--border)]/50 hover:border-[color:var(--border)]"
                        }
                      `}
                    >
                      <div className="flex flex-col">
                        <span
                          className={`text-2xl font-bold tracking-tight ${
                            isActive
                              ? "text-sky-500"
                              : "text-[color:var(--foreground)]"
                          }`}
                        >
                          {link.name}
                        </span>

                        <span className="text-xs uppercase tracking-[0.2em] opacity-40 font-medium">
                          {link.name === "Home"
                            ? "Start Here"
                            : `Go to ${link.name}`}
                        </span>
                      </div>

                      {/* Arrow Indicator */}
                      <div
                        className={`
                          flex h-10 w-10 items-center justify-center rounded-full border transition-all
                          ${
                            isActive
                              ? "bg-sky-600 border-sky-400 text-white rotate-[-45deg]"
                              : "bg-[color:var(--background)] border-[color:var(--border)] opacity-50"
                          }
                        `}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}

              <div>
                <SocialLinksNav />
              </div>

              {/* Mobile Footer */}
              <div className="mt-4 flex items-center justify-between px-4 opacity-50">
                <div className="h-px flex-1 bg-[color:var(--border)]" />

                <span className="px-4 text-[10px] font-black uppercase tracking-[0.3em]">
                  Md Faizan Ahmad Portfolio
                </span>

                <div className="h-px flex-1 bg-[color:var(--border)]" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
