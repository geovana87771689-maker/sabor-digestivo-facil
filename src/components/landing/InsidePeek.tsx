import { useRef, useState } from "react";
import { Hand, LayoutList, Camera } from "lucide-react";

const peek1 = { url: "/img/peek-1.jpg" };
const peek2 = { url: "/img/peek-2-new.jpg" };
const peek3 = { url: "/img/peek-3-new.jpg" };
const peek4 = { url: "/img/peek-4-new.jpg" };

const pages = [
  {
    src: peek1.url,
    label: "Índice visual clicable",
    alt: "Índice visual del e-book con categorías Desayunos Ligeros, Platos Fuertes y Cenas Reconfortantes",
  },
  {
    src: peek2.url,
    label: "Receta estrella",
    alt: "Página de receta de bowl de salmón con badges de 32g de proteína y 380 kcal",
  },
  {
    src: peek3.url,
    label: "Tabla de combinaciones",
    alt: "Infográfico con la tabla de compatibilidad digestiva entre alimentos",
  },
  {
    src: peek4.url,
    label: "Sustituciones rápidas",
    alt: "Ficha práctica de sustituciones de ingredientes",
  },
];

const highlights = [
  {
    icon: LayoutList,
    title: "Diagramación limpia",
    text: "Sin bloques densos de texto; visualizá ingredientes, macros y preparación de un solo vistazo.",
  },
  {
    icon: Hand,
    title: "Navegación táctil",
    text: "Saltá directamente a la receta que deseás con un solo toque desde tu móvil o tablet.",
  },
  {
    icon: Camera,
    title: "Fotografía real",
    text: "Cada plato cuenta con su referencia visual para que sepas exactamente qué esperar en tu mesa.",
  },
];

export function InsidePeek() {
  const [active, setActive] = useState(0);
  const [drag, setDrag] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const startX = useRef<number | null>(null);
  const total = pages.length;

  const next = () => {
    if (flipping) return;
    setFlipping(true);
    setDrag(0);
    window.setTimeout(() => {
      setActive((i) => (i + 1) % total);
      setFlipping(false);
    }, 500);
  };

  const onDown = (x: number) => {
    if (flipping) return;
    startX.current = x;
  };

  const onMove = (x: number) => {
    if (startX.current === null) return;
    const delta = x - startX.current;
    // solo permite arrastrar hacia la izquierda (delta negativo)
    const clamped = Math.max(-140, Math.min(0, delta));
    setDrag(clamped);
  };

  const onUp = () => {
    if (startX.current === null) return;
    startX.current = null;
    const d = drag;
    setDrag(0);
    if (d < -50) next();
  };

  // ángulo de la página mientras se arrastra o se anima
  const progress = flipping ? 1 : Math.abs(drag) / 140;
  const angle = flipping ? -160 : (drag / 140) * -55;
  const opacity = 1 - Math.min(1, progress * 0.9);

  return (
    <section id="inside" className="bg-cream py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-emerald uppercase">
          Por dentro
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-center text-2xl font-extrabold tracking-tight sm:text-4xl">
          Un Vistazo Exclusivo a Tu Nueva Rutina Culinaria
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
          Diseñado con la claridad de una revista gourmet y la precisión de una guía clínica.
        </p>

        {/* Libro interactivo: arrastrá para pasar la página */}
        <div className="relative mx-auto mt-6 max-w-md" style={{ perspective: "1600px" }}>
          <div className="pointer-events-none absolute inset-x-8 top-6 -z-0 hidden h-full rotate-[-5deg] rounded-2xl bg-card shadow-soft sm:block" />
          <div className="pointer-events-none absolute inset-x-8 top-4 -z-0 hidden h-full rotate-[4deg] rounded-2xl bg-card shadow-soft sm:block" />

          <div
            role="group"
            aria-label="Vista previa del e-book, deslizá hacia la izquierda para pasar la página"
            onPointerDown={(e) => onDown(e.clientX)}
            onPointerMove={(e) => onMove(e.clientX)}
            onPointerUp={onUp}
            onPointerCancel={onUp}
            onPointerLeave={onUp}
            className="relative cursor-grab touch-pan-y overflow-hidden rounded-2xl border border-border bg-card shadow-editorial select-none active:cursor-grabbing"
            style={{
              transform: `rotateY(${angle}deg)`,
              transformOrigin: "left center",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              opacity,
              transition:
                startX.current === null ? "transform 500ms ease-in-out, opacity 500ms ease-in-out" : "none",
            }}
          >
            <img
              key={pages[active]!.src}
              src={pages[active]!.src}
              alt={pages[active]!.alt}
              loading="lazy"
              width={1024}
              height={1408}
              draggable={false}
              className="h-auto w-full"
            />
            {/* sombra de pliegue */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/25 to-transparent"
              style={{ opacity: Math.min(1, Math.abs(angle) / 60) }}
            />
            {/* Borrão de curiosidad */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-card via-card/85 to-transparent backdrop-blur-[3px]" />
          </div>

          <p className="pointer-events-none absolute -bottom-6 left-0 right-0 text-center text-xs text-muted-foreground/80 sm:text-sm">
            Deslizá hacia la izquierda para pasar la página
          </p>

          <div className="mt-10 flex justify-center gap-2">
            {pages.map((p, i) => (
              <button
                key={p.label}
                type="button"
                onClick={() => setActive(i)}
                aria-label={p.label}
                aria-current={i === active}
                className={
                  i === active
                    ? "h-2 w-6 rounded-full bg-emerald transition-all"
                    : "h-2 w-2 rounded-full bg-border transition-all"
                }
              />
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {highlights.map((h) => (
            <article key={h.title} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-sage text-sage-foreground">
                <h.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 text-base font-bold">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
