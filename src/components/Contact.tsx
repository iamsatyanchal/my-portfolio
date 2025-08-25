import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="space-y-4">
      <div className="flex flex-wrap gap-4 text-sm">
        <a
          href="https://bsky.app/profile/iamsatyanchal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Bluesky
        </a>
        <a
          href="https://github.com/iamsatyanchal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          GitHub
        </a>
        <a
          href="https://x.com/iamsatyanchal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          X
        </a>
      </div>
      <p className="text-xs text-gray-400">© 2025</p>
    </section>
  );
};
 

export default Contact;
