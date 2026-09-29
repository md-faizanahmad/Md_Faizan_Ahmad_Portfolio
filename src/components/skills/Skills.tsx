"use client";

import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";

type Skill =
  | { name: string; icon: string; type?: "devicon" }
  | { name: string; labelOnly: true };

const initialSkills: Skill[] = [
  { name: "React", icon: "devicon-react-original", type: "devicon" },
  { name: "Next", icon: "devicon-nextjs-original-wordmark", type: "devicon" },
  { name: "JavaScript", icon: "devicon-javascript-plain", type: "devicon" },
  { name: "TypeScript", icon: "devicon-typescript-plain", type: "devicon" },
  { name: "HTML5", icon: "devicon-html5-plain", type: "devicon" },
  { name: "CSS3", icon: "devicon-css3-plain", type: "devicon" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", type: "devicon" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain", type: "devicon" },
  {
    name: "FramerMotion",
    icon: "devicon-framermotion-original",
    type: "devicon",
  },

  { name: "Node.js", icon: "devicon-nodejs-plain", type: "devicon" },
  { name: "MongoDB", icon: "devicon-mongodb-plain", type: "devicon" },

  { name: "Git", icon: "devicon-git-plain", type: "devicon" },
  { name: "GitHub", icon: "devicon-github-original", type: "devicon" },
  { name: "Postman", icon: "devicon-postman-plain", type: "devicon" },
  { name: "Chrome DevTools", icon: "devicon-chrome-plain", type: "devicon" },
  { name: "Axios", labelOnly: true },
  { name: "REST API", icon: "devicon-fastapi-plain", type: "devicon" },

  { name: "Firebase", icon: "devicon-firebase-plain", type: "devicon" },
  { name: "Vercel", icon: "devicon-vercel-original", type: "devicon" },
  { name: "VS Code", icon: "devicon-vscode-plain", type: "devicon" },
];

export default function TechnicalSkills() {
  const [skills, setSkills] = useState(initialSkills);
  const [isDraggable, setIsDraggable] = useState(false);

  // Enable drag only for tablet and above
  useEffect(() => {
    const check = () => setIsDraggable(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="relative bg-[color:var(--background)] px-4 py-16 text-[color:var(--foreground)] sm:px-6 lg:px-8">
      {/* subtle ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% -10%, color-mix(in oklab, var(--foreground), transparent 92%) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10  text-3xl font-bold sm:text-3xl">
          Technical Skills
        </h2>

        <Reorder.Group
          axis="y"
          values={skills}
          onReorder={setSkills}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {skills.map((s) => (
            <Reorder.Item
              key={s.name}
              value={s}
              drag={isDraggable}
              whileHover={{ scale: 1.04, y: -3 }}
              whileDrag={{ scale: 1.08, zIndex: 20 }}
              className="
                group relative cursor-grab active:cursor-grabbing
                overflow-hidden  p-4
                 hover:border-[color:var(--border)]
                bg-[color:var(--card)]
                 hover:shadow-md
                transition-all duration-200
              "
            >
              {/* hover overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                  background:
                    "linear-gradient(120deg, transparent 40%, color-mix(in oklab, var(--foreground), transparent 92%) 100%)",
                }}
              />

              <div className="flex flex-col items-center gap-2 text-center">
                {"icon" in s ? (
                  <span className="relative block h-10 w-10">
                    {/* mono */}
                    <i
                      className={`${s.icon} absolute inset-0 text-[length:2.4rem] leading-none text-[color:var(--foreground)] opacity-80 group-hover:opacity-0 transition duration-200`}
                    />

                    {/* colored */}
                    <i
                      className={`${s.icon} colored absolute inset-0 text-[length:2.4rem] leading-none opacity-0 group-hover:opacity-100 transition duration-200`}
                    />
                  </span>
                ) : (
                  <span
                    className="
                      inline-flex h-9 items-center justify-center rounded-md px-3
                      text-xs font-medium
                      bg-[color:var(--secondary)]
                      text-[color:var(--secondary-foreground)]
                      border border-[color:var(--border)]
                    "
                  >
                    {s.name}
                  </span>
                )}

                <span className="text-xs text-[color:var(--muted-foreground)] group-hover:text-[color:var(--foreground)] transition">
                  {s.name}
                </span>
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </section>
  );
}
