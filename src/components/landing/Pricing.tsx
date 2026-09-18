import { Check, ShieldCheck } from "lucide-react";

// La Directiva Omnibus exige que el precio de referencia sea el más bajo aplicado en los 30 días anteriores. Activar solo después de vender 30 días a 37,99 €.
const MOSTRAR_PRECIO_ANTERIOR = false;

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
      "Fichas nutricionales en cada receta",
      "Bonus: 14 postres proteicos sin azúcar",
      "Bonus: 13 meriendas saludables",
      "Bonus: 18 desayunos proteicos",
      "Acceso de por vida",
      "Garantía de 7 días",
    ],
    cta: "QUIERO EL PLAN COMPLETO",
    // Hay que comprobar que este enlace cobre 27,99 €, ya que el precio del Plan Completo ha cambiado.
    checkoutUrl: "https://vittacoreus.mycartpanda.com/checkout/212216905:1",
    featured: true,
  },
];

export function Pricing({ id }: { id: string }) {
  return (
    <section id={id} className="scroll-mt-4 bg-blanco py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <p className="display text-center text-sm text-naranja">Elige tu plan</p>
        <h2 className="mt-2 text-center text-3xl text-tinta sm:text-5xl">Dos formas de empezar</h2>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2 md:items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={
                plan.featured
                  ? "relative flex flex-col rounded-2xl border-[3px] border-verde-cta bg-verde-suave p-7 shadow-[0_24px_60px_-30px_rgba(29,165,79,0.6)] md:-translate-y-2"
                  : "flex flex-col rounded-2xl border border-border bg-verde-suave p-7"
              }
            >
              {plan.featured && (
                <span className="display absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-amarillo px-4 py-1.5 text-xs whitespace-nowrap text-tinta">
                  Más elegido
                </span>
              )}
              <h3 className="display text-lg text-tinta">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-3">
                {plan.featured && MOSTRAR_PRECIO_ANTERIOR && (
                  <span className="text-lg text-tinta-sub line-through">37,99 €</span>
                )}
                <p className="display text-5xl text-naranja">{plan.price}</p>
              </div>
              <p className="mt-1 text-sm text-tinta-sub">pago único</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-verde-cta" />
                    <span className="text-sm leading-snug text-tinta">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={plan.checkoutUrl} suppressHydrationWarning className="btn-compra mt-7 w-full">
                {plan.cta}
              </a>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-tinta-sub">
                <ShieldCheck className="h-3.5 w-3.5 text-verde-cta" />
                Pago seguro · Acceso inmediato
              </p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xl text-tinta sm:text-3xl">
          <span className="display">
            10 € de diferencia. <span className="text-naranja">63 recetas más</span>, 20 días más de
            menú y los tres bonus.
          </span>
        </p>
      </div>
    </section>
  );
}
