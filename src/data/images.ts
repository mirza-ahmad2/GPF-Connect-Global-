export const images = {
  heroes: {
    home: "/images/heroes/hero-home.png",
    default: "/images/heroes/hero-default.png",
  },
  og: "/og-image.png",
  team: {
    placeholder: "/images/team/placeholder.svg",
  },
  partners: Array.from({ length: 12 }, (_, i) =>
    `/images/partners/partner-${String(i + 1).padStart(2, "0")}.svg`,
  ),
  news: {
    "gpf-business-connect-lancement": "/images/news/news-01.png",
    "commission-ia-feuille-de-route": "/images/news/news-02.png",
    "retour-diasporas-2024": "/images/news/news-03.png",
  } as Record<string, string>,
  events: {
    "excellence-entrepreneuriale-diasporas": "/images/events/event-01.png",
    "forum-solutions-numeriques-climat": "/images/events/event-02.png",
    "forum-international-entreprises-francophones": "/images/events/event-03.png",
  } as Record<string, string>,
} as const;
