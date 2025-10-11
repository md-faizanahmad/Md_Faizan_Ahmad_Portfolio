"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

// CTA Component
const CTA = () => {
  const ctaRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section ref={ctaRef} className="relative py-20 px-4 sm:px-6 lg:px-8 ">
      <motion.div
        style={{ opacity, scale }}
        className="max-w-4xl mx-auto text-center  "
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
          Let’s collaborate to create cutting-edge, scalable web solutions that
          stand out. From concept to deployment, I’ve got you covered.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default CTA;
