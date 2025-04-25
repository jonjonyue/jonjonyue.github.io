interface WorkExperienceProps {
  title: string;
  company: string;
  period: string;
  location?: string;
  achievements: string[];
}

const WorkExperience = ({ title, company, period, location, achievements }: WorkExperienceProps) => {
  return (
    <div className="group rounded-lg p-5 border border-border bg-card-bg/30 hover:bg-card-bg/60 transition-all duration-300 shadow-sm hover:shadow-card animate-fade-in">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
        <h3 className="font-semibold text-lg text-foreground">
          <span className="mr-2">{title}</span>
          <span className="text-accent">@ {company}</span>
        </h3>
        <div className="text-secondary-text text-sm mt-1 md:mt-0">
          <span className="inline-block bg-highlight/30 rounded-full px-3 py-1">
            {period}
          </span>
          {location && 
            <span className="inline-block bg-highlight/20 rounded-full px-3 py-1 ml-2">
              {location}
            </span>
          }
        </div>
      </div>
      <ul className="space-y-2 mt-3">
        {achievements.map((achievement, index) => (
          <li key={index} className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent text-secondary-text hover:text-foreground transition-colors duration-200">
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperience; 