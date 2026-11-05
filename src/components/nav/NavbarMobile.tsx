"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
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
      <div className="flex items-center gap-3 md:hidden">
        <ThemeToggle />

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={onToggle}
          className="
          cursor-pointer
            navbar-mobile-button
            inline-flex items-center justify-center
            p-2 text-[color:var(--foreground)]
            transition-opacity hover:opacity-60
          "
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.15 }}
            >
              {isOpen ? <X size={23} /> : <Menu size={23} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="
              mobile-menu
              absolute left-0 top-16
              h-[calc(100dvh-4rem)] w-full
              overflow-y-auto md:hidden
              border-t border-[color:var(--border)]
              bg-[color:var(--background)]
              text-[color:var(--foreground)]
            "
          >
            <div className="flex min-h-full flex-col px-6 pt-10 pb-8 sm:px-10">
              {/* Navigation Label */}
              <p className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
                Navigation
              </p>

              {/* Navigation Links */}
              <nav aria-label="Mobile navigation">
                <div className="border-t border-[color:var(--border)]">
                  {NAV_LINKS.map((link, index) => {
                    const isActive = pathname === link.href;

                    return (
                      <motion.div
                        key={link.name}
                        className="mobile-menu-item"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.06,
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={onToggle}
                          aria-current={isActive ? "page" : undefined}
                          className="
                            group flex items-center justify-between
                            border-b border-[color:var(--border)]
                            py-6 transition-colors
                          "
                        >
                          <span
                            className={`
                              text-3xl font-semibold tracking-tight
                              transition-colors duration-200
                              ${
                                isActive
                                  ? "text-[color:var(--foreground)]"
                                  : "text-[color:var(--muted-foreground)] group-hover:text-[color:var(--foreground)]"
                              }
                            `}
                          >
                            {link.name}
                          </span>

                          <ArrowUpRight
                            size={21}
                            strokeWidth={1.5}
                            className={`
                              transition-all duration-200
                              ${
                                isActive
                                  ? "opacity-100"
                                  : "opacity-0 group-hover:opacity-100"
                              }
                            `}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
