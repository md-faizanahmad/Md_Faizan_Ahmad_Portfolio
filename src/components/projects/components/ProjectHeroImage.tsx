"use client";

import Image from "next/image";

interface ProjectHeroImageProps {
  image: string;
  title: string;
}

export default function ProjectHeroImage({
  image,
  title,
}: ProjectHeroImageProps) {
  return (
    <div className="flex w-full items-start justify-center transition-colors duration-300 dark:bg-black ">
      {/* Controlled Dimension Wrapper:
        - Sets a maximum width envelope (max-w-2xl) so it stays clean on wide monitors
        - Enforces a strictly bounded, highly responsive height profile (h-48 up to h-96)
        - Uses a subtle neutral border structure to perfectly frame the isolated asset
      */}
      <div className="relative w-full max-w-2xl h-48 sm:h-64 md:h-80 lg:h-96 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/20 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 672px"
          className="object-contain p-2 "
        />
      </div>
    </div>
  );
}
