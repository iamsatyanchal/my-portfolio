import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="sm:flex gap-8 space-y-4 sm:space-y-0 z-10" id="hero">
      <div className="max-w-3xl space-y-4 font-semibold not-italic leading-9 tracking-tighter grow">
        <h1 className="text-4xl text-black dark:text-white">
          Hey, I'm Satyanchal ─ a developer
        </h1>
        <h2 className="text-2xl text-gray-400 dark:text-gray-600">
          Crafting unique & beautiful experiences,
          <br className="hidden md:block" />
          one line of code at a time.
        </h2>
      </div>
      
      <div className="hidden sm:block">
        <div className="relative inline-flex h-24 w-24 lg:h-32 lg:w-32">
          <img
            src="https://avatars.githubusercontent.com/u/62104921?v=4"
            alt="A photo of myself"
            loading="lazy"
            decoding="async"
            fetchpriority="auto"
            width="256"
            height="256"
            className="z-10 h-full w-full rounded-full"
          />
          <div className="absolute h-full w-full rounded-full bg-gray-100 dark:bg-gray-900 motion-safe:animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

