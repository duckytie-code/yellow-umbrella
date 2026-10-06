# Yellow Umbrella

Landing page de Yellow Umbrella (flores de limpia pipa hechas a mano). Hecha con [Astro](https://astro.build).

## Comandos

| Comando           | Qué hace                                  |
| ----------------- | ----------------------------------------- |
| `npm install`     | Instala dependencias (solo la primera vez) |
| `npm run dev`     | Abre la página en http://localhost:4321   |
| `npm run build`   | Genera el sitio final en `dist/`          |
| `npm run preview` | Previsualiza el resultado de `build`      |

## Cómo editar

- **WhatsApp, Instagram, nombre, comuna, productos y precios:** `src/data/site.ts`
- **Otros textos:** `src/pages/index.astro`
- **Colores y estilos:** `src/styles/global.css`
- **Fotos:** copia los archivos a `src/assets/fotos/` con estos nombres (jpg, png o webp):
  - `hero-ramo` (foto grande de la portada)
  - `producto-1` … `producto-6` (en el orden de la colección)
  - `sobre-mi-foto`
  - `galeria-1` … `galeria-8`

  Si una foto no existe, se muestra un recuadro de color en su lugar.
