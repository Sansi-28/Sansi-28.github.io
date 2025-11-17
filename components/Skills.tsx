import React from 'react';
import { SKILLS } from '../constants.js';
import Section from './Section.js';
import PixelatedContainer from './PixelatedContainer.js';
import InteractiveCard from './InteractiveCard.js';

const Skills = () => {
  return (
    <Section id="skills" title="<My Skills />">
      
      {/* ====================================================== */}
      {/* START: New Legend Section                             */}
      {/* ====================================================== */}
      <div className="max-w-md mx-auto mb-12 flex justify-center items-center gap-4 md:gap-6 text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4" style={{ backgroundColor: '#4CAF50' }}></div>
          <span>Expert</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4" style={{ backgroundColor: '#FFC107' }}></div>
          <span>Intermediate</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4" style={{ backgroundColor: '#F44336' }}></div>
          <span>Beginner</span>
        </div>
      </div>
      {/* ====================================================== */}
      {/* END: New Legend Section                               */}
      {/* ====================================================== */}

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {SKILLS.map((skill) => (
          <InteractiveCard key={skill.name}>
            <PixelatedContainer shadowColor={skill.color}>
              <div className="p-4 h-full flex items-center justify-center text-center">
                <p className="text-xs">{skill.name}</p>
              </div>
            </PixelatedContainer>
          </InteractiveCard>
        ))}
      </div>
    </Section>
  );
};

export default Skills;