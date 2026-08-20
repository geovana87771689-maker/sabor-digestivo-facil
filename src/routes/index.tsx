import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { AnnouncementBar } from "@/components/landing/AnnouncementBar";
import { Hero } from "@/components/landing/Hero";
import { PainPoints } from "@/components/landing/PainPoints";
import { InsidePeek } from "@/components/landing/InsidePeek";
import { Benefits } from "@/components/landing/Benefits";
import { SocialProof } from "@/components/landing/SocialProof";
import { ForWho } from "@/components/landing/ForWho";
import { Pricing } from "@/components/landing/Pricing";
import { Faq } from "@/components/landing/Faq";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { StickyMobileCta } from "@/components/landing/StickyMobileCta";
import { FloatingCart } from "@/components/landing/FloatingCart";


const TITLE = "Sabor & Balance · Recetas Proteicas de Fácil Digestión";
const DESCRIPTION =
  "Más de 100 recetas compactas, altas en proteína y fáciles de digerir, listas en 15 minutos. Guía digital en PDF con descarga inmediata.";
const OG_IMAGE = "https://sabor-digestivo-facil.lovable.app/og-image.jpg";

export const Route = createFileRoute("/")({
 import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { AnnouncementBar } from "@/components/landing/AnnouncementBar";
import { Hero } from "@/components/landing/Hero";
import { PainPoints } from "@/components/landing/PainPoints";
import { InsidePeek } from "@/components/landing/InsidePeek";
import { Benefits } from "@/components/landing/Benefits";
import { SocialProof } from "@/components/landing/SocialProof";
import { ForWho } from "@/components/landing/ForWho";
import { Pricing } from "@/components/landing/Pricing";
import { Faq } from "@/components/landing/Faq";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { StickyMobileCta } from "@/components/landing/StickyMobileCta";
import { FloatingCart } from "@/components/landing/FloatingCart";

const TITLE = "Sabor & Balance · Recetas Proteicas de Fácil Digestión";
const DESCRIPTION =
  "Más de 100 recetas compactas, altas en proteína y fáciles de digerir, listas en 15 minutos. Guía digital en PDF con descarga inmediata.";
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
  const heroRef = useRef<HTMLDivElement | null>(null);
  const pricingRef = useRef<HTMLDivElement | null>(null);
  const solutionRef = useRef<HTMLDivElement | null>(null);
  const [showSticky, setShowSticky] = useState(false);

  // Script complementar que anexa UTMs dinamicamente em qualquer clique de link do checkout
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
    return () => {
      document.removeEventListener("click", handleLinkClicks);
    };
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSticky(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <div ref={heroRef}>
        <Hero onCtaClick={scrollToPricing} />
      </div>
      <PainPoints />
      <div ref={solutionRef}>
        <InsidePeek />
      </div>
      <Benefits />
      <SocialProof />
      <ForWho />
      <div ref={pricingRef}>
        <Pricing />
      </div>
      <Faq />
      <SiteFooter />
      <StickyMobileCta isVisible={showSticky} onCtaClick={scrollToPricing} />
      <FloatingCart onCtaClick={scrollToPricing} />
    </div>
  );
}
  component: Index,
});

function Index() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const pricingRef = useRef<HTMLDivElement | null>(null);
  const solutionRef = useRef<HTMLDivElement | null>(null);
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
  const scrollToSolution = () =>
    solutionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBar />
      <div ref={heroRef}>
        <Hero onCta={scrollToPricing} onSecondaryCta={scrollToSolution} />
      </div>
      <div ref={solutionRef}>
        <InsidePeek />
      </div>
      <PainPoints />

      <Benefits />
      <SocialProof />
      <ForWho />
      <div ref={pricingRef}>
        <Pricing id="planes" />
      </div>
      <Faq />
      <SiteFooter />
      <StickyMobileCta visible={showSticky} onCta={scrollToPricing} />
      <FloatingCart onCta={scrollToPricing} />
    </main>

  );
}

