import Image, { type StaticImageData } from "next/image";

interface ImageBannerProps {
  image: StaticImageData;
  alt?: string;
  className?: string;
  priority?: boolean;
}

export default function ImageBanner({
  image,
  alt = "Banner image",
  className = "",
  priority = false,
}: ImageBannerProps) {
  return (
    <div
      className={`
        relative mx-auto w-full overflow-hidden rounded-lg
        aspect-[4/3]
        sm:aspect-[16/9]
        lg:aspect-[16/7]
        max-h-[480px]
        ${className}
      `}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes="
          (max-width: 640px) 100vw,
          (max-width: 1024px) 90vw,
          1200px
        "
        className="object-contain"
      />
    </div>
  );
}
