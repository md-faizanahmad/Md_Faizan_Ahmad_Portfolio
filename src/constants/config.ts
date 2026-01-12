// src/constants/config.ts

export const siteConfig = {
  name: "Md Faizan Ahmad",
  username: "mdfaizanahmad",
  url: "https://mdfaizanahmad.in",
  ogImage: "https://mdfaizanahmad.in/profile-pic.jpg",
  description:
    "Frontend Developer specializing in React.js, Tailwind CSS, and Node.js. Trained at Naresh IT, Hyderabad, with expertise in building responsive UIs and RESTful APIs.",
  links: {
    // twitter: "https://twitter.com/yourusername", // Update if you have one
    github: "https://github.com/md-faizanahmad",
    linkedin: "https://linkedin.com/in/mdfaizanahmad",
    email: "md.faizan.ahmad.web@gmail.com",
  },
  skills: [
    "React.js",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "RESTful APIs",
    "MongoDB",
    "Firebase",
    "Bootstrap",
    "Responsive Web Design",
  ],
  education: {
    name: "Naresh IT, Hyderabad",
    url: "https://www.nareshit.com",
  },
};

export type SiteConfig = typeof siteConfig;
