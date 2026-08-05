export type GpfEvent = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  date: string; // ISO
  location: string;
  venue?: string;
  type: "Forum" | "Cérémonie" | "Conférence";
  status?: "à venir" | "passé";
  editions?: { year: number; city: string; note?: string }[];
};

export const events: GpfEvent[] = [
  {
    slug: "excellence-entrepreneuriale-diasporas",
    title: "Excellence Entrepreneuriale des Diasporas Francophones",
    short: "Cérémonie annuelle valorisant les entrepreneurs issus des diasporas.",
    summary:
      "Trophées, tables rondes, expositions et rencontres autour du rôle économique des diasporas francophones : parcours entrepreneuriaux, ponts économiques, culturels et humains, investissement et mise en réseau.",
    date: "2025-11-20",
    location: "Paris, France",
    venue: "CESE, Palais d'Iéna",
    type: "Cérémonie",
    editions: [
      { year: 2023, city: "Paris · CESE" },
      { year: 2024, city: "Paris · CESE" },
      { year: 2025, city: "Paris · CESE" },
    ],
  },
  {
    slug: "forum-solutions-numeriques-climat",
    title: "Forum des Solutions Numériques pour le Climat",
    short: "Innovation numérique au service de l'action climatique.",
    summary:
      "Rendez-vous international dédié à l'innovation numérique, à l'action climatique et au leadership francophone : IA pour les enjeux environnementaux, green tech, économie circulaire, finance verte et numérique.",
    date: "2025-10-08",
    location: "Paris, France",
    venue: "Sénat",
    type: "Forum",
  },
  {
    slug: "forum-international-entreprises-francophones",
    title: "Forum International des Entreprises Francophones (FIEF)",
    short: "Le rendez-vous B2B mondial des économies francophones.",
    summary:
      "Rencontres B2B, partenariats stratégiques, opportunités d'investissement, tables rondes thématiques et accès à GPF Business Connect. Un carrefour pour dirigeants, investisseurs, décideurs, institutions, PME, jeunes entrepreneurs et partenaires internationaux.",
    date: "2026-03-15",
    location: "Édition à confirmer",
    type: "Forum",
    editions: [
      { year: 2021, city: "Brazzaville" },
      { year: 2022, city: "Abidjan" },
      { year: 2023, city: "Villers-Cotterêts" },
      { year: 2024, city: "Mer Morte, Jordanie" },
      { year: 2025, city: "Dakar" },
    ],
  },
];

export function eventStatus(iso: string): "à venir" | "passé" {
  return new Date(iso).getTime() >= Date.now() ? "à venir" : "passé";
}
