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
    <div className="relative overflow-hidden rounded-2xl border">
      <Image
        src={image}
        alt={title}
        width={1200}
        height={700}
        priority
        className="h-full w-full object-cover"
      />
    </div>
  );
}
