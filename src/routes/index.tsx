import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles, Globe2, Handshake, GraduationCap, Network, Lightbulb, Building2, Leaf, Trophy } from "lucide-react";
import { PageShell } from "@/components/gpf/PageShell";
import { PortraitPlaceholder } from "@/components/gpf/PortraitPlaceholder";
import { site } from "@/data/site";
import { images } from "@/data/images";
import { absoluteUrl } from "@/data/seo";
import { events, eventStatus } from "@/data/events";
import { news } from "@/data/news";
import { commissions } from "@/data/commissions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GPF | Le réseau mondial de la Francophonie économique" },
      { name: "description", content: "60 organisations patronales, 1 million d'entreprises, 5 continents. Le Groupement du Patronat Francophone relie les économies et accélère la Francophonie." },
      { property: "og:title", content: "GPF | Le réseau mondial de la Francophonie économique" },
      { property: "og:description", content: "Relier les économies. Accélérer la Francophonie." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: absoluteUrl(images.og) },
      { name: "twitter:image", content: absoluteUrl(images.og) },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      <Hero />
      <NetworkStrip />
      <WhatIsGPF />
      <Missions />
      <BusinessConnect />
      <Values />
      <Ambitions />
      <PresidentMessage />
      <AISpotlight />
      <EventsOverview />
      <PartnersStrip />
      <LatestNews />
      <MembershipCTA />
      <Newsletter />
      <FinalCTA />
    </PageShell>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative flex h-[calc(100svh-5rem)] max-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <img src={images.heroes.home} alt="" className="h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 gradient-navy opacity-[0.86]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(600px circle at 15% 20%, rgba(47,167,220,0.35), transparent 60%), radial-gradient(700px circle at 85% 80%, rgba(33,76,137,0.45), transparent 60%)",
          }}
        />
      </div>

      <div className="container-gpf relative z-10 flex max-w-4xl flex-col items-center px-4 py-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow inline-flex items-center gap-2 text-white/70"
        >
          <Sparkles className="h-3.5 w-3.5" /> Depuis 1987 · Présents sur 5 continents
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-3 text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Relier les économies.
          <br />
          <span className="text-accent-cyan">Accélérer</span> la Francophonie.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 md:mt-5 md:text-base lg:text-lg"
        >
          Le GPF transforme une langue partagée en relations d'affaires, investissements, partenariats
          transfrontaliers et croissance internationale.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-2 md:mt-6 md:gap-3"
        >
          <Link to="/adherer" className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-accent-cyan hover:text-white ring-focus md:px-6 md:py-3.5">
            Rejoindre le réseau <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/qui-sommes-nous" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 ring-focus md:px-6 md:py-3.5">
            Découvrir le GPF
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-5 grid w-full max-w-lg grid-cols-3 gap-4 border-t border-white/15 pt-4 md:mt-6 md:gap-6 md:pt-5"
        >
          {site.metrics.map((m) => (
            <div key={m.label}>
              <div className="text-2xl font-bold text-white md:text-3xl">{m.value}</div>
              <div className="mt-0.5 text-[10px] leading-snug text-white/60 md:text-xs">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {!reduce && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20" aria-hidden>
          <div className="h-[min(70vw,520px)] w-[min(70vw,520px)] animate-orbit rounded-full border border-white/15">
            <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-accent-yellow" />
            <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-accent-green" />
            <span className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent-cyan" />
            <span className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-accent-red" />
          </div>
        </div>
      )}
    </section>
  );
}

