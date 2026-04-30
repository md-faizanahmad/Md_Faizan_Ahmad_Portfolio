import SkillCard from "./SkillCard";

type Skill = {
  name: string;
};

type Props = {
  title: string;
  skills: Skill[];
};

export default function SkillCategory({ title, skills }: Props) {
  return (
    <div className="space-y-4">
      {/* Title */}
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} />
        ))}
      </div>
    </div>
  );
}
