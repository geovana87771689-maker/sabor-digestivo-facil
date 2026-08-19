import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

import avatarMariana from "@/assets/Erica_Perfil.jpeg.asset.json";
import avatarAndres from "@/assets/richard.jpg.asset.json";
import avatarCarolina from "@/assets/WhatsApp-Image-2022-02-18-at-08.52.06.jpeg.asset.json";
import avatarJuliana from "@/assets/mulher-negra-carol-figueiredo-cabelo-natural-20231127160756.webp.asset.json";
import dishChicken from "@/assets/WhatsApp_Image_2026-08-19_at_15.55.42_3-2.jpeg.asset.json";
import dishSteak from "@/assets/WhatsApp_Image_2026-08-19_at_15.55.41.jpeg.asset.json";
import dishTacos from "@/assets/WhatsApp_Image_2026-08-19_at_15.55.42_1.jpeg.asset.json";
import dishToast from "@/assets/WhatsApp_Image_2026-08-19_at_15.55.42_2.jpeg.asset.json";
import avatarRenata from "@/assets/Renata_1.jpg.asset.json";
import avatarValentina from "@/assets/images.png.asset.json";
import avatarMatias from "@/assets/WhatsApp_Image_2026-03-30_at_17.39.59.jpeg.asset.json";
import dishSalad from "@/assets/WhatsApp_Image_2026-08-19_at_15.55.41_1-2.jpeg.asset.json";
import dishCurry from "@/assets/WhatsApp_Image_2026-08-19_at_15.55.41_2.jpeg.asset.json";
import dishKale from "@/assets/WhatsApp_Image_2026-08-19_at_15.55.42.jpeg.asset.json";

function AnimatedNumber({ value, duration = 2500 }: { value: string; duration?: number }) {
  const [display, setDisplay] = useState(() => value.replace(/[0-9]/g, "0"));
  const ref = useRef<HTMLSpanElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasStarted.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          observer.disconnect();

          const tokens = value.split(/(\d+(?:-\d+)?)/g);
          const numericTokens = tokens
            .map((t, i) => ({ t, i, isNum: /^\d+(?:-\d+)?$/.test(t) }))
            .filter((x) => x.isNum)
            .map((x) => ({
              ...x,
              ranges: x.t.split("-").map((n) => Number(n)),
            }));

          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            const newTokens = [...tokens];
            for (const nt of numericTokens) {
              if (nt.ranges.length === 1) {
                const current = Math.round((nt.ranges[0] ?? 0) * eased);
                newTokens[nt.i] = String(current);
              } else {
                newTokens[nt.i] = nt.ranges
                  .map((n) => Math.round((n ?? 0) * eased))
                  .join("-");
              }
            }
            setDisplay(newTokens.join(""));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplay(value);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}

const stats = [
  { value: "+100", label: "Recetas compactas y digestivas" },
  { value: "15 min", label: "Tiempo promedio de preparación" },
  { value: "25-35 g", label: "Proteína por porción" },
  { value: "7 días", label: "Garantía incondicional" },
];

