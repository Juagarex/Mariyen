# Mariyen Centro de Estética — sitio web

Sitio estático en **Astro** + **Tailwind CSS v4**, desplegado en **Vercel**.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera .vercel/output (adaptador de Vercel)
npm run preview
```

## Estructura

- `src/pages/index.astro` — inicio
- `src/pages/tratamientos/[slug].astro` — plantilla de cada servicio (una página por tratamiento)
- `src/data/servicios.ts` — textos, precios y fotos de cada tratamiento (edita aquí)
- `src/data/sitio.ts` — WhatsApp e Instagram
- `src/styles/global.css` — paleta y tipografías (tema de Tailwind)
- `src/assets/images/` — fotos (Astro las optimiza a WebP en el build)

## Pendiente por confirmar

Los textos entre `[corchetes]` faltan por confirmar con Mariyen (precios, duración, horario, dirección, FAQ).
Las fotos son de referencia (Unsplash); reemplazar por fotos reales de la cabina. Los antes/después
están vacíos a propósito: solo pacientes reales con autorización.

## Despliegue

Vercel detecta Astro automáticamente (`vercel.json`). Cada push a `main` despliega a producción.
