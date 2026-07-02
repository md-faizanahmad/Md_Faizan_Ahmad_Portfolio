import { notFound } from "next/navigation";
import projects from "@/data/project.json";
import ProjectHero from "@/components/projects/components/ProjectHero";
import ProjectOverview from "@/components/projects/components/ProjectOverview";
import FrontendStack from "@/components/projects/components/FrontendStack";
import ProjectBackend from "@/components/projects/components/ProjectBackend";
import ProjectFeatures from "@/components/projects/components/ProjectFeatures";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen mt-12">
      {/* Hero */}
      <ProjectHero
        title={project.title}
        category={project.category}
        description={project.description}
        image={project.image}
        liveUrl={project.liveUrl}
        codeUrl={project.codeUrl}
        techStack={project.techStack}
        status={project.status}
        role={project.role}
        duration={project.duration}
      />

      {/* Overview */}
      <ProjectOverview
        overview={project.overview}
        problem={project.problem}
        solution={project.solution}
      />

      {/* Frontend */}
      {/* <section>Frontend Stack</section> */}
      <FrontendStack techStack={project.techStack} />
      {/* Backend */}
      {/* <section>Backend</section> */}
      <ProjectBackend backend={project.backend} />

      {/* Features */}
      {/* <section>Features</section> */}
      <ProjectFeatures features={project.features} />
      {/* Security */}
      <section>Security</section>

      {/* Engineering */}
      <section>Engineering Highlights</section>

      {/* Challenges */}
      <section>Challenges & Solutions</section>

      {/* Learning */}
      <section>What I Learned</section>

      {/* Future */}
      <section>Future Improvements</section>
    </main>
  );
}
