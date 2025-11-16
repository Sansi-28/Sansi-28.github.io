import type { Project, Skill, Accomplishment } from './types';
export const PROJECTS = [
  {
    title: 'KidCode Interpreter',
    description:
      'A multi-platform interpreter for the KidCode language featuring a Java core engine, a Spring Boot API, a web IDE with Monaco, and a Swing desktop app.',
    tags: ['Java', 'Spring Boot', 'Monaco Editor', 'Swing'],
    imageUrl: '/KidCode.png',
    liveUrl: 'https://kidcode-interpreter.onrender.com/',
    codeUrl: 'https://github.com/Sansi-28/KidCode',
  },
  {
    title: 'Human Activity Detection (HAD)',
    description:
      'A real-time ML system that predicts user activities from accelerometer and gyroscope data using Python and scikit-learn.',
    tags: ['Python', 'pandas', 'NumPy', 'scikit-learn'],
    imageUrl: '/HAR.png',
    liveUrl: 'https://har-mv2w.onrender.com/',
    codeUrl: 'https://github.com/Sansi-28/HAR',
  },
  {
    title: 'AR Indoor Navigation',
    description:
      'A browser-based AR navigation system for complex buildings using AR.js, Three.js, and Flask.',
    tags: ['AR.js', 'Three.js', 'A-Frame', 'Flask'],
    imageUrl: '/AR.png',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'SkillVerse Network',
    description:
      'A full-stack skill-exchange platform with real-time chat, WebRTC calling, JWT auth, and a Spring Boot + PostgreSQL backend.',
    tags: [
      'React',
      'Spring Boot',
      'PostgreSQL',
      'WebSockets',
      'WebRTC',
      'JWT',
    ],
    imageUrl: '/Skillverse-Network.png',
    liveUrl: 'https://skillverse-network-frontend.onrender.com/',
    codeUrl: 'https://github.com/Sansi-28/SkillVerse-Network',
  }
];

export const SKILLS = [
  { name: 'Java' },
  { name: 'Python' },
  { name: 'JavaScript' },
  { name: 'React' },
  { name: 'Spring Boot' },
  { name: 'Node.js' },
  { name: 'MongoDB' },
  { name: 'PostgreSQL' },
  { name: 'MySQL' },
  { name: 'REST APIs' },
  { name: 'Socket.IO / WebSockets' },
  { name: 'WebRTC' },
  { name: 'Three.js / AR.js' },
  { name: 'pandas' },
  { name: 'NumPy' },
  { name: 'scikit-learn' },
  { name: 'Git' },
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Stuff', href: '#stuff' }, 
  { name: 'Contact', href: '#contact' },
];

const env = (window as any).process?.env || {};

export const SOCIAL_LINKS = {
  github: 'https://github.com/Sansi-28',
  linkedin: 'http://www.linkedin.com/in/santosh-singh-954a80260',
  twitter: env.TWITTER_URL || '#',
  instagram: '#'
};

export const PERSONAL_INFO = {
  longBio:
    "I enjoy creating full-stack apps, exploring AI and ML, and experimenting with tech that teaches me something new. My work ranges from AR-based navigation tools to machine learning pipelines and real-time chat systems—and honestly, half of it started as random ideas I wanted to try at 2 AM. I love turning curious thoughts into real, working projects.",
};

// Add this new array to constants.ts

export const ACCOMPLISHMENTS: Accomplishment[] = [
  {
    category: 'Hackathon',
    title: '🏆 1st Place - CodeFest 2024',
    description: 'Developed a real-time data visualization tool for environmental monitoring, winning the grand prize for innovation and impact.',
    date: 'May 2024',
    url: '#',
  },
  {
    category: 'Certificate',
    title: '📜 Advanced TypeScript - Scrimba',
    description: 'Completed an intensive course on advanced TypeScript patterns, including decorators, generics, and module augmentation.',
    date: 'March 2024',
    url: '#',
  },
  {
    category: 'Achievement',
    title: '⭐ GitHub Star Developer',
    description: 'Recognized by the community for contributing to popular open-source libraries and maintaining helpful developer resources.',
    date: 'Ongoing',
  },
  {
    category: 'Project',
    title: '🤖 PixelBot AI Assistant',
    description: 'The very AI assistant featured on this site! Built with the Google Gemini API and integrated into a React frontend.',
    date: 'July 2024',
    url: '#contact', // You can link to other sections!
  },
  {
    category: 'Course',
    title: '🧠 Deep Learning Fundamentals',
    description: 'A comprehensive course covering neural networks, model training, and practical applications with TensorFlow.',
    date: 'January 2024',
    url: '#',
  },
  {
    category: 'Achievement',
    title: '🚀 Top 5% - CodeWars',
    description: 'Consistently solved complex algorithmic challenges, achieving a high rank on a competitive coding platform.',
    date: 'Ongoing',
  },
];
