import {
  ArrowRight,
  Check,
  ChefHat,
  Clock3,
  Download,
  Dumbbell,
  FileText,
  Flame,
  ListChecks,
  LockKeyhole,
  PackageCheck,
  Printer,
  Salad,
  ShieldCheck,
  ShoppingBasket,
  Smartphone,
  Soup,
  Utensils,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Faq } from "@/components/landing/Faq";
import { Pricing } from "@/components/landing/Pricing";
import { SiteFooter } from "@/components/landing/SiteFooter";

type ScrollToPlans = () => void;

const difficulties = [
  { icon: Utensils, title: "Te aburre comer siempre lo mismo" },
  { icon: Salad, title: "Los platos grandes te echan para atrás" },
  { icon: Dumbbell, title: "Quieres cuidar tu masa muscular" },
  { icon: Clock3, title: "Cocinas con poco tiempo" },
  { icon: ListChecks, title: "No sabes qué preparar cada día" },
  { icon: ShoppingBasket, title: "Quieres ingredientes del súper de siempre" },
];

const benefits = [
  { icon: Salad, title: "Porciones pequeñas y completas" },
  { icon: Dumbbell, title: "25–35 g de proteína por plato" },
  { icon: Clock3, title: "Listo en 15 minutos" },
  { icon: ShoppingBasket, title: "Ingredientes de supermercado normal" },
  { icon: Soup, title: "Cocciones ligeras: papillote, vapor y caldos" },
  { icon: Smartphone, title: "Lo abres en el móvil o lo imprimes" },
];

const recipes = [
  {
    src: "/img/WhatsApp_Image_2026-08-19_at_15.55.41.jpeg",
    width: 640,
    height: 853,
    title: "Ternera con verduras y aguacate",
    protein: "34 g",
  },
  {
    src: "/img/WhatsApp_Image_2026-08-19_at_15.55.41_1.jpeg",
    width: 640,
    height: 853,
    title: "Pollo con ensalada",
    protein: "32 g",
  },
  {
    src: "/img/WhatsApp_Image_2026-08-19_at_15.55.41_2.jpeg",
    width: 640,
    height: 853,
    title: "Curry suave con arroz",
    protein: "27 g",
  },
  {
    src: "/img/WhatsApp_Image_2026-08-19_at_15.55.42.jpeg",
    width: 640,
    height: 853,
    title: "Filete con verduras salteadas",
    protein: "33 g",
  },
  {
    src: "/img/WhatsApp_Image_2026-08-19_at_15.55.42_1.jpeg",
    width: 640,
    height: 853,
    title: "Tacos de carne y verduras",
    protein: "29 g",
  },
  {
    src: "/img/WhatsApp_Image_2026-08-19_at_15.55.42_2.jpeg",
    width: 640,
    height: 853,
    title: "Tostada proteica",
    protein: "28 g",
  },
  {
    src: "/img/WhatsApp_Image_2026-08-19_at_15.55.42_3.jpeg",
    width: 640,
    height: 853,
    title: "Yogur con melocotón",
    protein: "25 g",
  },
  {
    src: "/img/peek-2-new.jpg",
    width: 1024,
    height: 1408,
    title: "Página del recetario: bol de salmón",
    protein: "32 g",
  },
];

const included = [
  {
    icon: PackageCheck,
    title: "20 tentempiés funcionales",
    text: "Para los huecos entre comidas, sin recurrir al batido de siempre.",
  },
  {
    icon: Flame,
    title: "20 postres proteicos",
    text: "Algo dulce que suma proteína en vez de restarla.",
  },
  {
    icon: ListChecks,
    title: "Menú organizado de 34 días",
    text: "Desayuno, almuerzo y cena decididos de antemano.",
  },
  {
    icon: FileText,
    title: "Fichas nutricionales completas",
    text: "Calorías, proteína, carbohidratos, grasas y fibra en cada receta.",
  },
  {
    icon: ChefHat,
    title: "Guía de principios y consejos",
    text: "Cómo repartir la proteína a lo largo del día.",
  },
];

