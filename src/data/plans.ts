// Verified pricing to be re-confirmed with client before publication.
export type MembershipPlan = {
  id: string;
  name: string;
  tagline: string;
  price?: string;
  benefits: string[];
  featured?: boolean;
};

export const membershipPlans: MembershipPlan[] = [
  {
    id: "connexion",
    name: "Connexion",
    tagline: "Intégrer le réseau francophone.",
    benefits: [
      "Accès au réseau et à la communauté GPF",
      "Invitations aux événements",
      "Accès à GPF Business Connect",
      "Mises en relation qualifiées",
      "Groupes de commissions",
    ],
  },
  {
    id: "visibilite",
    name: "Visibilité",
    tagline: "Rayonner dans l'écosystème francophone.",
    featured: true,
    benefits: [
      "Toutes les prestations Connexion",
      "Visibilité éditoriale et Web TV",
      "Prises de parole ciblées",
      "Introductions sectorielles",
      "Formations et webinaires",
    ],
  },
  {
    id: "influence",
    name: "Influence",
    tagline: "Peser dans le dialogue économique international.",
    benefits: [
      "Toutes les prestations Visibilité",
      "Accompagnement à l'international",
      "Représentation institutionnelle",
      "Accès prioritaire aux forums",
      "Programme d'ambassadeurs",
    ],
  },
];

export const partnerTiers = [
  { name: "Bronze", benefits: ["Visibilité de base", "Invitations aux événements"] },
  { name: "Argent", benefits: ["Visibilité renforcée", "Stand aux forums", "Prises de parole"] },
  { name: "Or", benefits: ["Partenariat stratégique", "Co-branding", "Programmation dédiée"] },
];
