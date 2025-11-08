"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <footer
      ref={footerRef}
      className="
        relative border-t border-[color:var(--border)]
        bg-[color:var(--background)] text-[color:var(--foreground)]
        px-4 py-12 sm:px-6 lg:px-8
      "
    >
      <motion.div
        style={{ opacity }}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {/* About */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">About Me</h3>
          <p className="text-sm text-[color:var(--muted-foreground)]">
            Frontend Developer actively seeking opportunities to create
            responsive, high-performance web applications and enhance user
            experiences using modern technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/projects"
                className="transition-colors hover:text-[color:var(--foreground)]/80"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="transition-colors hover:text-[color:var(--foreground)]/80"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-[color:var(--foreground)]/80"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="https://github.com/iamfaizandev"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[color:var(--foreground)]/80"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/mdfaizandahmad/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[color:var(--foreground)]/80"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/+917563092029"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[color:var(--foreground)]/80"
              >
                WhatsApp
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact</h3>
          <p className="text-sm">
            Email:{" "}
            <Link
              href="mailto:md.faizan.ahmad.web@gmail.com"
              className="underline underline-offset-4 hover:opacity-80"
            >
              md.faizan.ahmad.web@gmail.com
            </Link>
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-[color:var(--muted-foreground)]">
            Based in: India
            <Image
              src="/indiaflag.png"
              alt="India Flag"
              height={20}
              width={30}
            />
          </p>
        </div>
      </motion.div>

      <div className="mt-8 text-center text-sm text-[color:var(--muted-foreground)]">
        &copy; {new Date().getFullYear()} Md Faizan Ahmad. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
