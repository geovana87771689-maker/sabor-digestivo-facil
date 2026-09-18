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
    <div className="display px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-white sm:text-base" style={{ backgroundColor: "#034200" }}>
      🔥 ¡ESTA PROMOCIÓN ACABA HOY! DESPUÉS, EL PLAN COMPLETO.
    </div>
  );
}

// Caja de alerta: solo se muestra mientras la promoción esté realmente activa.
export function CajaAlerta() {
  if (!PROMO.activa) return null;

  return (
    <section className="bg-crema-2 px-5 pb-12 sm:pb-16">
      <div
        className="mx-auto max-w-4xl rounded-2xl px-6 py-8 text-center"
        style={{ background: "linear-gradient(135deg, var(--naranja), var(--rojo))" }}
      >
        <p aria-hidden className="text-3xl">
          ⚠️
        </p>
        <h2 className="mt-3 text-2xl text-white sm:text-4xl">
           LA OFERTA DE LANZAMIENTO TERMINA EL 19 DE SEPTIEMBRE
        </h2>
        <p className="mt-3 text-sm font-semibold text-white/90 sm:text-base">
          Después, el Plan Completo vuelve a su precio normal.
        </p>
      </div>
    </section>
  );
}
