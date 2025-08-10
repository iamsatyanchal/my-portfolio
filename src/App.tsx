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
       {/* <Navigation /> */}
        <main className="flex flex-col h-full mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-10 pb-8">
          <Hero />
          <div className="grid gap-6 z-10">
            <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-800 dark:border-gray-200 px-2 pb-2 overflow-auto md:col-span-6 max-h-80 min-h-52 md:min-h-[22rem] scrollbar-hidden">
              <Projects />
            </section>
          
          </div>
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
export default App;
