import React, { useState, useEffect } from 'react';
import PixelatedButton from './PixelatedButton.js';
import CompanionCharacter from './CompanionCharacter.js';

const useTypingEffect = (text, speed) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    // Add a small delay before starting to type for better pacing
    const startTypingTimeout = setTimeout(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);
      return () => clearInterval(typingInterval);
    }, 200); // 300ms delay before typing starts

    return () => clearTimeout(startTypingTimeout);
  }, [text, speed]);

  return displayedText;
};

const Hero = () => {
  const subtitleToType = "Full-Stack Engineer Specializing in React & Spring Boot.";
  const typedSubtitle = useTypingEffect(subtitleToType, 80);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
      <div className="space-y-6">
        <div className="min-h-[80px] sm:min-h-[100px] flex justify-center items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-pixel-green">
            <span>Hello, I'm Santosh.</span>
            {/* This wrapper acts as a stable placeholder for the character */}
            <div className="inline-block align-middle mx-2 md:mx-4 relative top-[-0.1em] w-16 h-14 sm:w-20 sm:h-16">
              <CompanionCharacter />
            </div>
          </h1>
        </div>
        <p className="text-lg md:text-xl text-pixel-yellow min-h-[28px] md:min-h-[32px]">
          {typedSubtitle}
          {typedSubtitle.length < subtitleToType.length && (
            <span className="inline-block border-r-4 border-white animate-blink w-1">&nbsp;</span>
          )}
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          I build robust full-stack web applications with clean architecture, reliable backends, and smooth user interfaces.
        </p>
        <div className="pt-4">
          {/* Fix: Added children to PixelatedButton to resolve missing property error. */}
          <PixelatedButton as="a" href="#projects">
            View My Work
          </PixelatedButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;