import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/gpf/PageShell";
import { PortraitPlaceholder } from "@/components/gpf/PortraitPlaceholder";
import { site } from "@/data/site";
import { images } from "@/data/images";
import { absoluteUrl } from "@/data/seo";
import { Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/commissions/intelligence-artificielle")({
  head: () => ({
    meta: [
      { title: "Commission Intelligence Artificielle | GPF" },
      { name: "description", content: "La Commission IA du GPF : adoption responsable, amélioration des processus, partage de connaissances et formation. Présidée par Ousama Boujaouane." },
      { property: "og:title", content: "Commission Intelligence Artificielle | GPF" },
      { property: "og:description", content: "L'intelligence artificielle au service de la Francophonie économique." },
      { property: "og:image", content: absoluteUrl(images.og) },
      { property: "og:url", content: "/commissions/intelligence-artificielle" },
      { name: "twitter:image", content: absoluteUrl(images.og) },
    ],
    links: [{ rel: "canonical", href: "/commissions/intelligence-artificielle" }],
  }),
  component: AICommission,
});

function AICommission() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Commission Intelligence Artificielle"
        title="L'intelligence artificielle au service de la Francophonie économique."
        lead="La Commission IA du GPF réunit entreprises, experts et institutions pour bâtir une adoption responsable de l'IA dans l'espace francophone."
        backgroundImage={images.heroes.default}
      />

      <section className="py-20">
        <div className="container-gpf grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="eyebrow">Mission</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Une IA francophone, utile et responsable.</h2>
          </div>
          <ul className="md:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              ["Adoption de l'IA", "Accompagner entreprises et institutions dans l'appropriation de l'IA."],
              ["IA responsable", "Promouvoir des pratiques éthiques, sûres et souveraines."],
              ["Amélioration des processus", "Identifier les cas d'usage à impact opérationnel réel."],
              ["Partage de connaissances", "Diffuser bonnes pratiques, retours d'expérience et cadres de référence."],
              ["Formation", "Développer les compétences dans l'écosystème francophone."],
            ].map(([t, d]) => (
              <li key={t} className="rounded-2xl border border-border bg-white p-5">
                <div className="font-semibold text-ink">{t}</div>
                <div className="text-sm text-textgrey mt-1">{d}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-cool">
        <div className="container-gpf grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-border">
              <PortraitPlaceholder className="aspect-[4/5]" />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="eyebrow">Président de la Commission</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Ousama Boujaouane</h2>
            <div className="mt-1 text-textgrey">Président de la Commission Intelligence Artificielle du GPF</div>
            <p className="mt-6 text-lg text-textgrey max-w-2xl">
              Entrepreneur et expert en technologies, Ousama Boujaouane bénéficie d'une solide expérience en
              informatique, transformation numérique et intégration de l'intelligence artificielle au service
              des organisations.
            </p>
            <div className="mt-8 rounded-2xl border border-border bg-white p-6">
              <div className="text-xs uppercase tracking-widest text-textgrey">Contact · Commission Intelligence Artificielle uniquement</div>
              <div className="mt-3 flex flex-col sm:flex-row gap-4 text-sm text-ink">
                <a href={`mailto:${site.aiCommission.contactEmail}`} className="inline-flex items-center gap-2 hover:text-navy">
                  <Mail className="w-4 h-4" /> {site.aiCommission.contactEmail}
                </a>
                <span className="inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" /> {site.aiCommission.contactPhone}
                </span>
              </div>
              <p className="mt-3 text-xs text-textgrey">Ce contact concerne exclusivement la Commission IA. Pour toute autre demande, contactez le GPF via la page Contact.</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
