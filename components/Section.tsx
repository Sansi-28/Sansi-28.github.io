import React from 'react';

// Fix: Added TypeScript props type for the component.
type SectionProps = {
  id: string;
  title: string;
  // Fix: Made children optional to fix errors where Section component might be used without children.
  children?: React.ReactNode;
};

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section id={id} className="py-20 md:py-28">
      <h2 className="text-2xl md:text-3xl text-center mb-12 md:mb-16 text-pixel-pink">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;