export interface Profile {
  fullName: string;
  firstName: string;
  lastName: string;
  role: string;
  pitch: string;
  summary: string[];
  email: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref: string;
  location: string;
  siteUrl: string;
  careerStart: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  icon: 'server' | 'layout' | 'smartphone' | 'cloud' | 'brain';
  items: string[];
}

/** Raw experience as stored in data: dates in `YYYY-MM`, `end` null means current. */
export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string | null;
  highlights: string[];
  tags: string[];
}

export interface ExperienceViewModel extends ExperienceEntry {
  period: string;
  duration: string;
  isCurrent: boolean;
}

export type ProjectVisual = 'server' | 'messages' | 'globe' | 'smartphone' | 'database';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  visual: ProjectVisual;
  repoUrl?: string;
  demoUrl?: string;
}

export interface EducationEntry {
  id: string;
  title: string;
  institution: string;
  location: string;
  period: string;
  status?: string;
  detail?: string;
}

export interface NavItem {
  id: string;
  label: string;
}
