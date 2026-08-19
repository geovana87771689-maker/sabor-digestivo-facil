# Sabor & Balance — Landing de ventas (ES / LATAM)

Página única de venta directa, mobile-first, en español neutro, con estética editorial culinaria premium (slate, off-white cálido, verde salvia/esmeralda, detalles dorados). Sin promesas médicas ni de pérdida de peso: foco en densidad proteica, confort digestivo, sabor y practicidad.

## Estructura (una sola página, `/`)

1. Barra superior de anuncio con punto pulsante — acceso inmediato al PDF.
2. Hero: badge, H1, subtítulo, 3 bullets, CTA que hace scroll suave a precios, sellos de confianza.
3. "La lucha silenciosa": 4 tarjetas de dolor con iconos Lucide.
4. Mecanismo único "Método de Densidad Proteica Compacta": 3 destacados.
5. Precios: 3 planes (R$ 49,90 / R$ 79,90 / R$ 97,00 destacado con badge "MÁXIMO AHORRO" y precio tachado R$ 149,90).
6. Garantía incondicional de 7 días en caja destacada.
7. FAQ con acordeón animado (6 preguntas del brief).
8. Footer con descargo de responsabilidad, copyright y enlaces legales.
9. Barra inferior fija en móvil ("Ver Ofertas") que aparece al pasar el hero.

Todos los textos exactamente como fueron entregados en el brief.

## Detalles técnicos

- Ruta única `src/routes/index.tsx` (reemplaza el placeholder), con `head()` propio: título, descripción, og y twitter en español.
- Secciones como componentes en `src/components/landing/` (AnnouncementBar, Hero, PainPoints, Solution, Pricing, Guarantee, Faq, Footer, StickyMobileCta).
- Design system: tokens semánticos nuevos en `src/styles.css` (salvia, esmeralda, carbón, off-white, dorado) — sin colores hardcodeados en componentes.
- Tipografía Plus Jakarta Sans vía `<link>` de Google Fonts en `__root.tsx`.
- Shadcn: se agregan `accordion`, `button`, `card`, `badge` (aún no existen en el proyecto).
- Iconos con `lucide-react`; scroll suave por `scrollIntoView`; sticky bar controlada por `IntersectionObserver` del hero.
- Los CTA apuntan a `#planes` / enlaces de checkout marcados como placeholder (`href="#"`) hasta que definas la pasarela de pago.

## Fuera de alcance por ahora

Sin backend, sin procesamiento real de pagos y sin páginas de Términos/Privacidad (los enlaces del footer quedan como marcadores). Se pueden agregar después si lo pides.
