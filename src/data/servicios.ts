import type { ImageMetadata } from 'astro';
import reduccion from '../assets/images/lipo.jpg';
import gluteos from '../assets/images/gluteos.jpg';
import facial from '../assets/images/facial.jpg';
import limpieza from '../assets/images/limpieza-facial.jpg';
import masaje from '../assets/images/masaje.jpg';
import toalla from '../assets/images/toalla-turquesa.jpg';
import cabinaVelas from '../assets/images/cabina-velas.jpg';
import camilla from '../assets/images/hidrolipo.jpg';

export interface Opcion {
  nombre: string;
  valor: number;
  detalle?: string;
}

export interface Servicio {
  slug: string;
  nombre: string;
  /** Nombre en minúscula para usar dentro de frases ("para el plan integral de reducción"). */
  enFrase: string;
  destacado: boolean;
  zona: string;
  resumen: string;
  intro: string;
  opciones: Opcion[];
  /** Texto corto del precio para tarjetas: "Desde $994.000". */
  etiquetaPrecio: string;
  detallePrecio: string;
  foto: ImageMetadata;
  fotoAlt: string;
  tono: string;
  seo: { title: string; description: string };
  beneficios: { t: string; d: string }[];
  pasos: { n: string; t: string; d: string }[];
  galeria: { src: ImageMetadata; alt: string }[];
  ideal: string[];
  cuenta: string[];
  faq: { q: string; a: string }[];
}

const pasosBase = (sesiones: string): Servicio['pasos'] => [
  { n: '01', t: 'Valoración gratis', d: 'Revisamos tu caso y te explicamos qué podemos trabajar y qué es realista para ti.' },
  { n: '02', t: 'Tu plan', d: `Definimos ${sesiones}, tus horarios y la forma de pago.` },
  { n: '03', t: 'Sesiones', d: 'Aparatología biomédica y masajes con técnicas brasileñas, sin dolor.' },
  { n: '04', t: 'Seguimiento', d: 'Revisamos tu avance durante el plan. Si no ves cambios, ajustamos tu plan.' },
];

const faqBase = [
  { q: '¿Duele?', a: 'No. Es un tratamiento sin dolor.' },
  { q: '¿Tengo que usar faja o hacer dieta?', a: 'No. No exigimos faja ni dieta.' },
  { q: '¿Puedo pagar a cuotas?', a: 'Sí: a cuotas, con Addi o con Sistecrédito. También efectivo y transferencia.' },
];

