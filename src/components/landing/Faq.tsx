import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cómo y cuándo recibo el material?",
    a: "Recibirás el material en PDF por correo electrónico justo después del pago.",
  },
  {
    q: "¿Necesito ingredientes difíciles?",
    a: "No. Las recetas usan ingredientes habituales que encontrarás en un supermercado normal.",
  },
  {
    q: "¿Necesito saber cocinar?",
    a: "No. Los pasos son sencillos y están explicados para cocinar con utensilios básicos.",
  },
  {
    q: "¿Puedo imprimirlo?",
    a: "Sí. Puedes consultarlo desde el móvil, la tableta o el ordenador, y también imprimirlo.",
  },
  {
    q: "¿Qué métodos de pago hay?",
    a: "El pago se procesa de forma segura mediante CartPanda, que mostrará las opciones disponibles antes de confirmar.",
  },
  {
    q: "¿Durante cuánto tiempo tengo acceso?",
    a: "De por vida, con las actualizaciones que se incorporen al material.",
  },
  {
    q: "¿Esto sustituye a mi médico o a mi dietista-nutricionista?",
    a: "No, y no pretende hacerlo. Es material culinario e informativo.",
  },
];

export function Faq() {
  return (
    <section className="bg-cream py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-center font-serif text-4xl font-bold text-foreground sm:text-5xl">
          Preguntas frecuentes
        </h2>
        <p className="mt-3 text-center text-sm text-muted-foreground sm:text-base">
          Respuestas claras antes de elegir.
        </p>

        <Accordion type="single" collapsible className="mt-6 w-full space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-md border border-border bg-card px-5 shadow-soft last:border-b"
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
