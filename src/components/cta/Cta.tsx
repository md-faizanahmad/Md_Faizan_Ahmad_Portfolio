"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const CTA = () => {
  const ctaRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.98, 1]);

  return (
    <section
      ref={ctaRef}
      className="
        relative py-20 px-4 sm:px-6 lg:px-8
        bg-[color:var(--background)] text-[color:var(--foreground)]
      "
    >
      {/* soft radial glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--foreground), transparent 90%) 0%, transparent 70%)",
        }}
      />
      <motion.div
        style={{ opacity, scale }}
        className="mx-auto max-w-3xl text-center"
      >
        {/* <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Interested in Collaborating?
        </h2> */}
        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
          Let’s build something that actually works in production
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-[color:var(--muted-foreground)]">
          I work with React, Next.js, and TypeScript to build fast, scalable,
          and maintainable web applications. If you&apos;re looking for someone
          who focuses on performance and clean architecture, let&apos;s connect.
        </p>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="mailto:md.faizan.ahmad.web@gmail.com"
            className="
              inline-block rounded-full px-8 py-3 font-semibold shadow-md transition-all
              bg-indigo-600 text-white hover:bg-indigo-500
            "
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;
