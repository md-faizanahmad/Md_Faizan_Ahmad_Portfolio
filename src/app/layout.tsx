// // app/layout.tsx
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Footer from "@/components/footer/Footer";
// import Navbar from "@/components/nav/Nav";
// import SocialLink from "@/shared/SocialLinks";
// import { Analytics } from "@vercel/analytics/next";
// import ThemeProvider from "./providers";
// import CursorSpotlight from "@/components/visual/CursorSpotlight";

// const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Md Faizan Ahmad",
//   description: "a web developer full stack",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <link
//           rel="stylesheet"
//           href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
//         />
//       </head>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <ThemeProvider>
//           <CursorSpotlight />
//           <Navbar />
//           {children}
//           <Analytics />
//           <SocialLink />
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/nav/Nav";
import SocialLink from "@/shared/SocialLinks";
import { Analytics } from "@vercel/analytics/next";
import ThemeProvider from "./providers";
import CursorSpotlight from "@/components/visual/CursorSpotlight";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Enhanced Metadata for better SEO and Social Sharing
// app/layout.tsx

export const metadata: Metadata = {
  metadataBase: new URL("https://mdfaizanahmad.in"),
  title: {
    default: "Md Faizan Ahmad – Frontend & Full Stack Web Developer",
    template: "%s | Md Faizan Ahmad",
  },
  description:
    "Frontend & Full Stack Web Developer building fast, SEO-friendly web applications using React, Next.js, and modern JavaScript.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Md Faizan Ahmad Portfolio",
    locale: "en_IN",
    type: "website",
  },
};

// 2. Person Schema Object
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md Faizan Ahmad",
  url: "https://mdfaizanahmad.in",
  image: "https://mdfaizanahmad.in/profile-pic.jpg",
  jobTitle: ["Frontend Developer", "Full Stack Web Developer"],
  description:
    "Frontend Developer specializing in React.js, Tailwind CSS, and Node.js. Trained at Naresh IT, Hyderabad.",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Naresh IT, Hyderabad",
  },
  knowsAbout: [
    "React.js",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "RESTful APIs",
  ],
  sameAs: [
    "https://github.com/md-faizanahmad",
    "https://linkedin.com/in/mdfaizanahmad",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        {/* 3. Injecting the Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <CursorSpotlight />
          <Navbar />
          {children}
          <Analytics />
          <SocialLink />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
