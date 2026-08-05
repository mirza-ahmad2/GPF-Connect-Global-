import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell, PageHero } from "@/components/gpf/PageShell";
import { news } from "@/data/news";
import { images } from "@/data/images";

export const Route = createFileRoute("/actualites/")({
  head: () => ({
    meta: [
      { title: "Actualités | GPF" },
      { name: "description", content: "Actualités, communiqués et analyses du Groupement du Patronat Francophone." },
      { property: "og:title", content: "Actualités | GPF" },
      { property: "og:description", content: "Les dernières nouvelles du réseau GPF." },
      { property: "og:url", content: "/actualites" },
    ],
    links: [{ rel: "canonical", href: "/actualites" }],
  }),
  component: NewsIndex,
});

function NewsIndex() {
  const categories = useMemo(() => ["Toutes", ...Array.from(new Set(news.map((n) => n.category)))], []);
  const [cat, setCat] = useState("Toutes");
  const [q, setQ] = useState("");
  const list = news.filter((n) => (cat === "Toutes" || n.category === cat) && (q === "" || n.title.toLowerCase().includes(q.toLowerCase())));

  return (
    <PageShell>
      <PageHero eyebrow="Actualités" title="Ce que vit le réseau GPF." lead="Communiqués, analyses et retours d'événements." />
      <section className="py-14">
        <div className="container-gpf">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full text-sm border ${cat === c ? "bg-navy text-white border-navy" : "bg-white border-border"}`}>{c}</button>
              ))}
            </div>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher…" className="px-4 py-2.5 rounded-full border border-border bg-white text-sm w-full md:w-72 ring-focus" aria-label="Rechercher un article" />
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((n) => (
              <Link key={n.slug} to={`/actualites/${n.slug}` as string} className="rounded-2xl bg-white border border-border overflow-hidden flex flex-col hover:shadow-lg hover:border-navy/30 transition-all group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={images.news[n.slug]} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex gap-3 text-xs text-textgrey">
                    <span className="text-navy font-semibold">{n.category}</span>
                    <span>·</span>
                    <span>{new Date(n.date).toLocaleDateString("fr-FR")}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:text-navy">{n.title}</h3>
                  <p className="mt-2 text-sm text-textgrey flex-1">{n.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
