interface Technology {
  name: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Technology[];
  link?: string;
  image?: string;
  isInteractive?: boolean;
  onInteractiveOpen?: () => void;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  image,
  isInteractive,
  onInteractiveOpen
}: ProjectCardProps) {
  return (
    <div 
      className={`bg-card-bg border border-border rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg ${isInteractive ? 'cursor-pointer hover:border-accent' : ''}`}
      onClick={isInteractive && onInteractiveOpen ? onInteractiveOpen : undefined}
    >
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center">
          {title}
          {isInteractive && (
            <span className="ml-2 px-2 py-0.5 bg-highlight text-accent rounded-full text-xs">
              Interactive
            </span>
          )}
        </h3>
        <p className="text-secondary-text mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-highlight text-secondary-text rounded-full text-sm"
            >
              {tech.name}
            </span>
          ))}
        </div>
        {link && !isInteractive && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-bg transition-colors duration-200 font-medium inline-flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            View Project{' '}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </a>
        )}
        {isInteractive && (
          <div className="text-accent font-medium inline-flex items-center">
            Click to Open{' '}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 9l4-4 4 4m0 6l-4 4-4-4" 
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
} 