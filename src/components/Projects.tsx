import React from 'react';
import { ExternalLink, Github, Calendar, Tag, Zap, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, product management, and order tracking.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Express.js", "Tailwind CSS"],
      category: "Full Stack",
      status: "Completed",
      date: "Jan 2024",
      featured: true,
      githubUrl: "#",
      liveUrl: "#",
      stats: { users: "1.2k", uptime: "99.9%" }
    },
    {
      title: "Task Management App",
      description: "A productivity application built with React and TypeScript. Features real-time collaboration, drag-and-drop functionality, and advanced filtering options.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      tech: ["React", "TypeScript", "Socket.io", "PostgreSQL", "Express.js"],
      category: "Frontend",
      status: "In Progress",
      date: "Mar 2024",
      featured: false,
      githubUrl: "#",
      liveUrl: "#",
      stats: { tasks: "5k+", teams: "150+" }
    },
    {
      title: "AI Chat Bot",
      description: "An intelligent chatbot using OpenAI GPT API with context awareness, conversation memory, and customizable responses for various use cases.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center",
      tech: ["Python", "OpenAI API", "FastAPI", "React", "Redis"],
      category: "AI/ML",
      status: "Completed",
      date: "Feb 2024",
      featured: true,
      githubUrl: "#",
      liveUrl: "#",
      stats: { queries: "10k+", accuracy: "95%" }
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and historical weather data visualization.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center",
      tech: ["Next.js", "Chart.js", "OpenWeather API", "Mapbox"],
      category: "Frontend",
      status: "Completed",
      date: "Dec 2023",
      featured: false,
      githubUrl: "#",
      liveUrl: "#",
      stats: { cities: "500+", requests: "daily 2k+" }
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Vite. Features dark/light mode, smooth animations, and optimized performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      tech: ["React", "Vite", "Tailwind CSS", "TypeScript"],
      category: "Frontend",
      status: "Live",
      date: "Current",
      featured: false,
      githubUrl: "#",
      liveUrl: "#",
      stats: { visitors: "monthly 500+", performance: "98/100" }
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "AI/ML"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" || project.category === activeCategory
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "In Progress": return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "Live": return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="mr-2">🚀</span>
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, design, and problem-solving
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white dark:bg-gray-700 rounded-lg p-1 shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 lg:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400 flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <span className="text-xs text-white bg-black/50 px-2 py-1 rounded">{project.category}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-3 bg-gray-50 dark:bg-gray-600 rounded-lg">
                  {Object.entries(project.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">{value}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-500 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white dark:bg-gray-700 rounded-lg p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-yellow-500 mr-2" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">More Coming Soon!</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm constantly working on new projects and experimenting with cutting-edge technologies. 
            Check back regularly or follow me on GitHub to see what I'm building next!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-500 transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
