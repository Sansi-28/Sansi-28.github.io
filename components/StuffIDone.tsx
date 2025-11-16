import React from 'react';
import Section from './Section';
import InteractiveCard from './InteractiveCard';
import PixelatedContainer from './PixelatedContainer';
import { ACCOMPLISHMENTS } from '../constants';
import type { Accomplishment } from '../types';

// A small icon to link out, just like in the Projects section
const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

// Helper object to map a category to a specific color from your theme
const categoryColors: Record<Accomplishment['category'], string> = {
  Hackathon: 'bg-pixel-green text-pixel-bg',
  Achievement: 'bg-pixel-yellow text-pixel-bg',
  Certificate: 'bg-pixel-blue text-white',
  Course: 'bg-pixel-pink text-white',
  Project: 'bg-gray-500 text-white',
};

const StuffIDone: React.FC = () => {
  return (
    <Section id="stuff" title="⭐ Stuff I've Done">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ACCOMPLISHMENTS.map((item) => (
          <InteractiveCard key={item.title}>
            <PixelatedContainer className="flex flex-col h-full">
              <div className="p-4 flex flex-col flex-grow no-tilt-area">
                
                {/* Header with Category and Date */}
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-xs font-bold px-2 py-1 ${categoryColors[item.category]}`}>
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>

                {/* Main Content */}
                <h3 className="text-md text-pixel-yellow mb-2">{item.title}</h3>
                <p className="text-xs leading-relaxed mb-4 flex-grow text-gray-300">{item.description}</p>
                
                {/* Link at the bottom */}
                {item.url && (
                   <a 
                     href={item.url} 
                     target={item.url.startsWith('#') ? '_self' : '_blank'}
                     rel="noopener noreferrer" 
                     className="flex items-center space-x-2 text-sm hover:text-pixel-blue transition-colors mt-auto"
                   >
                     <ExternalLinkIcon />
                     <span>{item.category === 'Certificate' ? 'View Certificate' : 'Learn More'}</span>
                   </a>
                )}
              </div>
            </PixelatedContainer>
          </InteractiveCard>
        ))}
      </div>
    </Section>
  );
};

export default StuffIDone;