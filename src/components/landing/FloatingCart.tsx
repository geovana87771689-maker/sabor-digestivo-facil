import { ShoppingCart } from "lucide-react";

export function FloatingCart({ onCta }: { onCta: () => void }) {
  return (
    <button
      type="button"
      onClick={onCta}
      aria-label="Ver ofertas"
      className="fixed bottom-20 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
    </button>
  );
}
