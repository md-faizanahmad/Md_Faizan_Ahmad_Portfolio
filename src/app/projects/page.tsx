import Script from "next/script";
import projects from "@/public/project.json";
import Projects from "@/components/projects/Projects";

export default function ProjectPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Web Development Projects",
    url: "https://mdfaizanahmad.in/projects",

    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,

      item: {
        "@type": "SoftwareApplication",
        "@id": `https://mdfaizanahmad.in/#project-${index + 1}`,

        name: project.title,
        description: project.description,

        applicationCategory: "WebApplication",
        operatingSystem: "Web",

        url: project.liveUrl,

        creator: {
          "@id": "https://mdfaizanahmad.in/#person",
        },

        codeRepository: project.codeUrl || undefined,

        image: project.image,

        keywords: project.techStack?.join(", "),
        isPartOf: {
          "@type": "WebSite",
          url: "https://mdfaizanahmad.in",
        },
      },
    })),
  };

  return (
    <>
      <Script
        id="projects-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className="pt-30">
        <Projects />
      </div>
    </>
  );
}
