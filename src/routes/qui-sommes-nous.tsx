import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/gpf/PageShell";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/qui-sommes-nous")({
  head: () => ({
    meta: [
      { title: "Qui sommes-nous ? | GPF" },
      { name: "description", content: "Depuis 1987, le Groupement du Patronat Francophone fédère un réseau international d'organisations patronales, d'entreprises et d'ambassadeurs de la Francophonie économique." },
      { property: "og:title", content: "Qui sommes-nous ? | GPF" },
      { property: "og:description", content: "Histoire, missions, valeurs et gouvernance du GPF." },
      { property: "og:url", content: "/qui-sommes-nous" },
    ],
    links: [{ rel: "canonical", href: "/qui-sommes-nous" }],
  }),
  component: About,
});

const milestones = [
  { y: "1987", t: "Création", d: "Naissance du Groupement du Patronat Francophone à l'initiative de dirigeants économiques francophones." },
  { y: "1990s", t: "Croissance", d: "Structuration du réseau et premières coopérations institutionnelles." },
  { y: "2000s", t: "Développement international", d: "Extension sur plusieurs continents et multiplication des organisations membres." },
  { y: "2010s", t: "Évolution du réseau", d: "Consolidation des commissions thématiques et des ambassadeurs régionaux." },
  { y: "2020s", t: "Initiatives majeures", d: "Forums internationaux, cérémonies d'excellence, dialogues institutionnels." },
  { y: "Aujourd'hui", t: "Évolution numérique", d: "GPF Business Connect, Commission IA et transformation digitale du réseau." },
];

function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Le GPF"
        title="Une Francophonie économique, connectée et ambitieuse."
        lead="Depuis 1987, nous transformons une langue commune en relations d'affaires, en partenariats et en croissance internationale."
      />

      <section id="histoire" className="py-20">
        <div className="container-gpf grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="eyebrow">Notre histoire</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Près de quatre décennies au service du réseau.</h2>
          </div>
          <ol className="md:col-span-8 relative border-l border-border pl-8 space-y-8">
            {milestones.map((m) => (
              <li key={m.y} className="relative">
                <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-white border-2 border-navy" />
                <div className="text-xs uppercase tracking-widest text-navy font-semibold">{m.y}</div>
                <div className="mt-1 text-xl font-semibold text-ink">{m.t}</div>
                <p className="text-textgrey mt-1 max-w-2xl">{m.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="missions" className="py-20 bg-cool">
        <div className="container-gpf grid md:grid-cols-2 gap-10">
          <div>
            <div className="eyebrow">Missions</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Sept missions, un cap.</h2>
            <ul className="mt-6 space-y-3 text-ink">
              {[
                "Faciliter les initiatives commerciales",
                "Mettre en relation les acteurs francophones",
                "Favoriser financements et investissements",
                "Promouvoir les pays francophones auprès des investisseurs",
                "Développer l'intelligence économique",
                "Faciliter l'accès à l'information",
                "Connecter par la langue et la culture françaises",
              ].map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-navy" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow">Valeurs</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Trois convictions structurantes.</h2>
            <div className="mt-6 space-y-4">
              {[
                ["Solidarité économique francophone", "Faire réseau, faire ensemble, partout où le français rassemble."],
                ["Innovation et modernité", "Adopter les meilleures pratiques, s'approprier les technologies."],
                ["Rayonnement international", "Porter la voix des entreprises francophones dans le dialogue mondial."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl bg-white border border-border p-5">
                  <div className="font-semibold text-ink">{t}</div>
                  <div className="text-sm text-textgrey mt-1">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gouvernance" className="py-20">
        <div className="container-gpf grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="eyebrow">Gouvernance</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Une gouvernance ouverte et internationale.</h2>
            <p className="mt-4 text-textgrey">Un Président, des vice-présidents, des membres de direction, des présidents et vice-présidents de commissions, et un réseau d'ambassadeurs pays, régionaux et thématiques.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/equipe" className="inline-flex items-center gap-2 bg-navy text-white px-5 py-2.5 rounded-full text-sm font-semibold">Voir l'équipe <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/commissions" className="inline-flex items-center gap-2 border border-navy/20 text-navy px-5 py-2.5 rounded-full text-sm font-semibold">Voir les commissions</Link>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-border p-6 bg-cool">
              <div className="text-sm text-textgrey">Président</div>
              <div className="text-2xl font-semibold mt-1">Jean-Lou Blachier</div>
              <div className="text-sm text-textgrey">Président du Groupement du Patronat Francophone</div>
              <p className="mt-4 text-textgrey">Sous sa présidence, le GPF poursuit son projet de Francophonie économique : réseau, influence, dialogue institutionnel et innovation.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="presence" className="py-20 bg-navy-deep text-white">
        <div className="container-gpf">
          <div className="eyebrow text-white/60">Présence internationale</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Cinq continents, une même conversation économique.</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-5 gap-3">
            {["Europe", "Afrique", "Amériques", "Asie-Pacifique", "Moyen-Orient"].map((c) => (
              <div key={c} className="rounded-xl border border-white/10 p-6 text-center bg-white/5">
                <div className="text-lg font-semibold">{c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
