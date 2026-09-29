import aboutData from "./about.json";

export const aboutConfig = {
  ...aboutData,

  section: {
    id: "about",
    title: "About Me",
  },

  seo: {
    heading: "Md Faizan Ahmad | Frontend Developer",
    description:
      "Md Faizan Ahmad is a Frontend Developer specializing in React, Next.js, TypeScript, responsive UI development, and full-stack web applications.",
  },

  links: {
    email: "mailto:md.faizan.ahmad.web@gmail.com",
    portfolio: "https://mdfaizanahmad.vercel.app",
    github: "https://github.com/md-faizanahmad",
    linkedin: "https://linkedin.com/in/mdfaizandahmad",
  },
};
