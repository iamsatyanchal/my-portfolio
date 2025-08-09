import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Project Name",
      description: "A brief description of your project. What it does and its key features.",
      tech: ["React", "TypeScript", "Tailwind"],
      githubUrl: "https://github.com/yourusername/project",
      liveUrl: "https://project-demo.com"
    }
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-white">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="p-6 rounded-lg border-2 border-white bg-white dark:border-gray-900 dark:bg-gray-950"
          >
            <h3 className="text-lg font-semibold text-black dark:text-white">{project.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{project.description}</p>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-2 py-1 text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
    
export default Projects;
