import React, { useRef, useState } from 'react';

// Fix: Added TypeScript props type for the component.
type InteractiveCardProps = {
  children: React.ReactNode;
  className?: string;
  // Fix: Add optional key to props to satisfy linter rule.
  key?: React.Key;
};

const InteractiveCard = ({ children, className }: InteractiveCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
    transition: 'transform 0.5s ease-in-out',
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const target = e.target as HTMLElement;
    const isOverInteractiveElement = target.closest('a, button, .no-tilt-area');

    if (isOverInteractiveElement) {
      // If hovering over a link, button, or designated "no-tilt-area", flatten the card.
      setStyle({
        transform: 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
        transition: 'transform 0.2s ease-out',
      });
      return;
    }

    const { clientX, clientY } = e;
    const { top, left, width, height } = cardRef.current.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    
    const rotateX = (y / height - 0.5) * -15; // Reduced tilt intensity
    const rotateY = (x / width - 0.5) * 15;  // Reduced tilt intensity

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-in-out',
    });
  };

  return (
    <div
      ref={cardRef}
      className={className || ''}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

export default InteractiveCard;