import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

type LegalSection = {
  title: string;
  paragraphs: string[];
};

export function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: LegalSection[] }) {
  return (
    <main className="min-h-screen bg-cream">
      <header className="bg-slate-deep py-5 text-slate-deep-foreground">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5">
          <Link to="/" className="font-serif text-xl font-bold">Sabor &amp; Balance</Link>
          <Button asChild variant="outline" size="sm" className="border-slate-deep-foreground/30 bg-transparent text-slate-deep-foreground hover:bg-slate-deep-foreground/10 hover:text-slate-deep-foreground">
            <Link to="/"><ArrowLeft aria-hidden />Volver</Link>
          </Button>
        </div>
      </header>
      <article className="mx-auto max-w-4xl px-5 py-12 sm:py-16">
        <h1 className="font-serif text-4xl font-bold sm:text-6xl">{title}</h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{intro}</p>
        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-serif text-2xl font-bold sm:text-3xl">{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-3 leading-relaxed text-muted-foreground">{paragraph}</p>)}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}