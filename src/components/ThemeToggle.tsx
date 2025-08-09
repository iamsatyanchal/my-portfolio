import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-100/80 dark:hover:bg-gray-700/80 transition-all duration-300 hover:scale-105 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-500 rotate-0 scale-100 transition-all duration-500 group-hover:rotate-180" />
        ) : (
          <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300 rotate-0 scale-100 transition-all duration-500 group-hover:-rotate-12" />
        )}
      </div>
      
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
