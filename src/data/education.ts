import type { EducationEntry } from '@/models/portfolio';

// Source: CV. Certifications are not listed because none could be verified.
export const education: EducationEntry[] = [
  {
    id: 'ai-specialization',
    title: 'Especialización en Inteligencia Artificial orientada al análisis de datos',
    institution: 'Universidad de Asturias',
    location: 'Bogotá, D.C.',
    period: 'Desde 03/2025',
    status: 'Finalizada',
    detail: 'Analítica de datos, IA generativa, computer vision y storytelling con Power BI.',
  },
  {
    id: 'systems-engineering',
    title: 'Ingeniería de Sistemas',
    institution: 'Universidad de Córdoba',
    location: 'Montería',
    period: '01/2015 - 12/2022',
  },
  {
    id: 'high-school',
    title: 'Bachiller académico',
    institution: 'Institución Educativa Retiro de los Indios',
    location: 'Cereté, Córdoba',
    period: '',
  },
];
