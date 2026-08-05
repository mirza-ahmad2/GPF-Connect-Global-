import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/gpf/PageShell";
import { events, eventStatus } from "@/data/events";
import { images } from "@/data/images";
import { absoluteUrl } from "@/data/seo";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/evenements/$slug")({
  loader: ({ params }) => {
    const event = events.find((e) => e.slug === params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Événement | GPF" }, { name: "robots", content: "noindex" }] };
    const e = loaderData.event;
    return {
      meta: [
        { title: `${e.title} | GPF` },
        { name: "description", content: e.short },
        { property: "og:title", content: e.title },
        { property: "og:description", content: e.short },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/evenements/${e.slug}` },
        { property: "og:image", content: absoluteUrl(images.events[e.slug]) },
      ],
      links: [{ rel: "canonical", href: `/evenements/${e.slug}` }],
    };
  },
  component: EventDetail,
});

function EventDetail() {
  const { event } = Route.useLoaderData();
  const status = eventStatus(event.date);
  return (
    <PageShell>
      <section className="relative flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <img src={images.events[event.slug]} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 gradient-navy opacity-[0.88]" />
        </div>
        <div className="container-gpf relative z-10 max-w-4xl px-4 py-12 text-center text-white">
          <Link to="/evenements" className="text-white/70 hover:text-white text-sm inline-flex items-center gap-1"><ArrowLeft className="w-4 h-4" /> Tous les événements</Link>
          <div className="eyebrow text-white/70 mt-6">{event.type}</div>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold">{event.title}</h1>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {new Date(event.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {event.location}{event.venue ? ` · ${event.venue}` : ""}</span>
            <span className={`px-2.5 py-0.5 rounded-full border text-xs ${status === "à venir" ? "border-accent-cyan text-accent-cyan" : "border-white/20 text-white/60"}`}>{status}</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-gpf grid md:grid-cols-12 gap-10">
          <div className="md:col-span-8 space-y-5 text-lg text-textgrey leading-relaxed">
            <p>{event.summary}</p>
          </div>
          {event.editions && (
            <div className="md:col-span-4">
              <div className="rounded-2xl border border-border p-6">
                <div className="eyebrow">Éditions</div>
                <ol className="mt-4 space-y-3">
                  {event.editions.map((ed: { year: number; city: string }) => (
                    <li key={`${ed.year}-${ed.city}`} className="flex justify-between text-sm border-b border-border last:border-0 pb-2 last:pb-0">
                      <span className="font-semibold text-navy">{ed.year}</span>
                      <span className="text-textgrey">{ed.city}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
