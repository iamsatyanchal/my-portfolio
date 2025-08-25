import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "soft quotes",
      url: "https://soft-quotes.vercel.app",
      description: "A collection of inspiring quotes to motivate and uplift your day",
      date: "30-03-2025"
    },
    {
      title: "think",
      url: "https://think-ai-bro.vercel.app", 
      description: "An AI-powered social media platform that continuously scours for the latest news",
      date: "18-03-2025"
    },
    {
      title: "pplx",
      url: "https://pplx-done.vercel.app",
      description: "An experimental project featuring a fresh UI built with Mixtral LLM",
      date: "05-03-2025"
    },
    {
      title: "API Point",
      url: "https://api-point.vercel.app",
      description: "A diverse suite of APIs developed to power modern applications",
      date: "04-03-2025"
    }
  ];

  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold text-black">Posts</h3>
      <div className="space-y-3">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-600 hover:text-blue-800 text-sm"
          >
            {project.title} {project.date}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
