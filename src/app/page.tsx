import CTA from "@/components/cta/Cta";
import HeroSection from "@/components/hero/HeroClient";
import Projects from "@/components/projects/Projects";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="relative font-sans min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(/bg/bg.jpg)` }}
    >
      {/* Blur layer */}
      {/* <div className="absolute inset-0 bg-black/0 backdrop-blur-md"></div> */}

      {/* Content above blur */}
      <div className="relative z-10">
        <HeroSection />
        <Projects limit={3} />
        <div className="morebtn text-center items-center w-25 m-auto rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-2 mt-6">
          <Link href="/projects">More</Link>
        </div>
        <CTA />
      </div>
    </div>
  );
}
