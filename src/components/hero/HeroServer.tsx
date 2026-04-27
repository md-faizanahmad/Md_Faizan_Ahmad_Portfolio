import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSectionServer = () => {
  return (
    <div className="container mx-auto px-4 mt-15 text-center">
      <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
        Md Faizan Ahmad
      </h1>

      <h2 className="mb-4 text-2xl font-bold sm:text-2xl md:text-3xl">
        Full Stack Developer | Frontend Developer
      </h2>

      <p className="mb-8 text-lg sm:text-xl md:text-2xl text-[color:var(--muted-foreground)]">
        Building fast, responsive web apps with React, Next.js & TypeScript.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Button
          asChild
          className="bg-blue-800 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
        >
          <Link href="/contact">
            Contact <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          className="border text-[color:var(--foreground)] hover:bg-[color:var(--card)]/80 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
        >
          <Link href="/projects">View Projects</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroSectionServer;
