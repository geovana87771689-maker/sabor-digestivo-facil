import { Quote, Star } from "lucide-react";

import avatarMariana from "@/assets/Erica_Perfil.jpeg.asset.json";
import avatarAndres from "@/assets/richard.jpg.asset.json";
import avatarCarolina from "@/assets/WhatsApp-Image-2022-02-18-at-08.52.06.jpeg.asset.json";
import avatarJuliana from "@/assets/mulher-negra-carol-figueiredo-cabelo-natural-20231127160756.webp.asset.json";
import dishChicken from "@/assets/WhatsApp_Image_2026-08-19_at_15.55.41_1.jpeg.asset.json";
import dishSteak from "@/assets/WhatsApp_Image_2026-08-19_at_15.55.41.jpeg.asset.json";
import dishTacos from "@/assets/WhatsApp_Image_2026-08-19_at_15.55.42_1.jpeg.asset.json";
import dishToast from "@/assets/WhatsApp_Image_2026-08-19_at_15.55.42_2.jpeg.asset.json";

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
    photoAlt: "Plato de pollo asado en rodajas con ensalada verde y tomate",
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
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft sm:grid-cols-4 sm:p-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
                {s.value}
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

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-editorial"
            >
              <Quote className="h-6 w-6 text-primary/40" aria-hidden />
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground sm:text-base">
                “{t.text}”
              </blockquote>

              <img
                src={t.photo}
                alt={t.photoAlt}
                loading="lazy"
                className="mt-4 h-44 w-full rounded-xl object-cover sm:h-52"
              />

              <figcaption className="mt-5 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={`Foto de perfil de ${t.name}`}
                  loading="lazy"
                  className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-accent"
                />
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-foreground">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.place}</span>
                </span>
                <span className="ml-auto flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[11px] leading-relaxed text-muted-foreground">
          Testimonios individuales de lectores; las experiencias varían de una persona a otra.
          Este material es educativo y culinario, y no sustituye la orientación de tu médico o
          nutricionista.
        </p>
      </div>
    </section>
  );
}
