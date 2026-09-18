import {
  ArrowRight,
  Check,
  Clock3,
  Download,
  Dumbbell,
  ListChecks,
  LockKeyhole,
  Salad,
  ShieldCheck,
  ShoppingBasket,
  Smartphone,
  Soup,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Faq } from "@/components/landing/Faq";
import { OfertaBar } from "@/components/landing/OfertaBar";
import { Pricing } from "@/components/landing/Pricing";
import { SiteFooter } from "@/components/landing/SiteFooter";
import heroSaborBalanceAsset from "@/assets/hero-sabor-balance.png.asset.json";
import polloEnsaladaAsset from "@/assets/pollo-ensalada.jpeg.asset.json";
import polloVerdurasAsset from "@/assets/pollo-verduras.jpeg.asset.json";
import curryArrozAsset from "@/assets/curry-arroz.jpeg.asset.json";
import tacosCarneVerdurasAsset from "@/assets/tacos-carne-verduras.jpeg.asset.json";
import terneraVerdurasAguacateAsset from "@/assets/ternera-verduras-aguacate.jpeg.asset.json";
import tostadaProteicaAsset from "@/assets/tostada-proteica.jpeg.asset.json";
import yogurMelocotonAsset from "@/assets/yogur-melocoton.jpeg.asset.json";

type ScrollToPlans = () => void;

// Solo activar cuando los cinco bonus estén realmente a la venta por separado a esos precios.
const MOSTRAR_VALOR_BONUS = false;

