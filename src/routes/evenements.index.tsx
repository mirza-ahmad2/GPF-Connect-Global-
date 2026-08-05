import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/gpf/PageShell";
import { events, eventStatus } from "@/data/events";
import { images } from "@/data/images";
import { useState } from "react";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

export const Route = createFileRoute("/evenements/")({
  head: () => ({
    meta: [
      { title: "Événements | GPF" },
      { name: "description", content: "Forums, cérémonies et rencontres internationales du Groupement du Patronat Francophone." },
      { property: "og:title", content: "Événements | GPF" },
      { property: "og:description", content: "Nos rendez-vous internationaux." },
      { property: "og:url", content: "/evenements" },
    ],
    links: [{ rel: "canonical", href: "/evenements" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  const [filter, setFilter] = useState<"all" | "à venir" | "passé">("all");
  const list = events.filter((e) => filter === "all" || eventStatus(e.date) === filter);
  return (
    <PageShell>
      <PageHero
        eyebrow="Événements"
        title="Nos rendez-vous internationaux."
        lead="Forums, cérémonies, forums et rencontres qui font vivre la Francophonie économique."
      />
      <section className="py-14">
        <div className="container-gpf">
          <div className="flex gap-2 mb-8">
            {(["all", "à venir", "passé"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm border ${filter === f ? "bg-navy text-white border-navy" : "bg-white border-border"}`}
              >
                {f === "all" ? "Tous" : f === "à venir" ? "À venir" : "Passés"}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((e) => {
              const status = eventStatus(e.date);
              return (
                <Link key={e.slug} to={`/evenements/${e.slug}` as string} className="rounded-2xl bg-white border border-border overflow-hidden hover:shadow-lg hover:border-navy/30 transition-all group">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={images.events[e.slug]} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy/50 to-navy/20" />
                    <div className="relative flex h-full flex-col justify-between p-6 text-white">
                    <div className="flex justify-between text-xs">
                      <span className="uppercase tracking-widest text-white/60">{e.type}</span>
                      <span className={`px-2 py-0.5 rounded-full border ${status === "à venir" ? "border-accent-cyan text-accent-cyan" : "border-white/20 text-white/60"}`}>{status}</span>
                    </div>
                    <div className="text-white text-xl font-semibold">{e.title}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-4 text-xs text-textgrey">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {new Date(e.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {e.location}</span>
                    </div>
                    <p className="mt-3 text-sm text-textgrey">{e.short}</p>
                    <div className="mt-4 text-navy font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">En savoir plus <ArrowRight className="w-4 h-4" /></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