// Testimonios verificados. Cada nuevo testimonio requiere un registro de compra.
const testimonials = [
  {
    name: "Mariana R.",
    city: "Madrid",
    avatar: "/img/Erica_Perfil.jpeg",
    width: 554,
    height: 554,
    text: "Empecé con las mini-recetas de pollo al papillote y por fin volví a terminar un plato completo.",
  },
  {
    name: "Andrés P.",
    city: "Barcelona",
    avatar: "/img/richard.jpg",
    width: 225,
    height: 225,
    text: "Lo que más me sirvió fue el planificador. Dejé de improvisar a las nueve de la noche y ahora ceno ligero.",
  },
  {
    name: "Carolina M.",
    city: "Valencia",
    avatar: "/img/WhatsApp-Image-2022-02-18-at-08.52.06.jpeg",
    width: 1193,
    height: 1137,
    text: "Estaba cansada de huevo y batidos. Los tentempiés de bolsillo me salvaron los días de oficina.",
  },
  {
    name: "Juliana S.",
    city: "Sevilla",
    avatar: "/img/mulher-negra-carol-figueiredo-cabelo-natural-20231127160756.webp",
    width: 1080,
    height: 1063,
    text: "Las listas de la compra con sustituciones locales fueron un alivio: encontré todo en el mercado de la esquina.",
  },
  {
    name: "Valentina C.",
    city: "Málaga",
    avatar: "/img/images.png",
    width: 201,
    height: 251,
    text: "Pensé que iba a ser comida triste de dieta y me encontré con platos con sabor de verdad.",
  },
  {
    name: "Matías D.",
    city: "Zaragoza",
    avatar: "/img/WhatsApp_Image_2026-03-30_at_17.39.59.jpeg",
    width: 1200,
    height: 1600,
    text: "Sumé las recetas altas en proteína y en un mes volví a levantar lo mismo de antes en el gimnasio.",
  },
];

function SectionCta({ onClick }: { onClick: ScrollToPlans }) {
  return (
    <div className="bg-background px-5 py-8 text-center sm:py-10">
      <Button
        size="lg"
        onClick={onClick}
        className="h-auto w-full max-w-md rounded-md px-7 py-4 text-sm font-extrabold sm:text-base"
      >
        VER LOS DOS PLANES <ArrowRight aria-hidden />
      </Button>
    </div>
  );
}

