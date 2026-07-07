"use client";

import Image from "next/image";

interface ProjectHeroImageProps {
  image: string;
  title: string;
  techStack: string[];
}

export default function ProjectHeroImage({
  image,
  title,
  techStack,
}: ProjectHeroImageProps) {
  return (
    <div className="flex w-full items-start justify-center transition-colors duration-300  ">
      {/* Controlled Dimension Wrapper:
        - Sets a maximum width envelope (max-w-2xl) so it stays clean on wide monitors
        - Enforces a strictly bounded, highly responsive height profile (h-48 up to h-96)
        - Uses a subtle neutral border structure to perfectly frame the isolated asset
      */}
      <div className="relative w-full max-w-2xl h-48 sm:h-64 md:h-80 lg:h-96   overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 672px"
          className="object-contain shadow-2xl "
        />
      </div>
      {/* <div>
        <h2 className="mb-4 text-sm font-semibold text-neutral-500">
          Technologies Used
        </h2>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="
                  rounded-md
                  border
                  px-3
                  py-1.5
                  text-sm
                  text-neutral-700
                  dark:text-neutral-300
                "
            >
              {tech}
            </span>
          ))}
        </div>
      </div> */}
    </div>
  );
}
