import { Check, Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type Tier = {
  name: string;
  duration: string;
  price: string;
  oldPrice?: string;
  note: string;
  subtitle: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Plan Inicio Rápido",
    duration: "1 Semana",
    price: "$ 8.076,07 ARS",
    note: "Pago único",
    subtitle: "Ideal para probar el método y experimentar alivio digestivo inmediato.",
    features: [
      "25 Recetas express anti-náusea (Desayunos, Almuerzos y Cenas)",
      "Guía de cocción rápida (Menos de 15 minutos)",
      "Lista de compras inteligente para 7 días",
      "Formato PDF interactivo para móvil y tablet",
    ],
    cta: "Comenzar Plan de 1 Semana",
  },
  {
    name: "Plan Adaptación Total",
    duration: "2 Semanas",
    price: "$ 13.865,37 ARS",
    note: "Pago único",
    subtitle: "Estructura completa para consolidar el hábito proteico y digestivo.",
    features: [
      "55 Recetas optimizadas de alta biodisponibilidad proteica",
      "Menú planificado día a día para 14 días",
      "Guía anti-reflujo y cronograma de hidratación funcional",
      "Lista de compras categorizada para 2 semanas",
      "Actualizaciones de por vida del recetario",
    ],
    cta: "Elegir Plan de 2 Semanas",
  },
  {
    name: "Programa Maestro & Transformación",
    duration: "1 Mes y Medio · 6 Semanas",
    price: "$ 10.970,72 ARS",
    oldPrice: "$ 22.549,32 ARS",
    note: "Descuento único: de $ 22.549,32 a $ 10.970,72 ARS · Pago único",
    subtitle:
      "La solución integral y definitiva para acompañar todo tu protocolo sin preocuparte por qué cocinar.",
    features: [
      "Todo lo de los planes anteriores + Más de 100 Recetas Gourmet Exclusivas",
      "Planificador de menús completo para 45 días continuos (6 semanas)",
      "Bonus 1: Guía de Mocktails e Infusiones Digestivas Funcionales",
      "Bonus 2: Manual de Snacks de Bolsillo (10g a 15g proteína para llevar)",
      "Bonus 3: Lista de sustitución de ingredientes locales (Colombia, Argentina, Brasil, México)",
      "Soporte prioritario por correo y canal de dudas",
      "Acceso vitalicio + Nuevas recetas mensuales añadidas",
    ],
    cta: "Adquirir Programa Completo de 6 Semanas (Acceso Total)",
    featured: true,
  },
];

export function Pricing({ id }: { id: string }) {
  return (
    <section id={id} className="scroll-mt-4 bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Elige tu plan y comienza hoy mismo
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground sm:text-base">
          Pago único, sin suscripciones. Descarga inmediata en PDF tras la confirmación.
        </p>

        <p className="mt-6 text-center text-xs text-muted-foreground lg:hidden">
          Deslizá hacia el costado para ver todos los planes →
        </p>

        <div className="-mx-5 mt-4 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-5 pb-4 lg:mx-0 lg:mt-10 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={
                t.featured
                  ? "relative order-first w-[85vw] shrink-0 snap-center rounded-3xl border-2 border-primary bg-card p-7 shadow-editorial sm:w-[380px] lg:order-last lg:w-auto"
                  : "w-[85vw] shrink-0 snap-center rounded-3xl border border-border bg-card p-7 shadow-soft sm:w-[380px] lg:w-auto"
              }
            >
              {t.featured && (
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[11px] font-bold tracking-wide text-primary-foreground uppercase">
                    <Crown className="h-3.5 w-3.5 shrink-0" />
                    Opción más popular
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[11px] font-bold tracking-wide text-gold-foreground uppercase">
                    <Sparkles className="h-3.5 w-3.5 shrink-0" />
                    Máximo ahorro
                  </span>
                </div>
              )}

              <h3 className="text-lg font-extrabold text-foreground">{t.name}</h3>
              <p className="mt-1 text-xs font-semibold tracking-wide text-primary uppercase">
                {t.duration}
              </p>

              <div className="mt-5 flex flex-wrap items-end gap-2">
                {t.oldPrice && (
                  <span className="text-base text-muted-foreground line-through">
                    {t.oldPrice}
                  </span>
                )}
                <span className="text-3xl font-extrabold tracking-tight text-foreground">
                  {t.price}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{t.note}</p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.subtitle}</p>

              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="min-w-0 text-sm leading-snug text-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                variant={t.featured ? "default" : "secondary"}
                className="mt-7 h-auto w-full rounded-full px-6 py-4 text-sm leading-snug font-bold whitespace-normal"
              >
                <a href="#">{t.cta}</a>
              </Button>

              <p className="mt-3 text-center text-[11px] text-muted-foreground">
                Pago seguro SSL · Acceso inmediato
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
