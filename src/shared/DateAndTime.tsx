"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const DateAndTime: React.FC = () => {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const t = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      const d = now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      setTime(t);
      setDate(d);
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="
        relative mx-auto flex w-fit flex-col items-center justify-center
        rounded-2xl border border-[color:var(--border)]
        bg-[color:var(--card)]/60 backdrop-blur-lg px-6 py-4
        shadow-[0_0_20px_color-mix(in_oklab,var(--ring),transparent_80%)]
        text-center select-none
      "
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* digital clock time */}
      <motion.div
        key={time} // smooth refresh animation
        className="
          text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest
          text-[color:var(--foreground)]
        "
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {time}
      </motion.div>

      {/* date line */}
      <motion.div
        key={date}
        className="
          mt-2 text-sm sm:text-base md:text-lg
          text-[color:var(--muted-foreground)]
        "
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {date}
      </motion.div>

      {/* glowing pulse ring */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-2xl border border-[color:var(--ring)]/20"
        animate={{
          boxShadow: [
            "0 0 10px color-mix(in oklab, var(--ring), transparent 70%)",
            "0 0 25px color-mix(in oklab, var(--ring), transparent 50%)",
            "0 0 10px color-mix(in oklab, var(--ring), transparent 70%)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default DateAndTime;
