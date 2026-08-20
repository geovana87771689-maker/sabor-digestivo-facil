import { useState } from "react";
import { Check, Crown, Sparkles, Zap, CalendarDays, ShieldCheck, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHECKOUT_URL = "https://vittacoreus.mycartpanda.com/checkout/212216905:1";

type Tier = {
  name: string;
  short: string;
  icon: LucideIcon;
  duration: string;
  price: string;
  oldPrice?: string;
  note: string;
  subtitle: string;
  highlight: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Plan Inicial · 7 Días de Adaptación",
    short: "Básico",
    icon: Zap,
    duration: "1 Semana",
    price: "€ 9,99",
    oldPrice: "€ 19,99",
    note: "Pago único · 50% OFF",
    subtitle: "Ideal para probar el método y experimentar alivio digestivo inmediato.",
    highlight: "Beneficio clave: alivio digestivo desde la primera semana",
    features: [
      "1 semana de almuerzos planificados",
      "Recetas express anti-náusea para el almuerzo",
      "Lista de compras inteligente para 7 días",
      "Formato PDF interactivo para móvil y tablet",
    ],
    cta: "Comenzar Plan de 1 Semana",
  },
  {
    name: "Plan Integral · 5 Semanas Completas",
    short: "Principal",
    icon: Crown,
    duration: "5 Semanas",
    price: "€ 17,99",
    oldPrice: "€ 37,99",
    note: "Pago único · 52% OFF",
    subtitle:
      "La solución integral y definitiva para acompañar todo tu protocolo sin preocuparte por qué cocinar.",
    highlight: "Beneficio clave: ahorras € 20 + acceso vitalicio",
    features: [
      "Protocolo Completo de 5 Semanas: Desayuno, almuerzo y cena 100% planificados para cubrir todo tu primer ciclo sin pensar qué comer.",
      "Colección Completa de 100 Recetas Gourmet: Alta densidad proteica (25g+ por porción) en porciones reducidas, ideales para la saciedad temprana.",
      "Fórmulas Anti-Náusea y Digestión Ligera: Platos calibrados con técnicas de cocción suaves (papillote, vapor y caldos de colágeno) para cuidar tu estómago.",
      "Capítulos Exclusivos de Snacks y Postres: 20 snacks funcionales y 20 postres proteicos sin azúcar para controlar la ansiedad entre comidas.",
      "Guía Nutricional y Consejos de Éxito: Gráficos de macros, principios del método y el timing correcto de hidratación para maximizar tus resultados.",
      "El Menor Costo por Día de Menú: Todo el recetario estructurado por menos del valor de unas pocas comidas fuera de casa.",
      "Acceso Inmediato y Vitalicio: Descarga en PDF de alta resolución con actualizaciones incluidas.",
    ],
    cta: "Adquirir Programa Completo de 5 Semanas (Acceso Total)",
    featured: true,
  },
  {
    name: "Plan Esencial · 14 Días de Rutina",
    short: "Intermediário",
    icon: CalendarDays,
    duration: "2 Semanas",
    price: "€ 14,99",
    oldPrice: "€ 29,99",
    note: "Pago único · 50% OFF",
    subtitle: "Estructura completa para consolidar el hábito proteico y digestivo.",
    highlight: "Beneficio clave: 14 días planificados + actualizaciones de por vida",
    features: [
      "2 semanas de almuerzos y cenas planificadas",
      "Menú planificado día a día para 14 días (almuerzo y janta)",
      "Guía anti-reflujo y cronograma de hidratación funcional",
      "Lista de compras categorizada para 2 semanas",
      "Actualizaciones de por vida del recetario",
    ],
    cta: "Elegir Plan de 2 Semanas",
  },
];

export function Pricing({ id }: { id: string }) {
  const [active, setActive] = useState(1);

  return (
    <section id={id} className="scroll-mt-4 bg-background py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Elige tu plan y comienza hoy mismo
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground sm:text-base">
          Pago único, sin suscripciones. Descarga inmediata en PDF tras la confirmación.
        </p>

        <div
          role="tablist"
          aria-label="Planes disponibles"
          className="mx-auto mt-6 grid max-w-md grid-cols-3 gap-2 rounded-2xl border border-border bg-card p-2 shadow-soft lg:hidden"
        >
          {tiers.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={
                active === i
                  ? "flex min-w-0 flex-col items-center gap-1 rounded-xl bg-primary px-2 py-3 text-[11px] font-bold text-primary-foreground"
                  : "flex min-w-0 flex-col items-center gap-1 rounded-xl px-2 py-3 text-[11px] font-semibold text-muted-foreground transition-colors hover:bg-accent"
              }
            >
              <t.icon className="h-5 w-5 shrink-0" />
              <span className="truncate">{t.short}</span>
            </button>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:mt-8 lg:grid-cols-3 lg:gap-6">
          {tiers.map((t, i) => (
            <article
              key={t.name}
              className={[
                active === i ? "block" : "hidden lg:block",
                t.featured
                  ? "relative rounded-3xl border-2 border-primary bg-card p-7 shadow-editorial"
                  : "rounded-3xl border border-border bg-card p-7 shadow-soft",
              ].join(" ")}
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
              <p className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-gold" />
                Garantía incondicional de 7 días
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

              <p
                className={
                  t.featured
                    ? "mt-4 rounded-xl bg-gold/20 px-4 py-3 text-sm font-bold text-gold-foreground"
                    : "mt-4 rounded-xl bg-accent px-4 py-3 text-sm font-bold text-primary"
                }
              >
                {t.highlight}
              </p>

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