export function SalesPage({ onScrollToPlans }: { onScrollToPlans: ScrollToPlans }) {
  return (
    <main className="min-h-screen bg-background">
      <div className="bg-slate-deep px-4 py-2 text-center text-xs font-bold text-slate-deep-foreground sm:text-sm">
        Acceso inmediato <span className="px-2 text-gold">·</span> Garantía de 7 días
      </div>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-5 px-5 py-6 sm:gap-8 sm:py-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="text-center lg:text-left">
            <p className="text-[11px] font-extrabold tracking-[0.18em] text-primary uppercase sm:text-xs">
              Nutrición de Pequeño Volumen
            </p>
            <h1 className="mt-2 font-serif text-[2rem] leading-[1.02] font-bold text-foreground sm:text-5xl lg:text-6xl">
              89 recetas para cuidar tu ritmo y tu tono cuando el apetito no acompaña
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              Porciones pequeñas con 25 a 35 g de proteína real, listas en 15 minutos. Sin
              batidos, sin ultraprocesados, sin sensación de pesadez.
            </p>
            <p className="mt-3 text-xl font-extrabold text-foreground sm:text-2xl">Desde 17,99 €</p>
            <Button
              size="lg"
              onClick={onScrollToPlans}
              className="mt-3 h-auto w-full max-w-md rounded-md px-7 py-4 text-sm font-extrabold sm:text-base"
            >
              VER LOS DOS PLANES <ArrowRight aria-hidden />
            </Button>
            <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-[11px] font-semibold text-muted-foreground sm:text-xs lg:justify-start">
              <span className="inline-flex items-center gap-1"><LockKeyhole className="h-3.5 w-3.5 text-primary" />Pago seguro</span>
              <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-primary" />Garantía de 7 días</span>
              <span className="inline-flex items-center gap-1"><Download className="h-3.5 w-3.5 text-primary" />Acceso inmediato</span>
            </div>
          </div>
          <img
            src="/img/hero-mesa.jpg"
            alt="Libro Sabor y Balance junto a una selección de platos"
            width={1920}
            height={1920}
            loading="lazy"
            decoding="async"
            className="mx-auto h-40 w-full max-w-lg rounded-md object-cover shadow-editorial sm:h-auto"
          />
        </div>
      </section>

      <section className="bg-slate-deep py-12 text-slate-deep-foreground sm:py-16">
        <div className="mx-auto max-w-5xl px-5">
          <p className="text-xs font-extrabold tracking-[0.2em] text-gold uppercase">El método</p>
          <h2 className="mt-2 font-serif text-4xl leading-tight font-bold sm:text-6xl">
            Nutrición de Pequeño Volumen
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-deep-foreground/80 sm:text-lg">
            El secreto no es comer más. Es poner los nutrientes adecuados en los pocos bocados
            que apetecen. Cada receta está calculada para que una porción pequeña aporte entre 25
            y 35 g de proteína real, con cocciones ligeras: papillote, vapor y caldos.
          </p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-md bg-slate-deep-foreground/20 sm:grid-cols-3">
            {["Porción pequeña", "Densidad nutricional alta", "Cocción ligera"].map((step, index) => (
              <div key={step} className="bg-slate-deep px-5 py-5">
                <span className="font-serif text-3xl text-gold">0{index + 1}</span>
                <p className="mt-1 font-bold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Datos principales" className="border-b border-border bg-card py-7">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-5 sm:grid-cols-4">
          {[
            ["89", "recetas"],
            ["34", "días de menú"],
            ["25–35 g", "de proteína"],
            ["15 min", "de preparación"],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <p className="font-serif text-3xl font-bold text-primary sm:text-4xl">{value}</p>
              <p className="mt-1 text-xs font-semibold text-muted-foreground sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center font-serif text-4xl font-bold sm:text-5xl">¿Otra vez huevo y batido?</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {difficulties.map(({ icon: Icon, title }) => (
              <article key={title} className="flex items-center gap-4 rounded-md border border-border bg-card p-5 shadow-soft">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground"><Icon className="h-5 w-5" /></span>
                <h3 className="text-sm font-bold sm:text-base">{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-center text-xs font-extrabold tracking-[0.18em] text-primary uppercase">Por qué funciona</p>
          <h2 className="mt-2 text-center font-serif text-4xl font-bold sm:text-5xl">Pensado para el día a día</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title }) => (
              <article key={title} className="border-l-2 border-gold pl-5">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-bold">{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionCta onClick={onScrollToPlans} />

      <section className="bg-slate-deep py-12 text-slate-deep-foreground sm:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-center text-xs font-extrabold tracking-[0.18em] text-gold uppercase">Dentro del material</p>
          <h2 className="mt-2 text-center font-serif text-4xl font-bold sm:text-5xl">Un vistazo a las recetas</h2>
          {/* Estas imágenes ya existen en el proyecto. Las futuras fotos solo se añadirán cuando correspondan realmente con la receta. */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {recipes.map((recipe) => (
              <article key={recipe.src} className="overflow-hidden rounded-md bg-card text-card-foreground shadow-soft">
                <img
                  src={recipe.src}
                  alt={recipe.title}
                  width={recipe.width}
                  height={recipe.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="p-3 sm:p-4">
                  <h3 className="text-xs leading-snug font-bold sm:text-sm">{recipe.title}</h3>
                  <span className="mt-2 inline-flex rounded-full bg-accent px-2 py-1 text-[10px] font-extrabold text-accent-foreground sm:text-xs">{recipe.protein} de proteína</span>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-7 text-center text-sm font-semibold text-slate-deep-foreground/80 sm:text-base">
            Y 81 recetas más, todas con ingredientes, preparación y ficha nutricional completa.
          </p>
        </div>
      </section>

      <SectionCta onClick={onScrollToPlans} />

      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center font-serif text-4xl font-bold sm:text-5xl">Incluido en el Plan Completo</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {included.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-md border border-border bg-card p-5 shadow-soft">
                <span className="text-[10px] font-extrabold tracking-[0.16em] text-primary uppercase">Incluido</span>
                <Icon className="mt-4 h-6 w-6 text-gold-foreground" />
                <h3 className="mt-3 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mx-auto max-w-3xl text-center font-serif text-4xl font-bold sm:text-5xl">Lo que cuentan quienes ya cocinan así</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.name} className="rounded-md border border-border bg-card p-5 shadow-soft">
                <blockquote className="text-sm leading-relaxed text-foreground">{item.text}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <img src={item.avatar} alt={`Retrato de ${item.name}`} width={item.width} height={item.height} loading="lazy" decoding="async" className="h-11 w-11 rounded-full object-cover" />
                  <span><strong className="block text-sm">{item.name}</strong><span className="text-xs text-muted-foreground">{item.city}</span></span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-muted-foreground">Testimonios de lectores verificados. Las experiencias varían de una persona a otra.</p>
        </div>
      </section>

      <Pricing id="planes" />

      <section className="bg-slate-deep py-12 text-slate-deep-foreground sm:py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-5 px-5 sm:flex-row sm:items-start">
          <ShieldCheck className="h-12 w-12 shrink-0 text-gold" />
          <div>
            <h2 className="font-serif text-4xl font-bold sm:text-5xl">Garantía de 7 días</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-slate-deep-foreground/80">Entras hoy, descargas las recetas y el menú, y lo pruebas durante 7 días completos. Si no te convence, escribes a soporte y te devolvemos el 100% del importe. Sin formularios ni preguntas.</p>
          </div>
        </div>
      </section>

      <Faq />

      <section className="bg-cream py-12 text-center sm:py-16">
        <div className="mx-auto max-w-3xl px-5">
          <Printer className="mx-auto h-8 w-8 text-primary" />
          <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">Empieza a cocinar con un plan claro</h2>
          <p className="mt-3 text-muted-foreground">Elige la opción que encaje contigo y recibe el material justo después del pago.</p>
          <Button size="lg" onClick={onScrollToPlans} className="mt-6 h-auto w-full max-w-md rounded-md px-7 py-4 text-sm font-extrabold sm:text-base">VER LOS DOS PLANES <ArrowRight aria-hidden /></Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}