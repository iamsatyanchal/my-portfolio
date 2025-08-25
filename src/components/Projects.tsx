import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Soft Quotes",
      url: "https://soft-quotes.vercel.app",
      description: "A collection of inspiring quotes to motivate and uplift your day. Built with modern React and beautiful animations.",
      tech: ["React", "TypeScript", "Tailwind"],
      status: "Live"
    },
    {
      title: "Think AI",
      url: "https://think-ai-bro.vercel.app", 
      description: "An AI-powered social media platform that continuously scours for the latest news and trends.",
      tech: ["Next.js", "AI/ML", "PostgreSQL"],
      status: "Live"
    },
    {
      title: "PPLX Clone",
      url: "https://pplx-done.vercel.app",
      description: "An experimental project featuring a fresh UI built with Mixtral LLM for enhanced user experience.",
      tech: ["React", "LLM", "API"],
      status: "Beta"
    },
    {
      title: "API Point",
      url: "https://api-point.vercel.app",
      description: "A diverse suite of APIs developed to power modern applications with reliable endpoints.",
      tech: ["Node.js", "Express", "Docker"],
      status: "Live"
    }
  ];

  return (
    <section className="relative z-10 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A showcase of recent work, from AI-powered platforms to developer tools.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="h-full p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-gray-700 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
              {/* Status badge */}
              <div className="flex justify-between items-start mb-4">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  project.status === 'Live' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {project.status}
                </span>
                <svg className="w-5 h-5 text-gray-500 group-hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
