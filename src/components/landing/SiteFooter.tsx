const links = ["Términos y Condiciones", "Política de Privacidad", "Contacto y Soporte"];

export function SiteFooter() {
  return (
    <footer className="bg-slate-deep py-12 pb-28 text-slate-deep-foreground sm:pb-12">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="text-base font-bold tracking-tight">Sabor &amp; Balance</p>

        <p className="mx-auto mt-5 max-w-2xl text-xs leading-relaxed text-slate-deep-foreground/70">
          Descargo de Responsabilidad: La información contenida en este sitio web y en las guías
          digitales tiene fines exclusivamente informativos y culinarios. No constituye
          asesoramiento médico, diagnóstico ni prescripción de tratamientos. Los resultados
          pueden variar según el metabolismo y la adherencia individual.
        </p>

        <nav className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs">
          {links.map((l, i) => (
            <span key={l} className="inline-flex items-center gap-3">
              <a href="#" className="transition-opacity hover:opacity-70">
                {l}
              </a>
              {i < links.length - 1 && (
                <span aria-hidden className="text-slate-deep-foreground/40">
                  ·
                </span>
              )}
            </span>
          ))}
        </nav>

        <p className="mt-6 text-xs text-slate-deep-foreground/60">
          © 2026 Sabor &amp; Balance. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
