import { Button } from "@/components/ui/button";

export function StickyMobileCta({ visible, onCta }: { visible: boolean; onCta: () => void }) {
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 p-3 backdrop-blur transition-transform duration-300 sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-foreground">Desde $ 8.076,07 ARS</p>
          <p className="truncate text-[11px] text-muted-foreground">Pago único · PDF inmediato</p>
        </div>
        <Button onClick={onCta} className="ml-auto shrink-0 rounded-full px-6 font-bold">
          Ver Ofertas
        </Button>
      </div>
    </div>
  );
}
