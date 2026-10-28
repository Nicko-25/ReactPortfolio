import type { ExperienceEntry } from '@/models/portfolio';

// Source: CV. Company name kept as written there.
export const experience: ExperienceEntry[] = [
  {
    id: 'full-stack',
    role: 'Desarrollador full stack',
    company: 'Suprecredito SAS',
    location: 'Montería',
    start: '2023-07',
    end: null,
    highlights: [
      'Creación de APIs RESTful para integrar servicios backend con el frontend.',
      'Pruebas unitarias y de integración para asegurar la calidad del código.',
      'Revisión de código para mejorar la calidad y mantenibilidad.',
      'Diseño de interfaces responsivas y trabajo en equipos ágiles (Scrum / Kanban) con Git.',
      'Mantenimiento de sistemas existentes y corrección de defectos.',
    ],
    tags: ['NestJS', 'TypeScript', 'React', 'PostgreSQL', 'Jest'],
  },
  {
    id: 'front-end',
    role: 'Desarrollador front end',
    company: 'Suprecredito SAS',
    location: 'Montería',
    start: '2022-06',
    end: '2023-07',
    highlights: [
      'Maquetación y desarrollo web front-end.',
      'Mantenimiento y mejora de sitios web y aplicaciones.',
      'Código de calidad y testeable, con foco en rendimiento y capacidad de respuesta.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
];
