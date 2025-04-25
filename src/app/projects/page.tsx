'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectTabs from '@/components/ProjectTabs';
import ProjectCard from '@/components/ProjectCard';
import TodoList from '@/components/todo/TodoList';

// Professional projects data
const professionalProjects = [
  {
    title: 'Goose Party',
    description: 'A real-time multiplayer party game platform that brings people together for a honking good time. Built with Next.js and WebSockets for seamless multiplayer interaction.',
    technologies: [
      { name: 'Next.js' },
      { name: 'WebSockets' },
      { name: 'React' },
      { name: 'TypeScript' }
    ],
    link: 'https://gooseparty.gg',
    image: '/images/goose-party.jpg'
  },
  {
    title: 'World of Materials (Welt Der Werkstoffe)',
    description: 'An experimental educational game that won the Best Serious Game award at the 2021 German Computer Games Awards. Created 10 levels of in-depth puzzles covering material science exam material.',
    technologies: [
      { name: 'Unity' },
      { name: 'C#' },
      { name: 'Educational Design' }
    ],
    link: 'https://welt-der-werkstoffe.de/',
    image: '/images/wdw-title.jpg'
  },
  {
    title: 'Massive Loop VR Experiences',
    description: 'Led the creation of three interactive VR game experiences using the Massive Loop VR SDK, which increased participation in the Massive Loop platform by 40%. Developed at Human Mode.',
    technologies: [
      { name: 'VR Development' },
      { name: 'Unity' },
      { name: 'C#' },
      { name: 'Massive Loop SDK' }
    ],
    link: '#',
    image: '/images/massive-loop.jpg'
  }
];

// Personal projects data
const personalProjects = [
  {
    id: 'portfolio',
    type: 'standard',
    title: 'Portfolio Website',
    description: 'My personal portfolio website built with Next.js and Tailwind CSS, featuring responsive design and dark mode support.',
    technologies: [
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'TypeScript' }
    ],
    // link: '#',
    image: '/images/portfolio.jpg'
  },
  {
    id: 'todolist',
    type: 'interactive',
    title: 'Todo List Application',
    description: 'A fully interactive Todo List application built with React and TypeScript. Features include adding, editing, and removing tasks, as well as marking tasks as complete. Data is stored in the browser for persistence.',
    technologies: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'LocalStorage' },
      { name: 'Tailwind CSS' }
    ]
  },
  {
    id: 'weatherapp',
    type: 'standard',
    title: 'Weather App',
    description: 'A weather application that uses multiple APIs to provide accurate weather forecasts and beautiful visualizations for any location.',
    technologies: [
      { name: 'React' },
      { name: 'OpenWeather API' },
      { name: 'Chart.js' }
    ],
    link: '#',
    image: '/images/personal2.jpg'
  }
];

const tabs = [
  { id: 'professional', label: 'Professional' },
  { id: 'personal', label: 'Personal' }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('professional');
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  // Handle opening an interactive project
  const handleOpenProject = (projectId: string) => {
    setIsProjectOpen(true);
    setOpenProjectId(projectId);
  };

  // Handle closing the project
  const handleCloseProject = () => {
    setIsProjectOpen(false);
    setOpenProjectId(null);
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="max-w-4xl w-full space-y-8">
        <h1 className="text-3xl font-bold text-foreground">Projects</h1>
        <p className="text-secondary-text mx-auto">
          Below is a showcase of my professional and personal projects. 
          Feel free to explore and check out the source code or live demos.
        </p>
        
        <AnimatePresence>
          {!isProjectOpen && (
            <motion.div 
              className="flex justify-center w-full"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectTabs 
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="w-full">
          <AnimatePresence mode="wait">
            {isProjectOpen && openProjectId === 'todolist' ? (
              <motion.div
                key="todolist-expanded"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="bg-card-bg border border-border rounded-lg p-6 mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-foreground">Todo List App</h2>
                    <button 
                      onClick={handleCloseProject}
                      className="px-4 py-2 bg-highlight text-foreground rounded-md flex items-center space-x-2 hover:bg-opacity-80 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Back to Projects
                    </button>
                  </div>
                  <TodoList />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="projects-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative min-h-[600px]"
              >
                {/* Professional Projects */}
                <motion.div 
                  className={`transition-all duration-500 ease-in-out grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 absolute w-full
                    ${activeTab === 'professional' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'}`}
                >
                  {professionalProjects.map((project, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <ProjectCard {...project} />
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Personal Projects */}
                <motion.div 
                  className={`transition-all duration-500 ease-in-out grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 absolute w-full
                    ${activeTab === 'personal' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8 pointer-events-none'}`}
                >
                  {personalProjects.map((project, index) => (
                    <motion.div 
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <ProjectCard 
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        link={project.type === 'standard' ? project.link : undefined}
                        image={project.type === 'standard' ? project.image : undefined}
                        isInteractive={project.type === 'interactive'}
                        onInteractiveOpen={project.type === 'interactive' ? () => handleOpenProject(project.id) : undefined}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
} 