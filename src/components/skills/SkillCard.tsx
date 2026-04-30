// components/skills/SkillCard.tsx

type Props = {
  name: string;
};

export default function SkillCard({ name }: Props) {
  return (
    <div
      className="
        group
        rounded-xl
        border border-[color:var(--border)]
        bg-[color:var(--background)]
        px-4 py-3
        text-sm font-medium
        text-[color:var(--foreground)]
        transition-all duration-200

        hover:-translate-y-1
        hover:shadow-md
        hover:border-primary/40
      "
    >
      <span className="tracking-tight">{name}</span>
    </div>
  );
}
