import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navigation: React.FC = () => {
  return (
    <nav className="flex items-center justify-end">
      <ThemeToggle />
    </nav>
  );
};

export default Navigation;