export const servicios: Servicio[] = [
  {
    slug: 'plan-integral-de-reduccion',
    nombre: 'Plan integral de reducción',
    enFrase: 'Plan integral de reducción',
    destacado: true,
    zona: 'Abdomen · cintura · espalda · brazos',
    resumen: 'Reduce medidas con un plan de 10 a 40 sesiones, sin dolor, sin fajas y sin dietas.',
    intro:
      'Un plan de sesiones con aparatología biomédica y masajes con técnicas brasileñas para trabajar la grasa localizada. Eliges cuántas sesiones tomar según tu objetivo y lo que acordemos en tu valoración.',
    opciones: [
      { nombre: '10 sesiones', valor: 994000 },
      { nombre: '20 sesiones', valor: 1284000 },
      { nombre: '30 sesiones', valor: 1574000 },
      { nombre: '40 sesiones', valor: 1875000 },
    ],
    etiquetaPrecio: 'Desde $994.000',
    detallePrecio: '10 a 40 sesiones',
    foto: reduccion,
    fotoAlt: 'Silueta de mujer en ropa deportiva clara mostrando el abdomen',
    tono: '#DCE8E6',
    seo: {
      title: 'Plan integral de reducción sin dolor en Ubaté | Mariyen Centro de Estética',
      description:
        'Reduce medidas en Ubaté con aparatología biomédica y masajes brasileños: sin dolor, sin fajas y sin dietas. Planes desde $994.000 y valoración gratis.',
    },
    beneficios: [
      { t: 'Sin dolor', d: 'Aparatología biomédica y masajes con técnicas brasileñas.' },
      { t: 'Sin fajas ni dietas', d: 'Sigues con tu rutina mientras avanzas en tu plan.' },
      { t: 'Plan con seguimiento', d: 'Revisamos tu avance y, si no ves cambios, ajustamos tu plan.' },
      { t: 'Pago a cuotas', d: 'Cuotas, Addi o Sistecrédito.' },
    ],
    pasos: pasosBase('el número de sesiones (10, 20, 30 o 40)'),
    galeria: [
      { src: masaje, alt: 'Masaje en la espalda en una camilla con luz cálida' },
      { src: toalla, alt: 'Toalla turquesa y velas en la cabina' },
      { src: cabinaVelas, alt: 'Toallas enrolladas y velas encendidas en la cabina' },
    ],
    ideal: [
      'Tienes grasa localizada que no baja con ejercicio',
      'No quieres usar faja ni hacer dieta',
      'Buscas un plan claro, con precio desde el inicio',
    ],
    cuenta: [
      'Te recomendamos acompañar el plan con hábitos saludables',
      'En la valoración revisamos si el tratamiento es adecuado para ti',
    ],
    faq: faqBase,
  },
  {
    slug: 'paquete-integral-de-gluteos',
    nombre: 'Paquete integral de glúteos',
    enFrase: 'Paquete integral de glúteos',
    destacado: true,
    zona: 'Glúteos',
    resumen: 'Diez sesiones para trabajar firmeza y forma, sin dolor y sin cirugía.',
    intro:
      'Un paquete de 10 sesiones con aparatología biomédica y masajes con técnicas brasileñas para trabajar la firmeza y la forma de los glúteos, sin cirugía y sin rellenos.',
    opciones: [{ nombre: '10 sesiones', valor: 894000 }],
    etiquetaPrecio: '$894.000',
    detallePrecio: '10 sesiones',
    foto: gluteos,
    fotoAlt: 'Mujer en ropa deportiva haciendo estiramiento al aire libre',
    tono: '#D5E3E1',
    seo: {
      title: 'Paquete integral de glúteos en Ubaté | Mariyen Centro de Estética',
      description:
        'Paquete integral de glúteos en Ubaté: 10 sesiones por $894.000, sin dolor y sin cirugía. Pago a cuotas, Addi o Sistecrédito. Valoración gratis.',
    },
    beneficios: [
      { t: 'Sin cirugía ni rellenos', d: 'Tratamiento no invasivo, sin incapacidad.' },
      { t: '10 sesiones', d: 'Un paquete claro, con precio cerrado.' },
      { t: 'Plan con seguimiento', d: 'Revisamos tu avance y, si no ves cambios, ajustamos tu plan.' },
      { t: 'Pago a cuotas', d: 'Cuotas, Addi o Sistecrédito.' },
    ],
    pasos: pasosBase('tus 10 sesiones'),
    galeria: [
      { src: reduccion, alt: 'Silueta de mujer en ropa deportiva clara' },
      { src: masaje, alt: 'Masaje en la espalda con luz cálida' },
      { src: camilla, alt: 'Toallas enrolladas y aceite sobre la camilla' },
    ],
    ideal: ['Quieres trabajar firmeza sin cirugía', 'Buscas un paquete corto y con precio cerrado'],
    cuenta: [
      'El ejercicio complementa muy bien el paquete',
      'En la valoración revisamos si el tratamiento es adecuado para ti',
    ],
    faq: faqBase,
  },
  {
    slug: 'armonizacion-facial',
    nombre: 'Armonización facial',
    enFrase: 'tratamiento de armonización facial',
    destacado: false,
    zona: 'Rostro · contorno · mejillas',
    resumen: 'Un tratamiento para armonizar el rostro que se repite cada 6 meses.',
    intro:
      'Un tratamiento facial para armonizar y definir el contorno del rostro. Se realiza cada 6 meses y en tu valoración revisamos qué zonas trabajar.',
    opciones: [{ nombre: 'Cada 6 meses', valor: 452000 }],
    etiquetaPrecio: '$452.000',
    detallePrecio: 'cada 6 meses',
    foto: facial,
    fotoAlt: 'Paciente con mascarilla durante un tratamiento facial',
    tono: '#E3ECEA',
    seo: {
      title: 'Armonización facial en Ubaté | Mariyen Centro de Estética',
      description:
        'Armonización facial en Ubaté por $452.000 cada 6 meses. Más de 10 años de experiencia y habilitación sanitaria al día. Agenda tu valoración gratis.',
    },
    beneficios: [
      { t: 'Contorno definido', d: 'Trabajamos el rostro según lo que acordemos en tu valoración.' },
      { t: 'Cada 6 meses', d: 'Un tratamiento que se repite dos veces al año.' },
      { t: 'Atención personalizada', d: 'Te atiende la misma profesional en cada cita.' },
      { t: 'Pago a cuotas', d: 'Cuotas, Addi o Sistecrédito.' },
    ],
    pasos: pasosBase('las zonas a trabajar'),
    galeria: [
      { src: limpieza, alt: 'Limpieza facial profesional en cabina' },
      { src: toalla, alt: 'Toalla turquesa y velas en la cabina' },
      { src: cabinaVelas, alt: 'Toallas enrolladas y velas encendidas' },
    ],
    ideal: ['Quieres definir el contorno del rostro', 'Prefieres un tratamiento sin cirugía'],
    cuenta: ['En la valoración revisamos si el tratamiento es adecuado para ti'],
    faq: [faqBase[0], faqBase[2]],
  },
  {
    slug: 'limpieza-facial',
    nombre: 'Limpieza facial',
    enFrase: 'servicio de limpieza facial',
    destacado: false,
    zona: 'Rostro',
    resumen: 'Limpieza facial profunda para una piel más fresca y cuidada.',
    intro: 'Una limpieza facial profesional para retirar impurezas y dejar tu piel fresca y cuidada.',
    opciones: [{ nombre: 'Sesión', valor: 147000 }],
    etiquetaPrecio: '$147.000',
    detallePrecio: 'por sesión',
    foto: limpieza,
    fotoAlt: 'Limpieza facial profesional en cabina',
    tono: '#DDF3F1',
    seo: {
      title: 'Limpieza facial en Ubaté | Mariyen Centro de Estética',
      description:
        'Limpieza facial profesional en Ubaté por $147.000. Lunes a sábado de 8:00 a. m. a 5:00 p. m. Escríbenos por WhatsApp y agenda tu cita.',
    },
    beneficios: [
      { t: 'Piel limpia y fresca', d: 'Retiramos impurezas con técnicas profesionales.' },
      { t: 'Sesión única', d: 'Una cita y vuelves a tu día.' },
      { t: 'Productos profesionales', d: 'Trabajamos con laboratorios reconocidos.' },
      { t: 'Varias formas de pago', d: 'Efectivo, transferencia, Addi o Sistecrédito.' },
    ],
    pasos: pasosBase('el día y la hora de tu sesión'),
    galeria: [
      { src: facial, alt: 'Paciente con mascarilla durante un tratamiento facial' },
      { src: toalla, alt: 'Toalla turquesa y velas en la cabina' },
      { src: camilla, alt: 'Toallas enrolladas sobre la camilla' },
    ],
    ideal: ['Quieres cuidar tu piel con una limpieza profesional', 'Buscas un servicio corto, de una sola cita'],
    cuenta: ['Te damos recomendaciones de cuidado para los días siguientes'],
    faq: [faqBase[0], faqBase[2]],
  },
];

export const destacados = servicios.filter((s) => s.destacado);

export interface Complementario {
  nombre: string;
  valor: number;
  desde?: boolean;
  detalle?: string;
}

/** Tratamientos complementarios (página "Otros tratamientos" y sección en inicio). */
export const complementarios: Complementario[] = [
  { nombre: 'Aumento de masa muscular', valor: 352000, detalle: 'Sesión única' },
  { nombre: 'Reducción de peso y medidas', valor: 297000, detalle: '1 mes, sin dieta ni faja' },
  { nombre: 'Reducción de cachetes y papada', valor: 217500 },
  { nombre: 'Reducción de brazos', valor: 192000 },
  { nombre: 'Plan nutricional', valor: 99000, desde: true },
  { nombre: 'Plan de control de peso y dieta', valor: 99000, desde: true },
  { nombre: 'Spa y relajación', valor: 60000, desde: true },
];

export const urlServicio = (slug: string) => `/tratamientos/${slug}`;
export const URL_OTROS = '/tratamientos/otros-tratamientos';
