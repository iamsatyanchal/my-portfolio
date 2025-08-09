import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
