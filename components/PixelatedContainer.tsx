import React from 'react';

// Fix: Added TypeScript props type for the component.
type PixelatedContainerProps = {
  // Fix: Made children optional to fix errors where PixelatedContainer might be used without children.
  children?: React.ReactNode;
  className?: string;
};

const PixelatedContainer = ({ children, className = '' }: PixelatedContainerProps) => {
  return (
    <div className={`bg-pixel-blue p-1 shadow-pixel ${className}`}>
      <div className="bg-pixel-bg text-white h-full">
        {children}
      </div>
    </div>
  );
};

export default PixelatedContainer;