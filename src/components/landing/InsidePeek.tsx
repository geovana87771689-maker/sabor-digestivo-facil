import { useRef, useState } from "react";
import { Hand, LayoutList, Camera } from "lucide-react";


import peek1 from "@/assets/peek-1.jpg.asset.json";
import peek2 from "@/assets/peek-2-new.jpg.asset.json";
import peek3 from "@/assets/peek-3-new.jpg.asset.json";
import peek4 from "@/assets/peek-4-new.jpg.asset.json";

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
  const [flipping, setFlipping] = useState<0 | 1 | -1>(0);
  const startX = useRef<number | null>(null);
  const total = pages.length;

  const go = (dir: number) => {
    if (flipping) return;
    setFlipping(dir as 1 | -1);
    setDrag(0);
    window.setTimeout(() => {
      setActive((i) => (i + dir + total) % total);
      setFlipping(0);
    }, 500);
  };

  const onDown = (x: number) => {
    if (flipping) return;
    startX.current = x;
  };
  const onMove = (x: number) => {
    if (startX.current === null) return;
    setDrag(Math.max(-140, Math.min(140, x - startX.current)));
  };
  const onUp = () => {
    if (startX.current === null) return;
    const d = drag;
    startX.current = null;
    setDrag(0);
    if (d < -50) go(1);
    else if (d > 50) go(-1);
  };

  const angle = flipping ? flipping * -160 : (drag / 140) * -40;
  const origin = (flipping ?? 0) > 0 || drag < 0 ? "left center" : "right center";

  return (
    <section className="bg-cream py-16 sm:py-20">
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
        <div className="relative mx-auto mt-10 max-w-md" style={{ perspective: "1600px" }}>
          <div className="pointer-events-none absolute inset-x-8 top-6 -z-0 hidden h-full rotate-[-5deg] rounded-2xl bg-card shadow-soft sm:block" />
          <div className="pointer-events-none absolute inset-x-8 top-4 -z-0 hidden h-full rotate-[4deg] rounded-2xl bg-card shadow-soft sm:block" />

          {/* página siguiente (debajo) */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <img
              src={pages[(active + 1) % total]!.src}
              alt=""
              aria-hidden
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div
            role="group"
            aria-label="Vista previa del e-book, arrastrá para pasar la página"
            onPointerDown={(e) => onDown(e.clientX)}
            onPointerMove={(e) => onMove(e.clientX)}
            onPointerUp={onUp}
            onPointerCancel={onUp}
            onPointerLeave={onUp}
            className="relative cursor-grab touch-pan-y overflow-hidden rounded-2xl border border-border bg-card shadow-editorial select-none active:cursor-grabbing"
            style={{
              transform: `rotateY(${angle}deg)`,
              transformOrigin: origin,
              transformStyle: "preserve-3d",
              transition: startX.current === null ? "transform 500ms ease-in-out" : "none",
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
            {/* Borrão de curiosidade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-card via-card/85 to-transparent backdrop-blur-[3px]" />
            <p className="absolute inset-x-0 bottom-4 text-center text-sm font-semibold text-foreground">
              Y 95+ creaciones más listas para descargar...
            </p>
          </div>

          <div className="mt-4 flex justify-center gap-2">
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


        <div className="mt-12 grid gap-4 sm:grid-cols-3">
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
