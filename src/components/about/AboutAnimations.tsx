"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AboutAnimationsProps {
  children: React.ReactNode;
  index: number;
}

export default function AboutAnimations({
  children,
  index,
}: AboutAnimationsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.75,
        delay: shouldReduceMotion ? 0 : Math.min(index * 0.12, 0.36),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
