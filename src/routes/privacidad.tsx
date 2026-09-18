import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/LegalPage";

const title = "Política de privacidad · Sabor & Balance";
const description = "Información base sobre privacidad y uso de datos en Sabor & Balance.";

export const Route = createFileRoute("/privacidad")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return <LegalPage title="Política de privacidad" intro="Esta política explica de forma general cómo se utilizan los datos relacionados con la visita y la compra. Debe completarse con los datos identificativos y de contacto del responsable antes de su publicación definitiva." sections={[
    { title: "Datos que pueden recogerse", paragraphs: ["Pueden tratarse datos de contacto, información necesaria para gestionar el pedido y datos técnicos básicos de navegación."] },
    { title: "Finalidad", paragraphs: ["Los datos se utilizan para gestionar compras, entregar el material, atender solicitudes de soporte, cumplir obligaciones legales y medir el funcionamiento de la página."] },
    { title: "Servicios de terceros", paragraphs: ["El pago se procesa mediante CartPanda. La página utiliza herramientas de medición publicitaria; cada proveedor aplica sus propias condiciones de privacidad."] },
    { title: "Conservación y seguridad", paragraphs: ["Los datos se conservan durante el tiempo necesario para prestar el servicio y cumplir las obligaciones aplicables, con medidas razonables de protección."] },
    { title: "Derechos", paragraphs: ["Puedes solicitar acceso, rectificación o supresión de tus datos, así como ejercer los demás derechos reconocidos por la normativa aplicable, mediante la página de contacto."] },
  ]} />;
}