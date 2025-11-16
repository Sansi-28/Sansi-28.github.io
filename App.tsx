import React from 'react';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Skills from './components/Skills.js';

const App = () => {
  return (
    <div className="bg-pixel-bg text-white min-h-screen font-pixel">
      <div className="scanlines"></div>
      <Header />
      <main className="container mx-auto px-4 md:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;