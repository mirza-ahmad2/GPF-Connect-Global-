import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/gpf/PageShell";
import { partnerTiers } from "@/data/plans";
import { Check } from "lucide-react";

export const Route = createFileRoute("/devenir-partenaire")({
  head: () => ({
    meta: [
      { title: "Devenir partenaire | GPF" },
      { name: "description", content: "Construisez avec le GPF : visibilité internationale, présence événementielle, co-branding et programmation dédiée." },
      { property: "og:title", content: "Devenir partenaire | GPF" },
      { property: "og:description", content: "Rejoindre le cercle des partenaires du GPF." },
      { property: "og:url", content: "/devenir-partenaire" },
    ],
    links: [{ rel: "canonical", href: "/devenir-partenaire" }],
  }),
  component: BecomePartner,
});

function BecomePartner() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Partenariat"
        title="Construire avec le GPF."
        lead="Nos partenariats permettent d'accompagner nos actions au service de la Francophonie économique et d'offrir une visibilité internationale à votre organisation."
      />
      <section className="py-16">
        <div className="container-gpf">
          <div className="grid md:grid-cols-3 gap-6">
            {partnerTiers.map((t, i) => (
              <div key={t.name} className={`rounded-3xl border p-8 ${i === 1 ? "border-navy bg-navy text-white" : "border-border bg-white"}`}>
                <div className={`text-xs uppercase tracking-widest ${i === 1 ? "text-white/60" : "text-textgrey"}`}>Formule</div>
                <div className={`mt-2 text-3xl font-bold ${i === 1 ? "text-white" : ""}`}>{t.name}</div>
                <ul className="mt-6 space-y-2 text-sm">
                  {t.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className={`w-4 h-4 mt-0.5 ${i === 1 ? "text-accent-cyan" : "text-navy"}`} /> {b}
                    </li>
                  ))}
                </ul>
                <p className={`mt-6 text-xs ${i === 1 ? "text-white/60" : "text-textgrey"}`}>Prix et bénéfices détaillés à confirmer avec le client.</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-3xl bg-cool p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-border">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Discutons de votre partenariat.</h2>
              <p className="text-textgrey mt-2">Notre équipe partenariats vous accompagne pour définir la formule adaptée à vos objectifs.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-full font-semibold">Contacter l'équipe</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
