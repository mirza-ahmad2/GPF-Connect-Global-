import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { images } from "@/data/images";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main id="main" className="flex-1 pt-20">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  backgroundImage,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  backgroundImage?: string;
}) {
  const bg = backgroundImage ?? images.heroes.default;

  return (
    <section className="relative overflow-hidden min-h-[calc(100svh-5rem)] flex items-center justify-center">
      <div className="absolute inset-0" aria-hidden>
        <img src={bg} alt="" className="h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 gradient-navy opacity-[0.88]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(600px circle at 20% 30%, rgba(47,167,220,0.35), transparent 60%), radial-gradient(700px circle at 80% 70%, rgba(33,76,137,0.45), transparent 60%)",
          }}
        />
      </div>
      <div className="container-gpf relative z-10 flex max-w-4xl flex-col items-center px-4 py-10 text-center text-white md:py-14">
        {eyebrow && <div className="eyebrow text-white/70">{eyebrow}</div>}
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">{title}</h1>
        {lead && <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:mt-5 md:text-lg">{lead}</p>}
        {children && <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-8">{children}</div>}
      </div>
    </section>
  );
}
