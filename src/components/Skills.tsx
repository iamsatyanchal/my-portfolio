import React from 'react';

const Skills: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Events Section */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-black">Events</h3>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">Released Portfolio v2.0 25-08-2025</p>
          <p className="text-sm text-gray-600">Started Learning React 15-01-2024</p>
          <p className="text-sm text-gray-600">First Web Project 22-06-2023</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>🎂</span>
          <span>Happy Birthday!</span>
          <span className="text-xs text-gray-400">09-08-1997</span>
        </div>
      </section>

      {/* Building Section */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-black">Building</h3>
        <div className="text-sm text-gray-600">
          <p className="font-semibold">Nothing right now</p>
          <p>I'm not working on anything right now</p>
        </div>
      </section>

      {/* Music Section */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-black">Music</h3>
        <div className="text-sm text-gray-600">
          <p className="font-semibold">Nothing right now</p>
          <p>I'm not currently listening to any music</p>
        </div>
      </section>
    </div>
  );
};

export default Skills;
