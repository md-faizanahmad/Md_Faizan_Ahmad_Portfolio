"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutAnimations({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Unique transforms based on index for the staggered effect
  const opacity = useTransform(scrollYProgress, [0, 0.2 + index * 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2 + index * 0.2], [20, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }}>
      {children}
    </motion.div>
  );
}
