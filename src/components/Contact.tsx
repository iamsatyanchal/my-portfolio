import React from 'react';
import { Mail, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-white">Contact</h2>
      <div className="flex flex-wrap gap-4">
        <a
          href="mailto:iamsatyachal@gmail.com"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <Mail size={16} />
          <span>iamsatyanchal@gmail.com</span>
        </a>
        <a
          href="https://github.com/iamsatyanchal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <Github size={16} />
          <span>GitHub</span>
        </a>
        <a
          href="https://x.com/iamsatyanchal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <Twitter size={16} />
          <span>X / Twitter</span>
        </a>
      </div>
    </section>
  );
};
 

export default Contact;
