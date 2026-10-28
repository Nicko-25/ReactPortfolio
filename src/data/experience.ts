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
      'Desarrollo de microservicios NestJS multi-tenant con arquitectura hexagonal para sistemas contables, de inventario, de crédito y de autorización.',
      'Integración entre servicios con Kafka (patrones Inbox y Outbox) y un API gateway como punto de entrada, además de APIs REST consumidas por el frontend.',
      'Desarrollo del ERP web en React (Vite, MUI y Redux Toolkit) con Atomic Design y adaptadores que transforman los datos del backend en modelos de interfaz.',
      'Desarrollo de la app móvil en Flutter con Clean Architecture por features, BLoC y navegación con rutas protegidas.',
      'Participación en el sitio web público con Next.js y en módulos de facturación electrónica y recursos humanos.',
      'Pruebas unitarias y de integración con Jest, revisión de código y trabajo en equipos ágiles (Scrum / Kanban) con Git.',
    ],
    tags: ['NestJS', 'TypeScript', 'React', 'Next.js', 'Flutter', 'PostgreSQL', 'Kafka', 'Jest'],
  },
  {
    id: 'front-end',
    role: 'Desarrollador front end',
    company: 'Suprecredito SAS',
    location: 'Montería',
    start: '2022-06',
    end: '2023-07',
    highlights: [
      'Desarrollo y mantenimiento de la interfaz web del ERP, con foco en rendimiento, capacidad de respuesta y código testeable.',
      'Diseño de interfaces en Figma y propuesta de nuevas visuales, llevando la idea del prototipo a la interfaz final.',
      'Maquetación responsiva con HTML, CSS, JavaScript y Bootstrap.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Figma'],
  },
];