function NetworkStrip() {
  return (
    <section className="py-24 bg-cool border-y border-border">
      <div className="container-gpf">
        <div className="eyebrow">Le réseau en un coup d'œil</div>
        <div className="mt-3 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-3xl md:text-5xl font-bold max-w-2xl">Une économie francophone connectée à travers cinq continents.</h2>
          <p className="text-textgrey max-w-md">Un maillage d'organisations patronales, d'entreprises, d'institutions et d'ambassadeurs qui tisse chaque jour la Francophonie économique.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: "60+", l: "Organisations patronales" },
            { v: "1M", l: "Entreprises représentées" },
            { v: "5", l: "Continents couverts" },
            { v: "1987", l: "Année de fondation" },
          ].map((s) => (
            <div key={s.l} className="bg-white border border-border rounded-2xl p-6">
              <div className="text-4xl md:text-5xl font-bold text-navy">{s.v}</div>
              <div className="text-sm text-textgrey mt-2">{s.l}</div>
            </div>
          ))}
        </div>

        <WorldMap />
      </div>
    </section>
  );
}

function WorldMap() {
  return (
    <div className="mt-12 relative rounded-3xl overflow-hidden bg-white border border-border p-6 md:p-10">
      <svg viewBox="0 0 800 380" className="w-full h-auto" aria-hidden>
        <defs>
          <pattern id="dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="1.2" cy="1.2" r="1.2" fill="#173F7A" opacity="0.18" />
          </pattern>
        </defs>
        <rect width="800" height="380" fill="url(#dots)" rx="12" />
        {/* Hubs */}
        {[
          { x: 400, y: 130, label: "Paris" },
          { x: 380, y: 220, label: "Dakar" },
          { x: 460, y: 250, label: "Abidjan" },
          { x: 500, y: 190, label: "Alger" },
          { x: 620, y: 210, label: "Beyrouth" },
          { x: 700, y: 260, label: "Antananarivo" },
          { x: 220, y: 240, label: "Fort-de-France" },
          { x: 180, y: 130, label: "Montréal" },
          { x: 720, y: 130, label: "Hanoï" },
        ].map((h) => (
          <g key={h.label}>
            <circle cx={h.x} cy={h.y} r="10" fill="#2FA7DC" opacity="0.15" />
            <circle cx={h.x} cy={h.y} r="4" fill="#173F7A" />
          </g>
        ))}
        {/* Routes */}
        <g fill="none" stroke="#214C89" strokeWidth="1.2" strokeDasharray="4 6" className="animate-dash">
          <path d="M400 130 Q 300 100 180 130" />
          <path d="M400 130 Q 420 200 460 250" />
          <path d="M400 130 Q 500 150 620 210" />
          <path d="M400 130 Q 400 200 380 220" />
          <path d="M400 130 Q 600 160 720 130" />
          <path d="M400 130 Q 550 250 700 260" />
          <path d="M400 130 Q 300 200 220 240" />
          <path d="M400 130 Q 460 160 500 190" />
        </g>
      </svg>
      <div className="absolute top-6 right-6 text-xs text-textgrey">Carte illustrative des hubs francophones</div>
    </div>
  );
}

