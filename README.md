# Personal Portfolio Website

A modern, responsive personal portfolio website built with React and TypeScript, featuring a clean design and smooth animations.

## 🚀 Features

- Responsive design that works on all devices
- Dark/Light theme support
- Smooth animations using Framer Motion
- Modern and clean UI with Tailwind CSS
- Type-safe development with TypeScript
- Fast loading times with Vite

## 🛠️ Technologies Used

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** 
  - Tailwind CSS
  - PostCSS
- **Icons & UI:** Lucide React
- **Animations:** Framer Motion
- **Development Tools:**
  - ESLint for code linting
  - TypeScript for type checking
  - Autoprefixer for CSS compatibility

## 📋 Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact section
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero/landing section
│   ├── Navigation.tsx  # Navigation bar
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills section
│   ├── ThemeToggle.tsx # Theme switcher
│   └── Timeline.tsx    # Experience timeline
├── contexts/           # React contexts
│   └── ThemeContext.tsx# Theme management
├── App.tsx             # Main app component
├── index.css          # Global styles
└── main.tsx           # Entry point
```

## 🚦 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎨 Customization

The project uses Tailwind CSS for styling. You can customize the theme by modifying:
- `tailwind.config.js` for theme customization
- `postcss.config.js` for PostCSS plugins
- `src/index.css` for global styles

## 🌐 Browser Support

The portfolio website is compatible with all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices

## ⚖️ License

This project is open source and available under the MIT License.
