import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import avatarMariana from "@/assets/Erica_Perfil.jpeg.asset.json";
import avatarAndres from "@/assets/richard.jpg.asset.json";
import avatarCarolina from "@/assets/WhatsApp-Image-2022-02-18-at-08.52.06.jpeg.asset.json";
import avatarJuliana from "@/assets/mulher-negra-carol-figueiredo-cabelo-natural-20231127160756.webp.asset.json";
import dishChicken from "@/assets/WhatsApp_Image_2026-08-19_at_15.55.42_3-2.jpeg.asset.json";
import dishSteak from "@/assets/WhatsApp_Image_2026-08-19_at_15.55.41.jpeg.asset.json";
import dishTacos from "@/assets/WhatsApp_Image_2026-08-19_at_15.55.42_1.jpeg.asset.json";
import dishToast from "@/assets/WhatsApp_Image_2026-08-19_at_15.55.42_2.jpeg.asset.json";

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
];

export function SocialProof() {
  const [active, setActive] = useState(0);
  const t = testimonials[active]!;
  const go = (dir: number) =>
    setActive((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section className="bg-cream py-16 sm:py-20">
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

        <h2 className="mx-auto mt-14 max-w-2xl text-center text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl">
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

        <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver testimonio de ${item.name}`}
              aria-pressed={active === i}
              className={
                active === i
                  ? "rounded-full ring-2 ring-primary ring-offset-2 ring-offset-cream transition"
                  : "rounded-full opacity-60 transition hover:opacity-100"
              }
            >
              <img
                src={item.avatar}
                alt={`Foto de perfil de ${item.name}`}
                loading="lazy"
                className="h-12 w-12 rounded-full object-cover"
              />
            </button>
          ))}
        </div>

        <figure className="mx-auto mt-6 max-w-3xl rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
            <img
              src={t.photo}
              alt={t.photoAlt}
              loading="lazy"
              className="h-52 w-full rounded-2xl object-cover sm:h-64"
            />
            <div>
              <span className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground sm:text-base">
                {t.text}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt=""
                  loading="lazy"
                  className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-accent"
                />
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-foreground">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.place}</span>
                </span>
              </figcaption>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Testimonio anterior"
              className="rounded-full border border-border p-2 text-foreground transition-colors hover:bg-accent"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((item, i) => (
                <span
                  key={item.name}
                  className={
                    active === i
                      ? "h-2 w-6 rounded-full bg-primary transition-all"
                      : "h-2 w-2 rounded-full bg-border transition-all"
                  }
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Testimonio siguiente"
              className="rounded-full border border-border p-2 text-foreground transition-colors hover:bg-accent"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </figure>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[11px] leading-relaxed text-muted-foreground">
          Testimonios individuales de lectores; las experiencias varían de una persona a otra.
          Este material es educativo y culinario, y no sustituye la orientación de tu médico o
          nutricionista.
        </p>
      </div>
    </section>
  );
}
