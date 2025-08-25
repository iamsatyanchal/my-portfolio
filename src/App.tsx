import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-black">
        <main className="mx-auto max-w-2xl px-6 py-16 space-y-12">
          <Hero />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
export default App;
