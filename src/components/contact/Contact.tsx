"use client";

import { GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";
import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/md-faizanahmad",
    icon: GitHub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mdfaizandahmad",
    icon: LinkedIn,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/+917563092029",
    icon: WhatsApp,
  },
];

export default function Contact() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl"
      >
        <div className="border-y border-[color:var(--border)] py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium text-[color:var(--muted-foreground)]">
              Have a project or opportunity?
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Let&apos;s build something useful.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--muted-foreground)] sm:text-lg">
              Whether it&apos;s a frontend role, a web project, or just a
              conversation about development, feel free to reach out.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="mailto:md.faizan.ahmad.web@gmail.com"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="
                  inline-flex items-center rounded-full
                  bg-[color:var(--foreground)]
                  px-6 py-3 font-semibold
                  text-[color:var(--background)]
                  transition-opacity hover:opacity-80
                "
              >
                Start a Conversation →
              </motion.a>

              <span className="text-sm text-[color:var(--muted-foreground)]">
                md.faizan.ahmad.web@gmail.com
              </span>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3 border-t border-[color:var(--border)] pt-8">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="
                    inline-flex items-center gap-2
                    rounded-full border
                    border-[color:var(--border)]
                    px-4 py-2.5
                    text-sm font-medium
                    transition-colors
                    hover:bg-[color:var(--secondary)]
                  "
                  aria-label={link.label}
                >
                  <Icon fontSize="small" />
                  {link.label}
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
