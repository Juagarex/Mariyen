/**
 * Datos del negocio: única fuente para contacto, horario, pagos, SEO y textos repetidos.
 * Busca "TODO(cliente)" para ver lo que falta confirmar con Mariyen.
 */

// TODO(cliente): cambiar por el dominio propio cuando exista (también en astro.config.mjs y public/robots.txt).
export const SITE_URL = 'https://mariyen.vercel.app';

export const NEGOCIO = {
  nombre: 'Mariyen Centro de Estética',
  nombreCorto: 'Mariyen',
  ciudad: 'Ubaté',
  departamento: 'Cundinamarca',
  pais: 'CO',
  direccion: {
    calle: 'Calle 10 # 7-20',
    detalle: 'Consultorios 303, 304 y 305',
    linea: 'Calle 10 # 7-20, consultorios 303, 304 y 305',
    completa: 'Calle 10 # 7-20, consultorios 303, 304 y 305, Ubaté, Cundinamarca',
  },
  horario: {
    texto: 'Lunes a sábado, 8:00 a. m. a 5:00 p. m.',
    dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    abre: '08:00',
    cierra: '17:00',
  },
  telefono: {
    e164: '+573118890076',
    visible: '+57 311 889 0076',
    whatsapp: '573118890076',
  },
  instagram: {
    url: 'https://www.instagram.com/mariyencentrodeestetica/',
    usuario: '@mariyencentrodeestetica',
  },
  experiencia: 'Más de 10 años de experiencia',
  habilitacion: 'Habilitación sanitaria al día',
  pagos: ['Efectivo', 'Transferencia', 'Pago a cuotas', 'Addi', 'Sistecrédito'],
  areaServida: ['Ubaté', 'Provincia de Ubaté'],
};

/** Mensaje central de marca (hero de inicio y páginas de servicio). */
export const MENSAJE = {
  inicio: 'Aparatología biomédica y masajes con técnicas brasileñas:',
  cierre: 'sin dolor, sin fajas y sin dietas.',
  completo: 'Aparatología biomédica y masajes con técnicas brasileñas: sin dolor, sin fajas y sin dietas.',
};

/** Nota legal que va en cada servicio. */
export const NOTA_RESULTADOS = 'Los resultados varían según cada persona. Te lo explicamos en tu valoración gratuita.';

/** Datos pendientes de la clienta. No reemplazar con supuestos. */
export const PROFESIONAL = {
  // TODO(cliente): nombre personal de la profesional.
  nombre: '{{NOMBRE_PROFESIONAL}}',
  // TODO(cliente): título profesional exacto. No usar "médica" ni "medicina estética" hasta confirmarlo.
  titulo: '{{TITULO_PROFESIONAL}}',
  formacion: [
    'Nogal',
    'CIFES',
    'Laboratorios Natasha Karnaskaya',
    'Laboratorios Armeso',
    'Laboratorios Pineda',
  ],
};

/** Enlace de WhatsApp con mensaje prellenado. */
export const waLink = (mensaje = 'Hola, quiero agendar mi valoración gratis') =>
  `https://wa.me/${NEGOCIO.telefono.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const waValoracion = (servicio?: string) =>
  waLink(
    servicio
      ? `Hola, quiero agendar mi valoración gratis para el ${servicio}`
      : 'Hola, quiero agendar mi valoración gratis',
  );

const consultaMaps = encodeURIComponent(`${NEGOCIO.direccion.calle}, ${NEGOCIO.ciudad}, ${NEGOCIO.departamento}, Colombia`);
export const MAPA = {
  embed: `https://www.google.com/maps?q=${consultaMaps}&output=embed`,
  comoLlegar: `https://www.google.com/maps/dir/?api=1&destination=${consultaMaps}`,
};

/** Formato de precio colombiano: $994.000 (punto de miles, sin decimales). */
export const precio = (valor: number) => '$' + String(Math.round(valor)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

/** Preguntas que más frenan a las clientas (FAQ de inicio y JSON-LD FAQPage). */
export const FAQ_GENERAL = [
  { q: '¿Duele?', a: 'No. Trabajamos con aparatología biomédica y masajes con técnicas brasileñas, sin dolor.' },
  { q: '¿Tengo que usar faja?', a: 'No. Ninguno de nuestros planes exige faja.' },
  { q: '¿Tengo que hacer dieta?', a: 'No. Nuestros planes no exigen dietas.' },
  { q: '¿Puedo pagar a cuotas?', a: 'Sí. Puedes pagar a cuotas, con Addi o con Sistecrédito. También recibimos efectivo y transferencia.' },
  { q: '¿La valoración tiene costo?', a: 'No, la valoración es gratis. En ella te explicamos qué tratamiento te conviene y cuántas sesiones necesitas.' },
];

// TODO(cliente): testimonios reales con autorización. Formato: { nombre: 'Laura M.', texto: '...', servicio: '...' }
export const TESTIMONIOS: { nombre: string; texto: string; servicio?: string }[] = [];

// TODO(cliente): fotos reales de antes y después con autorización firmada. Formato: { antes, despues, servicio, sesiones }
export const RESULTADOS: { antes: string; despues: string; servicio: string; sesiones?: string }[] = [];
