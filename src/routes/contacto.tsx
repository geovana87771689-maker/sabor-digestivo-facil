import { createFileRoute, Link } from "@tanstack/react-router";

import { LegalPage } from "@/components/LegalPage";

const title = "Contacto y soporte · Sabor & Balance";
const description = "Información de contacto y soporte para compras de Sabor & Balance.";

export const Route = createFileRoute("/contacto")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: ContactPage,
});

function ContactPage() {
  return <LegalPage title="Contacto y soporte" intro="Utiliza los datos de contacto indicados en el correo de confirmación de tu compra para recibir ayuda con el acceso, la descarga o una solicitud de garantía." sections={[
    { title: "Antes de escribir", paragraphs: ["Revisa la bandeja de correo no deseado y confirma que estás consultando la misma dirección utilizada durante el pago."] },
    { title: "Datos del pedido", paragraphs: ["Para localizar una compra, incluye tu nombre, la dirección de correo utilizada y el número de pedido. No envíes datos completos de tarjetas ni contraseñas."] },
    { title: "Garantía de 7 días", paragraphs: ["Si deseas solicitar una devolución dentro del plazo, indícalo claramente en tu mensaje para que soporte pueda gestionar la petición."] },
    { title: "Información legal", paragraphs: ["También puedes consultar nuestros términos y nuestra política de privacidad desde los enlaces del pie de página."] },
  ]} />;
}