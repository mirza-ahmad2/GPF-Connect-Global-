import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/gpf/PageShell";
import { ArrowRight } from "lucide-react";
import { images } from "@/data/images";

export const Route = createFileRoute("/partenaires")({
  head: () => ({
    meta: [
      { title: "Membres & Partenaires | GPF" },
      { name: "description", content: "Membres institutionnels, partenaires événementiels, médias et plateformes du Groupement du Patronat Francophone." },
      { property: "og:title", content: "Membres & Partenaires | GPF" },
      { property: "og:description", content: "Un réseau d'organisations qui font le GPF." },
      { property: "og:url", content: "/partenaires" },
    ],
    links: [{ rel: "canonical", href: "/partenaires" }],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  const groups = [
    { id: "membres", t: "Organisations membres" },
    { id: "institutionnels", t: "Partenaires institutionnels" },
    { id: "evenement", t: "Partenaires événementiels" },
    { id: "media", t: "Partenaires médias" },
  ];
  return (
    <PageShell>
      <PageHero
        eyebrow="Réseau"
        title="Un réseau d'organisations qui font le GPF."
        lead="Membres, partenaires institutionnels, événementiels et médias : un maillage international qui donne au GPF sa force d'action."
      >
        <Link to="/devenir-partenaire" className="inline-flex items-center gap-2 bg-white text-navy px-6 py-3 rounded-full font-semibold hover:bg-accent-cyan hover:text-white">
          Devenir partenaire <ArrowRight className="w-4 h-4" />
        </Link>
      </PageHero>

      <section className="py-16">
        <div className="container-gpf space-y-14">
          {groups.map((g) => (
            <div key={g.id} id={g.id}>
              <div className="flex items-end justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold">{g.t}</h2>
                <div className="text-xs text-textgrey">Logos provisoires</div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {images.partners.slice(0, 10).map((logo, i) => (
                  <div key={i} className="flex h-24 items-center justify-center rounded-xl border border-border bg-white p-3">
                    <img src={logo} alt={`${g.t} ${i + 1}`} className="max-h-14 w-full object-contain" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
