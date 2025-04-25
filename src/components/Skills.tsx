interface SkillsProps {
  title: string;
  description: string;
}

export default function Skills({ title, description }: SkillsProps) {
  return (
    <div className="p-6 bg-card-bg/40 hover:bg-card-bg/70 rounded-lg border border-border shadow-sm hover:shadow-card transition-all duration-300 card-hover">
      <div className="flex items-start">
        {/* <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
          <span className="text-accent text-xl">
            {title.charAt(0)}
          </span>
        </div> */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-secondary-text">{description}</p>
        </div>
      </div>
    </div>
  );
} 