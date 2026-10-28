import type { Project } from '@/models/portfolio';

// Generic, non-confidential descriptions. Add `repoUrl` / `demoUrl` only when a public link exists.
export const projects: Project[] = [
  {
    id: 'public-catalog-site',
    title: 'Sitio web público de catálogo y crédito',
    description:
      'Sitio web público con catálogo, ficha de producto, simulador y solicitud de crédito. Next.js con App Router, SEO técnico y Atomic Design.',
    tags: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'Jest'],
    visual: 'globe',
  },
  {
    id: 'multitenant-erp',
    title: 'ERP multi-tenant',
    description:
      'Microservicios NestJS multi-tenant con arquitectura hexagonal para módulos como contabilidad, inventario y pagos.',
    tags: ['NestJS', 'TypeORM', 'PostgreSQL', 'DDD', 'Multi-tenancy'],
    visual: 'server',
  },
  {
    id: 'kafka-messaging',
    title: 'Mensajería con Kafka',
    description:
      'Comunicación entre servicios con patrones Inbox y Outbox para consumo idempotente y publicación confiable de eventos.',
    tags: ['Kafka', 'Inbox/Outbox', 'DynamoDB', 'NestJS'],
    visual: 'messages',
  },
  {
    id: 'corporate-site',
    title: 'Sitio web corporativo',
    description:
      'Aplicación web en React con Atomic Design, estado global con Redux Toolkit y componentes MUI.',
    tags: ['React', 'Vite', 'MUI', 'Redux Toolkit', 'TypeScript'],
    visual: 'globe',
  },
  {
    id: 'flutter-app',
    title: 'App móvil Flutter',
    description:
      'Aplicación móvil con Clean Architecture por features, BLoC para flujos complejos y navegación con rutas protegidas.',
    tags: ['Flutter', 'Dart', 'BLoC', 'get_it', 'go_router'],
    visual: 'smartphone',
  },
  {
    id: 'aws-data-lake',
    title: 'Data lake en AWS',
    description:
      'Pipeline de datos con arquitectura Medallion (Bronze, Silver, Gold) para análisis con Athena.',
    tags: ['AWS Glue', 'PySpark', 'S3 / Parquet', 'Athena', 'Lake Formation'],
    visual: 'database',
  },
];
