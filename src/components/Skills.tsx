import React from 'react';
import { Code2, Database, Wrench, Zap, Star, TrendingUp } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "TypeScript", level: 85, icon: "🔷" },
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "Tailwind CSS", level: 88, icon: "🎨" },
        { name: "HTML/CSS", level: 92, icon: "🌐" },
        { name: "Next.js", level: 80, icon: "▲" },
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 88, icon: "🟢" },
        { name: "Express.js", level: 85, icon: "🚀" },
        { name: "Python", level: 82, icon: "🐍" },
        { name: "REST APIs", level: 90, icon: "🔗" },
        { name: "GraphQL", level: 75, icon: "◆" },
        { name: "Authentication", level: 80, icon: "🔐" },
      ]
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "PostgreSQL", level: 78, icon: "🐘" },
        { name: "Redis", level: 70, icon: "📦" },
        { name: "Prisma", level: 75, icon: "⚡" },
        { name: "Firebase", level: 80, icon: "🔥" },
        { name: "SQL", level: 82, icon: "📊" },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Cog className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git & GitHub", level: 90, icon: "🐙" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "AWS", level: 70, icon: "☁️" },
        { name: "Vercel", level: 85, icon: "▲" },
        { name: "VS Code", level: 95, icon: "🔵" },
        { name: "Linux", level: 80, icon: "🐧" },
      ]
    }
  ];

  const certifications = [
    { name: "Full Stack Web Development", issuer: "Self-taught", year: "2023", icon: "🎓" },
    { name: "React Advanced Patterns", issuer: "Online Course", year: "2023", icon: "⚛️" },
    { name: "Node.js Best Practices", issuer: "Community", year: "2024", icon: "🟢" },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="mr-2">💻</span>
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-6">
                <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white mr-3`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">{skill.icon}</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">20+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">2+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Passion</div>
          </div>
        </div>

        {/* Learning Journey */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            <span className="mr-2">📚</span>
            Continuous Learning
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Currently Learning */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Currently Learning</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 dark:text-gray-300">Advanced React Patterns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 dark:text-gray-300">System Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 dark:text-gray-300">AI & Machine Learning</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Learning Milestones</h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-lg mt-1">{cert.icon}</span>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{cert.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer} • {cert.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
