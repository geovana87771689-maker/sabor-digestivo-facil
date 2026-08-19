import { ChefHat, Clock, Download, PieChart, Soup, TableProperties } from "lucide-react";

const features = [
  {
    icon: ChefHat,
    title: "Mini-recetas gourmet",
    text: "De 3 a 5 bocados con valor biológico completo.",
  },
  {
    icon: Soup,
    title: "Técnicas de cocción suaves",
    text: "Vapor, papillote y airfryer sin grasas saturadas irritantes.",
  },
  {
    icon: TableProperties,
    title: "Tabla de compatibilidad digestiva",
    text: "Combinaciones pensadas para evitar la fermentación gástrica.",
  },
  {
    icon: PieChart,
    title: "Fichas Nutricionales Claras",
    text: "Conteo exacto de gramos de proteína (25g a 35g) y calorías por porción para un control diario sin complicaciones.",
  },
  {
    icon: Clock,
    title: "Preparaciones en Menos de 20 Minutos",
    text: "Pasos directos y simplificados pensados para el ritmo de vida moderno, sin ingredientes difíciles de encontrar.",
  },
  {
    icon: Download,
    title: "Formato Digital Interactivo (PDF)",
    text: "Índice con enlaces directos para navegar fácilmente desde tu móvil, tablet o computadora mientras cocinas.",
  },
];


export function Solution() {
  return (
    <section className="bg-slate-deep py-16 text-slate-deep-foreground sm:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-sage uppercase">
          Sabor &amp; Balance
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-center text-2xl font-extrabold tracking-tight sm:text-4xl">
          El Método de Densidad Proteica Compacta: Nutrición Real en Bocados Pequeños
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-2xl border border-slate-deep-foreground/15 bg-slate-deep-foreground/5 p-6 backdrop-blur"
            >
              <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sage text-sage-foreground">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold sm:text-lg">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-deep-foreground/75">
                {f.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
