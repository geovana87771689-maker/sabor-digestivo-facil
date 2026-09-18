import { Link } from "@tanstack/react-router";

const links = [
  { label: "Términos y condiciones", to: "/terminos" as const },
  { label: "Política de privacidad", to: "/privacidad" as const },
  { label: "Contacto y soporte", to: "/contacto" as const },
];

export function SiteFooter() {
  return (
    <footer className="bg-slate-deep py-10 text-slate-deep-foreground">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="text-base font-bold tracking-tight">Sabor &amp; Balance</p>

        <p className="mx-auto mt-5 max-w-2xl text-xs leading-relaxed text-slate-deep-foreground/70">
          Este material es culinario e informativo y no sustituye la orientación de un médico o
          dietista-nutricionista colegiado.
        </p>

        <nav className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs">
          {links.map((link, i) => (
            <span key={link.to} className="inline-flex items-center gap-3">
              <Link to={link.to} className="transition-opacity hover:opacity-70">
                {link.label}
              </Link>
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
