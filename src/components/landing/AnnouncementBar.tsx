export function AnnouncementBar() {
  return (
    <div className="bg-slate-deep text-slate-deep-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-4 py-2.5">
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sage" />
        </span>
        <p className="text-center text-[13px] leading-snug font-medium sm:text-sm">
          ⚡ ACCESO INMEDIATO: Descarga tu guía digital completa en PDF en menos de 2 minutos
          tras la confirmación.
        </p>
      </div>
    </div>
  );
}
