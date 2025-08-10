import React from 'react';
import { Server, Sprout, Package } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <>
      <a className="absolute -translate-y-3 inline-flex transform-gpu items-center bg-white dark:bg-gray-950 rounded-full px-4 mx-4 border-2 border-gray-100 dark:border-gray-900 font-bold text-gray-600 dark:text-white text-sm default-transition default-focus" href="/posts">
        Projects
      </a>
      <ul className="flex flex-col space-y-2 dark:space-y-0 mt-6" role="list">
        {[
          {
            title: "soft quotes",
            icon: <Server className="w-4 h-4" />,
            url: "https://soft-quotes.vercel.app",
            description: "A collection of inspiring quotes to motivate and uplift your day"
          },
          {
            title: "think",
            icon: <Sprout className="w-4 h-4" />,
            url: "https://think-ai-bro.vercel.app",
            description: "An AI-powered social media platform that continuously scours for the latest news"
          },
          {
            title: "pplx",
            icon: <Server className="w-4 h-4" />,
            url: "https://pplx-done.vercel.app",
            description: "An experimental project featuring a fresh UI built with Mixtral LLM"
          },
          {
            title: "API Point",
            icon: <Server className="w-4 h-4" />,
            url: "https://api-point.vercel.app",
            description: "A diverse suite of APIs developed to power modern applications"
          }
        ].map((project, index) => (
          <li key={index}>
            <a
              href={project.url}
              className="text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-200 bg-white hover:bg-gray-50 dark:bg-gray-950 dark:hover:bg-gray-900 border-2 border-white hover:border-gray-100 dark:border-gray-900 dark:hover:border-gray-800 flex items-center p-2.5 rounded-md default-transition default-focus mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex-1 min-w-0 flex items-center space-x-2">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  {project.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate" title={project.title}>{project.title}</p>
                  <p className="text-sm truncate">{project.description}</p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
    
export default Projects;
