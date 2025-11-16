import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants.js';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-pixel-bg/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-xl md:text-2xl text-pixel-yellow hover:text-white transition-colors">
            &lt;PIXELDEV /&gt;
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="text-sm uppercase tracking-widest hover:text-pixel-green transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Nav Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-50 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-pixel-bg transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-2xl uppercase tracking-widest hover:text-pixel-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;