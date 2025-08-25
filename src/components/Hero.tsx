import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="space-y-6" id="hero">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-black">
          Hey, I'm Satyanchal ─ a developer
        </h1>
        <h2 className="text-xl text-gray-600">
          Crafting unique & beautiful experiences,
          <br />
          one line of code at a time.
        </h2>
      </div>
      
      <div className="flex justify-center sm:justify-start">
        <div className="relative">
          <img
            src="https://avatars.githubusercontent.com/u/62104921?v=4"
            alt="A photo of myself sat on the green cliffs of Cornwall in the UK with the ocean & sky in the background."
            loading="lazy"
            decoding="async"
            width="128"
            height="128"
            className="w-32 h-32 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
