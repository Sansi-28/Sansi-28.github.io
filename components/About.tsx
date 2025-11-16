import React from 'react';
import Section from './Section.js';
import { PERSONAL_INFO } from '../constants.js';

const About = () => {
  return (
    <Section id="about" title="<About Me />">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 space-y-6 text-sm md:text-base leading-loose">
          <p>
            {PERSONAL_INFO.longBio}
          </p>
        </div>
        <div className="md:col-span-2 flex justify-center items-center">
          <div className="relative w-64 h-64">
            <div className="absolute -top-3 -left-3 w-full h-full border-4 border-pixel-yellow"></div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border-4 border-pixel-pink"></div>
            <img 
              src="/me.jpeg" 
              alt="Pixelated Avatar"
              className="relative z-10 w-full h-full object-cover border-4 border-pixel-blue"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;