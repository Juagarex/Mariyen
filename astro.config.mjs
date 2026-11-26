// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// TODO(cliente): cambiar por el dominio propio cuando exista (también en src/data/site.ts y public/robots.txt).
const SITE_URL = 'https://mariyen.vercel.app';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'never',
  adapter: vercel({
    webAnalytics: { enabled: false },
  }),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'monthly',
    }),
  ],
  // URL anteriores: se redirigen para no perder enlaces ni posicionamiento.
  redirects: {
    '/tratamientos/lipo-sin-cirugia': '/tratamientos/plan-integral-de-reduccion',
    '/tratamientos/gluteos': '/tratamientos/paquete-integral-de-gluteos',
    '/tratamientos/hidrolipoclasia': '/tratamientos/plan-integral-de-reduccion',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
