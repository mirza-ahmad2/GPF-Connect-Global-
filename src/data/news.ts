export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Institutionnel" | "Événement" | "Commission" | "Réseau";
  date: string;
  author: string;
  body: string[];
};

export const news: NewsArticle[] = [
  {
    slug: "gpf-business-connect-lancement",
    title: "GPF Business Connect : la plateforme du réseau francophone se déploie",
    excerpt: "Une plateforme dédiée pour centraliser l'information, mettre en relation les acteurs économiques et faciliter les partenariats francophones.",
    category: "Institutionnel",
    date: "2025-06-12",
    author: "Rédaction GPF",
    body: [
      "Le Groupement du Patronat Francophone déploie GPF Business Connect, une plateforme conçue pour connecter les acteurs économiques de l'espace francophone.",
      "Objectif : centraliser l'information, favoriser la mise en relation intelligente, faciliter les partenariats et stimuler les échanges entre entreprises, institutions et organisations patronales.",
    ],
  },
  {
    slug: "commission-ia-feuille-de-route",
    title: "Commission Intelligence artificielle : une feuille de route pour une IA francophone responsable",
    excerpt: "La Commission IA du GPF publie ses priorités : adoption, IA responsable, amélioration des processus, partage de connaissances et formation.",
    category: "Commission",
    date: "2025-05-04",
    author: "Commission IA",
    body: [
      "Sous la présidence d'Ousama Boujaouane, la Commission Intelligence artificielle du GPF structure ses travaux autour de l'adoption de l'IA, de la responsabilité, de l'amélioration des processus et du partage de connaissances.",
    ],
  },
  {
    slug: "retour-diasporas-2024",
    title: "Excellence Entrepreneuriale des Diasporas : retour sur une édition marquante",
    excerpt: "Retour en images et en chiffres sur la cérémonie au CESE, entre trophées, tables rondes et rencontres.",
    category: "Événement",
    date: "2024-11-25",
    author: "Rédaction GPF",
    body: [
      "La cérémonie Excellence Entrepreneuriale des Diasporas Francophones a réuni entrepreneurs, institutions et partenaires au Palais d'Iéna pour célébrer les ponts économiques et humains entre la France et les pays francophones.",
    ],
  },
];
