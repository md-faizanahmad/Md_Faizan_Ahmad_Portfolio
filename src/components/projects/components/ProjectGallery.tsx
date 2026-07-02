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
    <section className="mx-auto w-full max-w-3xl px-4 py-6 md:py-8">
      {/* Header */}
      <div className="mb-4 md:mb-6 text-center sm:text-left">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
          Project Gallery
        </h2>
        <p className="mt-1 text-xs text-neutral-500">
          Screenshots showcasing different parts of {title}.
        </p>
      </div>

      {/* Main Preview Container - Scaled Down & Centered */}
      <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-neutral-200 bg-white">
        <div className="relative aspect-[16/10] w-full sm:aspect-video">
          <Image
            src={gallery[selected]}
            alt={`${title} screenshot ${selected + 1}`}
            fill
            priority
            className="object-contain p-3 md:p-4"
          />
        </div>
      </div>

      {/* Thumbnails - Sized to match the narrower preview container */}
      {gallery.length > 1 && (
        <div className="mx-auto max-w-2xl">
          <div
            className="
              mt-4 
              flex gap-2.5 overflow-x-auto pb-2 scrollbar-none
              sm:grid sm:grid-cols-4 sm:overflow-x-visible sm:pb-0
              md:grid-cols-5
            "
          >
            {gallery.map((image, index) => {
              const isSelected = selected === index;
              return (
                <button
                  key={image}
                  onClick={() => setSelected(index)}
                  className={`
                    relative aspect-video w-20 shrink-0 overflow-hidden rounded-lg border bg-white p-0.5 transition-all duration-200
                    sm:w-auto
                    ${
                      isSelected
                        ? "border-neutral-900 ring-1 ring-neutral-900 opacity-100"
                        : "border-neutral-200 opacity-60 hover:opacity-100"
                    }
                  `}
                  aria-label={`View image ${index + 1}`}
                >
                  <Image
                    src={image}
                    alt={`${title} thumbnail ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 80px, 150px"
                    className="object-contain"
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
