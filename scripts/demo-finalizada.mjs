// Build de "demo finalizada": publica solo demo-finalizada/index.html y hace que
// cualquier URL del sitio muestre esa página (Vercel Build Output API v3).
//
// Se activa desde vercel.json ("buildCommand": "npm run build:demo-finalizada").
// Para volver a publicar el sitio completo: "buildCommand": "npm run build".
import { mkdirSync, rmSync, copyFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const salida = join(raiz, '.vercel', 'output');
const estaticos = join(salida, 'static');

rmSync(salida, { recursive: true, force: true });
mkdirSync(estaticos, { recursive: true });
copyFileSync(join(raiz, 'demo-finalizada', 'index.html'), join(estaticos, 'index.html'));

const config = {
  version: 3,
  routes: [
    // Encabezados para todas las respuestas: sin caché larga y sin indexar.
    {
      src: '/(.*)',
      headers: {
        'Cache-Control': 'public, max-age=0, must-revalidate',
        'X-Robots-Tag': 'noindex, nofollow',
      },
      continue: true,
    },
    // Primero se sirven los archivos que existen (solo index.html)…
    { handle: 'filesystem' },
    // …y cualquier otra ruta muestra también la página de demo finalizada.
    { src: '/(.*)', dest: '/index.html' },
  ],
};
writeFileSync(join(salida, 'config.json'), JSON.stringify(config, null, 2));

console.log('Demo finalizada: .vercel/output listo; todas las URL muestran demo-finalizada/index.html');
