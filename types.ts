
export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  codeUrl?: string;
}

export interface Skill {
  name: string;
}
// Add this new interface to types.ts

export interface Accomplishment {
  category: 'Hackathon' | 'Achievement' | 'Certificate' | 'Course' | 'Project';
  title: string;
  description: string;
  date: string;
  url?: string;
}
