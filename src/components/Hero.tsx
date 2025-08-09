import { Github, MapPin, GitBranch, Users, Building2, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Interactive cursor glow */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-0 opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'all 0.3s ease-out',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Floating status indicator */}
          <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Available for work</span>
            </div>
          </div>

          {/* Enhanced Profile Image with Spider Web */}
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto relative">
              {/* Spider web background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="160" height="160" className="text-gray-300 dark:text-gray-600 opacity-50">
                  <defs>
                    <pattern id="web" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 0 20 L 40 20 M 20 0 L 20 40" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <circle cx="80" cy="80" r="75" fill="url(#web)" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
                </svg>
              </div>
              
              {/* Profile image container */}
              <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center relative overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800"></div>
                  <div className="relative z-10">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">S</span>
                  </div>
                  {/* Floating particles */}
                  <Sparkles className="absolute top-2 right-2 w-4 h-4 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Main heading with enhanced styling */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
            <span className="block text-gray-800 dark:text-gray-200">Hey, I'm</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
              Satyanchal
            </span>
            <span className="inline-block text-red-500 animate-bounce">!</span>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse opacity-70"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-400 rounded-full animate-pulse opacity-70 delay-500"></div>
          </h1>

          {/* Enhanced subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            I am a <span className="font-semibold text-blue-600 dark:text-blue-400">18y/o full stack developer</span>, passionate about building, experimenting, crafting 
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold"> intuitive, high-polish digital experiences</span>.
            <br />
            <span className="text-lg text-gray-500 dark:text-gray-400 mt-2 block">
              I thrive on pushing boundaries and building tools that challenge the status quo and inspire change.
            </span>
          </p>

          {/* Enhanced interest badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="group flex items-center gap-2 px-6 py-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-full border border-blue-200/50 dark:border-blue-500/30 hover:border-blue-400/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Code className="w-5 h-5 text-blue-500 group-hover:animate-pulse" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Programming</span>
            </div>
            <div className="group flex items-center gap-2 px-6 py-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-full border border-purple-200/50 dark:border-purple-500/30 hover:border-purple-400/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Brain className="w-5 h-5 text-purple-500 group-hover:animate-pulse" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Science & Mathematics</span>
            </div>
            <div className="group flex items-center gap-2 px-6 py-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-full border border-orange-200/50 dark:border-orange-500/30 hover:border-orange-400/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Coffee className="w-5 h-5 text-orange-500 group-hover:animate-pulse" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Philosophy</span>
            </div>
          </div>

          {/* Enhanced Social links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
            </a>
            <a
              href="mailto:contact@satyanchal.com"
              className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-gray-200/50 dark:border-gray-700/50 hover:border-red-300 dark:hover:border-red-600"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-red-500 group-hover:text-red-600 transition-colors" />
            </a>
            <a
              href="/api"
              className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-300 dark:hover:border-purple-600"
              aria-label="API Point"
            >
              <ExternalLink className="w-6 h-6 text-purple-500 group-hover:text-purple-600 transition-colors" />
            </a>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
            >
              <span>View My Work</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <span>Get In Touch</span>
              <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              className="group inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
            >
              <span>Resume</span>
              <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 mx-auto border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
