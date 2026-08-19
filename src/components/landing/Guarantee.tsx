import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="bg-background py-10 sm:py-12">
      <div className="mx-auto max-w-3xl px-5">
        <div className="rounded-3xl border-2 border-gold/60 bg-gold/10 p-6 text-center sm:p-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 text-xs font-bold tracking-wide text-gold-foreground uppercase">
            <ShieldCheck className="h-4 w-4 shrink-0" />
            Garantía Incondicional de 7 Días
          </span>
          <p className="mt-5 text-sm leading-relaxed text-foreground sm:text-base">
            Prueba las recetas durante una semana completa. Si no sientes que facilitan tu
            alimentación, mejoran tu confort estomacal y te ahorran horas de cocina, te
            devolvemos el 100% de tu dinero sin preguntas ni complicaciones.
          </p>
        </div>
      </div>
    </section>
  );
}
