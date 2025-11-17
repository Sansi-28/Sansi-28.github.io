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
  // Expert
  { name: "Java", level: "Expert", color: "#4CAF50" },
  { name: "React", level: "Expert", color: "#4CAF50" },
  { name: "Spring Boot", level: "Expert", color: "#4CAF50" },
  { name: "REST APIs", level: "Expert", color: "#4CAF50" },
  { name: "Git", level: "Expert", color: "#4CAF50" },

  // Intermediate
  { name: "Python", level: "Intermediate", color: "#FFC107" },
  { name: "JavaScript", level: "Intermediate", color: "#FFC107" },
  { name: "Node.js", level: "Intermediate", color: "#FFC107" },
  { name: "PostgreSQL", level: "Intermediate", color: "#FFC107" },
  { name: "MongoDB", level: "Intermediate", color: "#FFC107" },
  { name: "WebSockets", level: "Intermediate", color: "#FFC107" },
  { name: "WebRTC", level: "Intermediate", color: "#FFC107" },

  // Beginner
  { name: "Three.js", level: "Beginner", color: "#F44336" },
  { name: "AR.js", level: "Beginner", color: "#F44336" },
  { name: "NumPy", level: "Beginner", color: "#F44336" },
  { name: "pandas", level: "Beginner", color: "#F44336" },
  { name: "scikit-learn", level: "Beginner", color: "#F44336" },
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

export const ACCOMPLISHMENTS: Accomplishment[] = [

  {
    category: "Open Source",
    title: "Hacktoberfest 2025 – Completed",
    description:
      "Contributed multiple accepted PRs/MRs to open-source projects and earned Holopin badges, a TreeNation tree, and the official Super Contributor T-shirt.",
    date: "Oct 2025",
    url: "https://www.linkedin.com/posts/santosh-singh-954a80260_hacktoberfest2025-opensource-sustainability-ugcPost-7389067122242555906-JXdz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEA7BVAB0hN6IZLR6e3FWfopnMgVYAFcb9k"
  },

  {
    category: "Certification",
    title: "Full-Stack React with Spring Boot",
    description:
      "Completed a full-stack module focused on building modern apps using React.js and Spring Boot.",
    date: "Nov 2025",
    url: "https://www.coursera.org/account/accomplishments/verify/V6B8SL9GXAW1"
  },
  {
    category: "Certification",
    title: "Machine Learning",
    description:
      "Completed coursework on Advanced Learning Algorithms, Regression & Classification and Convolutional Neural Networks (CNN).",
    date: "Apr 2025",
    url: "https://www.coursera.org/account/accomplishments/verify/Y9OFVDN7LTRJ"
  },

  {
    category: "Hackathon",
    title: "Neurathon 2025 – Participant",
    description: "Participated in the Neurathon hackathon hosted at NIT Silchar ML club.",
    date: "2025",
    url: "https://drive.google.com/drive/folders/1mKBPSyrlKOqOSe2Y0Xxt2gzc-flrSTt5"
  },
  {
    category: "Hackathon",
    title: "HackHazards '25 – Participant",
    description: "Participated in the HackHazards hackathon by Namespace Community.",
    date: "2025",
    url: "https://drive.google.com/drive/folders/1mKBPSyrlKOqOSe2Y0Xxt2gzc-flrSTt5"
  },
  {
    category: "Hackathon",
    title: "ByteVerse 7.0 – Participant",
    description: "Took part in ByteVerse 7.0 hosted by NIT Patna.",
    date: "2025",
    url: "https://drive.google.com/drive/folders/1mKBPSyrlKOqOSe2Y0Xxt2gzc-flrSTt5"
  },
  {
    category: "Hackathon",
    title: "3rd Place – AI/AR/VR Hackathon",
    description:
      "Team Semicolon; secured 3rd place at the STPI-octaNE CoE hackathon at Manipur University.",
    date: "Feb 2025",
    url: "https://www.linkedin.com/posts/santosh-singh-954a80260_hackathon-ar-ai-ugcPost-7301204636219125761-dRkI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEA7BVAB0hN6IZLR6e3FWfopnMgVYAFcb9k"
  },

  {
    category: "SIH",
    title: "SIH 2025 – Waitlisted (GrandFinale)",
    description:
      "Worked on a Unified Virtual Power Plant (VPP) platform with AI-powered forecasting, battery optimization, open APIs, and dashboards for technicians and admins.",
    date: "2025",
    url: "https://sih.gov.in/sih2025/screeningresult-batch1"
  }
];

