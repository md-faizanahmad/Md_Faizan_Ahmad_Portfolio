"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const projects = [
  "/projects/myazstore-1.jpg",
  "/projects/lumanstudio-1.jpg",
  "/projects/dashboard-1.jpg",
  "/projects/ecommerce-1.jpg",
  "/projects/portfolio-1.jpg",
];

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
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-[color:var(--background)] text-[color:var(--foreground)]"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 -z-20 overflow-hidden opacity-15">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-6"
        >
          {[...projects, ...projects].map((item, index) => (
            <div
              key={index}
              className="relative h-[320px] w-[520px] shrink-0 overflow-hidden rounded-2xl"
            >
              <Image
                src={item}
                alt="Project Preview"
                fill
                className="object-cover blur-sm"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-[color:var(--background)]/80 backdrop-blur-[2px]" />

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
          Let’s build reliable web solutions
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-[color:var(--muted-foreground)]">
          I help businesses and teams build responsive, modern web applications
          with React, Next.js, and TypeScript. Focused on clean code,
          performance, and long-term maintainability.
        </p>

        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="mailto:md.faizan.ahmad.web@gmail.com"
            className="inline-block rounded-full bg-indigo-600 px-8 py-3 font-semibold text-white shadow-md transition-all hover:bg-indigo-500"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;
