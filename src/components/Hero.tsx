import React from 'react';
import { Github, MapPin, GitBranch, Users, Building2, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="z-10 gap-8 space-y-4 sm:flex sm:space-y-0" id="hero">
      <div className="mt-2 sm:block">
        <div className="relative inline-flex h-24 w-24 lg:h-32 lg:w-32">
          <img
            src="https://avatars.githubusercontent.com/u/62104921?v=4"
            className="z-10 h-full w-full rounded-xl border-2 dark:border-white"
            width="256"
            height="256"
            loading="lazy"
            alt="Profile"
          />
          <div className="absolute h-full w-full rounded-xl bg-gray-100 motion-safe:animate-pulse dark:bg-gray-900"></div>
        </div>
      </div>

      <div className="max-w-3xl flex-grow space-y-4 font-semibold not-italic leading-9 tracking-tighter">
        <h1 className="text-3xl text-black dark:text-white">
          <span className="block">Hey there :)</span>
          <span className="block">I'm Satyanchal 👋</span>
        </h1>
        
        <h2 className="text-xl text-gray-400">
          Your tagline goes here
          <br className="hidden md:block" />
        </h2>

        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Users size={16} strokeWidth={1.75} />
            <span className="font-semibold mr-1">0 followers • 0 following</span>
          </div>
          
          <div className="flex items-center gap-1">
            <GitBranch size={16} strokeWidth={1.75} />
            <span className="font-semibold mr-1">0</span>repositories
          </div>

          <div className="flex items-center gap-1">
            <Building2 size={16} strokeWidth={2} />
            <span className="font-semibold mr-1">Your Company</span>
          </div>

          <div className="flex items-center gap-1">
            <MapPin size={16} strokeWidth={2} />
            <span className="font-semibold mr-1">Your Location</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="default-transition group inline-flex items-center justify-center gap-2 rounded-md border-2 border-white bg-white px-3 py-1 text-sm font-semibold text-gray-400 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-500 dark:border-gray-900 dark:bg-gray-950 dark:hover:border-gray-800 dark:hover:bg-gray-900 dark:hover:text-gray-400"
          >
            <Github size={16} strokeWidth={2} />
            <span>Github</span>
          </a>

          <a
            href="https://your-website.com"
            target="_blank"
            rel="noopener noreferrer"
            className="default-transition group inline-flex items-center justify-center gap-2 rounded-md border-2 border-white bg-white px-3 py-1 text-sm font-semibold text-gray-400 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-500 dark:border-gray-900 dark:bg-gray-950 dark:hover:border-gray-800 dark:hover:bg-gray-900 dark:hover:text-gray-400"
          >
            <ExternalLink size={16} strokeWidth={2} />
            <span>Website</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
