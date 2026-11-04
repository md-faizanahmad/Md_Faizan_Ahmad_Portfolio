import Image from "next/image";
import {
  BookOpen,
  Bookmark,
  ShieldCheck,
  Lightbulb,
  Code2,
  Database,
  Layers,
  Target,
} from "lucide-react";

import DigitalDost from "@/digital-dost/images/dd.png";

const techStack = [
  { name: "React Native", description: "Cross-platform mobile development" },
  { name: "TypeScript", description: "Type-safe application development" },
  { name: "React Navigation", description: "Screen and tab navigation" },
  { name: "SQLite", description: "Local data storage" },
  { name: "Lucide Icons", description: "Consistent interface icons" },
];

const features = [
  {
    icon: BookOpen,
    title: "Learning Guides",
    description: "Step-by-step tutorials for learning digital skills.",
  },
  {
    icon: Layers,
    title: "Learning Categories",
    description:
      "Organized content covering AI, social media, digital skills and online safety.",
  },
  {
    icon: Bookmark,
    title: "Saved Guides",
    description: "Save useful tutorials and access them whenever needed.",
  },
  {
    icon: ShieldCheck,
    title: "Offline-first Content",
    description:
      "Access bundled learning resources without depending on a backend.",
  },
];

const highlights = [
  "Built with React Native CLI, without Expo.",
  "Designed with a reusable component architecture.",
  "Structured learning content with TypeScript.",
  "Local storage for saved guides using SQLite.",
  "Bilingual learning content in English and Hinglish.",
  "No custom backend or cloud database.",
];

export default function DigitalDostAbout() {
  return (
    <main className="min-h-screen bg-white px-5 py-25 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <div className="mx-auto max-w-5xl">
        {/* Project Header */}
        <header className="flex flex-col gap-6 border-b border-gray-200 pb-10 dark:border-gray-800 sm:flex-row sm:items-center">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 p-2 dark:border-gray-800 dark:bg-gray-900">
            <Image
              src={DigitalDost}
              alt="Digital Dost logo"
              width={96}
              height={96}
              sizes="96px"
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-green-700 dark:text-green-400">
              Featured Project · Mobile Application
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Digital Dost
            </h1>

            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Learn. Create. Grow.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["React Native", "TypeScript", "Android"].map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-gray-200 px-3 py-1 text-xs font-medium dark:border-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* About */}
        <section className="py-10">
          <h2 className="text-xl font-bold">About the Project</h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-400">
            Digital Dost is an educational mobile application designed to make
            learning digital skills simple and accessible. It provides
            structured, step-by-step guides that help users understand and use
            digital platforms, tools and technologies.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-400">
            From setting up social media accounts to exploring AI tools and
            improving digital knowledge, the goal is to make technology easier
            to understand for everyone.
          </p>
        </section>

        {/* Why I Built It */}
        <section className="border-y border-gray-200 py-10 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <Lightbulb
              className="text-green-700 dark:text-green-400"
              size={22}
            />
            <h2 className="text-xl font-bold">Why I Built Digital Dost</h2>
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-400">
            Digital tools are becoming part of everyday life, but not everyone
            knows how to use them effectively. I wanted to build something
            practical that could help people learn these skills through simple
            and structured tutorials.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-400">
            Instead of building another ordinary application, I chose to create
            a learning platform with a real purpose: making digital knowledge
            easier to access and understand.
          </p>
        </section>

        {/* Why First Project */}
        <section className="py-10">
          <div className="flex items-center gap-3">
            <Target className="text-green-700 dark:text-green-400" size={22} />
            <h2 className="text-xl font-bold">
              Why I Chose This as My First Mobile Project
            </h2>
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-400">
            I wanted my first dedicated mobile application to be more than a
            practice project. Digital Dost gave me an opportunity to apply my
            frontend development knowledge to a real product while learning
            React Native, mobile navigation, local data management and
            application architecture.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-400">
            It became a practical way to move beyond building interfaces and
            understand how a complete mobile application works.
          </p>
        </section>

        {/* Features */}
        <section className="border-y border-gray-200 py-10 dark:border-gray-800">
          <h2 className="text-xl font-bold">Key Features</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-xl p-5 dark:border-gray-800">
                <Icon
                  size={22}
                  className="text-green-700 dark:text-green-400"
                />
                <h3 className="mt-3 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-10">
          <div className="flex items-center gap-3">
            <Code2 className="text-green-700 dark:text-green-400" size={22} />
            <h2 className="text-xl font-bold">Technology Stack</h2>
          </div>

          <div className="mt-6 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col justify-between gap-1 py-4 sm:flex-row sm:items-center"
              >
                <h3 className="text-sm font-semibold">{tech.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Development Highlights */}
        <section className="border-y border-gray-200 py-10 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <Database
              className="text-green-700 dark:text-green-400"
              size={22}
            />
            <h2 className="text-xl font-bold">Development Highlights</h2>
          </div>

          <ul className="mt-5 space-y-3">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm leading-6 text-gray-600 dark:text-gray-400"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        {/* Closing */}
        <section className="py-10">
          <h2 className="text-xl font-bold">Built with a Purpose</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-400">
            Digital Dost represents my journey into mobile application
            development, combining practical problem-solving, clean interfaces
            and accessible learning into one product.
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-6 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
          Designed and developed by Md Faizan Ahmad.
        </footer>
      </div>
    </main>
  );
}
