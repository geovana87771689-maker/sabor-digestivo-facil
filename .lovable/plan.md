# Reconstrucción completa de Sabor & Balance

## Objetivo
Rehacer la página de venta en español de España, conservando la identidad visual y el seguimiento actual, pero eliminando afirmaciones de riesgo, cifras incorrectas, animaciones defectuosas y elementos externos en inglés.

## Página principal
- Sustituir la composición actual por las 16 secciones indicadas, en el mismo orden.
- Mantener la primera pantalla compacta en móvil: barra superior, propuesta “Nutrición de Pequeño Volumen”, precio, llamada principal y tres sellos.
- Crear el bloque central del método en verde oscuro, seguido de cuatro cifras totalmente estáticas.
- Incorporar los seis problemas, seis beneficios, llamadas repetidas, 12 recetas ilustradas con CSS, cinco contenidos del plan completo y seis testimonios verificados.
- Rehacer precios con solo dos opciones: Esencial por 17,99 € y Completo por 27,99 €, destacando el segundo sin descuentos comparativos.
- Añadir garantía de 7 días, seis preguntas frecuentes y llamada final.

## Cumplimiento y contenido
- Barrer todo el código que pueda mostrarse al visitante, metadatos y comentarios para retirar los términos prohibidos y cualquier frase clínica señalada.
- Corregir todas las cifras a 89 recetas, 34 días, 25–35 g, 20 tentempiés, 20 postres, 15 minutos y 7 días.
- Eliminar por completo el contador animado, referencias de precio anterior, porcentajes, urgencia artificial y la promesa de fotografías del producto.
- Traducir al español las pantallas de error y establecer `lang="es"` en todos los documentos HTML.

## Navegación legal
- Crear `/terminos`, `/privacidad` y `/contacto` con texto base editable, metadatos propios y navegación de regreso.
- Convertir los enlaces del pie en enlaces reales de la aplicación.
- Mantener únicamente el aviso legal solicitado en el pie.

## Compra y seguimiento
- Conservar el Meta Pixel exactamente con el identificador y el evento de página actuales; no añadir eventos de compra.
- Mantener el reenvío de todos los parámetros presentes en la URL, incluidos UTM y `fbclid`, hacia CartPanda.
- Mantener los enlaces indicados para ambos planes y dejar documentada en código la comprobación pendiente del precio del Plan Completo.
- Ocultar el bloque legal externo de CartPanda que aparece en inglés, sin afectar al pago.

## Diseño y rendimiento
- Reforzar verde oscuro, crema, dorado y terracota con títulos serif y texto sans serif.
- Usar iconos ligeros y degradados CSS para las recetas, sin imágenes ni bibliotecas de animación.
- Reducir trabajo de JavaScript, retirar carruseles y efectos pesados, y priorizar una carga rápida en móvil.
- Revisar la página en móvil y escritorio, enlaces, acordeones, desplazamiento a planes y ausencia de texto prohibido.
