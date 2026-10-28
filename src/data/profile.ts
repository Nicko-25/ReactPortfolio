import type { Profile } from '@/models/portfolio';

export const profile: Profile = {
  fullName: 'José Nicolás Pereira',
  firstName: 'José Nicolás',
  lastName: 'Pereira',
  role: 'Ingeniero de Software',
  pitch:
    'Diseño y construyo software empresarial escalable con NestJS, React y Flutter, aplicando arquitecturas limpias y orientadas a dominios.',
  summary: [
    'Ingeniero de Sistemas con experiencia en desarrollo backend y frontend, especializado en aplicaciones escalables con NestJS, TypeORM y React. Manejo TypeScript a nivel avanzado, diseño y consumo de APIs REST e integración con múltiples servicios empresariales.',
    'Trabajo con bases de datos relacionales (PostgreSQL, MySQL, SQL Server), ORMs y transacciones multitenant. Diseño casos de uso, validaciones y pruebas unitarias y de integración con Jest para que el software sea mantenible y confiable.',
    'Me motiva estructurar y optimizar procesos de negocio con tecnología. Actualmente me formo en inteligencia artificial y sistemas RAG (Recuperación Aumentada por Generación).',
  ],
  email: 'jonipega25@gmail.com',
  phoneDisplay: '+57 312 782 1492',
  phoneHref: 'tel:+573127821492',
  whatsappHref: 'https://wa.me/573127821492',
  location: 'Montería, Colombia',
  siteUrl: 'https://josepereira.vercel.app',
  careerStart: '2022-06',
};
