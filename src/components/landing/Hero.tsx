import { ArrowDown, BadgeCheck, Download, ShieldCheck, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CARTPANDA_CHECKOUT_URL } from "@/lib/checkout";

const bullets = [
  { emoji: "🛡️", text: "25g - 35g de proteína pura por porción compacta" },
  { emoji: "🌿", text: "Métodos de cocción anti-reflujo y digestión rápida" },
  {
    emoji: "✨",
    text: "Ingredientes 100% reales sin batidos artificiales ni saborizante sintético",
  },
];

const trust = [
  { icon: ShieldCheck, label: "Garantía de 7 días" },
  { icon: Download, label: "Acceso inmediato" },
];

export function Hero({ onCta, onSecondaryCta }: { onCta: () => void; onSecondaryCta: () => void }) {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-accent blur-3xl opacity-60"
      />
      <div className="relative mx-auto max-w-3xl px-5 py-10 sm:py-12">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-gold-foreground uppercase sm:text-xs">
              <BadgeCheck className="h-3.5 w-3.5 shrink-0" />
              Guía Culinaria &amp; Nutricional Premium
            </span>

            <h1 className="mt-5 text-[28px] leading-[1.12] font-extrabold tracking-tight text-foreground sm:text-5xl">
              Más de{" "}
              <span className="text-primary">100 recetas compactas</span> para comer
              sin pesadez, proteger tu músculo y aprovechar tu tratamiento
            </h1>

            <img
              src="/img/hero-mesa.jpg"
              alt="Mujer sonriente en su cocina con una mesa llena de platos altos en proteína y la guía Sabor & Balance"
              width={1024}
              height={1024}
              className="mx-auto mt-6 aspect-[4/3] w-full max-w-xl rounded-3xl object-cover shadow-editorial"
            />



            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Recetas digestivas, altas en proteína y listas en 15 minutos. Diseñadas
              para quienes buscan sabor, confort y resultados reales sin batidos
              artificiales.
            </p>

            <div className="mx-auto mt-6 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                onClick={onCta}
                className="h-auto w-full rounded-full px-8 py-4 text-base font-bold shadow-editorial sm:w-auto"
              >
                Ver ofertas
                <ArrowDown className="ml-1 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onSecondaryCta}
                className="h-auto w-full rounded-full border-border bg-card px-6 py-4 text-base font-semibold shadow-soft hover:bg-accent hover:text-accent-foreground sm:w-auto"
              >
                Ver lo que está incluido
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground sm:text-sm">
              {trust.map((t) => (
                <span key={t.label} className="inline-flex items-center gap-1.5">
                  <t.icon className="h-3.5 w-3.5 shrink-0 text-primary" />
                  {t.label}
                </span>
              ))}
            </div>
          </div>

          <ul className="flex flex-col gap-3">
            {bullets.map((b) => (
              <li
                key={b.text}
                className="rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <span className="text-2xl">{b.emoji}</span>
                <p className="mt-3 text-sm font-semibold text-foreground sm:text-base">
                  {b.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
