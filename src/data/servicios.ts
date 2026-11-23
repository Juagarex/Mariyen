import type { ImageMetadata } from 'astro';
import lipo from '../assets/images/lipo.jpg';
import gluteos from '../assets/images/gluteos.jpg';
import hidrolipo from '../assets/images/hidrolipo.jpg';
import facial from '../assets/images/facial.jpg';
import masaje from '../assets/images/masaje.jpg';
import toalla from '../assets/images/toalla-turquesa.jpg';
import cabinaVelas from '../assets/images/cabina-velas.jpg';
import limpiezaFacial from '../assets/images/limpieza-facial.jpg';

export interface Servicio {
  slug: string;
  nombre: string;
  nombreCorto: string;
  zona: string;
  t1: string;
  tItal: string;
  intro: string;
  precio: string;
  antes?: string;
  dcto?: string;
  sesiones: string;
  duracion: string;
  frecuencia: string;
  tono: string;
  foto: ImageMetadata;
  fotoAlt: string;
  beneficios: { t: string; d: string }[];
  pasos: { n: string; t: string; d: string }[];
  galeria: { src: ImageMetadata; alt: string }[];
  ideal: string[];
  cuenta: string[];
  faq: { q: string; a: string }[];
}

export const servicios: Servicio[] = [
  {
    slug: 'lipo-sin-cirugia',
    nombre: 'Lipo sin cirugía',
    nombreCorto: 'Lipo sin cirugía',
    zona: 'Abdomen · cintura · espalda · brazos',
    t1: 'Menos medidas,',
    tItal: 'sin quirófano.',
    intro:
      'Un plan de 30 sesiones para trabajar la grasa localizada con tecnología no invasiva. Sin incapacidad, sin dieta extrema y sin faja obligatoria.',
    precio: '$720.000',
    antes: '$1.800.000',
    dcto: '−60%',
    sesiones: '30 sesiones',
    duracion: '[45 min por sesión]',
    frecuencia: '[2–3 sesiones por semana]',
    tono: '#D8CBBE',
    foto: lipo,
    fotoAlt: 'Silueta femenina en ropa deportiva clara',
    beneficios: [
      { t: 'Sin cirugía ni anestesia', d: 'Sales de la cabina y vuelves a tu rutina el mismo día.' },
      { t: 'Zonas a tu medida', d: 'En la valoración elegimos las zonas según tu cuerpo y tu objetivo.' },
      { t: 'Avance que se mide', d: 'Medidas y fotos al inicio, a mitad del plan y al final.' },
      { t: 'Pago a cuotas', d: 'Financiación del 100% del plan.' },
    ],
    pasos: [
      { n: '01', t: 'Valoración gratuita', d: 'Tomamos medidas y fotos, y te decimos con honestidad qué es realista.' },
      { n: '02', t: 'Plan y agenda', d: 'Definimos zonas, número de sesiones y tus horarios.' },
      { n: '03', t: 'Sesiones', d: '[Describir la sesión: equipo, qué se siente, cuánto dura].' },
      { n: '04', t: 'Control y cierre', d: 'Comparamos medidas y te dejamos pautas para mantener el resultado.' },
    ],
    galeria: [
      { src: masaje, alt: 'Masaje en la espalda con luz cálida' },
      { src: toalla, alt: 'Toalla turquesa y velas en la cabina' },
      { src: cabinaVelas, alt: 'Toallas enrolladas y velas encendidas' },
    ],
    ideal: [
      'Tienes grasa localizada que no baja con ejercicio',
      'Quieres resultados sin incapacidad',
      'Buscas un plan con precio cerrado',
    ],
    cuenta: [
      'No reemplaza alimentación ni actividad física',
      '[Contraindicaciones por confirmar con Mariyen]',
      'Los resultados varían según cada persona',
    ],
    faq: [
      { q: '¿Duele?', a: '[Respuesta de Mariyen]' },
      { q: '¿Cuándo empiezo a ver cambios?', a: '[Respuesta de Mariyen: a partir de qué sesión]' },
      { q: '¿Tengo que usar faja?', a: 'No es obligatoria. [Confirmar recomendación]' },
    ],
  },
  {
    slug: 'gluteos',
    nombre: 'Levantamiento de glúteos',
    nombreCorto: 'Glúteos',
    zona: 'Glúteos',
    t1: 'Más firmeza',
    tItal: 'y volumen.',
    intro: 'Programa de 5 sesiones para levantar y dar forma a los glúteos sin cirugía ni rellenos.',
    precio: '$950.000',
    antes: '$1.900.000',
    dcto: '−50%',
    sesiones: '5 sesiones',
    duracion: '[60 min por sesión]',
    frecuencia: '[1 sesión por semana]',
    tono: '#CBBDB0',
    foto: gluteos,
    fotoAlt: 'Mujer entrenando glúteos al aire libre',
    beneficios: [
      { t: 'Sin cirugía ni rellenos', d: 'Trabajo no invasivo, sin recuperación.' },
      { t: 'Solo 5 sesiones', d: 'Un plan corto que cabe en tu agenda.' },
      { t: 'Forma natural', d: 'Levantamos y tonificamos respetando tu silueta.' },
      { t: 'Pago a cuotas', d: 'Financiación del 100% del plan.' },
    ],
    pasos: [
      { n: '01', t: 'Valoración gratuita', d: 'Revisamos tu caso y el resultado que buscas.' },
      { n: '02', t: 'Plan de 5 sesiones', d: 'Agendamos las sesiones y te damos indicaciones previas.' },
      { n: '03', t: 'Sesiones', d: '[Describir técnica y equipo].' },
      { n: '04', t: 'Resultado y fotos', d: 'Comparamos antes y después en la última sesión.' },
    ],
    galeria: [
      { src: lipo, alt: 'Silueta femenina en ropa deportiva clara' },
      { src: masaje, alt: 'Masaje en la espalda con luz cálida' },
      { src: hidrolipo, alt: 'Toallas enrolladas y aceite sobre la camilla' },
    ],
    ideal: ['Quieres levantar sin cirugía', 'Buscas un plan corto', 'Prefieres un resultado natural'],
    cuenta: [
      'Complementar con ejercicio mejora el resultado',
      '[Contraindicaciones por confirmar]',
      'Los resultados varían según cada persona',
    ],
    faq: [
      { q: '¿Cuánto dura el efecto?', a: '[Respuesta de Mariyen]' },
      { q: '¿Puedo entrenar en esos días?', a: '[Respuesta de Mariyen]' },
      { q: '¿Se puede combinar con lipo sin cirugía?', a: '[Respuesta de Mariyen]' },
    ],
  },
  {
    slug: 'hidrolipoclasia',
    nombre: 'Hidrolipoclasia',
    nombreCorto: 'Hidrolipoclasia',
    zona: 'Abdomen · cintura · flancos',
    t1: 'Grasa localizada,',
    tItal: 'trabajada a fondo.',
    intro:
      'Tratamiento para zonas puntuales, complementado con faja térmica para reducir y tonificar abdomen y cintura.',
    precio: '[Precio]',
    sesiones: '[N sesiones]',
    duracion: '[Duración por sesión]',
    frecuencia: '[Frecuencia]',
    tono: '#D3D9D4',
    foto: hidrolipo,
    fotoAlt: 'Toallas enrolladas y aceite sobre la camilla',
    beneficios: [
      { t: 'Enfocado en zonas', d: 'Ideal para abdomen y cintura.' },
      { t: 'Faja térmica incluida', d: '[Confirmar si la promoción sigue vigente].' },
      { t: 'Seguimiento', d: 'Medidas en cada control.' },
      { t: 'Pago a cuotas', d: 'Financiación disponible.' },
    ],
    pasos: [
      { n: '01', t: 'Valoración', d: 'Definimos si eres candidata y las zonas a tratar.' },
      { n: '02', t: 'Preparación', d: '[Indicaciones previas].' },
      { n: '03', t: 'Sesiones', d: '[Describir procedimiento].' },
      { n: '04', t: 'Cuidados', d: 'Faja térmica y pautas en casa.' },
    ],
    galeria: [
      { src: toalla, alt: 'Toalla turquesa y velas en la cabina' },
      { src: masaje, alt: 'Masaje en la espalda con luz cálida' },
      { src: cabinaVelas, alt: 'Toallas enrolladas y velas encendidas' },
    ],
    ideal: ['Tienes grasa en una zona puntual', 'Buscas complementar otro plan'],
    cuenta: ['[Requisitos y contraindicaciones por confirmar]', 'Los resultados varían según cada persona'],
    faq: [
      { q: '¿Qué es la hidrolipoclasia?', a: '[Explicación corta en palabras de Mariyen]' },
      { q: '¿Cuántas sesiones necesito?', a: '[Respuesta]' },
      { q: '¿Cuánto cuesta?', a: '[Precio y opciones de pago]' },
    ],
  },
  {
    slug: 'armonizacion-facial',
    nombre: 'Armonización facial',
    nombreCorto: 'Armonización facial',
    zona: 'Rostro · mandíbula · mejillas',
    t1: 'Un rostro más',
    tItal: 'definido.',
    intro:
      'Tratamientos faciales no invasivos para definir y armonizar el rostro (efecto bichectomía) sin cirugía.',
    precio: '[Precio]',
    sesiones: '[N sesiones]',
    duracion: '[Duración]',
    frecuencia: '[Frecuencia]',
    tono: '#E2D3C8',
    foto: facial,
    fotoAlt: 'Paciente con mascarilla durante un tratamiento facial',
    beneficios: [
      { t: 'Sin agujas ni cirugía', d: '[Confirmar técnica].' },
      { t: 'Rostro definido', d: 'Trabajo sobre mejillas y contorno.' },
      { t: 'Sesiones cortas', d: 'Vuelves a tu día sin marcas.' },
      { t: 'Plan a tu medida', d: 'Lo definimos en la valoración.' },
    ],
    pasos: [
      { n: '01', t: 'Valoración', d: 'Analizamos tu rostro y lo que quieres resaltar.' },
      { n: '02', t: 'Plan', d: 'Número de sesiones y cuidados.' },
      { n: '03', t: 'Sesiones', d: '[Describir procedimiento].' },
      { n: '04', t: 'Resultado', d: 'Fotos comparativas con la misma luz.' },
    ],
    galeria: [
      { src: limpiezaFacial, alt: 'Limpieza facial profesional' },
      { src: toalla, alt: 'Toalla turquesa y velas en la cabina' },
      { src: cabinaVelas, alt: 'Toallas enrolladas y velas encendidas' },
    ],
    ideal: ['Quieres definir el contorno del rostro', 'Prefieres algo no invasivo'],
    cuenta: ['[Contraindicaciones por confirmar]', 'Los resultados varían según cada persona'],
    faq: [
      { q: '¿Qué tratamientos faciales hacen?', a: '[Lista de Mariyen]' },
      { q: '¿Deja marcas?', a: '[Respuesta]' },
      { q: '¿Cuánto cuesta?', a: '[Precio]' },
    ],
  },
];

export const urlServicio = (slug: string) => `/tratamientos/${slug}`;
