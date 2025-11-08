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

export const metadata: Metadata = {
  title: "Md Faizan Ahmad",
  description: "a web developer full stack",
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
