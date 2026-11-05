"use client";

import { heroConfig } from "@/components/hero/hero.config";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const GreetingRoll = () => {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroConfig.greetings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div
      className="mb-3 flex h-9 items-center overflow-hidden text-lg font-medium tracking-tight text-neutral-500 dark:text-neutral-400 sm:h-10 sm:text-xl"
      aria-label="Hello, As-salamu Alaikum"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={heroConfig.greetings[index]}
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { y: "-100%", opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="block whitespace-nowrap"
        >
          {heroConfig.greetings[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default GreetingRoll;
