import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cómo y cuándo recibo el material?",
    a: "Inmediatamente después de confirmar tu pago, recibirás un correo electrónico con tu enlace exclusivo para descargar todos los libros, guías y bonos en formato PDF de alta resolución, listos para tu celular, tablet o computadora.",
  },
  {
    q: "¿Los ingredientes son difíciles de conseguir o muy costosos?",
    a: "No. Todas las recetas están diseñadas con ingredientes cotidianos que encuentras en cualquier supermercado o mercado local (carnes magras, pescados, huevos, vegetales nobles, especias digestivas). Incluye además una guía de sustitutos sencillos.",
  },
  {
    q: "¿Necesito saber cocinar o tener utensilios profesionales?",
    a: "Para nada. El 90% de las preparaciones toman entre 10 y 20 minutos y solo requieren herramientas básicas como una sartén antiadherente, olla o freidora de aire (airfryer).",
  },
  {
    q: "¿Este recetario sustituye la consulta con mi médico o nutricionista?",
    a: "No. Es un recurso educativo y culinario práctico para ayudarte a estructurar tus platos diarios de forma sabrosa y densa en nutrientes. Siempre recomendamos mantener tus chequeos regulares con tu profesional de la salud.",
  },
  {
    q: "¿Qué métodos de pago aceptan y qué tan seguro es?",
    a: "Procesamos los pagos mediante pasarelas con encriptación bancaria SSL de 256 bits (tarjetas de crédito, débito y medios de pago locales autorizados). Tus datos están 100% protegidos.",
  },
  {
    q: "¿Por cuánto tiempo tendré acceso al contenido?",
    a: "El acceso a los archivos digitales descargables es tuyo de por vida. Puedes guardarlos en tus dispositivos y consultarlos cuando quieras, incluso sin conexión a internet.",
  },
];

export function Faq() {
  return (
    <section className="bg-cream py-10 sm:py-12">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Preguntas Frecuentes
        </h2>
        <p className="mt-3 text-center text-sm text-muted-foreground sm:text-base">
          Todo lo que necesitas saber antes de comenzar.
        </p>

        <Accordion type="single" collapsible className="mt-6 w-full space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-5 shadow-soft last:border-b"
            >
              <AccordionTrigger className="text-left text-sm font-bold text-foreground hover:no-underline sm:text-base">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
