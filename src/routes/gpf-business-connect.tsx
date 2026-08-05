import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/gpf/PageShell";
import { site } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/gpf-business-connect")({
  head: () => ({
    meta: [
      { title: "GPF Business Connect | Plateforme du réseau" },
      { name: "description", content: "GPF Business Connect : la plateforme dédiée pour connecter les acteurs économiques francophones, centraliser l'information et faciliter les partenariats." },
      { property: "og:title", content: "GPF Business Connect" },
      { property: "og:description", content: "La plateforme du réseau GPF." },
      { property: "og:url", content: "/gpf-business-connect" },
    ],
    links: [{ rel: "canonical", href: "/gpf-business-connect" }],
  }),
  component: BusinessConnect,
});

function BusinessConnect() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Plateforme externe"
        title="GPF Business Connect."
        lead="La plateforme dédiée pour connecter les acteurs économiques francophones, centraliser l'information et faciliter les partenariats."
      >
        <a href={site.externalPlatformUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-navy px-6 py-3 rounded-full font-semibold hover:bg-accent-cyan hover:text-white">
          Accéder à GPF Business Connect <ArrowUpRight className="w-4 h-4" />
        </a>
      </PageHero>

      <section className="py-16">
        <div className="container-gpf grid md:grid-cols-2 gap-6">
          {[
            ["Connecter les membres", "Une communauté vivante d'organisations, d'entreprises et d'experts francophones."],
            ["Renforcer la visibilité", "Un espace pour valoriser initiatives, expertises et opportunités."],
            ["Centraliser l'information", "Un point d'entrée unique vers la connaissance du réseau."],
            ["Faciliter les introductions", "Des mises en relation qualifiées entre acteurs."],
            ["Soutenir les partenariats", "Un cadre pour faire émerger et structurer des projets communs."],
            ["Stimuler les échanges", "Débats, retours d'expérience, groupes thématiques."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-textgrey text-sm">{d}</p>
            </div>
          ))}
        </div>
        <div className="container-gpf mt-10 text-xs text-textgrey">
          GPF Business Connect est une plateforme externe. Captures d'écran authentiques à intégrer dès mise à disposition.
        </div>
      </section>
    </PageShell>
  );
}
