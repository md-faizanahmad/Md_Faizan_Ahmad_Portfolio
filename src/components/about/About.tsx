// components/about/About.tsx

import Image from "next/image";
import TechnicalSkills from "../skills/Skills";
import AboutAnimations from "./AboutAnimations";
import { aboutConfig } from "./about.config";

const About = () => {
  const { hero, paragraphs, section } = aboutConfig;

  return (
    <section
      id={section.id}
      className="px-4 py-20 sm:px-6 lg:px-8 bg-[color:var(--background)]"
    >
      <div className="mx-auto max-w-4xl">
        {/* Hero */}
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 mt-10 mb-4">
          <div>
            <h1 className="text-4xl font-bold sm:text-5xl">
              Hi, I’m {hero.name}
            </h1>

            <p className="mt-4 text-xl text-[color:var(--muted-foreground)]">
              {hero.title}
            </p>
          </div>

          <div className="relative h-32 w-32 sm:h-40 sm:w-40 shrink-0">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-full object-cover border-4 border-indigo-600/20 shadow-xl"
            />
          </div>
        </div>

        {/* About Section */}
        <h2 className="mt-12 mb-8 text-3xl font-bold">{section.title}</h2>

        <div className="space-y-6 text-lg leading-relaxed">
          {paragraphs.map((text, index) => (
            <AboutAnimations key={index} index={index}>
              <p>{text}</p>
            </AboutAnimations>
          ))}
        </div>

        {/* Skills */}
        <TechnicalSkills />
      </div>
    </section>
  );
};

export default About;
