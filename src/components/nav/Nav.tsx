"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import DateAndTime from "@/shared/DateAndTime";
import logo from "@/assets/logo (2).png";
import Image from "next/image";
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

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    // GSAP animation for navbar entrance
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // GSAP animation for logo with bounce effect
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

    // GSAP animation for desktop menu items
    menuItemsRef.current.forEach((item, index) => {
      if (item) {
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
      }
    });

    // GSAP animation for mobile menu button
    gsap.fromTo(
      mobileButtonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, delay: 0.4, ease: "back.out(1.7)" }
    );
  }, []);

  useEffect(() => {
    // Enhanced GSAP animation for mobile menu items when opened
    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { scaleY: 0, opacity: 0 },
        {
          scaleY: 1,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        ".mobile-menu-item",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    }
  }, [isOpen]);

  return (
    <motion.nav
      ref={navRef}
      className="fixed top-0 left-0 w-full  backdrop-blur-xl backdrop-filter border-b border-white/20 z-50 shadow-sm shadow-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className=" font-extrabold text-white tracking-tight">
            <motion.span
              ref={logoRef}
              className="relative"
              whileHover={{
                scale: 1.1,
                textShadow: "0 0 12px rgba(255,255,255,0.9)",
                transition: { duration: 0.3 },
              }}
            >
              <Image src={logo} alt="" height={70} width={70} />
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center cursor-pointer space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-gray-100 hover:text-white transition-colors duration-300 relative group ${
                  pathname === link.href ? "text-white font-bold" : ""
                }`}
                ref={(el: HTMLAnchorElement | null) => {
                  menuItemsRef.current[index] = el; // Assign without returning
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    color: "#ffffff",
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-white/80 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex flex-row-reverse">
            <motion.button
              ref={mobileButtonRef}
              whileTap={{ scale: 0.9, rotate: 5 }}
              whileHover={{ scale: 1.2, rotate: -5 }}
              onClick={toggleMenu}
              className="text-white focus:outline-none p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X size={28} />
              ) : (
                <Menu
                  size={28}
                  className="transform transition-transform duration-300"
                />
              )}
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
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden bg-gradient-to-bl from-blue-900  to-black backdrop-blur-lg  py-60 z-50   absolute top-16 left-0 w-full h-screen"
            >
              <div className="flex flex-col items-center justify-center h-7/12 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={toggleMenu}
                    className="mobile-menu-item text-3xl font-semibold text-gray-100 hover:text-white hover:bg-white/20 rounded-lg px-6 py-10 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.15,
                        textShadow: "0 0 15px rgba(255,255,255,0.9)",
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.95, rotate: 2 }}
                    >
                      {link.name}
                    </motion.div>
                  </Link>
                ))}
                <DateAndTime />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
