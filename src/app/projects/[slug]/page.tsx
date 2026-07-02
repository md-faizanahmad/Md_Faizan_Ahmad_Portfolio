import { notFound } from "next/navigation";
import projects from "@/data/project.json";
import ProjectHero from "@/components/projects/components/ProjectHero";

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
    <main className="min-h-screen">
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
      <section>Overview</section>

      {/* Frontend */}
      <section>Frontend Stack</section>

      {/* Backend */}
      <section>Backend</section>

      {/* Features */}
      <section>Features</section>

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
