import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-gray-950 text-gray-100">
        <main className="mx-auto flex h-full max-w-4xl flex-col space-y-10 px-4 py-16 pb-8 sm:px-6 lg:px-8">
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Contact />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
export default App;