const dificultades = [
  "Abres la nevera y la cierras sin coger nada",
  "Los platos grandes te echan para atrás nada más verlos",
  "Llevas semanas comiendo lo mismo porque no se te ocurre otra cosa",
  "Tiras comida que compraste con buena intención",
  "Cocinas para ti sola y no compensa el esfuerzo",
  "Sabes que tendrías que comer más proteína, pero no te entra",
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

const bonificaciones = [
  { label: "BONUS 1", title: "20 postres proteicos sin azúcar", text: "Algo dulce que suma proteína en vez de restarla. Para la hora en la que siempre se rompe el plan.", value: "9,90 €" },
  { label: "BONUS 2", title: "20 snacks de bolsillo", text: "Pequeños, transportables y con proteína de verdad. Para los días de oficina y los huecos entre comidas.", value: "9,90 €" },
  { label: "BONUS 3", title: "Planificador semanal", text: "Qué desayunas, comes y cenas cada día, ya decidido. Se imprime y se pega en la nevera.", value: "7,90 €" },
  { label: "BONUS 4", title: "Listas de la compra con sustituciones", text: "Organizadas por semana y con equivalencias de supermercado español.", value: "7,90 €" },
  { label: "BONUS 5", title: "Guía de macros e hidratación", text: "Cuánta proteína necesitas al día y cómo repartirla.", value: "5,90 €" },
];

// Testimonios verificados. Cada nuevo testimonio requiere un registro de compra.
const testimonios = [
  { name: "Mariana R.", city: "Madrid", initials: "MR", text: "Empecé con las mini-recetas de pollo al papillote y por fin volví a terminar un plato completo." },
  { name: "Andrés P.", city: "Barcelona", initials: "AP", text: "Lo que más me sirvió fue el planificador. Dejé de improvisar a las nueve de la noche y ahora ceno ligero." },
  { name: "Carolina M.", city: "Valencia", initials: "CM", text: "Estaba cansada de huevo y batidos. Los tentempiés de bolsillo me salvaron los días de oficina." },
  { name: "Juliana S.", city: "Sevilla", initials: "JS", text: "Las listas de la compra con sustituciones locales fueron un alivio: encontré todo en el mercado de la esquina." },
  { name: "Valentina C.", city: "Málaga", initials: "VC", text: "Pensé que iba a ser comida triste de dieta y me encontré con platos con sabor de verdad." },
  { name: "Matías D.", city: "Zaragoza", initials: "MD", text: "Sumé las recetas altas en proteína y en un mes volví a levantar lo mismo de antes en el gimnasio." },
];

function SectionCta({ onClick }: { onClick: ScrollToPlans }) {
  return (
    <div className="bg-cream px-5 py-8 text-center">
      <Button size="lg" onClick={onClick} className="h-auto w-full max-w-md rounded-md px-8 py-5 text-sm font-extrabold shadow-editorial sm:text-base">
        QUIERO EMPEZAR HOY <ArrowRight aria-hidden />
      </Button>
    </div>
  );
}

export function SalesPage({ onScrollToPlans }: { onScrollToPlans: ScrollToPlans }) {
  return (
    <main className="min-h-screen bg-background">
      <OfertaBar />
      <div className="bg-slate-deep px-4 py-2 text-center text-xs font-bold text-slate-deep-foreground sm:text-sm">
        Acceso inmediato <span className="px-2 text-gold">·</span> Garantía de 7 días
      </div>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-4 px-5 py-5 sm:gap-8 sm:py-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="text-center lg:text-left">
            <p className="text-[11px] font-extrabold tracking-[0.18em] text-primary uppercase sm:text-xs">Nutrición de Pequeño Volumen</p>
            <h1 className="mt-2 font-serif text-[1.9rem] leading-[1.02] font-bold text-foreground sm:text-5xl lg:text-6xl">
              Cuando ya no te apetece nada, el problema no es el hambre. Es lo que hay en el plato.
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-6 text-muted-foreground sm:text-lg lg:mx-0">
              89 recetas de porción pequeña con 25 a 35 g de proteína real, listas en 15 minutos. Para que comer vuelva a ser algo que te apetece y no algo que tienes que resolver.
            </p>
            <p className="mt-3 text-xl font-extrabold text-foreground sm:text-2xl">Desde 17,99 € · pago único</p>
            <Button size="lg" onClick={onScrollToPlans} className="mt-3 h-auto w-full max-w-md rounded-md px-8 py-5 text-sm font-extrabold shadow-editorial sm:text-base">
              QUIERO EMPEZAR HOY <ArrowRight aria-hidden />
            </Button>
            <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-[11px] font-semibold text-muted-foreground sm:text-xs lg:justify-start">
              <span className="inline-flex items-center gap-1"><LockKeyhole className="h-3.5 w-3.5 text-primary" />Pago seguro</span>
              <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-primary" />Garantía de 7 días</span>
              <span className="inline-flex items-center gap-1"><Download className="h-3.5 w-3.5 text-primary" />Acceso inmediato</span>
              <span className="inline-flex items-center gap-1"><Download className="h-3.5 w-3.5 text-primary" />Descarga en PDF</span>
            </div>
          </div>
          <img src={heroSaborBalanceAsset.url} alt="Libro Sabor e Balance junto a su versión para móvil" width={768} height={767} loading="lazy" decoding="async" className="mx-auto h-auto w-full max-w-lg rounded-md object-contain shadow-editorial" />
        </div>
      </section>

      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="font-serif text-4xl font-bold sm:text-5xl">¿Te suena esto?</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-[13px] leading-7 text-muted-foreground sm:text-base">
            <p>Son las nueve de la noche. Abres la nevera, miras lo que hay, y la cierras.</p>
            <p>No es que no tengas hambre exactamente. Es que nada de lo que ves te apetece lo suficiente como para ponerte a cocinarlo. Otra vez huevo no. El batido lo dejaste hace semanas. Y lo que preparaste el domingo lleva tres días ahí.</p>
            <p className="font-bold text-foreground">Así que cenas cualquier cosa. O no cenas.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-3">
            {dificultades.map((item) => (
              <article key={item} className="flex items-start gap-3 rounded-md border border-border bg-card p-4 shadow-soft sm:p-5">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-[13px] leading-snug font-bold sm:text-sm">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-deep py-12 text-slate-deep-foreground sm:py-16">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="font-serif text-4xl font-bold sm:text-5xl">El problema no es un día. Es lo que pasa cuando son treinta.</h2>
          <div className="mt-6 space-y-4 text-[13px] leading-7 text-slate-deep-foreground/80 sm:text-base">
            <p>Un día mal comido no pasa nada. El problema es que no es un día.</p>
            <p>Comer poco y mal no se nota la primera semana. Se nota cuando subes las escaleras y te falta el aire donde antes no te faltaba. Cuando levantas en el gimnasio lo que levantabas hace dos meses y te cuesta.</p>
            <p>Y mientras tanto sigues gastando. En la compra que se estropea. En el pedido de las nueve y media porque ya no hay nada hecho. En el bote de proteína que te tomaste tres veces.</p>
          </div>
          <p className="my-8 border-y border-terracotta/40 py-6 font-serif text-3xl leading-tight font-bold text-terracotta sm:text-5xl">Lo caro no es comer bien. Lo caro es ir improvisando.</p>
          <p className="max-w-3xl text-[13px] leading-7 text-slate-deep-foreground/80 sm:text-base">No necesitas más fuerza de voluntad. Necesitas que, cuando abras la nevera, ya esté decidido qué vas a cenar — y que sea algo que te apetezca de verdad.</p>
        </div>
      </section>

      <section className="bg-slate-deep pb-12 text-slate-deep-foreground sm:pb-16">
        <div className="mx-auto max-w-5xl px-5">
          <p className="text-xs font-extrabold tracking-[0.2em] text-terracotta uppercase">El método</p>
          <h2 className="mt-2 font-serif text-4xl leading-tight font-bold sm:text-6xl">Nutrición de Pequeño Volumen</h2>
          <p className="mt-5 max-w-3xl text-[13px] leading-7 text-slate-deep-foreground/80 sm:text-lg">El secreto no es comer más. Es poner los nutrientes adecuados en los pocos bocados que apetecen. Cada receta está calculada para que una porción pequeña aporte entre 25 y 35 g de proteína real, con cocciones ligeras: papillote, vapor y caldos.</p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-md bg-slate-deep-foreground/20 sm:grid-cols-3">
            {["Porción pequeña", "Densidad nutricional alta", "Cocción ligera"].map((step, index) => (
              <div key={step} className="bg-slate-deep px-5 py-5"><span className="font-serif text-3xl text-terracotta">0{index + 1}</span><p className="mt-1 font-bold">{step}</p></div>
            ))}
          </div>
          <div className="mt-8 overflow-hidden rounded-md border border-slate-deep-foreground/20">
            <div className="grid grid-cols-2 border-b border-slate-deep-foreground/20 text-xs font-extrabold uppercase sm:text-sm"><div className="px-4 py-4 opacity-60">Sin método</div><div className="px-4 py-4 text-terracotta">Con Nutrición de Pequeño Volumen</div></div>
            {[
              ["Plato grande que dejas a medias", "Porción pequeña que terminas"],
              ["Proteína que no llega", "25 a 35 g por plato, contados"],
              ["Ya veré qué ceno", "34 días decididos de antemano"],
              ["Batido otra vez", "Comida de verdad, con sabor"],
            ].map(([sin, conMetodo]) => (
              <div key={sin} className="grid grid-cols-2 border-b border-slate-deep-foreground/15 last:border-b-0">
                <div className="px-4 py-4 text-sm opacity-50 line-through decoration-1">{sin}</div>
                <div className="px-4 py-4 text-sm font-bold text-terracotta">{conMetodo}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Datos principales" className="border-b border-border bg-cream py-7">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-5 sm:grid-cols-4">
          {[["89", "recetas"], ["34", "días de menú"], ["25-35 g", "de proteína"], ["15 min", "de preparación"]].map(([value, label]) => (
            <div key={label} className="text-center"><p className="font-serif text-3xl font-bold text-primary sm:text-4xl">{value}</p><p className="mt-1 text-xs font-semibold text-muted-foreground sm:text-sm">{label}</p></div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-center text-xs font-extrabold tracking-[0.18em] text-primary uppercase">Por qué funciona</p>
          <h2 className="mt-2 text-center font-serif text-4xl font-bold sm:text-5xl">Pensado para el día a día</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map(({ icon: Icon, title }) => <article key={title} className="border-l-2 border-terracotta pl-5"><Icon className="h-6 w-6 text-primary" /><h3 className="mt-3 font-bold">{title}</h3></article>)}
          </div>
        </div>
      </section>

      <SectionCta onClick={onScrollToPlans} />

      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-center text-xs font-extrabold tracking-[0.18em] text-primary uppercase">Dentro del material</p>
          <h2 className="mt-2 text-center font-serif text-4xl font-bold sm:text-5xl">Un vistazo a las recetas</h2>
          {/* Las futuras fotos solo se añadirán cuando correspondan realmente con la receta. */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {recetas.map((recipe) => (
              <article key={recipe.src} className="overflow-hidden rounded-md bg-card text-card-foreground shadow-soft">
                <img src={recipe.src} alt={recipe.title} width={recipe.width} height={recipe.height} loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover" />
                <div className="p-3 sm:p-4"><h3 className="text-xs leading-snug font-bold sm:text-sm">{recipe.title}</h3><span className="mt-2 inline-flex rounded-full bg-accent px-2 py-1 text-[10px] font-extrabold text-accent-foreground sm:text-xs">{recipe.protein} de proteína</span></div>
              </article>
            ))}
          </div>
          <p className="mt-7 text-center text-sm font-semibold text-muted-foreground sm:text-base">Y 81 recetas más, todas con ingredientes, preparación y ficha nutricional completa.</p>
        </div>
      </section>

      <section className="bg-cream pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center font-serif text-4xl font-bold sm:text-5xl">Y hoy entra todo esto con el Plan Completo</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[13px] leading-7 text-muted-foreground sm:text-base">Porque tener las recetas es media batalla. La otra media es no tener que pensar.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {bonificaciones.map((item) => (
              <article key={item.title} className="rounded-md border border-border bg-card p-5 shadow-soft">
                <span className="inline-flex rounded-full bg-terracotta px-3 py-1 text-[10px] font-extrabold text-terracotta-foreground">{item.label}</span>
                <h3 className="mt-4 font-serif text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-[13px] leading-6 text-muted-foreground">{item.text}</p>
                <div className="mt-5 flex items-center justify-between gap-2"><span className="text-xs font-extrabold text-primary">INCLUIDO</span>{MOSTRAR_VALOR_BONUS && <span className="text-sm text-muted-foreground line-through">{item.value}</span>}</div>
              </article>
            ))}
          </div>
          {MOSTRAR_VALOR_BONUS && <p className="mt-6 text-center font-serif text-2xl font-bold text-primary">Los cinco, sueltos, son 41,50 €.</p>}
        </div>
      </section>

      <section className="bg-slate-deep py-12 text-slate-deep-foreground sm:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mx-auto max-w-3xl text-center font-serif text-4xl font-bold sm:text-5xl">Lo que cuentan quienes ya cocinan así</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonios.map((item) => (
              <figure key={item.name} className="rounded-md border border-slate-deep-foreground/15 bg-card p-5 text-card-foreground shadow-soft">
                <blockquote className="text-sm leading-relaxed">{item.text}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4"><div aria-hidden className="grid h-11 w-11 place-items-center rounded-full bg-cream font-serif text-sm font-bold text-slate-deep">{item.initials}</div><span><strong className="block text-sm">{item.name}</strong><span className="text-xs text-muted-foreground">{item.city}</span></span></figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-slate-deep-foreground/70">Testimonios de lectores verificados. Las experiencias varían de una persona a otra.</p>
        </div>
      </section>

      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 md:grid-cols-2">
          <div><h2 className="font-serif text-3xl font-bold sm:text-4xl">Sí, esto es para ti si…</h2><ul className="mt-6 space-y-4">{["Comes poco y quieres que lo poco cuente", "Te aburre comer siempre lo mismo", "Cocinas con prisa y para pocas personas", "Quieres cuidar tu masa muscular", "Quieres ingredientes normales, de supermercado"].map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="h-5 w-5 shrink-0 text-primary" /><span>{item}</span></li>)}</ul></div>
          <div><h2 className="font-serif text-3xl font-bold sm:text-4xl">No, esto no es para ti si…</h2><ul className="mt-6 space-y-4">{["Buscas una dieta milagro o resultados en tres días", "Esperas que sustituya a tu médico o a tu dietista-nutricionista", "No estás dispuesta a cocinar ni 15 minutos"].map((item) => <li key={item} className="flex gap-3 text-sm text-muted-foreground"><X className="h-5 w-5 shrink-0" /><span>{item}</span></li>)}</ul></div>
        </div>
      </section>

      <Pricing id="planes" />

      <section className="bg-slate-deep py-12 text-slate-deep-foreground sm:py-16">
        <div className="mx-auto max-w-4xl px-5">
          <ShieldCheck className="h-12 w-12 text-terracotta" />
          <h2 className="mt-5 font-serif text-4xl font-bold sm:text-5xl">El riesgo lo asumo yo</h2>
          <div className="mt-5 space-y-4 text-[13px] leading-7 text-slate-deep-foreground/80 sm:text-base"><p>Entras hoy, descargas las 89 recetas y el menú de 34 días, y lo pruebas durante 7 días completos.</p><p>Cocina lo que quieras. Imprime lo que quieras. Si al séptimo día sigues abriendo la nevera sin saber qué hacer, escribes a soporte y te devuelvo el 100 %.</p></div>
          <p className="my-6 font-serif text-3xl font-bold text-terracotta">Sin formularios. Sin preguntas. Sin tener que justificar nada.</p>
          <p className="text-[13px] leading-7 text-slate-deep-foreground/80 sm:text-base">Lo que hayas descargado se queda contigo.</p>
        </div>
      </section>

      <Faq />

      <section className="bg-slate-deep py-12 text-center text-slate-deep-foreground sm:py-16">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-serif text-4xl font-bold sm:text-5xl">Mañana a las nueve vas a volver a abrir la nevera</h2>
          <p className="mt-4 text-[13px] leading-7 text-slate-deep-foreground/80 sm:text-base">La única pregunta es si ya vas a saber qué hacer con lo que hay dentro.</p>
          <Button size="lg" onClick={onScrollToPlans} className="mt-7 h-auto w-full max-w-md rounded-md bg-terracotta px-8 py-5 text-sm font-extrabold text-terracotta-foreground shadow-editorial hover:bg-terracotta/90 sm:text-base">QUIERO EL PLAN COMPLETO — 27,99 €</Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}