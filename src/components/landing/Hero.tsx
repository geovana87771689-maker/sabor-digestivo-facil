import { ArrowDown, BadgeCheck, Download, ShieldCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import coverAsset from "@/assets/cover-sabor-balance.png.asset.json";

const bullets = [
  { emoji: "🛡️", text: "25g - 35g de proteína pura por porción compacta" },
  { emoji: "🌿", text: "Métodos de cocción anti-reflujo y digestión rápida" },
  {
    emoji: "✨",
    text: "Ingredientes 100% reales sin batidos artificiales ni saborizante sintético",
  },
];

const trust = [
  { icon: Lock, label: "Pago Seguro SSL" },
  { icon: Download, label: "Descarga Inmediata" },
  { icon: ShieldCheck, label: "Garantía de Satisfacción 100%" },
];

export function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-accent blur-3xl opacity-60"
      />
      <div className="relative mx-auto max-w-3xl px-5 py-14 text-center sm:py-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-gold-foreground uppercase sm:text-xs">
          <BadgeCheck className="h-3.5 w-3.5 shrink-0" />
          Guía Culinaria &amp; Nutricional Premium · Protocolos GLP-1 / GIP
        </span>

        <h1 className="mt-6 text-3xl leading-[1.15] font-extrabold tracking-tight text-foreground sm:text-5xl">
          Nutrición de Alta Densidad Proteica y Confort Digestivo: Disfruta Comer de Nuevo Sin
          Pesadez Ni Náuseas
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Descubre más de 100 recetas compactas, digestivas y listas en 15 minutos, diseñadas
          específicamente para blindar tu masa muscular y maximizar tu inversión en tu
          tratamiento diario.
        </p>

        <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-left">
          {bullets.map((b) => (
            <li
              key={b.text}
              className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-soft"
            >
              <span className="text-lg leading-none">{b.emoji}</span>
              <span className="min-w-0 text-sm font-medium text-foreground sm:text-base">
                {b.text}
              </span>
            </li>
          ))}
        </ul>

        <Button
          size="lg"
          onClick={onCta}
          className="mt-9 h-auto w-full rounded-full px-8 py-4 text-base font-bold shadow-editorial sm:w-auto"
        >
          Ver Planes y Recetas Disponibles
          <ArrowDown className="ml-1 h-4 w-4" />
        </Button>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground sm:text-sm">
          {trust.map((t) => (
            <span key={t.label} className="inline-flex items-center gap-1.5">
              <t.icon className="h-3.5 w-3.5 shrink-0 text-primary" />
              {t.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
