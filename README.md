# Mariyen Centro de Estética — sitio web

Sitio estático en **Astro** + **Tailwind CSS v4**, desplegado en **Vercel**. Centro de estética en Ubaté, Cundinamarca.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # revisión de tipos y plantillas (astro check)
npm run build    # genera .vercel/output (adaptador de Vercel) + sitemap
```

## Dónde se edita cada cosa

- `src/data/site.ts` — **datos del negocio**: dirección, horario, WhatsApp, pagos, mensaje central, FAQ, datos de la profesional, testimonios y resultados.
- `src/data/servicios.ts` — servicios principales (una página cada uno) y complementarios, con precios.
- `src/styles/global.css` — identidad visual (Propuesta 1): colores y tipografías Sora + Manrope.
- `src/layouts/Base.astro` — SEO de todas las páginas: title, description, Open Graph, Twitter y JSON-LD `BeautySalon`.

## Páginas

- `/` inicio · `/tratamientos/[slug]` servicios principales · `/tratamientos/otros-tratamientos`
- `/sobre-mariyen` · `/contacto` (mapa y "Cómo llegar")
- Las URL antiguas (`lipo-sin-cirugia`, `gluteos`, `hidrolipoclasia`) redirigen con 301 (ver `astro.config.mjs`).

## Pendientes de la clienta

Busca `TODO(cliente)` en el código.

## Reglas del contenido

- Sin promesas de resultados ("garantizado", "100 %", "resultados asegurados").
- Cada servicio lleva la nota: "Los resultados varían según cada persona…".
- Sin fotos de antes y después ni testimonios inventados: solo reales y con autorización.
