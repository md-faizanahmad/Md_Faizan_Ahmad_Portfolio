"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
};

export default function Reveal({ children, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.2, // critical for mobile trigger
        margin: "-60px", // prevents early trigger on small screens
      }}
    >
      {children}
    </motion.div>
  );
}
