import React, { useState } from 'react';
import { Github, ExternalLink, Code, Star, Eye, GitFork, Flame, Zap, Cpu } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "voidexity",
      description: "A fresh UI experiment using Mistral LLM. An innovative approach to creating intuitive user interfaces with AI assistance.",
      tech: ["React", "TypeScript", "Mistral LLM", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://voidexity.demo.com",
      category: "UI Experiment",
      icon: Flame,
      color: "from-orange-400 to-red-500",
      featured: true,
      stats: { stars: 42, forks: 12, views: 1200 }
    },
    {
      id: 2,
      title: "soft.quotes",
      description: "A collection of inspiring quotes to motivate and uplift your day. Clean, minimal design with beautiful typography.",
      tech: ["Next.js", "MongoDB", "Node.js", "CSS"],
      github: "https://github.com",
      live: "https://softquotes.demo.com",
      category: "Web App",
      icon: Star,
      color: "from-blue-400 to-cyan-500",
      featured: false,
      stats: { stars: 28, forks: 8, views: 850 }
    },
    {
      id: 3,
      title: "think.",
      description: "A fully AI powered Human X AI social media platform that continuously curates the latest news. Demo account - email: testinguser@x.com | password: 12345",
      tech: ["React", "AI Integration", "Node.js", "PostgreSQL"],
      github: "https://github.com",
      live: "https://think.demo.com",
      category: "Social Platform",
      icon: Cpu,
      color: "from-purple-400 to-pink-500",
      featured: true,
      stats: { stars: 67, forks: 23, views: 2100 }
    },
    {
      id: 4,
      title: "apipoint",
      description: "A hub of diverse APIs developed for modern applications. Comprehensive collection of endpoints for various use cases.",
      tech: ["Express.js", "Node.js", "MongoDB", "REST API"],
      github: "https://github.com",
      live: "https://apipoint.demo.com",
      category: "API Development",
      icon: Zap,
      color: "from-green-400 to-emerald-500",
      featured: false,
      stats: { stars: 35, forks: 15, views: 980 }
    },
    {
      id: 5,
      title: "gitprofile",
      description: "A sleek and improved way to view GitHub profiles. Enhanced visualization and analytics for better profile insights.",
      tech: ["React", "GitHub API", "Chart.js", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://gitprofile.demo.com",
      category: "Developer Tool",
      icon: Code,
      color: "from-indigo-400 to-purple-500",
      featured: false,
      stats: { stars: 19, forks: 6, views: 630 }
    }
  ];

  const categories = ['All', 'UI Experiment', 'Web App', 'Social Platform', 'API Development', 'Developer Tool'];
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">My Projects</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Featured </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Work</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A mix of <span className="font-semibold text-blue-600 dark:text-blue-400">personal thoughts</span>, 
            <span className="font-semibold text-purple-600 dark:text-purple-400"> technical experiments</span> and 
            <span className="font-semibold text-pink-600 dark:text-pink-400"> projects</span> that reflect my journey in development
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 backdrop-blur-sm border border-gray-200 dark:border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-gray-200/50 dark:border-gray-700/50 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                      <Star className="w-3 h-3" />
                      <span>Featured</span>
                    </div>
                  </div>
                )}

                {/* Project Header with Gradient */}
                <div className={`h-32 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white/80 text-sm font-medium">{project.category}</span>
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
                  <div className="absolute top-6 right-8 w-1 h-1 bg-white/50 rounded-full animate-pulse delay-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 hover:scale-110"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.live}
                        className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:scale-110"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      <span>{project.stats.forks}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{project.stats.views}</span>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <a
                      href={project.live}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-200 text-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform inline-block">View Project</span>
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium py-2 px-4 rounded-lg transition-all duration-200 text-center"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Call to Action */}
        <div className="mt-20">
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Interested in <span className="text-yellow-300">collaborating</span>?
              </h3>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Whether you're here for insights or just exploring, I hope my work adds value to your journey. 
                <span className="font-semibold"> Let us innovate, experiment and create something amazing together.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <span>Let's Work Together</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="mailto:contact@satyanchal.com"
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold py-3 px-8 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  <span>Send Email</span>
                  <Code className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
