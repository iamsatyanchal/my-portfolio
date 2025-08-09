import React from 'react';
import { Code2, Brain, Coffee, Lightbulb, Sparkles, Heart, Zap, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-purple-900/20 dark:via-gray-900 dark:to-blue-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6">
            <Heart className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">About Me</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Get to </span>
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">Know Me</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here's a bit more about my <span className="font-semibold text-purple-600 dark:text-purple-400">journey</span> and what 
            <span className="font-semibold text-pink-600 dark:text-pink-400"> drives me</span> to create amazing things
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="group">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I am a <span className="font-bold text-blue-600 dark:text-blue-400">18-year-old full stack developer</span> with an 
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold"> insatiable passion</span> for building, experimenting, 
                  and crafting intuitive, high-polish digital experiences. I thrive on 
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400"> pushing boundaries</span> and 
                  building tools that challenge the status quo and inspire change.
                </p>
              </div>
              
              <div className="group">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  My interests span across various domains - from writing 
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400"> efficient, scalable and clean code</span> to 
                  exploring logical problem-solving and innovative solutions. I believe in 
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-semibold"> questioning, learning 
                  and growing</span> through different perspectives.
                </p>
              </div>

              <div className="group">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Here, you will find a mix of my personal thoughts, technical experiments and projects that 
                  reflect my journey in development. Whether you're here for insights or just exploring, I hope 
                  my work <span className="font-semibold text-green-600 dark:text-green-400">adds value to your journey</span>.
                </p>
              </div>
            </div>

            {/* Enhanced Skills Grid */}
            <div className="pt-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-500" />
                What I Do
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="group flex items-center space-x-3 p-3 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Code2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Frontend Development</span>
                </div>
                <div className="group flex items-center space-x-3 p-3 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 hover:scale-105">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Backend Development</span>
                </div>
                <div className="group flex items-center space-x-3 p-3 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:scale-105">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">UI/UX Design</span>
                </div>
                <div className="group flex items-center space-x-3 p-3 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-300 hover:scale-105">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">API Development</span>
                </div>
              </div>
            </div>

            {/* Passion Areas */}
            <div className="pt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                My Passions
              </h3>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 rounded-full">
                  <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-blue-700 dark:text-blue-300 font-medium">Programming</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/40 dark:to-purple-800/40 rounded-full">
                  <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-purple-700 dark:text-purple-300 font-medium">Science & Mathematics</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/40 dark:to-orange-800/40 rounded-full">
                  <Coffee className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  <span className="text-orange-700 dark:text-orange-300 font-medium">Philosophy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual Element */}
          <div className="relative">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-pink-100/50 to-blue-100/50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20"></div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-400/20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-6 h-6 bg-blue-400/20 rounded-full animate-pulse delay-500"></div>
              <div className="absolute top-1/2 right-8 w-4 h-4 bg-purple-400/20 rounded-full animate-pulse delay-1000"></div>
              
              <div className="relative z-10 text-center">
                <div className="mb-8">
                  <div className="w-28 h-28 mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <Lightbulb className="w-12 h-12" />
                  </div>
                </div>
                
                <blockquote className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 leading-relaxed">
                  "Let us <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">innovate</span>, 
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> experiment</span> and create something 
                  <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"> amazing</span> together"
                </blockquote>
                
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Welcome to my world <span className="text-2xl">🚀</span>
                </p>
                
                {/* Stats */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">18</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Old</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">5+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">∞</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Ideas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
