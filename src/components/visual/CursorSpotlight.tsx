"use client";

import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

export default function CursorSpotlight() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 30 });
  const sy = useSpring(my, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  const bg = useTransform(
    [sx, sy],
    ([x, y]) =>
      `radial-gradient(200px 200px at ${x}px ${y}px,
      color-mix(in oklab, var(--ring), transparent 75%) 0%,
      transparent 60%)`
  );

  return (
    <motion.div
      aria-hidden
      style={{ backgroundImage: bg }}
      className="pointer-events-none fixed inset-0 z-10"
    />
  );
}
