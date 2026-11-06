import {
  Layout,
  Layers,
  Plug,
  ShieldCheck,
  Gauge,
  Component,
  Smartphone,
} from "lucide-react";

export const highlightsConfig = {
  section: {
    id: "highlights",
    eyebrow: "What I Work On",
    title: "Building for the web",
    description: "Areas I focus on in web and app development.",
  },

  highlights: [
    {
      title: "Responsive Web Design",
      description:
        "Building interfaces that work well across mobile, tablet, and desktop.",
      icon: Layout,
    },
    {
      title: "Full-Stack Development",
      description:
        "Developing web applications using React, Next.js, Node.js, and MongoDB.",
      icon: Layers,
    },
    {
      title: "API Integration",
      description:
        "Connecting applications with REST APIs and third-party services.",
      icon: Plug,
    },
    {
      title: "Authentication",
      description:
        "Implementing login, JWT authentication, and protected routes.",
      icon: ShieldCheck,
    },
    {
      title: "Performance & SEO",
      description:
        "Improving page speed, optimizing assets, and handling SEO fundamentals.",
      icon: Gauge,
    },
    {
      title: "Reusable Components",
      description:
        "Building reusable UI components for consistent and maintainable code.",
      icon: Component,
    },
    {
      title: "React Native Development",
      description:
        "Developing a mobile app with React Native, currently preparing for its first Play Store release.",
      icon: Smartphone,
    },
  ],
};
