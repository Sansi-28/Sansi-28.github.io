import React from 'react';

// Fix: Added TypeScript props type for the component.
type PixelatedButtonProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

function PixelatedButton({
  as,
  children,
  ...props
}: PixelatedButtonProps) {
  const Component = as || 'button';

  return (
    <Component
      {...props}
      className={`
        inline-block bg-pixel-pink text-white text-sm uppercase tracking-widest
        py-3 px-6 border-2 border-pixel-border shadow-pixel-sm 
        transition-all duration-100 ease-in-out
        hover:bg-pixel-yellow hover:text-pixel-bg
        active:translate-y-1 active:translate-x-1 active:shadow-none
        ${props.className || ''}
      `}
    >
      {children}
    </Component>
  );
}

export default PixelatedButton;