function WhatIsGPF() {
  return (
    <section className="py-24">
      <div className="container-gpf grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <div className="eyebrow">Qu'est-ce que le GPF ?</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">De la Francophonie culturelle à la Francophonie économique.</h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-5 text-lg text-textgrey leading-relaxed">
          <p>
            Le Groupement du Patronat Francophone fédère depuis 1987 un écosystème unique : organisations
            patronales, entreprises, institutions, ambassadeurs et experts qui partagent une langue et un
            projet économique commun.
          </p>
          <p>
            Notre conviction : la Francophonie n'est pas seulement un espace culturel, c'est un formidable
            territoire d'affaires, d'investissement et de partenariats. Nous la traduisons en dialogue
            institutionnel, en connaissances partagées et en croissance internationale.
          </p>
          <Link to="/qui-sommes-nous" className="inline-flex items-center gap-2 text-navy font-semibold hover:gap-3 transition-all">
            En savoir plus <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const missionsList = [
  { icon: Handshake, t: "Faciliter les initiatives commerciales" },
  { icon: Network, t: "Mettre en relation les acteurs francophones" },
  { icon: Building2, t: "Favoriser financements et investissements" },
  { icon: Globe2, t: "Promouvoir les pays francophones auprès des investisseurs" },
  { icon: Lightbulb, t: "Développer l'intelligence économique" },
  { icon: Sparkles, t: "Faciliter l'accès à l'information" },
  { icon: GraduationCap, t: "Connecter par la langue et la culture françaises" },
];

function Missions() {
  return (
    <section id="missions" className="py-24 bg-navy-deep text-white">
      <div className="container-gpf">
        <div className="max-w-3xl">
          <div className="eyebrow text-white/60">Nos missions</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">Un index de capacités au service de la Francophonie économique.</h2>
        </div>
        <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {missionsList.map((m, i) => (
            <li key={m.t} className="group grid grid-cols-12 items-center gap-6 py-6 hover:bg-white/[0.03] transition-colors">
              <span className="col-span-2 md:col-span-1 text-white/40 text-sm font-mono">0{i + 1}</span>
              <m.icon className="col-span-2 md:col-span-1 w-6 h-6 text-accent-cyan" />
              <span className="col-span-8 md:col-span-9 text-lg md:text-2xl font-medium">{m.t}</span>
              <ArrowRight className="col-span-12 md:col-span-1 w-5 h-5 text-white/40 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all ml-auto" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BusinessConnect() {
  return (
    <section className="py-24">
      <div className="container-gpf grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="eyebrow">Plateforme externe</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">GPF Business Connect</h2>
          <p className="mt-5 text-lg text-textgrey">
            Une plateforme dédiée pour connecter les acteurs économiques francophones, centraliser
            l'information, faciliter les partenariats et stimuler les échanges au service de l'innovation.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            {["Connecter les acteurs économiques", "Centralisation de l'information", "Mise en relation intelligente", "Faciliter les partenariats", "Stimuler les échanges", "Soutenir l'innovation"].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2" />
                <span className="text-ink">{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.externalPlatformUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-full font-semibold hover:bg-navy-deep ring-focus">
              Accéder à GPF Business Connect <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link to="/gpf-business-connect" className="inline-flex items-center gap-2 border border-navy/20 text-navy px-6 py-3 rounded-full font-medium hover:bg-secondary">
              Découvrir la plateforme
            </Link>
          </div>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-royal to-navy-deep p-1 shadow-2xl">
            <div className="w-full h-full rounded-[22px] bg-white/5 backdrop-blur border border-white/10 p-8 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-white/80 text-xs">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <span className="ml-3 truncate">business-connect.gpf-int.org</span>
              </div>
              <div className="text-white">
                <div className="text-xs text-white/60 uppercase tracking-widest mb-2">Plateforme partenaire</div>
                <div className="text-2xl font-bold">Le carrefour numérique de l'économie francophone</div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {["Membres", "Opportunités", "Ressources"].map((t) => (
                    <div key={t} className="rounded-lg border border-white/15 bg-white/5 p-3 text-xs text-white/80">{t}</div>
                  ))}
                </div>
              </div>
              <div className="text-[10px] text-white/40">Aperçu illustratif. Captures réelles à intégrer.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Values() {
  const values = [
    { icon: Handshake, t: "Solidarité économique francophone", d: "Faire réseau, faire ensemble, partout où le français rassemble." },
    { icon: Lightbulb, t: "Innovation et modernité", d: "Adopter les meilleures pratiques, s'approprier les technologies, penser l'avenir." },
    { icon: Globe2, t: "Rayonnement international", d: "Porter la voix des entreprises francophones dans le dialogue mondial." },
  ];
  return (
    <section className="py-24 bg-cool">
      <div className="container-gpf">
        <div className="eyebrow">Nos valeurs</div>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold max-w-2xl">Trois convictions, un même horizon.</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={v.t} className={`relative rounded-3xl p-8 md:p-10 min-h-[320px] flex flex-col justify-between ${i === 1 ? "bg-navy text-white" : "bg-white text-ink border border-border"}`}>
              <v.icon className={`w-10 h-10 ${i === 1 ? "text-accent-cyan" : "text-navy"}`} />
              <div>
                <div className={`text-xs uppercase tracking-widest ${i === 1 ? "text-white/60" : "text-textgrey"}`}>0{i + 1}</div>
                <h3 className={`mt-2 text-2xl font-bold ${i === 1 ? "text-white" : ""}`}>{v.t}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${i === 1 ? "text-white/75" : "text-textgrey"}`}>{v.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ambitions = [
  "Renforcer les liens économiques",
  "Développer les échanges commerciaux",
  "Soutenir les partenariats stratégiques",
  "Soutenir l'internationalisation",
  "Promouvoir un commerce équitable et durable",
  "Encourager l'économie verte et circulaire",
  "Soutenir la formation",
  "Promouvoir le français dans les échanges professionnels",
  "Renforcer l'attractivité internationale",
  "Organiser des événements économiques internationaux",
];

function Ambitions() {
  return (
    <section className="py-24">
      <div className="container-gpf">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="eyebrow">Nos ambitions</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Un manifeste pour la décennie qui vient.</h2>
            <p className="mt-5 text-textgrey">Dix engagements structurants qui guident notre action et celle de notre réseau, partout où bat le pouls de la Francophonie économique.</p>
          </div>
          <ol className="md:col-span-8 relative border-l border-border pl-8 space-y-6">
            {ambitions.map((a, i) => (
              <li key={a} className="relative">
                <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-white border-2 border-navy" />
                <div className="text-xs text-textgrey font-mono">Ambition · {String(i + 1).padStart(2, "0")}</div>
                <div className="mt-1 text-lg md:text-xl font-semibold text-ink">{a}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function PresidentMessage() {
  return (
    <section className="py-24 bg-navy-deep text-white overflow-hidden relative">
      <div className="container-gpf grid lg:grid-cols-12 gap-10 items-center relative">
        <div className="lg:col-span-4">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
            <PortraitPlaceholder variant="dark" className="min-h-full" />
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="eyebrow text-white/60">Message du Président</div>
          <blockquote className="mt-4 text-2xl md:text-4xl font-display font-medium leading-tight text-white">
            « Notre projet emprunte la route de la connaissance : art, savoir, culture, technologies et
            échanges économiques. Une même langue, mille manières d'entreprendre : c'est cela, la
            Francophonie économique. »
          </blockquote>
          <div className="mt-6 text-white/70">
            <div className="font-semibold text-white">Jean-Lou Blachier</div>
            <div className="text-sm">Président du Groupement du Patronat Francophone</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AISpotlight() {
  return (
    <section className="py-24 bg-white">
      <div className="container-gpf">
        <div className="rounded-3xl border border-border bg-cool overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-5 relative min-h-[420px]">
            <PortraitPlaceholder className="min-h-[420px]" />
          </div>
          <div className="lg:col-span-7 p-8 md:p-12">
            <div className="eyebrow">Commission Intelligence Artificielle</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">L'intelligence artificielle au service de la Francophonie économique.</h2>
            <p className="mt-5 text-lg text-textgrey">
              La Commission IA du GPF fédère les acteurs francophones autour d'une adoption responsable de
              l'intelligence artificielle : améliorer les processus, partager la connaissance, former les
              équipes et bâtir des cas d'usage francophones.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              {["Adoption de l'IA", "IA responsable", "Amélioration des processus", "Partage de connaissances", "Formation"].map((p) => (
                <div key={p} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-border pt-6">
              <div className="text-sm font-semibold text-ink">Ousama Boujaouane</div>
              <div className="text-sm text-textgrey">Président de la Commission Intelligence Artificielle du GPF</div>
              <p className="mt-3 text-sm text-textgrey max-w-xl">
                Entrepreneur et expert en technologies, avec une solide expérience en informatique,
                transformation numérique et intégration de l'intelligence artificielle.
              </p>
              <div className="mt-5 inline-flex flex-col sm:flex-row gap-3 rounded-xl border border-border bg-white p-4">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-textgrey">Contact · Commission IA uniquement</div>
                  <div className="text-sm text-ink mt-1">
                    <a href={`mailto:${site.aiCommission.contactEmail}`} className="hover:text-navy underline underline-offset-2">{site.aiCommission.contactEmail}</a>
                    {" · "}
                    <span>{site.aiCommission.contactPhone}</span>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <Link to="/commissions/intelligence-artificielle" className="inline-flex items-center gap-2 text-navy font-semibold">
                  Découvrir la Commission IA <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventsOverview() {
  return (
    <section className="py-24 bg-cool">
      <div className="container-gpf">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="eyebrow">Nos rendez-vous phares</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold max-w-xl">Trois piliers événementiels au service du réseau.</h2>
          </div>
          <Link to="/evenements" className="inline-flex items-center gap-2 text-navy font-semibold">Tous les événements <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {events.map((e) => {
            const status = eventStatus(e.date);
            return (
              <Link
                key={e.slug}
                to={`/evenements/${e.slug}` as string}
                className="group rounded-2xl bg-white border border-border overflow-hidden flex flex-col hover:border-navy/30 hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={images.events[e.slug]} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy/40 to-transparent" />
                  <div className="relative flex h-full flex-col justify-between p-6 text-white">
                  <div className="flex justify-between text-xs">
                    <span className="uppercase tracking-widest text-white/60">{e.type}</span>
                    <span className={`px-2 py-0.5 rounded-full border ${status === "à venir" ? "border-accent-cyan text-accent-cyan" : "border-white/20 text-white/60"}`}>{status}</span>
                  </div>
                  <div>
                    <div className="text-xs text-white/60">{new Date(e.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}</div>
                    <div className="text-white text-xl font-semibold mt-1 leading-snug">{e.title}</div>
                  </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-textgrey flex-1">{e.short}</p>
                  <div className="mt-4 text-xs text-textgrey flex items-center justify-between">
                    <span>{e.location}</span>
                    <ArrowRight className="w-4 h-4 text-navy transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PartnersStrip() {
  return (
    <section className="py-24">
      <div className="container-gpf">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="eyebrow">Membres & partenaires</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Un réseau d'institutions et d'organisations qui font le GPF.</h2>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {images.partners.map((logo, i) => (
            <div key={i} className="flex h-24 items-center justify-center rounded-xl border border-border bg-white p-3">
              <img src={logo} alt={`Partenaire ${i + 1}`} className="max-h-14 w-full object-contain" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/partenaires" className="inline-flex items-center gap-2 bg-navy text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-navy-deep">Découvrir nos partenaires</Link>
          <Link to="/devenir-partenaire" className="inline-flex items-center gap-2 border border-navy/20 text-navy px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-secondary">Devenir partenaire</Link>
        </div>
        <p className="mt-4 text-xs text-textgrey">Logos provisoires. Remplacez-les par les visuels officiels de vos partenaires.</p>
      </div>
    </section>
  );
}

function LatestNews() {
  return (
    <section className="py-24 bg-cool">
      <div className="container-gpf">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="eyebrow">Actualités</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Dernières nouvelles du réseau.</h2>
          </div>
          <Link to="/actualites" className="inline-flex items-center gap-2 text-navy font-semibold">Toutes les actualités <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {news.map((n) => (
            <Link
              key={n.slug}
              to={`/actualites/${n.slug}` as string}
              className="group rounded-2xl bg-white border border-border overflow-hidden flex flex-col hover:shadow-lg hover:border-navy/30 transition-all"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img src={images.news[n.slug]} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex gap-3 text-xs text-textgrey">
                  <span className="text-navy font-semibold">{n.category}</span>
                  <span>·</span>
                  <span>{new Date(n.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" })}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:text-navy">{n.title}</h3>
                <p className="mt-2 text-sm text-textgrey flex-1">{n.excerpt}</p>
                <div className="mt-4 text-xs text-textgrey">Par {n.author}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function MembershipCTA() {
  const perks = [
    { icon: Network, t: "Accès au réseau" },
    { icon: Trophy, t: "Opportunités et partenariats" },
    { icon: GraduationCap, t: "Formations et webinaires" },
    { icon: Leaf, t: "Groupes de commissions" },
    { icon: Building2, t: "Business Connect" },
    { icon: Globe2, t: "Visibilité internationale" },
  ];
  return (
    <section className="py-24">
      <div className="container-gpf">
        <div className="relative overflow-hidden rounded-3xl gradient-navy p-10 md:p-16 text-white">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <div className="eyebrow text-white/60">Adhérer au GPF</div>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">Prenez place dans l'économie francophone.</h2>
              <p className="mt-5 text-white/80 max-w-xl">Rejoignez un réseau international qui ouvre des portes concrètes : événements, mises en relation, formations et représentation.</p>
            </div>
            <div className="md:col-span-5 grid grid-cols-2 gap-3">
              {perks.map((p) => (
                <div key={p.t} className="rounded-xl border border-white/15 p-4 flex gap-2 items-center text-sm bg-white/5">
                  <p.icon className="w-4 h-4 text-accent-cyan" /> {p.t}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <Link to="/adherer" className="inline-flex items-center gap-2 bg-white text-navy px-6 py-3 rounded-full font-semibold hover:bg-accent-cyan hover:text-white">Adhérer maintenant <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="py-16 border-y border-border">
      <div className="container-gpf grid md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-6">
          <h2 className="text-2xl md:text-3xl font-bold">Recevez la newsletter du GPF.</h2>
          <p className="mt-2 text-textgrey">Actualités, événements et opportunités de l'espace francophone, directement dans votre boîte mail.</p>
        </div>
        <form
          className="md:col-span-6 flex flex-col sm:flex-row gap-3"
          onSubmit={(e) => { e.preventDefault(); alert("Merci pour votre inscription."); }}
        >
          <label className="sr-only" htmlFor="nl-email">Adresse e-mail</label>
          <input id="nl-email" type="email" required placeholder="votre@email.com" className="flex-1 px-4 py-3 rounded-full border border-border bg-white text-ink placeholder:text-textgrey ring-focus" />
          <button type="submit" className="px-6 py-3 rounded-full bg-navy text-white font-semibold hover:bg-navy-deep ring-focus">S'abonner</button>
        </form>
        <div className="md:col-span-12 flex items-start gap-2 text-xs text-textgrey">
          <input type="checkbox" required id="nl-consent" className="mt-0.5" />
          <label htmlFor="nl-consent">J'accepte de recevoir les communications du GPF. Voir la <Link to="/politique-de-confidentialite" className="underline">politique de confidentialité</Link>.</label>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const items = [
    { t: "Adhérer", d: "Intégrer le réseau", to: "/adherer" },
    { t: "Devenir partenaire", d: "Construire avec le GPF", to: "/devenir-partenaire" },
    { t: "Contacter le GPF", d: "Écrire à l'équipe", to: "/contact" },
    { t: "Business Connect", d: "Accéder à la plateforme", to: "/gpf-business-connect" },
  ];
  return (
    <section className="py-16">
      <div className="container-gpf grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it) => (
          <Link key={it.t} to={it.to as string} className="group rounded-2xl border border-border p-6 hover:border-navy hover:bg-cool transition-all">
            <div className="text-lg font-semibold">{it.t}</div>
            <div className="text-sm text-textgrey mt-1">{it.d}</div>
            <ArrowRight className="w-5 h-5 mt-6 text-navy transition-transform group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </section>
  );
}

// Silence unused-import warning
void commissions;
