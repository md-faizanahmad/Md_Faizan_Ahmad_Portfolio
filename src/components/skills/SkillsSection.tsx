import { skills } from "./skill.config";
import SkillCategory from "./SkillCategory";
import Reveal from "@/shared/Reveal";

const categoryMap = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools",
  performance: "Performance",
  other: "Other",
};

export default function SkillsSection() {
  const grouped = Object.entries(categoryMap).map(([key, label]) => ({
    title: label,
    skills: skills.filter((s) => s.category === key),
  }));

  return (
    <section className="space-y-10">
      {grouped.map(
        (group) =>
          group.skills.length > 0 && (
            <Reveal key={group.title}>
              <SkillCategory title={group.title} skills={group.skills} />
            </Reveal>
          ),
      )}
    </section>
  );
}
