import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative z-10 text-center space-y-12" id="hero">
      {/* Main heading with gradient */}
      <div className="space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Build and deploy
            </span>
            <br />
            <span className="text-white">
              beautiful experiences.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Hey, I'm <span className="text-white font-semibold">Satyanchal</span> ─ a developer crafting unique & beautiful experiences, 
            one line of code at a time.
          </p>
        </div>

        {/* Metrics row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">15+</div>
            <div className="text-sm text-gray-500">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">3+</div>
            <div className="text-sm text-gray-500">Years Exp</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">1.2k+</div>
            <div className="text-sm text-gray-500">Commits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">12</div>
            <div className="text-sm text-gray-500">Technologies</div>
          </div>
        </div>
      </div>

      {/* Avatar with enhanced hover effect */}
      <div className="flex justify-center animate-slide-up">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition duration-500 animate-pulse"></div>
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
          <img
            src="https://avatars.githubusercontent.com/u/62104921?v=4"
            alt="Satyanchal's profile"
            className="relative w-40 h-40 rounded-full border-4 border-gray-800 shadow-2xl transform group-hover:scale-105 transition duration-300 object-cover"
          />
          {/* Status indicator */}
          <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-black flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Enhanced CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-scale-in">
        <button className="group px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          <span className="flex items-center space-x-2">
            <span>View Projects</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>
        <button className="group px-8 py-4 border-2 border-gray-700 text-white font-semibold rounded-lg hover:border-gray-500 hover:bg-gray-900 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1">
          <span className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a1 1 0 001.42 0L21 7M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Get in Touch</span>
          </span>
        </button>
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-8 h-8 text-gray-600 animate-float" style={{animationDelay: '0s'}}>
          {/* React icon */}
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.95-1.44-.54-.69-1.12-1.29-1.67-1.85-.55.56-1.13 1.16-1.67 1.85-.33.44-.65.91-.95 1.44l-.81 1.5.81 1.5c.3.53.62 1 .95 1.44.54.69 1.12 1.29 1.67 1.85.55-.56 1.13-1.16 1.67-1.85.33-.44.65-.91.95-1.44M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z"/>
          </svg>
        </div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 text-gray-600 animate-float" style={{animationDelay: '1s'}}>
          {/* TypeScript icon */}
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
