interface SkillsProps {
  title: string;
  description: string;
}

export default function Skills({ title, description }: SkillsProps) {
  return (
    <div className="p-6 bg-card-bg rounded-lg border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-secondary-text">{description}</p>
    </div>
  );
} 