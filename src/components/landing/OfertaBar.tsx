const PROMO = {
  activa: false,
  finaliza: "2026-10-05",
  precioPosterior: "37,99 €",
};

// La fecha debe ser real y el precio debe subir de verdad al vencer. Un contador que se reinicia en cada visita es práctica engañosa.
function formatearFecha(fecha: string) {
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
    <div className="bg-terracotta px-4 py-2.5 text-center text-xs font-extrabold text-terracotta-foreground sm:text-sm">
      La oferta de lanzamiento termina el {formatearFecha(PROMO.finaliza)}. Después, el Plan
      Completo vuelve a {PROMO.precioPosterior}.
    </div>
  );
}