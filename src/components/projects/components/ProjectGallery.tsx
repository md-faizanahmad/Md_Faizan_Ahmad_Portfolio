"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectGalleryProps {
  gallery: string[];
  title: string;
}

export default function ProjectGallery({
  gallery,
  title,
}: ProjectGalleryProps) {
  const [selected, setSelected] = useState(0);

  if (!gallery?.length) return null;

  return (
    <section className="w-full bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      {/* Shared alignment layout master bounding box */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Standout Primary Section Heading */}
        <div className="space-y-1.5 max-w-4xl text-left">
          <h2 className="text-xl  font-extrabold uppercase tracking-tight sm:text-2xl md:text-3xl">
            Project Gallery
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            Visual interfaces and architectural breakdown logs for {title}.
          </p>
        </div>

        {/* Main Fluid Asset Preview Viewport Frame */}
        <div className="w-full  max-w-4xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/20 rounded-sm overflow-hidden">
          <div className="relative w-full aspect-video">
            <Image
              src={gallery[selected]}
              alt={`${title} snapshot ${selected + 1}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Thumbnail Selector Layer */}
        {gallery.length > 1 && (
          <div className="w-full max-w-5xl mt-4">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none sm:grid sm:grid-cols-6 sm:gap-3 sm:overflow-x-visible sm:pb-0 md:grid-cols-8">
              {gallery.map((image, index) => {
                const isSelected = selected === index;
                return (
                  <button
                    key={image}
                    onClick={() => setSelected(index)}
                    className={`relative cursor-pointer aspect-video w-20 shrink-0 overflow-hidden border p-0.5 bg-neutral-50 dark:bg-neutral-900 transition-all duration-200 sm:w-auto rounded-sm ${
                      isSelected
                        ? "border-black dark:border-white opacity-100 scale-[1.02]"
                        : "border-neutral-200 dark:border-neutral-800 opacity-40 hover:opacity-100"
                    }`}
                    aria-label={`Switch viewport to snapshot image reference ${index + 1}`}
                  >
                    <Image
                      src={image}
                      alt={`${title} miniature track preview index slot ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 80px, 120px"
                      className="object-contain"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
