import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <Navigation />
        
        {/* Main content */}
        <main className="mx-auto max-w-4xl px-6 pt-32 pb-20 space-y-32">
          <Hero />
          <div id="projects">
            <Projects />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <Footer />
        </main>
        
        {/* Background decoration */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-green-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default App;
