import Contact from "@/components/contact/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – Md Faizan Ahmad | Frontend & Full Stack Web Developer",
  description:
    "Get in touch with Md Faizan Ahmad, a Frontend and Full Stack Web Developer. Reach out for project inquiries, freelance work, or collaboration opportunities.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Md Faizan Ahmad – Web Developer",
    description:
      "Contact Md Faizan Ahmad for React, Next.js, and full stack web development projects or collaborations.",
    url: "https://mdfaizanahmad.in/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Md Faizan Ahmad – Web Developer",
    description:
      "Reach out to Md Faizan Ahmad for web development projects and collaboration.",
  },
};

function ContactPage() {
  return <Contact />;
}

export default ContactPage;
