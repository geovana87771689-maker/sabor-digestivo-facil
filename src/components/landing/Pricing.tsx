import { Check, Crown, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Plan Esencial",
    price: "17,99 €",
    features: [
      "26 recetas completas",
      "Menú organizado de 14 días",
      "Fichas nutricionales en cada receta",
      "Acceso de por vida",
      "Garantía de 7 días",
    ],
    cta: "ELEGIR ESENCIAL",
    checkoutUrl: "https://vittacoreus.mycartpanda.com/checkout/212216962:1",
  },
  {
    name: "Plan Completo",
    price: "27,99 €",
    features: [
      "89 recetas completas",
      "Menú organizado de 34 días",
      "20 tentempiés funcionales",
      "20 postres proteicos",
      "Guía de principios y consejos",
      "Fichas nutricionales en cada receta",
      "Acceso de por vida",
      "Garantía de 7 días",
    ],
    cta: "ELEGIR COMPLETO",
    // Hay que comprobar que este enlace cobre 27,99 €, ya que el precio del Plan Completo ha cambiado.
    checkoutUrl: "https://vittacoreus.mycartpanda.com/checkout/212216905:1",
    featured: true,
  },
];

export function Pricing({ id }: { id: string }) {
  return (
    <section id={id} className="scroll-mt-4 bg-cream py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-center text-xs font-extrabold tracking-[0.18em] text-primary uppercase">Elige tu plan</p>
        <h2 className="mt-2 text-center font-serif text-4xl font-bold sm:text-5xl">Dos formas de empezar</h2>
        <div className="mx-auto mt-8 grid max-w-4xl gap-5 md:grid-cols-2 md:items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={plan.featured ? "relative rounded-md border-2 border-primary bg-card p-7 shadow-editorial" : "rounded-md border border-border bg-card p-7 shadow-soft"}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-4 py-1.5 text-[10px] font-extrabold tracking-[0.12em] whitespace-nowrap text-primary-foreground uppercase"><Crown className="h-3.5 w-3.5" />Más elegido</span>
              )}
              <h3 className="text-sm font-extrabold tracking-[0.12em] text-primary uppercase">{plan.name}</h3>
              <p className="mt-4 font-serif text-5xl font-bold text-foreground">{plan.price}</p>
              <p className="mt-1 text-sm text-muted-foreground">pago único</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" variant={plan.featured ? "default" : "secondary"} className="mt-7 h-auto w-full rounded-md px-6 py-4 font-extrabold">
                <a href={plan.checkoutUrl}>{plan.cta}</a>
              </Button>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-muted-foreground"><ShieldCheck className="h-3.5 w-3.5 text-primary" />Pago seguro · Acceso inmediato</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
