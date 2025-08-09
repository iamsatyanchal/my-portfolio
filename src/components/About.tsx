import React from 'react';
import { User, MapPin, Calendar, Mail, Github, Linkedin, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const personalInfo = [
    { label: "Age", value: "18", icon: "🎂" },
    { label: "Location", value: "Available Remotely", icon: "🌍" },
    { label: "Languages", value: "Hindi, English", icon: "🗣️" },
    { label: "Interests", value: "Programming, Math, Philosophy", icon: "💡" },
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "Express.js",
    "MongoDB", "PostgreSQL", "Docker", "AWS", "Git", "Tailwind CSS",
    "Next.js", "Vite", "HTML/CSS", "REST APIs", "GraphQL", "Redis"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* About Section - inspired by the comprehensive dark portfolio */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  I'm a passionate 18-year-old full stack developer who thrives on building, experimenting, and crafting 
                  intuitive, high-polish digital experiences. My journey in technology is driven by an insatiable curiosity 
                  and a desire to push boundaries.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  My interests span across various domains - from writing efficient, scalable, and clean code to exploring 
                  logical problem-solving and innovative solutions. I believe in questioning, learning, and growing through 
                  different perspectives, whether that's through programming challenges, mathematical concepts, or 
                  philosophical discussions.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Here, you'll find a mix of my personal thoughts, technical experiments, and projects that reflect my 
                  journey in development. Whether you're here for insights or just exploring, I hope my work adds value 
                  to your journey. Let's innovate, experiment, and create something amazing together.
                </p>
              </div>
            </div>

            {/* Personal Information Grid */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Personal Info</h3>
              <div className="grid grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg">{info.icon}</span>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{info.label}</span>
                    </div>
                    <span className="text-gray-900 dark:text-white font-medium">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar with contact and social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                Contact
              </h3>
              <div className="space-y-3">
                <a href="mailto:contact@satyanchal.com" className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">contact@satyanchal.com</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Available for remote work</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Open to opportunities</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
              <div className="space-y-3">
                <a href="https://github.com" className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Github className="w-4 h-4" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a href="https://linkedin.com" className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  <Coffee className="w-4 h-4" />
                  <span className="text-sm">Buy me a coffee</span>
                </a>
              </div>
            </div>

            {/* Current Status */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Current Status</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Available for work</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Learning new technologies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Building cool projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack - inspired by the comprehensive portfolio */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            <span className="mr-2">🛠️</span>
            Technology Stack
          </h3>
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8">
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-800 dark:hover:text-blue-200 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
