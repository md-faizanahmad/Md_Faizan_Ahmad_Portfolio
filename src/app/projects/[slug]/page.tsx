import { notFound } from "next/navigation";
import projects from "@/data/project.json";
import ProjectHero from "@/components/projects/components/ProjectHero";
import ProjectOverview from "@/components/projects/components/ProjectOverview";
import FrontendStack from "@/components/projects/components/FrontendStack";
import ProjectFeatures from "@/components/projects/components/ProjectFeatures";
import ProjectSecurity from "@/components/projects/components/ProjectSecurity";
import ProjectEngineering from "@/components/projects/components/ProjectEngineering";
import ProjectChallenges from "@/components/projects/components/ProjectChallenges";
import ProjectLearning from "@/components/projects/components/ProjectLearning";
import ProjectFuture from "@/components/projects/components/ProjectFuture";
import ProjectGallery from "@/components/projects/components/ProjectGallery";
import BackButton from "@/components/projects/components/BackButton";
import ProjectTechStack from "@/components/projects/components/ProjectTechStack";
import BackendStack from "@/components/projects/components/ProjectBackend";

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
    <main className="min-h-screen mt-22">
      <nav className="w-full flex justify-start ps-8">
        <BackButton fallbackUrl="/projects" label="Back to Projects" />
      </nav>
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
      <ProjectGallery gallery={project.gallery} title={project.title} />

      <ProjectTechStack
        frontend={project.techStack}
        backend={project.backend.techStack}
        security={project.security}
      />
      {/* Features */}
      {/* <section>Features</section> */}
      <ProjectFeatures features={project.features} />
      {/* Security */}
      {/* <section>Security</section> */}
      <ProjectSecurity security={project.security} />
      {/* Engineering */}
      {/* <section>Engineering Highlights</section> */}
      <ProjectEngineering
        engineeringHighlights={project.engineeringHighlights}
      />
      {/* Challenges */}
      {/* <section>Challenges & Solutions</section> */}
      <ProjectChallenges challenges={project.challenges} />

      {/* Learning */}
      {/* <section>What I Learned</section> */}
      <ProjectLearning learning={project.learning} />
      {/* Future */}
      {/* <section>Future Improvements</section> */}
      <ProjectFuture futureImprovements={project.futureImprovements} />
    </main>
  );
}
