# Portafolio de José Nicolás Pereira

Sitio personal construido con Vite 6, React 18, TypeScript (strict), Tailwind CSS 3 y framer-motion. Una sola página con secciones ancla, tema oscuro por defecto con modo claro.

## Requisitos

- Node.js 20 o superior

## Comandos

```bash
npm install        # instala dependencias
npm run dev        # servidor de desarrollo en http://localhost:5173
npm run build      # typecheck + build de producción en dist/
npm run preview    # sirve dist/ en http://localhost:4173
npm run lint       # ESLint
npm run typecheck  # tsc sin emitir
npm test           # pruebas unitarias (Vitest)
```

## Estructura

```
src/
  components/{atoms,molecules,organisms,templates}/   Atomic Design (cada carpeta con index.ts)
  pages/        página Home
  data/         contenido tipado (perfil, stack, experiencia, proyectos, educación)
  adapters/     transforman los datos crudos a view models (fechas, duración, años)
  hooks/        tema, sección activa
  models/       interfaces TypeScript
```

Para editar contenido modifica los archivos de `src/data/`. Los años de experiencia se calculan a partir de `careerStart` en `src/data/profile.ts`.

## Despliegue en Vercel

1. Importa el repositorio en Vercel.
2. Vercel detecta Vite automáticamente: Build Command `npm run build`, Output Directory `dist`.
3. No se requiere `vercel.json` porque es una SPA sin rutas del lado del cliente.

Cada push a la rama `main` dispara un nuevo despliegue.
