import React from 'react';
import { PROJECTS } from '../constants.js';
import Section from './Section.js';
import PixelatedContainer from './PixelatedContainer.js';
import InteractiveCard from './InteractiveCard.js';

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const Projects = () => {
  return (
    <Section id="projects" title="<My Projects />">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <InteractiveCard key={project.title}>
            <PixelatedContainer className="flex flex-col h-full">
              <div className="border-4 border-pixel-bg">
                <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover" />
              </div>
              <div className="p-4 flex flex-col flex-grow no-tilt-area">
                <h3 className="text-lg text-pixel-yellow mb-2">{project.title}</h3>
                <p className="text-xs leading-relaxed mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-pixel-bg text-pixel-green px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-auto">
                  {project.codeUrl && (
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm hover:text-pixel-blue transition-colors">
                      <CodeIcon />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm hover:text-pixel-blue transition-colors">
                      <ExternalLinkIcon />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </PixelatedContainer>
          </InteractiveCard>
        ))}
      </div>
    </Section>
  );
};

export default Projects;