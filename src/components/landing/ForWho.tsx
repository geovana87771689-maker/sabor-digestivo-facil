import { Check, X } from "lucide-react";

const forYou = [
  "Estás en un protocolo GLP-1 / GIP y el apetito bajó mucho.",
  "Sientes náuseas o pesadez con los platos grandes de siempre.",
  "Quieres cuidar tu masa muscular y tu firmeza durante el proceso.",
  "Cocinas con poco tiempo y necesitas ideas resueltas en 15 minutos.",
  "Ya te aburriste del huevo, el pollo seco y los batidos.",
];

const notForYou = [
  "Buscas una dieta milagrosa o promesas de resultados rápidos.",
  "Esperas reemplazar la orientación de tu médico o nutricionista.",
  "No estás dispuesto a cocinar ni 15 minutos al día.",
];

export function ForWho() {
  return (
    <section className="bg-background py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="mx-auto max-w-2xl text-center text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          ¿Es para ti? Seamos honestos
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border-2 border-primary/30 bg-card p-7 shadow-soft">
            <h3 className="text-base font-extrabold text-foreground sm:text-lg">
              Sí, esto es para ti si…
            </h3>
            <ul className="mt-5 space-y-3">
              {forYou.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="min-w-0 text-sm leading-snug text-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-muted/40 p-7">
            <h3 className="text-base font-extrabold text-foreground sm:text-lg">
              No es para ti si…
            </h3>
            <ul className="mt-5 space-y-3">
              {notForYou.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="min-w-0 text-sm leading-snug text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
