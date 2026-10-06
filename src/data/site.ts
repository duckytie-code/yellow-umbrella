// ✏️ Aquí editas los textos y datos de contacto de la página.

export const WHATSAPP = '56900000000'; // número con código de país, sin + ni espacios
export const WHATSAPP_VISIBLE = '+56 9 XXXX XXXX'; // cómo se muestra en el botón
export const INSTAGRAM = 'usuario'; // sin @

export const NOMBRE = '[Tu nombre]';
export const COMUNA = '[comuna]';

const BASE_MSG = 'Hola! Quiero hacer un pedido en Yellow Umbrella';
const wa = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const links = {
  waMain: wa(BASE_MSG),
  waIdea: wa('Hola! Tengo una idea de figura para Yellow Umbrella: '),
  waProducto: (nombre: string) => wa(`${BASE_MSG}. Me interesa: ${nombre}`),
  ig: `https://instagram.com/${INSTAGRAM}`,
  igHandle: `@${INSTAGRAM}`,
};

export const productos = [
  { name: 'Ramos', desc: 'Armados a tu gusto, del tamaño que quieras.', price: '$X.XXX', tint: '#F9C9D4' },
  { name: 'Flores individuales', desc: 'Una flor sola también dice mucho.', price: '$X.XXX', tint: '#DCCBF2' },
  { name: 'Girasoles', desc: 'Mis favoritos. Puro sol para tu pieza.', price: '$X.XXX', tint: '#FFE08A' },
  { name: 'Tulipanes', desc: 'Delicados y en el color que elijas.', price: '$X.XXX', tint: '#C6E2F5' },
  { name: 'Mini ramos', desc: 'Chiquititos, perfectos como detalle.', price: '$X.XXX', tint: '#C3EBD9' },
  { name: 'Arreglos en macetero', desc: 'Una plantita que nunca hay que regar.', price: '$X.XXX', tint: '#F9C9D4' },
];

export const galeriaTints = ['#FFE08A', '#F9C9D4', '#C3EBD9', '#DCCBF2', '#C6E2F5', '#FFE08A', '#DCCBF2', '#C3EBD9'];
