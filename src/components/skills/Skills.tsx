"use client";

import { motion } from "framer-motion";

type Skill =
  | { name: string; icon: string; type?: "devicon" }
  | { name: string; labelOnly: true };

const skills: Skill[] = [
  // Core
  { name: "React", icon: "devicon-react-original", type: "devicon" },
  { name: "JavaScript", icon: "devicon-javascript-plain", type: "devicon" },
  { name: "HTML5", icon: "devicon-html5-plain", type: "devicon" },
  { name: "CSS3", icon: "devicon-css3-plain", type: "devicon" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", type: "devicon" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain", type: "devicon" },
  // { name: "React Router", labelOnly: true },
  // { name: "React Hooks", labelOnly: true },

  // Backend/DB
  { name: "Node.js", icon: "devicon-nodejs-plain", type: "devicon" },
  { name: "MongoDB", icon: "devicon-mongodb-plain", type: "devicon" },

  // Tools
  { name: "Git", icon: "devicon-git-plain", type: "devicon" },
  { name: "GitHub", icon: "devicon-github-original", type: "devicon" },
  { name: "Postman", icon: "devicon-postman-plain", type: "devicon" },
  { name: "Chrome DevTools", icon: "devicon-chrome-plain", type: "devicon" },
  { name: "Axios", labelOnly: true },
  { name: "REST API", icon: "devicon-fastapi-plain", type: "devicon" },

  // Deploy/IDE
  { name: "Firebase", icon: "devicon-firebase-plain", type: "devicon" },
  { name: "Vercel", icon: "devicon-vercel-original", type: "devicon" },
  { name: "VS Code", icon: "devicon-vscode-plain", type: "devicon" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
};
const item = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.22 } },
};

export default function TechnicalSkills() {
  return (
    <section className="relative bg-[color:var(--background)] px-4 py-16 text-[color:var(--foreground)] sm:px-6 lg:px-8">
      {/* faint ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% -10%, color-mix(in oklab, var(--foreground), transparent 92%) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mb-10 text-center text-3xl font-bold sm:text-4xl"
        >
          Technical Skills
        </motion.h2>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {skills.map((s) => (
            <motion.li
              key={s.name}
              variants={item}
              whileHover={{ scale: 1.05, rotate: 0.25 }}
              whileTap={{ scale: 0.97 }}
              className="
                group relative cursor-pointer overflow-hidden rounded-xl p-4
                border border-[color:var(--border)]
                bg-[color:var(--card)]
                shadow-sm transition
              "
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                style={{
                  boxShadow:
                    "0 0 0 1px color-mix(in oklab, var(--ring), transparent 55%), 0 10px 30px color-mix(in oklab, var(--ring), transparent 75%) inset",
                }}
              />

              <div className="flex flex-col items-center gap-2 text-center">
                {"icon" in s ? (
                  <span className="relative block h-10 w-10">
                    {/* mono layer */}
                    <i
                      className={`${s.icon} absolute inset-0 text-[length:2.5rem] leading-none text-[color:var(--foreground)] opacity-90 group-hover:opacity-0 transition`}
                      aria-hidden
                    />
                    {/* brand-colored hover layer */}
                    <i
                      className={`${s.icon} colored absolute inset-0 text-[length:2.5rem] leading-none opacity-0 group-hover:opacity-100 transition`}
                      aria-hidden
                    />
                  </span>
                ) : (
                  // label-only professional badges (Axios, Router, Hooks)
                  <span
                    className="
                      inline-flex h-10 min-w-10 items-center justify-center rounded-md
                      border border-[color:var(--border)]
                      bg-[color:var(--secondary)] px-3 text-sm font-medium
                      text-[color:var(--secondary-foreground)]
                    "
                  >
                    {s.name}
                  </span>
                )}

                <span className="text-sm text-[color:var(--muted-foreground)] group-hover:text-[color:var(--foreground)] transition">
                  {s.name}
                </span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
