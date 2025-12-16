export interface Skill {
  category: string;
  items: string[];
}

export interface Metric {
  label: string;
  value: number;
  suffix: string;
  description: string;
  color: string;
}

export interface CareerNode {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface ArchitectureNode {
  id: string;
  label: string;
  type: 'data' | 'process' | 'ai' | 'output';
  description: string;
  details: string[];
  x: number;
  y: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  type: 'ai' | 'cloud' | 'data' | 'process';
  link?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  link: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: { name: string; level: number }[]; // Level 1-100
}