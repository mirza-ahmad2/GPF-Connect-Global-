// Central editable config. Values flagged "à confirmer" should be verified with the client.
export const site = {
  name: "Groupement du Patronat Francophone",
  short: "GPF",
  founded: 1987,
  tagline: "Le réseau mondial de la Francophonie économique.",
  contact: {
    // à confirmer avec le client
    email: "contact@gpf-int.org",
    phone: "+33 (0)1 78 76 53 48",
    address: "6 bis rue Galvani, 75017 Paris, France",
    siren: "840103782",
  },
  aiCommission: {
    contactEmail: "oboujaouane@gmail.com",
    contactPhone: "+33 7 57 84 44 97",
  },
  metrics: [
    { value: "60+", label: "Organisations patronales" },
    { value: "1M", label: "Entreprises représentées" },
    { value: "5", label: "Continents" },
  ],
  externalPlatformUrl: "https://gpf-business-connect.com", // à confirmer
  socials: {
    linkedin: "#",
    x: "#",
    youtube: "#",
  },
} as const;

export const nav = [
  {
    label: "Le GPF",
    children: [
      { label: "Qui sommes-nous ?", to: "/qui-sommes-nous" },
      { label: "Notre histoire", to: "/qui-sommes-nous#histoire" },
      { label: "Missions et valeurs", to: "/qui-sommes-nous#missions" },
      { label: "Gouvernance", to: "/qui-sommes-nous#gouvernance" },
      { label: "Équipe", to: "/equipe" },
      { label: "Commissions", to: "/commissions" },
      { label: "Présence internationale", to: "/qui-sommes-nous#presence" },
    ],
  },
  {
    label: "Notre réseau",
    children: [
      { label: "Membres", to: "/partenaires#membres" },
      { label: "Partenaires", to: "/partenaires" },
      { label: "Ambassadeurs", to: "/equipe#ambassadeurs" },
      { label: "Devenir partenaire", to: "/devenir-partenaire" },
    ],
  },
  { label: "Événements", to: "/evenements" },
  { label: "Actualités", to: "/actualites" },
  { label: "GPF Business Connect", to: "/gpf-business-connect" },
] as const;
