export interface CareerNode {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  type: 'ai' | 'cloud' | 'data' | 'process';
  link?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: { name: string; level: number }[]; // Level 1-100
}