export const PROMO = {
  activa: true,
  finaliza: "2026-09-18",
  precioPosterior: "37,99 €",
};

// La fecha debe ser real y el precio debe subir de verdad al vencer. Un contador que se reinicia en cada visita es práctica engañosa.
export function formatearFecha(fecha: string) {
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  const [, mes, dia] = fecha.split("-").map(Number);
  return `${dia} de ${meses[(mes ?? 1) - 1]}`;
}

export function OfertaBar() {
  if (!PROMO.activa) return null;

  return (
    <div className="display bg-naranja px-4 py-3 text-center text-sm text-white sm:text-base">
      La oferta de lanzamiento termina el {formatearFecha(PROMO.finaliza)}. Después, el Plan
      Completo vuelve a {PROMO.precioPosterior}.
    </div>
  );
}

// Caja de alerta: solo se muestra mientras la promoción esté realmente activa.
export function CajaAlerta() {
  if (!PROMO.activa) return null;

  return (
    <section className="bg-tinta px-5 pb-12 sm:pb-16">
      <div
        className="mx-auto max-w-4xl rounded-2xl px-6 py-8 text-center"
        style={{ background: "linear-gradient(135deg, var(--naranja), var(--rojo))" }}
      >
        <p aria-hidden className="text-3xl">
          ⚠️
        </p>
        <h2 className="mt-3 text-2xl text-white sm:text-4xl">
          La oferta de lanzamiento termina el {formatearFecha(PROMO.finaliza)}
        </h2>
        <p className="mt-3 text-sm font-semibold text-white/90 sm:text-base">
          Después, el Plan Completo vuelve a su precio normal.
        </p>
      </div>
    </section>
  );
}
