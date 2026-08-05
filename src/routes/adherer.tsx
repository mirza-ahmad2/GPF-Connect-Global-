import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/gpf/PageShell";
import { membershipPlans } from "@/data/plans";
import { Check } from "lucide-react";

export const Route = createFileRoute("/adherer")({
  head: () => ({
    meta: [
      { title: "Adhérer | GPF" },
      { name: "description", content: "Rejoignez le Groupement du Patronat Francophone : accès au réseau, événements, formations, commissions, GPF Business Connect et visibilité internationale." },
      { property: "og:title", content: "Adhérer au GPF" },
      { property: "og:description", content: "Trois formules pour rejoindre le réseau francophone." },
      { property: "og:url", content: "/adherer" },
    ],
    links: [{ rel: "canonical", href: "/adherer" }],
  }),
  component: Adherer,
});

function Adherer() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Adhérer"
        title="Prenez place dans l'économie francophone."
        lead="Trois formules pour intégrer le réseau, gagner en visibilité et peser dans le dialogue économique international."
      />
      <section className="py-16">
        <div className="container-gpf">
          <div className="grid md:grid-cols-3 gap-6">
            {membershipPlans.map((p) => (
              <div key={p.id} className={`rounded-3xl border p-8 flex flex-col ${p.featured ? "bg-navy text-white border-navy" : "bg-white border-border"}`}>
                <div className={`text-xs uppercase tracking-widest ${p.featured ? "text-white/60" : "text-textgrey"}`}>{p.tagline}</div>
                <div className={`mt-2 text-3xl font-bold ${p.featured ? "text-white" : ""}`}>{p.name}</div>
                <ul className="mt-6 space-y-2 text-sm flex-1">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className={`w-4 h-4 mt-0.5 ${p.featured ? "text-accent-cyan" : "text-navy"}`} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`mt-8 inline-flex justify-center items-center px-5 py-3 rounded-full font-semibold ${p.featured ? "bg-white text-navy hover:bg-accent-cyan hover:text-white" : "bg-navy text-white hover:bg-navy-deep"}`}>
                  Rejoindre · {p.name}
                </Link>
                <p className={`mt-3 text-xs ${p.featured ? "text-white/60" : "text-textgrey"}`}>Tarif à confirmer avec le client.</p>
              </div>
            ))}
          </div>
          <div className="mt-14 rounded-3xl bg-cool p-8 border border-border">
            <h2 className="text-2xl font-bold">Éligibilité et paiement sécurisé</h2>
            <p className="mt-2 text-textgrey max-w-2xl">L'adhésion est ouverte aux organisations patronales, entreprises, institutions et personnalités partageant les valeurs et les ambitions du GPF. Paiement via prestataire sécurisé. Les coordonnées bancaires ne sont jamais collectées directement sur le site.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 border border-navy/20 text-navy px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white">Contacter avant d'adhérer</Link>
              <Link to="/conditions-generales-adhesion-paiement" className="inline-flex items-center gap-2 text-sm text-textgrey underline underline-offset-4">Conditions générales d'adhésion</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
