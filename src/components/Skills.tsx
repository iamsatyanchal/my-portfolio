import React from 'react';

const Skills: React.FC = () => {
  const stats = [
    { label: "Projects Deployed", value: "15+", change: "+3 this month" },
    { label: "Code Commits", value: "1.2k+", change: "+127 this week" },
    { label: "Technologies", value: "12", change: "Always learning" },
    { label: "Years Experience", value: "3+", change: "Since 2021" }
  ];

  const technologies = [
    { name: "React", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Language" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Next.js", level: 88, category: "Framework" },
    { name: "Tailwind CSS", level: 95, category: "Styling" },
    { name: "PostgreSQL", level: 75, category: "Database" }
  ];

  return (
    <section className="relative z-10 space-y-12">
      {/* Stats Grid */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-white">Analytics & Growth</h2>
          <p className="text-gray-400 text-lg">Real-time insights into my development journey</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-gray-700 transition-colors">
              <div className="space-y-2">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
                <p className="text-xs text-green-400">{stat.change}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Progress */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Technology Stack</h3>
          <p className="text-gray-400">Core technologies I work with daily</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h4 className="text-white font-semibold">{tech.name}</h4>
                  <p className="text-xs text-gray-500">{tech.category}</p>
                </div>
                <span className="text-sm text-gray-400">{tech.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                  style={{width: `${tech.level}%`}}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Status */}
      <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl">
        <div className="flex items-center space-x-4">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <div>
            <h4 className="text-white font-semibold">Currently Building</h4>
            <p className="text-gray-400">Working on a new AI-powered portfolio analytics tool</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

export default Skills;

export default Skills;
