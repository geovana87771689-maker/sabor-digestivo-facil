import {
  Check,
  CircleX,
  Clock3,
  Download,
  Dumbbell,
  LockKeyhole,
  Refrigerator,
  RotateCcw,
  Salad,
  ShieldCheck,
  ShoppingBasket,
  Smartphone,
  Soup,
  Trash2,
  Utensils,
  UserX,
} from "lucide-react";

import { Faq } from "@/components/landing/Faq";
import { CajaAlerta, OfertaBar } from "@/components/landing/OfertaBar";
import { Pricing } from "@/components/landing/Pricing";
import { SiteFooter } from "@/components/landing/SiteFooter";
import heroSaborBalanceAsset from "@/assets/hero-sabor-balance.png.asset.json";
import heroMesaAsset from "@/assets/hero-sabor-balance.jpg.asset.json";
import polloEnsaladaAsset from "@/assets/pollo-ensalada.jpeg.asset.json";
import polloVerdurasAsset from "@/assets/pollo-verduras.jpeg.asset.json";
import curryArrozAsset from "@/assets/curry-arroz.jpeg.asset.json";
import tacosCarneVerdurasAsset from "@/assets/tacos-carne-verduras.jpeg.asset.json";
import terneraVerdurasAguacateAsset from "@/assets/ternera-verduras-aguacate.jpeg.asset.json";
import tostadaProteicaAsset from "@/assets/tostada-proteica.jpeg.asset.json";
import yogurMelocotonAsset from "@/assets/yogur-melocoton.jpeg.asset.json";
import bonus1PostresAsset from "@/assets/bonus-1-postres.png.asset.json";
import bonus2MeriendasAsset from "@/assets/bonus-2-meriendas.png.asset.json";
import bonus3DesayunosAsset from "@/assets/bonus-3-desayunos.png.asset.json";

type ScrollToPlans = () => void;

// Solo activar cuando los tres bonus estén realmente a la venta por separado a esos precios.
const MOSTRAR_VALOR_BONUS = false;

const cifras = [
  ["89", "recetas"],
  ["34", "días de menú"],
  ["25-35 g", "de proteína"],
  ["15 min", "de preparación"],
];

const dificultades = [
  { icon: Refrigerator, text: "Abres la nevera y la cierras sin coger nada" },
  { icon: Utensils, text: "Los platos grandes te echan para atrás nada más verlos" },
  { icon: RotateCcw, text: "Llevas semanas comiendo lo mismo porque no se te ocurre otra cosa" },
  { icon: Trash2, text: "Tiras comida que compraste con buena intención" },
  { icon: UserX, text: "Cocinas para ti sola y no compensa el esfuerzo" },
  { icon: Dumbbell, text: "Sabes que tendrías que comer más proteína, pero no te entra" },
];

const beneficios = [
  { icon: Salad, title: "Porciones pequeñas y completas" },
  { icon: Dumbbell, title: "25-35 g de proteína por plato" },
  { icon: Clock3, title: "Listo en 15 minutos" },
  { icon: ShoppingBasket, title: "Ingredientes de supermercado normal" },
  { icon: Soup, title: "Cocciones ligeras: papillote, vapor y caldos" },
  { icon: Smartphone, title: "Lo abres en el móvil o lo imprimes" },
];

const recetas = [
  { src: terneraVerdurasAguacateAsset.url, width: 768, height: 1024, title: "Ternera con verduras y aguacate", protein: "34 g" },
  { src: polloEnsaladaAsset.url, width: 768, height: 1024, title: "Pollo con ensalada", protein: "32 g" },
  { src: curryArrozAsset.url, width: 768, height: 1024, title: "Curry suave con arroz", protein: "27 g" },
  { src: polloVerdurasAsset.url, width: 768, height: 1024, title: "Pollo con verduras salteadas", protein: "33 g" },
  { src: tacosCarneVerdurasAsset.url, width: 768, height: 1024, title: "Tacos de carne y verduras", protein: "29 g" },
  { src: tostadaProteicaAsset.url, width: 768, height: 1024, title: "Tostada proteica", protein: "28 g" },
  { src: yogurMelocotonAsset.url, width: 768, height: 1024, title: "Yogur con melocotón", protein: "25 g" },
  { src: "/img/peek-2-new.jpg", width: 1024, height: 1408, title: "Página del recetario: bol de salmón", protein: "32 g" },
];

