import React from 'react';

// Step 1: Add a new optional 'shadowColor' property to our type definition.
type PixelatedContainerProps = {
  children?: React.ReactNode;
  className?: string;
  shadowColor?: string;
};

const PixelatedContainer = ({ children, className = '', shadowColor }: PixelatedContainerProps) => {
  // Step 2: Create a style object. If a shadowColor is provided,
  // we use it to create a custom box-shadow. Otherwise, the object is empty.
  const containerStyle = shadowColor
    ? { boxShadow: `5px 5px 0px 0px ${shadowColor}` }
    : {};

  return (
    // Step 3: Apply the style object. This inline style will override the default
    // white shadow from the 'shadow-pixel' class only when a shadowColor is passed.
    <div
      className={`bg-pixel-blue p-1 shadow-pixel ${className}`}
      style={containerStyle}
    >
      <div className="bg-pixel-bg text-white h-full">
        {children}
      </div>
    </div>
  );
};

export default PixelatedContainer;