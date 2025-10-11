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
      className="relative bg-gradient-to-bl from-gray-900 to-black backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10"
    >
      <motion.div
        style={{ opacity }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-200"
      >
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About Me</h3>
          <p className="text-sm">
            Full-Stack Web Developer actively seeking opportunities to create
            responsive, high-performance web applications and enhance user
            experiences using modern technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/projects"
                className="hover:text-indigo-400 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-indigo-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-indigo-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="https://github.com/iamfaizandev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/mdfaizandahmad/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/ahmad_faizan.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm">
            Email:{" "}
            <Link
              href="mailto:md.faizan.ahmad.web@gmail.com"
              className="hover:text-indigo-400 transition-colors"
            >
              md.faizan.ahmad.web@gmail.com
            </Link>
          </p>
          <p className="text-sm mt-2 flex items-center gap-2">
            Based in: India{" "}
            <Image
              src="/indiaflag.png"
              alt="India Flag"
              height={20}
              width={30}
            />
          </p>
        </div>
      </motion.div>

      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Md Faizan Ahmad. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
