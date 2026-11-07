"use client";

import Image from "next/image";
import { Smartphone } from "lucide-react";
import { motion } from "framer-motion";

import AboutAnimations from "./AboutAnimations";
import { aboutConfig } from "./about.config";
import { useState } from "react";

const About = () => {
  const { hero, paragraphs, section, appPage } = aboutConfig;
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section
      id={section.id}
      className="bg-[color:var(--background)] px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* About Heading - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 sm:mb-16"
        >
          <h1
            className="
            cursor-pointer
    group
    font-semibold
    leading-[0.9]
    text-[clamp(5rem,11vw,9rem)]
    tracking-[-0.099em]
    text-[color:var(--foreground)]
  "
          >
            <span className="transition-colors duration-900 ease-in-out group-hover:text-green-600">
              About
            </span>
            Me
            <span className="text-green-600">.</span>
          </h1>
        </motion.div>

        {/* Story + Profile Image */}
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-16 lg:gap-20">
          {/* Story Content */}
          <div className="order-2 md:order-1">
            <AboutAnimations index={0}>
              <div className="mb-8">
                <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[color:var(--muted-foreground)]">
                  A little introduction
                </p>

                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[color:var(--foreground)] sm:text-4xl">
                  Hi, I&apos;m {hero.name}.
                </h2>

                <p className="mt-3 text-lg text-[color:var(--muted-foreground)] sm:text-xl">
                  {hero.title}
                </p>
              </div>
            </AboutAnimations>

            <div
              className={`
    space-y-6 text-lg leading-[1.85]
    text-[color:var(--muted-foreground)]
    transition-[max-height] duration-500 ease-in-out
    sm:text-xl
    overflow-hidden
    ${isExpanded ? "max-h-[2000px]" : "max-h-40"}
    md:max-h-none
  `}
            >
              {paragraphs.map((text, index) => (
                <AboutAnimations key={index} index={index + 1}>
                  <p>{text}</p>
                </AboutAnimations>
              ))}
            </div>

            {/* Read More / Less - Mobile Only */}
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
              className="
    mt-4 inline-flex items-center
    text-sm font-semibold
    text-green-700 hover:text-green-800
    transition-colors duration-300
    dark:text-green-500 dark:hover:text-green-400
    md:hidden
  "
            >
              {isExpanded ? "Read less ↑" : "Read more ↓"}
            </button>

            {/* First App Link */}
            <AboutAnimations index={paragraphs.length + 1}>
              <a
                href={appPage}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 bg-green-700 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700"
              >
                <Smartphone size={17} />
                Explore My First App
              </a>
            </AboutAnimations>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
  relative order-1 ml-auto
  aspect-square w-full max-w-[220px]
  overflow-hidden rounded-xl
  bg-[color:var(--muted)]

  sm:max-w-[280px] sm:aspect-[4/5]
  md:sticky md:top-28 md:order-2
  md:mt-0 md:ml-0
  md:max-w-none md:aspect-[4/5]
"
          >
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, 55vw"
              className="
      object-cover grayscale
      transition-all duration-700 ease-in-out
      hover:grayscale-0
    "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
