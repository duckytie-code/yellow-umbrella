// Revisa qué fotos existen en src/assets/fotos/ (por nombre, sin extensión).
const fotos = import.meta.glob('/src/assets/fotos/*.{jpg,jpeg,png,webp,avif}', { eager: true });
const nombres = new Set(Object.keys(fotos).map((p) => p.split('/').pop()!.replace(/\.[^.]+$/, '')));

export const tieneFoto = (name: string) => nombres.has(name);
