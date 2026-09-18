import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { SalesPage } from "@/components/landing/SalesPage";

const TITLE = "Sabor & Balance · Nutrición de Pequeño Volumen";
const DESCRIPTION =
  "89 recetas en porciones pequeñas, con 25 a 35 g de proteína y listas en 15 minutos. Menú organizado y acceso inmediato.";
const OG_IMAGE = "https://sabor-digestivo-facil.lovable.app/og-image.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    scripts: [
      {
        src: "https://cdn.utmify.com.br/scripts/utms/latest.js",
        async: true,
        defer: true,
        "data-utmify-prevent-subids": "",
      },
    ],
  }),
  component: Index,
});

function Index() {
  // Conserva todos los parámetros presentes, incluidos los UTM y fbclid, al abrir el pago.
  useEffect(() => {
    const handleLinkClicks = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target || !target.href) return;

      const currentSearch = window.location.search;
      if (currentSearch && target.href.includes("cartpanda")) {
        const url = new URL(target.href);
        const currentParams = new URLSearchParams(currentSearch);
        currentParams.forEach((value, key) => {
          url.searchParams.set(key, value);
        });
        target.href = url.toString();
      }
    };

    document.addEventListener("click", handleLinkClicks);
    return () => document.removeEventListener("click", handleLinkClicks);
  }, []);

  const scrollToPlans = () => document.getElementById("planes")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return <SalesPage onScrollToPlans={scrollToPlans} />;
}
