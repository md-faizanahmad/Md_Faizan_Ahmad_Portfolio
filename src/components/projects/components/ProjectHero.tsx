import ProjectHeroContent from "./ProjectHeroContent";
import ProjectHeroImage from "./ProjectHeroImage";

interface ProjectHeroProps {
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl: string;
  codeUrl: string;
  techStack: string[];
  status?: string;
  role?: string;
  duration?: string;
}

export default function ProjectHero(props: ProjectHeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 ">
      <div className="grid gap-10 lg:grid-cols-2">
        <ProjectHeroContent {...props} />

        <ProjectHeroImage
          image={props.image}
          title={props.title}
          techStack={props.techStack}
        />
      </div>
    </section>
  );
}