// Las imágenes /bonus-1-postres.png, /bonus-2-meriendas.png y /bonus-3-desayunos.png
// son marcadores de posición hasta que se suban las imágenes definitivas de cada bonus.
const bonificaciones = [
  { label: "BONUS 1", img: bonus1PostresAsset.url, title: "54 POSTRES SIN AZÚCAR AÑADIDO", text: "Algo dulce que suma proteína en vez de restarla. Entre 26 y 35 g por porción, en raciones pequeñas que se terminan.", price: "24,90 €" },
  { label: "BONUS 2", img: bonus2MeriendasAsset.url, title: "20 MERIENDAS SALUDABLES", text: "Ideas prácticas, ligeras y con proteína de verdad para el hueco de media mañana y el de media tarde.", price: "31,20 €" },
  { label: "BONUS 3", img: bonus3DesayunosAsset.url, title: "20 DESAYUNOS PROTEICOS", text: "Empieza el día con proteína de verdad. Dulces y salados, todos listos en 15 minutos o menos.", price: "39,90 €" },
];

// Testimonios verificados. Cada nuevo testimonio requiere un registro de compra.
const testimonios = [
  { name: "Mariana R.", city: "Madrid", initials: "MR", text: "Empecé con las mini-recetas de pollo al papillote y por fin volví a terminar un plato completo." },
  { name: "Andrés P.", city: "Barcelona", initials: "AP", text: "Lo que más me sirvió fue el planificador. Dejé de improvisar a las nueve de la noche y ahora ceno ligero." },
  { name: "Carolina M.", city: "Valencia", initials: "CM", text: "Estaba cansada de huevo y batidos. Las meriendas saludables me salvaron los días de oficina." },
  { name: "Juliana S.", city: "Sevilla", initials: "JS", text: "Las listas de la compra con sustituciones locales fueron un alivio: encontré todo en el mercado de la esquina." },
  { name: "Valentina C.", city: "Málaga", initials: "VC", text: "Pensé que iba a ser comida triste de dieta y me encontré con platos con sabor de verdad." },
  { name: "Matías D.", city: "Zaragoza", initials: "MD", text: "Sumé las recetas altas en proteína y en un mes volví a levantar lo mismo de antes en el gimnasio." },
];

function BotonCompra({ onClick, children }: { onClick: ScrollToPlans; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick} className="btn-compra w-full max-w-md">
      {children}
    </button>
  );
}

