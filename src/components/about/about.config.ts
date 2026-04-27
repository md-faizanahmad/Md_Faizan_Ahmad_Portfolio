// components/about/about.config.ts

import aboutData from "./about.json";

export const aboutConfig = {
  ...aboutData,

  section: {
    id: "about",
    title: "About Me",
  },

  seo: {
    heading:
      "Md Faizan Ahmad | UI Engineer | Frontend Developer | Full Stack Developer",
    description:
      "Full Stack Developer with 2+ years of experience in React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, responsive UI development, SEO, and performance optimization.",
  },

  links: {
    email: "mailto:md.faizan.ahmad.web@gmail.com",
    portfolio: "https://mdfaizanahmad.vercel.app",
    github: "https://github.com/md-faizanahmad",
    linkedin: "https://linkedin.com/in/mdfaizandahmad",
  },
};
