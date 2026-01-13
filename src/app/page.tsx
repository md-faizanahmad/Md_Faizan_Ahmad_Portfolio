import CTA from "@/components/cta/Cta";
import HeroSection from "@/components/hero/HeroClient";
import Projects from "@/components/projects/Projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Import an icon for the button

export default function Home() {
  return (
    <div className="relative font-sans min-h-screen selection:bg-indigo-500/30">
      {/* Content wrapper with better vertical spacing */}
      <div className="relative z-10 flex flex-col gap-20 pb-20">
        <HeroSection />

        {/* Featured Projects Section */}
        <section className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Featured Work
              </h2>
              <p className="text-[color:var(--muted-foreground)] mt-2">
                A selection of my recent web development projects.
              </p>
            </div>

            {/* Desktop "More" Link */}
            <Link
              href="/projects"
              className="hidden md:flex items-center gap-2 text-indigo-500 font-semibold hover:gap-3 transition-all"
            >
              View all projects <ArrowRight size={18} />
            </Link>
          </div>

          <Projects limit={3} showFilter={false} />

          {/* Mobile/Centered "More" Button */}
          <div className="flex justify-center mt-12 md:hidden">
            <Link
              href="/projects"
              className="
                group inline-flex items-center gap-2 px-8 py-4 rounded-full
                bg-gradient-to-r from-indigo-600 to-purple-600 
                text-white font-bold shadow-lg shadow-indigo-500/25
                hover:shadow-indigo-500/40 transition-all active:scale-95
              "
            >
              See More Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </section>

        <CTA />
      </div>
    </div>
  );
}
