import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { heroConfig } from "./hero.config";
import GreetingRoll from "@/shared/GreetingRoll";

const HeroSectionServer = () => {
  const { visual } = heroConfig;

  return (
    <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pt-20 pb-10 sm:px-8 sm:pt-20 md:grid-cols-[1fr_1.5fr] md:gap-6 md:py-0">
      {/* Introduction */}
      <div className="order-2 md:order-1">
        <GreetingRoll />

        <h1 className="text-4xl font-black leading-tight tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
          {heroConfig.name}
          <span className="text-emerald-600 dark:text-emerald-400">.</span>
        </h1>

        <h2 className="mt-3 text-xl font-semibold text-neutral-900 dark:text-neutral-100 sm:text-2xl">
          {heroConfig.title}
        </h2>

        <p className="mt-4 max-w-md text-sm leading-7 text-neutral-700 dark:text-neutral-400 sm:text-base">
          {heroConfig.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button
            asChild
            className="
              group rounded-full px-6
              bg-emerald-600 text-white
              shadow-sm shadow-emerald-600/20
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:bg-emerald-700
              hover:shadow-lg hover:shadow-emerald-600/25
              active:translate-y-0 active:scale-95
              dark:bg-emerald-500 dark:text-neutral-950
              dark:hover:bg-emerald-400
              dark:hover:shadow-emerald-400/20
              focus-visible:ring-2 focus-visible:ring-emerald-500
              focus-visible:ring-offset-2
              dark:focus-visible:ring-offset-neutral-950
            "
          >
            <Link href={heroConfig.primaryCta.href}>
              {heroConfig.primaryCta.label}
              <ArrowUpRight
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="
              rounded-full border-neutral-300 text-neutral-900
              transition-all duration-300
              hover:-translate-y-1 hover:bg-neutral-100
              dark:border-neutral-700 dark:text-neutral-100
              dark:hover:bg-neutral-800
            "
          >
            <Link href={heroConfig.secondaryCta.href}>
              {heroConfig.secondaryCta.label}
            </Link>
          </Button>
        </div>
      </div>

      {/* Decorative Typography */}
      <div className="order-1 min-w-0 overflow-hidden md:order-2">
        <p className="mb-3 text-right text-xs font-medium tracking-[0.25em] text-neutral-700 dark:text-neutral-500 sm:text-sm sm:tracking-[0.3em]">
          {visual.tagline}
        </p>

        <div
          aria-hidden="true"
          className="text-right text-[clamp(3.8rem,13vw,10rem)] font-black leading-[0.82] tracking-[-0.09em] text-neutral-950 dark:text-white sm:text-[clamp(4.5rem,12vw,10rem)]"
        >
          <span className="block transition-transform duration-500 hover:-translate-x-2 sm:hover:-translate-x-4">
            {visual.words[0]}
          </span>

          <span className="block text-neutral-400 transition-colors duration-500 hover:text-emerald-600 dark:text-neutral-600 dark:hover:text-emerald-400">
            {visual.words[1]}
          </span>

          <span className="block transition-transform duration-500 hover:-translate-x-2 sm:hover:-translate-x-4">
            {visual.words[2]}
            <span className="text-emerald-600 dark:text-emerald-400">.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionServer;
