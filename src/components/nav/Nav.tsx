"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import ThemeToggle from "@/components/ThemeToggle";
// import logo from "@/assets/logo (2).png"; // if you want image logo, keep this and swap below

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLSpanElement | null>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileButtonRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => setIsOpen((p) => !p);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      logoRef.current,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        ease: "elastic.out(1, 0.5)",
      }
    );

    menuItemsRef.current.forEach((item, index) => {
      if (!item) return;
      gsap.fromTo(
        item,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.3 + index * 0.1,
          ease: "power2.out",
        }
      );
    });

    gsap.fromTo(
      mobileButtonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, delay: 0.4, ease: "back.out(1.7)" }
    );
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    gsap.fromTo(
      mobileMenuRef.current,
      { scaleY: 0.9, opacity: 0 },
      {
        scaleY: 1,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        transformOrigin: "top",
      }
    );
    gsap.fromTo(
      ".mobile-menu-item",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.45, stagger: 0.12, ease: "power3.out" }
    );
  }, [isOpen]);

  return (
    <motion.nav
      ref={navRef}
      className="
        fixed top-0 left-0 z-50 w-full
        backdrop-blur-xl backdrop-filter border-b shadow-sm
        border-[color:var(--border)]
        bg-[color:var(--background)]/70
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo (text mark MFA. + profession badge) */}
          <Link
            href="/"
            className="font-extrabold tracking-tight"
            aria-label="MFA — Frontend Developer"
          >
            <motion.span
              ref={logoRef}
              whileHover={{ scale: 1.06 }}
              className="group relative inline-flex items-center"
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
                MFA<span className="opacity-70">.</span>
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
                Frontend Developer
              </span>
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-6 md:flex">
            {navLinks.map((link, index) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  ref={(el: HTMLAnchorElement | null) => {
                    menuItemsRef.current[index] = el;
                  }}
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

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <motion.button
              ref={mobileButtonRef}
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.9, rotate: 5 }}
              whileHover={{ scale: 1.1, rotate: -3 }}
              onClick={toggleMenu}
              className="
                inline-flex items-center justify-center p-2 rounded-full
                border border-[color:var(--border)]
                bg-[color:var(--card)] text-[color:var(--foreground)]
                shadow-sm
              "
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="
                absolute left-0 top-16 h-[calc(100vh-4rem)] w-full md:hidden
                backdrop-blur-lg
                bg-[color:var(--background)]/90
                text-[color:var(--foreground)]
                border-t border-[color:var(--border)]
              "
            >
              <div className="flex h-full flex-col items-center justify-start gap-6 px-6 py-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={toggleMenu}
                    className="
                      mobile-menu-item w-full max-w-sm text-center
                      rounded-lg px-6 py-4 text-2xl font-semibold
                      hover:bg-[color:var(--card)]/70 transition-all duration-200
                    "
                  >
                    <motion.span
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
