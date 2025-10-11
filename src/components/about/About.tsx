"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
// import Image from "next/image";
import { useRef } from "react";
import SkillsSection from "../skills/Skills";

const About = () => {
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });

  // Define transform values for paragraphs at the top level
  const opacities = [
    useTransform(scrollYProgress, [0, 0.2], [0, 1]),
    useTransform(scrollYProgress, [0, 0.4], [0, 1]),
    useTransform(scrollYProgress, [0, 0.6], [0, 1]),
    useTransform(scrollYProgress, [0, 0.8], [0, 1]),
    useTransform(scrollYProgress, [0, 1.0], [0, 1]),
  ];

  const yTransforms = [
    useTransform(scrollYProgress, [0, 0.2], [30, 0]),
    useTransform(scrollYProgress, [0, 0.4], [30, 0]),
    useTransform(scrollYProgress, [0, 0.6], [30, 0]),
    useTransform(scrollYProgress, [0, 0.8], [30, 0]),
    useTransform(scrollYProgress, [0, 1.0], [30, 0]),
  ];

  const paragraphs = [
    {
      text: (
        <>
          I’m a passionate Full-Stack Web Developer who loves transforming ideas
          into seamless, scalable, and modern web experiences. I specialize in
          React.js, Next.js (App Router – Client/Server Components), Tailwind
          CSS, and Framer Motion, with a strong foundation in JavaScript, HTML5,
          CSS3, and Node.js.
        </>
      ),
    },
    {
      text: (
        <>
          Through my training in Full-Stack Web Development with React & UI at{" "}
          <a
            href="https://www.nareshit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-whiite  hover:text-indigo-300 transition-colors"
          >
            Naresh IT, Hyderabad
          </a>
          , I’ve built real-world, user-friendly web apps—from crafting
          beautiful, responsive UIs with Tailwind, Material-UI, and Bootstrap,
          to integrating powerful backend features with MongoDB, Firebase, and
          third-party APIs.
        </>
      ),
    },
    {
      text: (
        <>
          I&apos;m highly proficient in Next.js, embracing its hybrid rendering
          model using Client and Server Components to optimize performance, SEO,
          and maintainability. I also add interactive and visually engaging
          experiences using Framer Motion, while keeping performance in mind.
        </>
      ),
    },
    {
      text: (
        <>
          My approach blends tech and psychology—with a background in behavioral
          science, I understand how users think and feel. That insight drives me
          to build interfaces that are not just functional but meaningful.
        </>
      ),
    },
    {
      text: (
        <>
          <span className="font-semibold text-white">
            🚀 Open to Opportunities
          </span>
          <br />
          I’m actively looking for Web Developer roles where I can contribute
          clean code, innovative thinking, and design-focused development. If
          you&apos;re building something impactful and need a developer who
          cares about performance and people — let&apos;s connect!
        </>
      ),
    },
  ];

  return (
    <section
      ref={aboutRef}
      className="py-  px-4 sm:px-6 lg:px-8 bg-gradient-to-bl from-gray-900  via-black to-blue-400 backdrop-blur-lg"
    >
      <div className="max-w-4xl mx-auto py-50">
        {/* Name and Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-white text-left tracking-tight"
        >
          Hi, I’m Md Faizan Ahmad
        </motion.h1>
        <SkillsSection />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-1xl text-gray-300 text-left mt-2"
        >
          Full-Stack Web Developer | React & Next.js Specialist | UI/UX-Focused
          Engineer
        </motion.p>

        {/* Social Links */}

        {/* About Me Section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-8 text-left tracking-tight"
        >
          About Me
        </motion.h2>
        <div className="space-y-6 text-lg text-white leading-relaxed">
          {paragraphs.map((para, index) => (
            <motion.p
              key={index}
              style={{ opacity: opacities[index], y: yTransforms[index] }}
              className="opacity-0"
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {para.text}
            </motion.p>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-12 text-left"
        >
          <Link
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
          >
            Let’s Connect
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
