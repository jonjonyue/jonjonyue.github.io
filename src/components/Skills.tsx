interface SkillCategory {
  title: string;
  description: string;
}

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">{skill.title}</h3>
          <p className="text-gray-600">{skill.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills; 