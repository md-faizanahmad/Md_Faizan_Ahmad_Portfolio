"use client";

import { GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div
      className="
        flex min-h-screen items-center justify-center p-4 py-40
        bg-[color:var(--background)] text-[color:var(--foreground)]
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          w-full max-w-xl rounded-2xl border border-[color:var(--border)]
          bg-[color:var(--card)]/90 backdrop-blur-lg p-8 shadow-2xl text-center
        "
      >
        <h1 className="mb-4 text-4xl font-bold">Get in Touch</h1>

        <p className="mb-8 text-[color:var(--muted-foreground)]">
          I&apos;m actively looking for opportunities as a Frontend Developer &
          More. Connect with me via email or my professional profiles.
        </p>

        <a
          href="mailto:md.faizan.ahmad.web@gmail.com"
          className="
            mb-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold
            text-white transition-colors hover:bg-indigo-500
          "
        >
          Email Me
        </a>

        <div className="flex justify-center space-x-6">
          <motion.a
            href="https://github.com/md-faizanahmad"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-[color:var(--foreground)] hover:opacity-80"
            aria-label="GitHub"
          >
            <GitHub fontSize="large" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/mdfaizandahmad/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-[color:var(--foreground)] hover:text-[#0A66C2]"
            aria-label="LinkedIn"
          >
            <LinkedIn fontSize="large" />
          </motion.a>

          <motion.a
            href="https://wa.me/+917563092029"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-[color:var(--foreground)] hover:text-[#25D366]"
            aria-label="WhatsApp"
          >
            <WhatsApp fontSize="large" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