const testimonials = [
  {
    name: "Mariana R.",
    place: "Bogotá, Colombia",
    text: "En la semana 3 del tratamiento ya no toleraba nada. Empecé con las mini-recetas de pollo al papillote y por fin volví a terminar un plato completo sin náuseas.",
    avatar: avatarMariana.url,
    photo: dishChicken.url,
    photoAlt: "Bowl con yogur griego, duraznos frescos y miel de abeja",
  },
  {
    name: "Andrés P.",
    place: "Ciudad de México",
    text: "Lo que más me sirvió fue el planificador. Dejé de improvisar a las 9 de la noche y ahora ceno ligero, duermo sin reflujo y sigo cumpliendo mi meta de proteína.",
    avatar: avatarAndres.url,
    photo: dishSteak.url,
    photoAlt: "Bowl con res a la parrilla, brócoli, arroz y aguacate",
  },
  {
    name: "Carolina M.",
    place: "Buenos Aires, Argentina",
    text: "Estaba cansada de huevo y batidos. Los snacks de bolsillo me salvaron los días de oficina: pequeños, sabrosos y con proteína de verdad.",
    avatar: avatarCarolina.url,
    photo: dishToast.url,
    photoAlt: "Tostada integral con huevos revueltos y pimientos",
  },
  {
    name: "Juliana S.",
    place: "São Paulo, Brasil",
    text: "Las listas de compras con sustituciones locales fueron un alivio: encontré todo en el mercado de la esquina y no gasté de más.",
    avatar: avatarJuliana.url,
    photo: dishTacos.url,
    photoAlt: "Tacos de pollo con pimientos, cebolla morada y frijoles",
  },
  {
    name: "Renata L.",
    place: "Montevideo, Uruguay",
    text: "Con el tratamiento me llenaba con dos bocados. Las porciones del recetario son chicas pero completas: como tranquila y llego a mi proteína del día sin sufrir.",
    avatar: avatarRenata.url,
    photo: dishSalad.url,
    photoAlt: "Bowl de ensalada verde con pollo grillado y tomates cherry",
  },
  {
    name: "Valentina C.",
    place: "Santiago, Chile",
    text: "Pensé que iba a ser comida triste de dieta y me encontré con platos con sabor de verdad. Mi marido come lo mismo que yo y ni se da cuenta.",
    avatar: avatarValentina.url,
    photo: dishCurry.url,
    photoAlt: "Bowl de curry cremoso con arroz y cilantro fresco",
  },
  {
    name: "Matías D.",
    place: "Córdoba, Argentina",
    text: "Bajé de peso pero estaba perdiendo fuerza en el gimnasio. Sumé las recetas altas en proteína y en un mes volví a levantar lo mismo de antes.",
    avatar: avatarMatias.url,
    photo: dishKale.url,
    photoAlt: "Plato con cerdo grillado en fetas y kale salteado",
  },
];

export function SocialProof() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scroll: 0 });

  const handlePointerDown = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, scroll: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!isDragging || !el) return;
    el.scrollLeft = dragStart.current.scroll + (dragStart.current.x - e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el) return;
    setIsDragging(false);
    try {
      el.releasePointerCapture(e.pointerId);
    } catch {
      // capture may have been lost automatically
    }
  };

  return (
    <section className="bg-cream py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft sm:grid-cols-4 sm:p-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
                <AnimatedNumber value={s.value} />
              </p>
              <p className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <h2 className="mx-auto mt-10 max-w-2xl text-center text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Personas como tú que volvieron a disfrutar la comida
        </h2>
        <div className="mt-4 flex items-center justify-center gap-1.5 text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
          <span className="ml-2 text-sm font-semibold text-muted-foreground">
            Testimonios de lectores del recetario
          </span>
        </div>

        <div className="relative mx-auto mt-6 max-w-5xl">
          <div
            ref={trackRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className={`flex gap-3 overflow-x-auto pb-2 sm:gap-4 ${
              isDragging ? "snap-none" : "snap-x snap-mandatory"
            }`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex-none w-[30vw] min-w-[120px] snap-start rounded-2xl border border-border bg-card p-3 shadow-soft sm:w-[calc(33.333%-0.666rem)] sm:p-5"
              >
                <img
                  src={t.photo}
                  alt={t.photoAlt}
                  loading="lazy"
                  className="h-24 w-full rounded-xl object-cover sm:h-40 sm:rounded-2xl"
                />
                <span className="mt-2 flex gap-0.5 text-gold sm:mt-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current sm:h-3.5 sm:w-3.5" />
                  ))}
                </span>
                <blockquote className="mt-2 line-clamp-4 text-[11px] leading-relaxed text-foreground sm:mt-3 sm:text-sm">
                  {t.text}
                </blockquote>
                <figcaption className="mt-2 flex items-center gap-2 border-t border-border pt-2 sm:mt-4 sm:gap-3 sm:pt-4">
                  <img
                    src={t.avatar}
                    alt={`Foto de perfil de ${t.name}`}
                    loading="lazy"
                    className="h-7 w-7 shrink-0 rounded-full object-cover ring-2 ring-accent sm:h-10 sm:w-10"
                  />
                  <span className="min-w-0">
                    <span className="block text-xs font-bold text-foreground sm:text-sm">
                      {t.name}
                    </span>
                    <span className="block text-[10px] leading-tight text-muted-foreground sm:text-xs">
                      {t.place}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-3 text-center text-xs text-muted-foreground sm:hidden">
            Deslizá hacia la izquierda para ver más
          </p>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-[11px] leading-relaxed text-muted-foreground">
          Testimonios individuales de lectores; las experiencias varían de una persona a otra.
          Este material es educativo y culinario, y no sustituye la orientación de tu médico o
          nutricionista.
        </p>
      </div>
    </section>
  );
}
