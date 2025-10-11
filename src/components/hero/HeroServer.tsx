import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSectionServer = () => {
  return (
    <div className="container mx-auto px-4 mt-15 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
        Md Faizan Ahmad
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-6 text-white">
        Full-Stack Developer | Crafting Modern Web Experiences with AI & Design
      </p>
      {/* <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 max-w-3xl mx-auto">
        Building Future-Ready Websites with AI, Design, and Code.
      </p> */}
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <Link href="/contact">
          <Button className="bg-blue-800 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer">
            Hire Me <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        <Link href="/projects">
          <Button className="bg-transparent border-2 border-black text-white hover:bg-red-900 hover:text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer">
            View Projects
          </Button>
        </Link>
        <Link href="/about">
          <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer">
            About
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSectionServer;
