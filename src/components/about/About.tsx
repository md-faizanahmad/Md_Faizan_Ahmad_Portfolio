"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import TechnicalSkills from "../skills/Skills";

const About = () => {
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });

  const opacities = [
    useTransform(scrollYProgress, [0, 0.2], [0, 1]),
    useTransform(scrollYProgress, [0, 0.4], [0, 1]),
    useTransform(scrollYProgress, [0, 0.6], [0, 1]),
  ];

  const yTransforms = [
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    useTransform(scrollYProgress, [0, 0.4], [20, 0]),
    useTransform(scrollYProgress, [0, 0.6], [20, 0]),
  ];

  const paragraphs = [
    {
      text: (
        <>
          I’m a Frontend Developer passionate about building responsive, modern
          web applications. I specialize in React.js, Bootstrap, HTML, CSS,
          Tailwind CSS, and Node.js, API.
        </>
      ),
    },
    {
      text: (
        <>
          Through training at{" "}
          <a
            href="https://www.nareshit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-80"
          >
            Naresh IT, Hyderabad
          </a>
          , I’ve developed real-world apps with responsive UIs, RESTful APIs,
          MongoDB/Firebase databases, and dynamic features.
        </>
      ),
    },
    {
      text: (
        <>
          I combine technical skills with a user-focused mindset, ensuring
          interfaces are functional, engaging, and accessible. I’m actively
          seeking opportunities to contribute clean code, innovative thinking,
          and design-focused development.
        </>
      ),
    },
  ];

  return (
    <section
      ref={aboutRef}
      className="
        px-4 py-20 sm:px-6 lg:px-8
        bg-[color:var(--background)] text-[color:var(--foreground)]
      "
    >
      <div className="mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 mb-4 text-4xl font-bold sm:text-5xl"
        >
          Hi, I’m Md Faizan Ahmad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2 text-xl text-[color:var(--muted-foreground)]"
        >
          Frontend Developer | React.js, JavaScript, Tailwind | Open to
          Hyderabad | Immediate Joiner
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 mb-8 text-3xl font-bold sm:text-4xl"
        >
          About Me
        </motion.h2>

        <div className="space-y-6 text-lg leading-relaxed">
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
        <TechnicalSkills />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 text-left"
        >
          <Link
            href="mailto:md.faizan.ahmad.web@gmail.com"
            className="
              inline-block rounded-full px-8 py-3 font-semibold shadow-md transition-all
              bg-indigo-600 text-white hover:bg-indigo-500
            "
          >
            Let’s Connect
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
