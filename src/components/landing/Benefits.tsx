import { useEffect, useState } from "react";
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
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = () => setActive((i) => (i + 1) % benefits.length);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, 2000);
    return () => clearInterval(id);
  }, [isPaused]);

  const current = benefits[active]!;

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5">
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

        <div
          className="mt-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-10">
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary via-sage-400 to-emerald-400" />

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                const isActive = i === active;
                return (
                  <button
                    key={b.title}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`inline-grid h-10 w-10 place-items-center rounded-xl transition-all sm:h-11 sm:w-11 ${
                      isActive
                        ? "scale-110 bg-primary text-primary-foreground shadow-md"
                        : "bg-accent text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                    aria-label={`Ver beneficio: ${b.title}`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                );
              })}
            </div>

            <div
              key={current.title}
              className="animate-fade-in mt-7 text-center"
            >
              <h3 className="text-lg font-bold text-foreground sm:text-xl">
                {current.title}
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {current.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
