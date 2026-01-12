// src/data/schema.js
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md Faizan Ahmad",
  url: "https://mdfaizanahmad.in",
  image: "https://mdfaizanahmad.in/profile-pic.jpg",
  jobTitle: ["Frontend Developer", "Full Stack Web Developer"],
  description:
    "Frontend Developer specializing in React.js, Tailwind CSS, and Node.js. Trained at Naresh IT, Hyderabad, with expertise in building responsive UIs, RESTful APIs, and scalable web applications.",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Naresh IT, Hyderabad",
  },
  knowsAbout: [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
    "React.js",
    "Node.js",
    "Git",
    "Vscode",
    "Postman",
    "Axios",
    "RESTful APIs",
    "MongoDB",
    "Firebase",
    "Vercel",
    "Responsive Web Design",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Self-Employed",
  },
  sameAs: [
    "https://github.com/md-faizanahmad",
    "https://linkedin.com/in/mdfaizanahmad",
  ],
};
