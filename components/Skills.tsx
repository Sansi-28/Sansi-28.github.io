import React from 'react';
import { SKILLS } from '../constants.js';
import Section from './Section.js';
import PixelatedContainer from './PixelatedContainer.js';
import InteractiveCard from './InteractiveCard.js';

const Skills = () => {
  return (
    <Section id="skills" title="<My Skills />">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {SKILLS.map((skill) => (
          <InteractiveCard key={skill.name}>
            <PixelatedContainer>
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