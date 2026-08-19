import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { AnnouncementBar } from "@/components/landing/AnnouncementBar";
import { Hero } from "@/components/landing/Hero";
import { PainPoints } from "@/components/landing/PainPoints";
import { Solution } from "@/components/landing/Solution";
import { Benefits } from "@/components/landing/Benefits";
import { SocialProof } from "@/components/landing/SocialProof";
import { ForWho } from "@/components/landing/ForWho";
import { Pricing } from "@/components/landing/Pricing";
import { Guarantee } from "@/components/landing/Guarantee";
import { Faq } from "@/components/landing/Faq";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { StickyMobileCta } from "@/components/landing/StickyMobileCta";

const TITLE = "Sabor & Balance · Recetas Proteicas y Digestivas GLP-1";
const DESCRIPTION =
  "Más de 100 recetas compactas, altas en proteína y fáciles de digerir, listas en 15 minutos. Guía digital en PDF con descarga inmediata.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const pricingRef = useRef<HTMLDivElement | null>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => setShowSticky(!(entries[0]?.isIntersecting ?? true)),
      { threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToPricing = () =>
    pricingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBar />
      <div ref={heroRef}>
        <Hero onCta={scrollToPricing} />
      </div>
      <PainPoints />
      <Solution />
      <div ref={pricingRef}>
        <Pricing id="planes" />
      </div>
      <Guarantee />
      <Faq />
      <SiteFooter />
      <StickyMobileCta visible={showSticky} onCta={scrollToPricing} />
    </main>
  );
}
