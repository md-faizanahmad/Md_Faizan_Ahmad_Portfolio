import {
  Layout,
  Layers,
  Plug,
  ShieldCheck,
  Gauge,
  Component,
} from "lucide-react";

export const highlightsConfig = {
  section: {
    id: "highlights",
    eyebrow: "What I Build",
    title: "Building for the web",
    description: "Things I focus on when building web applications.",
  },

  highlights: [
    {
      title: "Responsive Interfaces",
      description:
        "Clean interfaces that work across mobile, tablet, and desktop.",
      icon: Layout,
    },
    {
      title: "Full-Stack Applications",
      description:
        "Web applications built with React, Next.js, Node.js, and MongoDB.",
      icon: Layers,
    },
    {
      title: "API Integration",
      description:
        "Connecting frontend applications with REST APIs and external services.",
      icon: Plug,
    },
    {
      title: "Authentication",
      description:
        "Login, protected routes, JWT authentication, and user access.",
      icon: ShieldCheck,
    },
    {
      title: "Performance & SEO",
      description:
        "Faster pages, optimized images, metadata, and search-friendly websites.",
      icon: Gauge,
    },
    {
      title: "Reusable Components",
      description:
        "Reusable UI components that keep projects consistent and easier to maintain.",
      icon: Component,
    },
  ],
};
