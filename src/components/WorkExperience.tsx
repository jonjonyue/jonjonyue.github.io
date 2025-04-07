interface WorkExperienceProps {
  title: string;
  company: string;
  period: string;
  location?: string;
  achievements: string[];
}

const WorkExperience = ({ title, company, period, location, achievements }: WorkExperienceProps) => {
  return (
    <div className="border-l-4 border-gray-200 pl-4">
      <h3 className="font-medium text-gray-900">{title} | {company}</h3>
      <p className="text-gray-600">
        {period}
        {location && ` • ${location}`}
      </p>
      <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperience; 