export const PROJECTS = [
  {
    title: 'Project Alpha',
    description: 'A cutting-edge data visualization tool built with React and D3, providing real-time analytics.',
    tags: ['React', 'TypeScript', 'D3', 'Tailwind'],
    imageUrl: 'https://picsum.photos/seed/alpha/400/250',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Project Beta',
    description: 'An e-commerce platform with a custom backend, focusing on a seamless user experience.',
    tags: ['Next.js', 'Stripe', 'GraphQL', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/beta/400/250',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Project Gamma',
    description: 'A mobile-first social media application that connects users through shared interests and events.',
    tags: ['React Native', 'Firebase', 'Redux'],
    imageUrl: 'https://picsum.photos/seed/gamma/400/250',
    codeUrl: '#',
  },
  {
    title: 'Project Delta',
    description: 'An open-source component library designed for accessibility and easy customization.',
    tags: ['Storybook', 'TypeScript', 'CSS-in-JS'],
    imageUrl: 'https://picsum.photos/seed/delta/400/250',
    liveUrl: '#',
    codeUrl: '#',
  },
];

export const SKILLS = [
  { name: 'React' },
  { name: 'TypeScript' },
  { name: 'JavaScript' },
  { name: 'Next.js' },
  { name: 'Node.js' },
  { name: 'Tailwind CSS' },
  { name: 'HTML5' },
  { name: 'CSS3' },
  { name: 'GraphQL' },
  { name: 'REST APIs' },
  { name: 'Git' },
  { name: 'Figma' },
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

// Fix: Cast window to any to access process.env without TypeScript errors.
const env = (window as any).process?.env || {};

export const SOCIAL_LINKS = {
  github: env.GITHUB_URL || '#',
  linkedin: env.LINKEDIN_URL || '#',
  twitter: env.TWITTER_URL || '#',
};

export const PERSONAL_INFO = {
  longBio: "Greetings, adventurer! I'm a seasoned frontend engineer with over a decade of experience crafting engaging digital experiences. My quest is to merge flawless code with intuitive design. From complex state management to fine-tuning animations, I thrive on challenges. My toolbox is packed with modern technologies to bring ideas to life, always aiming for pixel-perfect execution and delightful user interactions."
};