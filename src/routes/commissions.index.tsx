import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/gpf/PageShell";
import { commissions } from "@/data/commissions";
import { ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/commissions/")({
  head: () => ({
    meta: [
      { title: "Commissions | GPF" },
      { name: "description", content: "Les commissions thématiques du Groupement du Patronat Francophone : IA, climat, diasporas, formation, numérique, sécurité, sport et plus." },
      { property: "og:title", content: "Commissions | GPF" },
      { property: "og:description", content: "16 commissions au service de la Francophonie économique." },
      { property: "og:url", content: "/commissions" },
    ],
    links: [{ rel: "canonical", href: "/commissions" }],
  }),
  component: CommissionsPage,
});

function CommissionsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Commissions"
        title="Des commissions thématiques pour agir concrètement."
        lead="Chaque commission fédère experts, entreprises et institutions autour d'un enjeu stratégique de la Francophonie économique."
      />

      <section className="py-16">
        <div className="container-gpf">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {commissions.map((c) => (
              <div key={c.slug} className={`rounded-2xl p-6 border ${c.featured ? "bg-navy text-white border-navy" : "bg-white border-border"}`}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className={`text-lg font-semibold ${c.featured ? "text-white" : "text-ink"}`}>{c.name}</h3>
                  {c.featured && <Sparkles className="w-5 h-5 text-accent-cyan" />}
                </div>
                <p className={`mt-2 text-sm ${c.featured ? "text-white/75" : "text-textgrey"}`}>{c.purpose}</p>
                {c.president && (
                  <div className={`mt-4 text-xs ${c.featured ? "text-white/60" : "text-textgrey"}`}>
                    Président · <span className={c.featured ? "text-white" : "text-ink font-semibold"}>{c.president}</span>
                  </div>
                )}
                {c.slug === "intelligence-artificielle" && (
                  <Link to="/commissions/intelligence-artificielle" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Découvrir la Commission IA <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
