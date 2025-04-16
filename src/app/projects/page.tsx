import Link from 'next/link';

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
}

export default function Projects() {
  const projects = [
    {
      title: "Goose Party",
      description: "A real-time multiplayer party game platform that allows friends to play together remotely.",
      tech: ["Next.js", "WebSockets", "React", "TypeScript"],
      link: "https://gooseparty.gg"
    },
    {
      title: "World of Materials",
      description: "Educational game that teaches material science concepts through interactive puzzles. Winner of Best Serious Game at German Computer Games Awards 2021.",
      tech: ["Unity", "C#", "3D Modeling"],
      link: "https://welt-der-werkstoffe.de/"
    },
    {
      title: "Worms in the Sky",
      description: "3D boss fighter game developed in Unity that features complex boss AI and dynamic gameplay mechanics.",
      tech: ["Unity", "C#", "Animation", "AI Behavior Trees"],
      link: "https://yonyonjue.itch.io"
    },
    {
      title: "ML Research Project",
      description: "Research project focused on reinforcement learning algorithms for game AI, resulting in more dynamic and challenging opponents.",
      tech: ["Python", "TensorFlow", "Reinforcement Learning"],
      link: "https://github.com/jonathanyue97/ml-research"
    }
  ];

  return (
    <div className="space-y-16">
      <section className="text-center py-8 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gradient">Projects</span>
        </h1>
        <p className="text-xl text-secondary-text mb-6 max-w-2xl mx-auto">
          A showcase of my software development and design work
        </p>
      </section>
      
      <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}

const ProjectCard = ({ title, description, tech, link }: ProjectProps) => {
  return (
    <div className="group rounded-lg border border-border bg-card-bg/20 hover:bg-card-bg/60 transition-all duration-300 shadow-sm hover:shadow-card overflow-hidden card-hover">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
        <p className="text-secondary-text mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, i) => (
            <span key={i} className="text-xs bg-highlight/30 text-secondary-text px-3 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
        {link && (
          <div className="mt-4">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent hover:text-accent-light inline-flex items-center space-x-1 transition-colors duration-300"
            >
              <span>View Project</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}; 