import CTA from "@/components/cta/Cta";
import HeroSection from "@/components/hero/HeroClient";
import Projects from "@/components/projects/Projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Import an icon for the button
import type { Metadata } from "next";

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
  image: "https://mdfaizanahmad.in/profile-pic.jpg",
  jobTitle: "Frontend & Full Stack Web Developer",
  description:
    "Frontend and Full Stack Web Developer with hands-on experience building real-world web applications using React, Next.js, Tailwind CSS, and Node.js. Trained in full stack development at Naresh IT, Hyderabad.",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Naresh IT",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressCountry: "IN",
    },
  },
  knowsAbout: [
    "HTML",
    "CSS",
    "Boostrap",
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "REST APIs",
    "Web Application Development",
  ],
  sameAs: [
    "https://github.com/md-faizanahmad",
    "https://www.linkedin.com/in/mdfaizandahmad",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* GRID CONTAINER 
          - md:grid-cols-4: Creates a 4-column layout on desktop
          - auto-rows: Controls the height of each 'row unit'
      */}
      <main className="max-w-7xl mx-auto p-4 md:p-10 grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-min">
        {/* BENTO ITEM: HERO (About) - Spans 3 columns & 2 rows */}
        <section className="md:col-span-3 md:row-span-2 bg-neutral-100 dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
          <HeroSection />
        </section>

        {/* BENTO ITEM: SOCIALS - Spans 1 column */}
        <div className="md:col-span-1 bg-indigo-600 rounded-3xl p-6 text-white flex flex-col justify-between">
          <h3 className="font-bold text-xl">Connect</h3>
          <div className="flex flex-col gap-3">
            <Link href="https://linkedin.com/..." className="hover:underline">
              LinkedIn
            </Link>
            <Link href="https://github.com/..." className="hover:underline">
              GitHub
            </Link>
          </div>
        </div>

        {/* BENTO ITEM: PROJECTS - Spans 2 columns */}
        <section className="md:col-span-2 md:row-span-2 bg-white dark:bg-neutral-900 rounded-3xl p-8 border border-neutral-200 dark:border-neutral-800">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured</h2>
            <Link
              href="/projects"
              className="text-indigo-500 hover:scale-105 transition-transform"
            >
              <ArrowRight />
            </Link>
          </div>
          <Projects limit={2} showFilter={false} />
        </section>

        {/* BENTO ITEM: CTA (Contact) - Spans 2 columns */}
        <section className="md:col-span-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl overflow-hidden">
          <CTA />
        </section>

        {/* SMALL STATS OR TECH STACK BLOCK */}
        <div className="md:col-span-1 bg-neutral-100 dark:bg-neutral-800 rounded-3xl p-6 flex flex-col justify-center items-center text-center">
          <span className="text-4xl font-bold text-indigo-500">20+</span>
          <p className="text-sm text-neutral-500">Projects Completed</p>
        </div>
      </main>
    </>
  );
}
