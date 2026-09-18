import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/LegalPage";

const title = "Términos y condiciones · Sabor & Balance";
const description = "Condiciones de compra y uso de los materiales digitales de Sabor & Balance.";

export const Route = createFileRoute("/terminos")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: TermsPage,
});

function TermsPage() {
  return <LegalPage title="Términos y condiciones" intro="Estas condiciones regulan la compra y el uso de los materiales digitales de Sabor & Balance. Este texto base puede actualizarse para reflejar cambios en el servicio o en la normativa aplicable." sections={[
    { title: "Objeto y aceptación", paragraphs: ["Al realizar una compra, aceptas estas condiciones y confirmas que los datos facilitados son correctos."] },
    { title: "Producto digital", paragraphs: ["La compra da acceso personal al material indicado en la página de venta. No está permitida su reventa, distribución pública o reproducción comercial."] },
    { title: "Precio y pago", paragraphs: ["El precio final y los medios disponibles se muestran antes de confirmar el pedido. El pago se procesa mediante CartPanda."] },
    { title: "Entrega", paragraphs: ["El acceso se envía por correo electrónico después de la confirmación del pago. Es responsabilidad de la persona compradora indicar una dirección válida."] },
    { title: "Garantía", paragraphs: ["Puedes solicitar la devolución dentro de los 7 días posteriores a la compra escribiendo a soporte e indicando los datos necesarios para localizar el pedido."] },
    { title: "Uso responsable", paragraphs: ["El contenido es culinario e informativo. No sustituye la orientación individual de un médico o dietista-nutricionista colegiado."] },
  ]} />;
}