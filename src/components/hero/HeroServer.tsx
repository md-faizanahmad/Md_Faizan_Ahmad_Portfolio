import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSectionServer = () => {
  return (
    <div className="container mx-auto px-4 mt-15 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
        Md Faizan Ahmad
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl mb-6 text-[color:var(--muted-foreground)]">
        Frontend Developer | Crafting Modern Web Experiences with AI & Design
      </p>

      <div className="flex flex-row flex-wrap justify-center gap-4">
        <Button
          asChild
          className="bg-blue-800 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          <Link href="/contact">
            Hire Me <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          className="border text-[color:var(--foreground)] hover:bg-[color:var(--card)]/80 font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          <Link href="/projects">View Projects</Link>
        </Button>

        <Button
          asChild
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          <Link href="/about">About</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroSectionServer;
