import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md p-2 text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
      
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        isDark 
          ? 'bg-yellow-400/20 shadow-lg shadow-yellow-400/20' 
          : 'bg-blue-400/20 shadow-lg shadow-blue-400/20'
      }`}></div>
    </button>
  );
};

export default ThemeToggle;
