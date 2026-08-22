import { Moon, Repeat, Salad, TrendingDown } from "lucide-react";

const cards = [
  {
    icon: Salad,
    title: "Poco Apetito y Malestar con Platos Grandes",
    text: "Raciones voluminosas tradicionales que provocan rechazo inmediato al sentarte a la mesa.",
  },
  {
    icon: TrendingDown,
    title: "Riesgo de Pérdida de Masa Muscular",
    text: "Comer poca proteína por falta de apetito compromete el tono y la firmeza.",
  },
  {
    icon: Moon,
    title: "Digestión Lenta y Pesadez Nocturna",
    text: "Preparaciones grasas o mal combinadas que tardan horas en digerirse y arruinan tu descanso.",
  },
  {
    icon: Repeat,
    title: "Monotonía de Batidos y Huevos",
    text: "Cansancio de consumir siempre lo mismo por falta de opciones adaptadas.",
  },
];

export function PainPoints() {
  return (
    <section className="bg-background py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="mx-auto max-w-2xl text-center text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          ¿Sientes que comer se volvió una obligación pesada en lugar de un placer?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {cards.map((c) => (
            <article
              key={c.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-editorial"
            >
              <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground sm:text-lg">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
