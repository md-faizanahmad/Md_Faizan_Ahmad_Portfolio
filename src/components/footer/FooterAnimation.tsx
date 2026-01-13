"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FooterAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div ref={ref} style={{ opacity }}>
      {children}
    </motion.div>
  );
}
