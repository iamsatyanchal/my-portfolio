import React from 'react';
import { Code2, Database, Wrench, Zap, Star, TrendingUp } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      color: "from-blue-400 to-cyan-500",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML/CSS", level: 95 },
      ]
    },
    {
      title: "Backend",
      icon: Database,
      color: "from-green-400 to-emerald-500",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
      ]
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 85 },
        { name: "VS Code", level: 95 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-purple-50 dark:from-emerald-900/20 dark:via-gray-900 dark:to-purple-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-6">
            <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">My Skills</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Technical </span>
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I work with to <span className="font-semibold text-emerald-600 dark:text-emerald-400">bring ideas to life</span> and create 
            <span className="font-semibold text-blue-600 dark:text-blue-400"> amazing digital experiences</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">{skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden"
              >
                {/* Category Header */}
                <div className={`h-20 bg-gradient-to-br ${category.color} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <IconComponent className="w-8 h-8 text-white relative z-10" />
                  
                  {/* Floating particles */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/50 rounded-full animate-pulse delay-300"></div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-1">
                          {skill.level >= 90 && <Star className="w-3 h-3 text-yellow-500" />}
                          {skill.level >= 85 && <TrendingUp className="w-3 h-3 text-green-500" />}
                          <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className={`bg-gradient-to-r ${category.color} h-3 rounded-full transition-all duration-1000 ease-out shadow-sm`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 3 + skillIndex) * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category footer */}
                <div className="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-center text-xs text-gray-500 dark:text-gray-400">
                    {category.skills.length} Technologies
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Additional Info */}
        <div className="mt-20">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-5xl mx-auto shadow-2xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-yellow-500" />
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Always <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Learning</span>
                </h3>
                <Zap className="w-6 h-6 text-yellow-500" />
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Technology evolves rapidly, and so do I. I'm constantly exploring <span className="font-semibold text-emerald-600 dark:text-emerald-400">new frameworks</span>, 
                tools, and methodologies to stay at the forefront of development. Currently diving 
                deeper into <span className="font-semibold text-blue-600 dark:text-blue-400">AI/ML integration</span>, 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> serverless architectures</span>, and advanced animation techniques.
              </p>
              
              {/* Progress indicators */}
              <div className="flex justify-center gap-8 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">∞</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Curiosity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
