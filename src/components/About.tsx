import React from 'react';

const About: React.FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-white">About</h2>
      <p className="text-gray-600 dark:text-gray-400">
        Write your bio here. A brief introduction about yourself, your background,
        and what you're passionate about.
      </p>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-black dark:text-white">Skills</h3>
        <p className="text-gray-600 dark:text-gray-400">
          List your key skills here: React, TypeScript, Node.js, etc.
        </p>
      </div>
    </section>
  );
};

export default About;
