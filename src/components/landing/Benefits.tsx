import {
  Clock,
  Dumbbell,
  HeartPulse,
  Leaf,
  ShoppingBasket,
  Smile,
  Sparkles,
  Utensils,
} from "lucide-react";

const benefits = [
  {
    icon: Dumbbell,
    title: "Protege tu masa muscular todos los días",
    text: "Cada plato está calculado para entregar entre 25 g y 35 g de proteína real en porciones pequeñas, para que cumplas tu meta proteica incluso los días en que el apetito casi no aparece.",
  },
  {
    icon: HeartPulse,
    title: "Menos pesadez, menos reflujo nocturno",
    text: "Técnicas de cocción suaves y combinaciones de bajo residuo graso que aceleran el vaciado gástrico: cenas ligeras que no se quedan horas en el estómago.",
  },
  {
    icon: Clock,
    title: "Listo en 15 minutos, sin drama en la cocina",
    text: "El 90% de las recetas se resuelven en una sartén, una olla o el airfryer. Nada de técnicas de chef ni utensilios que no tienes.",
  },
  {
    icon: Utensils,
    title: "Volver a disfrutar la comida",
    text: "Sabor de verdad: especias digestivas, texturas suaves y platos que se ven apetitosos otra vez, para que comer deje de sentirse como una tarea obligatoria.",
  },
  {
    icon: ShoppingBasket,
    title: "Compras claras y sin desperdicio",
    text: "Listas de mercado categorizadas por semana con ingredientes cotidianos y sustituciones locales para Colombia, Argentina, Brasil y México.",
  },
  {
    icon: Leaf,
    title: "Comida real, cero polvos raros",
    text: "Sin batidos artificiales ni saborizantes sintéticos: carnes magras, pescados, huevos, lácteos nobles y vegetales que tu cuerpo reconoce.",
  },
  {
    icon: Sparkles,
    title: "Variedad para no rendirte a la semana 2",
    text: "Más de 100 preparaciones entre desayunos, almuerzos, cenas, snacks de bolsillo y mocktails digestivos. Nunca el mismo plato dos días seguidos.",
  },
  {
    icon: Smile,
    title: "Tranquilidad mental en cada comida",
    text: "Deja de improvisar y de preguntarte '¿esto me va a caer mal?'. Abres el planificador, cocinas y sigues con tu día.",
  },
];

export function Benefits() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-primary uppercase">
          Lo que cambia desde la primera semana
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-center text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          No es un recetario más: es tu manual diario para comer bien durante el protocolo
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
          Cada receta fue pensada para el estómago sensible, el apetito reducido y la agenda real
          de alguien que trabaja, cocina rápido y quiere seguir sintiéndose fuerte.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <article
              key={b.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-editorial"
            >
              <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <b.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