export function SalesPage({ onScrollToPlans }: { onScrollToPlans: ScrollToPlans }) {
  return (
    <main className="min-h-screen bg-crema">
      <OfertaBar />

      {/* 2 · HERO */}
      <section className="bg-crema px-5 pt-8 pb-12 text-center sm:pt-12 sm:pb-16">
        <div className="mx-auto max-w-3xl">
          <p className="display text-xs tracking-[0.18em] text-naranja sm:text-sm">
            Nutrición de Pequeño Volumen
          </p>
          <h1 className="mt-3 text-[2rem] text-tinta sm:text-5xl lg:text-6xl">
            Cuando ya no te apetece nada, el problema no es el hambre.
            <br className="hidden sm:block" /> Es lo que hay en el plato.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-7 text-tinta-sub sm:text-lg">
            89 recetas de porción pequeña con 25 a 35 g de proteína real, listas en 15 minutos. Para
            que comer vuelva a ser algo que te apetece y no algo que tienes que resolver.
          </p>
          <img
            src={heroSaborBalanceAsset.url}
            alt="Libro Sabor e Balance junto a su versión para móvil"
            width={768}
            height={767}
            loading="lazy"
            decoding="async"
            className="mx-auto mt-6 h-auto w-full max-w-lg rounded-xl object-contain"
          />
          <p className="display mt-6 text-3xl text-naranja sm:text-4xl">Desde 17,99 €</p>
          <p className="text-xs font-semibold text-tinta-sub">pago único</p>
          <div className="mt-5 flex justify-center">
            <BotonCompra onClick={onScrollToPlans}>Quiero empezar hoy →</BotonCompra>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-[11px] font-semibold text-tinta-sub sm:text-xs">
            <span className="inline-flex items-center gap-1"><LockKeyhole className="h-3.5 w-3.5 text-verde-cta" />Pago seguro</span>
            <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-verde-cta" />Garantía de 7 días</span>
            <span className="inline-flex items-center gap-1"><Download className="h-3.5 w-3.5 text-verde-cta" />Acceso inmediato</span>
          </div>
        </div>

        {/* Cifras estáticas, sin animación de conteo. */}
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
          {cifras.map(([value, label]) => (
            <div key={label}>
              <p className="display text-3xl text-naranja sm:text-4xl">{value}</p>
              <p className="mt-1 text-xs font-semibold text-tinta-sub sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 · PROBLEMA */}
      <section className="bg-crema2 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:max-w-5xl">
          <h2 className="text-3xl sm:text-5xl">
            <span className="block text-tinta">¿TE SUENA ESTO?</span>
            <span className="block text-naranja">NO ES HAMBRE. ES EL PLATO.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[13px] leading-7 text-tinta-sub sm:text-base">
            Son las nueve de la noche. Abres la nevera, miras lo que hay, y la cierras. No es que
            no tengas hambre: es que nada de lo que ves te apetece lo suficiente como para ponerte a
            cocinarlo. Así que cenas cualquier cosa. O no cenas.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {dificultades.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.text} className="flex items-center gap-3 rounded-2xl border border-border bg-blanco p-4 text-left sm:p-5">
                  <span aria-hidden className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-crema2 text-naranja">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-[13px] leading-snug font-semibold text-tinta sm:text-sm">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 · VENTAJAS */}
      <section className="bg-crema py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center text-3xl sm:text-5xl">
            <span className="block text-tinta">HECHO PARA TU DÍA A DÍA</span>
            <span className="block text-naranja">SIN VUELTAS NI COMPLICACIONES</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[13px] leading-7 text-tinta-sub sm:text-base">
            Lo caro no es comer bien. Lo caro es ir improvisando. Por eso todo está pensado para que
            sea fácil desde el primer día.
          </p>
          <div className="mt-9 grid gap-4">
            {[
              {
                emoji: "🍽️",
                title: "Sal de la rutina de lo mismo cada día",
                text: "89 opciones distintas para variar tus comidas de forma sencilla y práctica.",
              },
              {
                emoji: "💰",
                title: "Ingredientes sencillos y asequibles",
                text: "Ingredientes baratos y fáciles de encontrar para preparar platos completos y sabrosos.",
              },
              {
                emoji: "📖",
                title: "Paso a paso completo",
                text: "Recetas claras, directas y fáciles de seguir, aunque tengas poca práctica en la cocina.",
              },
              {
                emoji: "⚡",
                title: "Recetas listas en pocos minutos",
                text: "En 15 minutos tienes opciones prácticas para tu rutina más ocupada.",
              },
              {
                emoji: "🧑‍🍳",
                title: "Sin complicaciones",
                text: "Recetas con ingredientes fáciles de encontrar que ya tienes en tu cocina.",
              },
              {
                emoji: "📱",
                title: "Accede desde donde quieras",
                text: "Úsalo en el móvil, la tablet o el ordenador — o imprime tus recetas favoritas para tenerlas en la cocina.",
              },
            ].map((item) => (
              <article key={item.title} className="flex items-start gap-4 rounded-2xl bg-verde-suave p-5 sm:p-6">
                <span aria-hidden className="text-2xl leading-none sm:text-3xl">{item.emoji}</span>
                <div>
                  <h3 className="display text-lg uppercase tracking-tight text-tinta sm:text-xl">{item.title}</h3>
                  <p className="mt-1 text-[13px] leading-6 text-tinta-sub sm:text-sm">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-9 flex justify-center">
            <BotonCompra onClick={onScrollToPlans}>Quiero las recetas ahora →</BotonCompra>
          </div>
        </div>
      </section>

      {/* 5 · CAJA DE ALERTA */}
      <CajaAlerta />

      {/* 6 · EL MÉTODO */}
      <section className="bg-blanco py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <p className="display text-sm text-naranja">El método</p>
          <h2 className="mt-2 text-3xl text-tinta sm:text-5xl">Nutrición de Pequeño Volumen</h2>
          <img
            src={heroMesaAsset.url}
            alt="Mujer sonriente en la mesa con platos Sabor e Balance y el recetario"
            width={1920}
            height={1920}
            loading="lazy"
            decoding="async"
            className="mx-auto mt-6 h-auto w-full max-w-2xl rounded-xl object-contain"
          />
          <p className="mt-5 max-w-3xl text-[13px] leading-7 text-tinta-sub sm:text-lg">
            El secreto no es comer más. Es poner los nutrientes adecuados en los pocos bocados que apetecen. Cada receta está calculada para que una porción pequeña aporte entre 25 y 35 g de proteína real, con cocciones ligeras: papillote, vapor y caldos.
          </p>

          <div className="mt-9 overflow-hidden rounded-xl border border-border">
            <div className="display grid grid-cols-2 border-b border-border text-xs sm:text-sm">
              <div className="px-4 py-4 text-tinta-sub">Sin método</div>
              <div className="px-4 py-4 text-naranja">Con Nutrición de Pequeño Volumen</div>
            </div>
            {[
              ["Plato grande que dejas a medias", "Porción pequeña que terminas"],
              ["Proteína que no llega", "25 a 35 g por plato, contados"],
              ["Ya veré qué ceno", "34 días decididos de antemano"],
              ["Batido otra vez", "Comida de verdad, con sabor"],
            ].map(([sin, conMetodo]) => (
              <div key={sin} className="grid grid-cols-2 border-b border-border last:border-b-0">
                <div className="px-4 py-4 text-sm text-tinta-sub opacity-60 line-through decoration-1">{sin}</div>
                <div className="px-4 py-4 text-sm font-bold text-naranja">{conMetodo}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map(({ icon: Icon, title }) => (
              <article key={title} className="border-l-2 border-amarillo pl-5">
                <Icon className="h-6 w-6 text-verde-cta" />
                <h3 className="mt-3 text-base text-tinta">{title}</h3>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <BotonCompra onClick={onScrollToPlans}>Quiero empezar hoy →</BotonCompra>
          </div>
        </div>
      </section>

      {/* 7 · UN VISTAZO A LAS RECETAS */}
      <section className="bg-crema2 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="display text-center text-sm text-naranja">Dentro del material</p>
          <h2 className="mt-2 text-center text-3xl text-tinta sm:text-5xl">Un vistazo a las recetas</h2>
          {/* Las futuras fotos solo se añadirán cuando correspondan realmente con la receta. */}
          <div className="mt-9 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {recetas.map((recipe) => (
              <article key={recipe.src} className="overflow-hidden rounded-xl bg-blanco">
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
                  <h3 className="text-xs leading-snug text-tinta sm:text-sm">{recipe.title}</h3>
                  <span className="display mt-2 inline-flex rounded-full bg-amarillo px-2.5 py-1 text-[11px] text-tinta">
                    {recipe.protein} de proteína
                  </span>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-sm font-semibold text-tinta-sub sm:text-base">
            Y 81 recetas más, todas con ingredientes, preparación y ficha nutricional completa.
          </p>
          <div className="mt-8 flex justify-center">
            <BotonCompra onClick={onScrollToPlans}>Quiero empezar hoy →</BotonCompra>
          </div>
        </div>
      </section>

      {/* 8 · BÓNUS */}
      <section className="bg-blanco py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-center text-3xl sm:text-5xl">
            <span className="block text-tinta">Hoy te llevas</span>
            <span className="block text-naranja">Todo esto incluido</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[13px] leading-7 text-tinta-sub sm:text-base">
            Porque tener las recetas es media batalla. La otra media es no tener que pensar.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {bonificaciones.map((item) => (
              <article key={item.title} className="flex flex-col rounded-2xl border border-border bg-crema2 p-4 sm:p-5">
                <img
                  src={item.img}
                  alt={item.title}
                  width={320}
                  height={240}
                  loading="lazy"
                  decoding="async"
                  className="h-40 w-full rounded-lg bg-crema object-contain"
                />
                <div className="mt-4 flex flex-1 flex-col">
                  <span className="display inline-flex w-fit rounded-full bg-verde-cta px-3 py-1 text-[11px] text-white">
                    {item.label}
                  </span>
                  <h3 className="mt-3 text-base text-tinta sm:text-lg">{item.title}</h3>
                  <p className="mt-2 flex-1 text-[13px] leading-6 text-tinta-sub">{item.text}</p>
                  <div className="mt-4 flex items-center gap-2 border-t border-border pt-3">
                    <span className="text-sm text-tinta-sub line-through decoration-1">{item.price}</span>
                    <span className="display rounded-full bg-verde-cta px-2.5 py-0.5 text-xs text-white">GRATIS</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <BotonCompra onClick={onScrollToPlans}>Quiero empezar hoy →</BotonCompra>
          </div>
        </div>
      </section>

      {/* 9 · PLANOS */}
      <Pricing id="planes" />

      {/* 10 · TESTIMONIOS */}
      <section className="bg-crema py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mx-auto max-w-3xl text-center text-3xl text-tinta sm:text-5xl">
            Lo que cuentan quienes ya cocinan así
          </h2>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonios.map((item) => (
              <figure key={item.name} className="rounded-2xl border border-border bg-blanco p-5">
                <blockquote className="text-sm leading-relaxed text-tinta">{item.text}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <div aria-hidden className="display grid h-11 w-11 place-items-center rounded-full bg-crema2 text-sm text-tinta">
                    {item.initials}
                  </div>
                  <span>
                    <strong className="block text-sm text-tinta">{item.name}</strong>
                    <span className="text-xs text-tinta-sub">{item.city}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-tinta-sub">
            Testimonios de lectores verificados. Las experiencias varían de una persona a otra.
          </p>
        </div>
      </section>

      {/* 11 · ¿ES PARA TI? */}
      <section className="bg-blanco py-14 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 md:grid-cols-2">
          <div>
            <h2 className="text-2xl text-tinta sm:text-3xl">Sí, esto es para ti si…</h2>
            <ul className="mt-6 space-y-4">
              {[
                "Comes poco y quieres que lo poco cuente",
                "Te aburre comer siempre lo mismo",
                "Cocinas con prisa y para pocas personas",
                "Quieres cuidar tu masa muscular",
                "Quieres ingredientes normales, de supermercado",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-tinta">
                  <Check className="h-5 w-5 shrink-0 text-verde-cta" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl text-tinta sm:text-3xl">No, esto no es para ti si…</h2>
            <ul className="mt-6 space-y-4">
              {[
                "Buscas una dieta milagro o resultados en tres días",
                "Esperas que sustituya a tu médico o a tu dietista-nutricionista",
                "No estás dispuesta a cocinar ni 15 minutos",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-tinta-sub">
                  <CircleX className="h-5 w-5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 12 · GARANTÍA */}
      <section className="bg-tinta py-14 text-crema sm:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="display grid h-24 w-24 place-items-center rounded-full bg-amarillo text-center text-lg leading-none text-tinta">
            7 días
          </div>
          <h2 className="mt-6 text-3xl sm:text-5xl">El riesgo lo asumo yo</h2>
          <div className="mt-5 space-y-4 text-[13px] leading-7 text-crema/80 sm:text-base">
            <p>Entras hoy, descargas las 89 recetas y el menú de 34 días, y lo pruebas durante 7 días completos.</p>
            <p>Cocina lo que quieras. Imprime lo que quieras. Si al séptimo día sigues abriendo la nevera sin saber qué hacer, escribes a soporte y te devuelvo el 100 %.</p>
          </div>
          <p className="my-7 text-2xl text-amarillo sm:text-4xl">
            Sin formularios. Sin preguntas. Sin tener que justificar nada.
          </p>
          <p className="text-[13px] leading-7 text-crema/80 sm:text-base">Lo que hayas descargado se queda contigo.</p>
        </div>
      </section>

      {/* 13 · FAQ */}
      <Faq />

      {/* 14 · CTA FINAL */}
      <section className="bg-naranja py-14 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-3xl sm:text-5xl">Mañana a las nueve vas a volver a abrir la nevera</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-7 text-white/90 sm:text-base">
            La única pregunta es si ya vas a saber qué hacer con lo que hay dentro.
          </p>
          <div className="mt-7 flex justify-center">
            <BotonCompra onClick={onScrollToPlans}>Quiero el Plan Completo — 27,99 €</BotonCompra>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
