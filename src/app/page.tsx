import CTA from "@/components/cta/Cta";
import HeroSection from "@/components/hero/HeroClient";
import Projects from "@/components/projects/Projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Import an icon for the button
import type { Metadata } from "next";
import About from "@/components/about/About";
import HomeTechStack from "@/components/skills/HomeTechStack";
import Highlights from "@/components/Ehighlights/Highlights";

export const metadata: Metadata = {
  title: "Md Faizan Ahmad – Frontend & Full Stack Web Developer",
  description:
    "Portfolio of Md Faizan Ahmad, a Frontend & Full Stack Web Developer specializing in React, Next.js, Tailwind CSS, and modern web applications. View real projects, UI work, and production-ready apps.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Full Stack Web Developer",
    "JavaScript Developer",
    "Web Developer Portfolio",
    "Faizan Ahmad",
  ],
  metadataBase: new URL("https://mdfaizanahmad.in"), // CHANGE if different
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Md Faizan Ahmad – Frontend & Full Stack Web Developer",
    description:
      "Real-world React & Next.js projects, clean UI, scalable code. Explore my web development portfolio.",
    url: "https://mdfaizanahmad.in",
    siteName: "Md Faizan Ahmad Portfolio",
    images: [
      {
        url: "/og-image.png", // ADD THIS IMAGE
        width: 1200,
        height: 630,
        alt: "Md Faizan Ahmad – Web Developer Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Faizan Ahmad – Frontend & Full Stack Web Developer",
    description:
      "Explore React, Next.js, and full-stack web projects built for real use cases.",
    images: ["/og-image.png"],
  },
};
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://mdfaizanahmad.in/#person",

  name: "Md Faizan Ahmad",
  url: "https://mdfaizanahmad.in",
  image: "https://mdfaizanahmad.in/profile-pic.jpeg",

  jobTitle: "Frontend & Full Stack Web Developer",

  description:
    "Frontend and Full Stack Web Developer specializing in React, Next.js, TypeScript, and Node.js. Builds scalable, production-ready web applications with focus on performance, SEO, and clean architecture.",

  sameAs: [
    "https://github.com/md-faizanahmad",
    "https://www.linkedin.com/in/mdfaizandahmad",
  ],

  alumniOf: {
    "@type": "Organization",
    name: "Naresh IT, Hyderabad",
  },

  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },

  knowsAbout: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST API Development",
    "Frontend Architecture",
    "Full Stack Development",
    "Performance Optimization",
    "SEO Optimization",
  ],

  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Web Developer",
    occupationLocation: {
      "@type": "Country",
      name: "India",
    },
    skills: ["React.js", "Next.js", "TypeScript", "Node.js", "MongoDB"],
  },
};
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />

      <main className="relative min-h-screen font-sans selection:bg-indigo-500/30">
        <div className="relative z-10 flex flex-col gap-12 pb-12 md:gap-20 md:pb-20">
          <HeroSection />

          <About />

          <section className="mx-auto w-full max-w-4xl">
            <HomeTechStack />
            <Highlights />
          </section>

          <section className="mx-auto w-full max-w-7xl px-4">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Featured Work
                </h2>

                <p className="mt-2 text-[color:var(--muted-foreground)]">
                  A selection of my recent web development projects.
                </p>
              </div>

              <Link
                href="/projects"
                className="hidden items-center gap-2 font-semibold text-indigo-500 transition-all hover:gap-3 md:flex"
              >
                View all projects
                <ArrowRight size={18} />
              </Link>
            </div>

            <Projects limit={5} showFilter={false} />

            <div className="mt-12 flex justify-center md:hidden">
              <Link
                href="/projects"
                className="
                  group inline-flex items-center gap-2 rounded-full
                  bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200
                  px-8 py-4 font-bold 
                  shadow-lg shadow-indigo-500/25
                  transition-all hover:shadow-indigo-500/40
                  active:scale-95
                "
              >
                See More Projects
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </section>

          <CTA />
        </div>
      </main>
    </>
  );
}
