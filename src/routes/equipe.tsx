import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell, PageHero } from "@/components/gpf/PageShell";
import { PortraitPlaceholder } from "@/components/gpf/PortraitPlaceholder";
import { team } from "@/data/team";
import { images } from "@/data/images";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Équipe & Gouvernance | GPF" },
      { name: "description", content: "Président, vice-présidents, membres de direction, présidents de commissions et ambassadeurs du Groupement du Patronat Francophone." },
      { property: "og:title", content: "Équipe & Gouvernance | GPF" },
      { property: "og:description", content: "L'équipe et les ambassadeurs du GPF." },
      { property: "og:url", content: "/equipe" },
    ],
    links: [{ rel: "canonical", href: "/equipe" }],
  }),
  component: TeamPage,
});

const categories = [
  { id: "all", label: "Tous" },
  { id: "president", label: "Président" },
  { id: "honneur", label: "Membres d'honneur" },
  { id: "vice-president", label: "Vice-présidents" },
  { id: "direction", label: "Direction" },
  { id: "commission", label: "Commissions" },
  { id: "ambassadeur", label: "Ambassadeurs" },
] as const;

function TeamPage() {
  const [cat, setCat] = useState<string>("all");
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    return team.filter((m) => (cat === "all" || m.category === cat) && (q === "" || m.name.toLowerCase().includes(q.toLowerCase())));
  }, [cat, q]);

  return (
    <PageShell>
      <PageHero
        eyebrow="Équipe & Gouvernance"
        title="Les femmes et les hommes qui animent le GPF."
        lead="Un annuaire vivant : Président, vice-présidents, direction, présidents de commissions et ambassadeurs à travers la Francophonie."
      />

      <section className="py-14">
        <div className="container-gpf">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCat(c.id)}
                  className={`px-4 py-2 rounded-full text-sm border ${cat === c.id ? "bg-navy text-white border-navy" : "bg-white text-ink border-border hover:border-navy/40"}`}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Rechercher un profil…"
              className="px-4 py-2.5 rounded-full border border-border bg-white text-sm w-full md:w-72 ring-focus"
              aria-label="Rechercher un profil"
            />
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((m) => (
              <article key={m.id} className="rounded-2xl bg-white border border-border p-5 hover:shadow-md hover:border-navy/30 transition-all">
                <div className="aspect-[4/5] rounded-xl bg-cool overflow-hidden mb-4">
                  {m.id === "ousama-boujaouane" || m.id === "jean-lou-blachier" ? (
                    <PortraitPlaceholder />
                  ) : (
                    <img src={images.team.placeholder} alt={m.name} className="h-full w-full object-cover" loading="lazy" />
                  )}
                </div>
                <div className="text-base font-semibold text-ink">{m.name}</div>
                <div className="text-xs text-textgrey mt-1">{m.role}</div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-textgrey mt-10">Aucun profil ne correspond à votre recherche.</p>}
          <p className="mt-10 text-xs text-textgrey">Annuaire à compléter avec l'ensemble des profils vérifiés du site officiel.</p>
        </div>
      </section>

      <section id="ambassadeurs" className="py-20 bg-cool">
        <div className="container-gpf">
          <div className="eyebrow">Ambassadeurs</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold max-w-2xl">Ambassadeurs pays, régionaux et thématiques.</h2>
          <p className="mt-4 text-textgrey max-w-2xl">Le programme d'ambassadeurs du GPF porte la voix du réseau au plus près des territoires et des enjeux stratégiques. Liste complète à intégrer à partir du site officiel.</p>
        </div>
      </section>
    </PageShell>
  );
}
