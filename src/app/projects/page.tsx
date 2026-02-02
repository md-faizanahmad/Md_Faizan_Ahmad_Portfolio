import Projects from "@/components/projects/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects – Md Faizan Ahmad | Frontend & Full Stack Web Developer",
  description:
    "Explore real-world web development projects by Md Faizan Ahmad, including React, Next.js, and full stack applications built with modern technologies.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects by Md Faizan Ahmad – Web Development Portfolio",
    description:
      "A showcase of production-ready React and Next.js projects, dashboards, and full stack web applications.",
    url: "https://mdfaizanahmad.in/projects",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Projects – Md Faizan Ahmad",
    description:
      "View web development projects built using React, Next.js, and modern JavaScript.",
  },
};

function ProjectPage() {
  return (
    <div className=" pt-30   ">
      <Projects />
    </div>
  );
}

export default ProjectPage;
