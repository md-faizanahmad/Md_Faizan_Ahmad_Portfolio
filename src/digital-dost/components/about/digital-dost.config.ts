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
import DDBlogHero from "@/digital-dost/images/DD-Blog-Hero.png";

export { DigitalDost, DDBlogHero };

export const projectMeta = {
  category: "Featured Project · Mobile Application",
  title: "Digital Dost",
  tagline: "Learn. Create. Grow.",
  technologies: ["React Native", "TypeScript", "Android"],
  author: "Md Faizan Ahmad",
};

export const projectSections = {
  about: {
    title: "About the Project",
    paragraphs: [
      "Digital Dost is an educational mobile application designed to make learning digital skills simple and accessible. It provides structured, step-by-step guides that help users understand and use digital platforms, tools and technologies.",
      "From setting up social media accounts to exploring AI tools and improving digital knowledge, the goal is to make technology easier to understand for everyone.",
    ],
  },

  whyBuilt: {
    icon: Lightbulb,
    title: "Why I Built Digital Dost",
    paragraphs: [
      "Digital tools are becoming part of everyday life, but not everyone knows how to use them effectively. I wanted to build something practical that could help people learn these skills through simple and structured tutorials.",
      "Instead of building another ordinary application, I chose to create a learning platform with a real purpose: making digital knowledge easier to access and understand.",
    ],
  },

  firstProject: {
    icon: Target,
    title: "Why I Chose This as My First Mobile Project",
    paragraphs: [
      "I wanted my first dedicated mobile application to be more than a practice project. Digital Dost gave me an opportunity to apply my frontend development knowledge to a real product while learning React Native, mobile navigation, local data management and application architecture.",
      "It became a practical way to move beyond building interfaces and understand how a complete mobile application works.",
    ],
  },

  features: {
    title: "Key Features",
    items: [
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
    ],
  },

  techStack: {
    icon: Code2,
    title: "Technology Stack",
    items: [
      {
        name: "React Native",
        description: "Cross-platform mobile development",
      },
      {
        name: "TypeScript",
        description: "Type-safe application development",
      },
      {
        name: "React Navigation",
        description: "Screen and tab navigation",
      },
      {
        name: "SQLite",
        description: "Local data storage",
      },
      {
        name: "Lucide Icons",
        description: "Consistent interface icons",
      },
    ],
  },

  development: {
    icon: Database,
    title: "Development Highlights",
    items: [
      "Built with React Native CLI, without Expo.",
      "Designed with a reusable component architecture.",
      "Structured learning content with TypeScript.",
      "Local storage for saved guides using SQLite.",
      "Bilingual learning content in English and Hinglish.",
      "No custom backend or cloud database.",
    ],
  },

  closing: {
    title: "Built with a Purpose",
    description:
      "Digital Dost represents my journey into mobile application development, combining practical problem-solving, clean interfaces and accessible learning into one product.",
  },
};
