import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Calendar, Coffee, Code, ExternalLink, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Minimal background */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900 transition-colors duration-500"></div>
      
      {/* Spider web decoration in corner */}
      <div className="absolute top-10 left-10 opacity-20 dark:opacity-10">
        <svg width="120" height="120" viewBox="0 0 120 120" className="text-gray-400">
          <defs>
            <pattern id="web" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 0 10 L 20 10 M 10 0 L 10 20" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="120" height="120" fill="url(#web)"/>
          <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M 10 60 L 110 60 M 60 10 L 60 110 M 25 25 L 95 95 M 95 25 L 25 95" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Profile section inspired by your current design */}
          <div className="flex flex-col items-center space-y-6">
            {/* Avatar with status */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-500 to-orange-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center relative overflow-hidden">
                  <span className="text-4xl">🕷️</span>
                  {/* Online status */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                </div>
              </div>
              {/* Status badge like in Ben's design */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-full text-xs font-mono">
                !false ≠ false!
              </div>
            </div>

            {/* Navigation tabs inspired by your current design */}
            <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <div className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-md text-sm font-medium">
                🏠 Home
              </div>
              <a href="https://github.com" className="text-gray-600 dark:text-gray-400 px-4 py-2 rounded-md text-sm font-medium hover:bg-white dark:hover:bg-gray-700 transition-colors">
                📁 GitHub
              </a>
              <div className="text-gray-600 dark:text-gray-400 px-4 py-2 rounded-md text-sm font-medium">
                🌐 API Point
              </div>
            </div>
          </div>

          {/* Main heading with emoji like your design */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
              👋 Hey, I'm <span className="text-red-500">Satyanchal</span>
              <span className="text-red-500 animate-bounce inline-block ml-2">!</span>
            </h1>
            
            {/* Subtitle inspired by Ben's clean approach */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              I am a <span className="font-semibold text-gray-900 dark:text-white">18y/o full stack developer</span>, passionate about building, experimenting, 
              crafting intuitive, high-polish digital experiences.
            </p>
          </div>

          {/* Description with emojis matching your style */}
          <div className="space-y-4 max-w-2xl mx-auto text-left">
            <p className="flex items-start space-x-3 text-gray-700 dark:text-gray-300">
              <span className="text-xl">🚀</span>
              <span><strong>Programming:</strong> Writing efficient, scalable and clean code.</span>
            </p>
            <p className="flex items-start space-x-3 text-gray-700 dark:text-gray-300">
              <span className="text-xl">🧠</span>
              <span><strong>Science and Mathematics:</strong> Exploring logical problem-solving and innovative solutions.</span>
            </p>
            <p className="flex items-start space-x-3 text-gray-700 dark:text-gray-300">
              <span className="text-xl">📖</span>
              <span><strong>Philosophy:</strong> Questioning, learning and growing through different perspectives.</span>
            </p>
          </div>

          {/* Project preview inspired by your current design */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 max-w-2xl mx-auto text-left space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Here, you will find a mix of my personal thoughts, technical experiments and projects that reflect my journey in development:
            </p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <span>🔥</span>
                <span className="font-medium text-gray-900 dark:text-white">voidexity</span>
                <span className="text-gray-600 dark:text-gray-400">- A fresh UI experiment using Mistral LLM.</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>💭</span>
                <span className="font-medium text-gray-900 dark:text-white">soft.quotes</span>
                <span className="text-gray-600 dark:text-gray-400">- A collection of inspiring quotes to motivate and uplift your day.</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🤖</span>
                <span className="font-medium text-gray-900 dark:text-white">think.</span>
                <span className="text-gray-600 dark:text-gray-400">- A fully AI powered Human × AI social media platform.</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>⚡</span>
                <span className="font-medium text-gray-900 dark:text-white">apipoint</span>
                <span className="text-gray-600 dark:text-gray-400">- A hub of diverse APIs developed for modern applications.</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📊</span>
                <span className="font-medium text-gray-900 dark:text-white">gitprofile</span>
                <span className="text-gray-600 dark:text-gray-400">- A sleek and improved way to view GitHub profiles.</span>
              </div>
            </div>
          </div>

          {/* Bottom message inspired by your design */}
          <div className="text-center space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              Whether you're here for insights or just exploring, I hope my work adds value to your journey.
            </p>
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              Let us innovate, experiment and create something amazing together. Welcome to my world ✨ hehe
            </p>
            
            {/* Current status like in Ben's design */}
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <span>🎵</span>
                <span>Spotify is off, so no music for now. There's a good chance I'm sleeping 😴</span>
              </div>
            </div>
            
            {/* Signature like your design */}
            <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
              <span>🛠️ with</span>
              <span className="text-red-500">❤️</span>
              <span>by</span>
              <span className="font-signature text-lg text-gray-900 dark:text-white">Satyanchal</span>
            </div>
          </div>

          {/* Time display inspired by Ben's design */}
          <div className="text-center text-sm text-gray-400 dark:text-gray-500 font-mono">
            © {currentTime.getFullYear()} • Last updated: {currentTime.toLocaleTimeString()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

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
