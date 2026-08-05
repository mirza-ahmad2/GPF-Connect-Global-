export type TeamMember = {
  id: string;
  name: string;
  role: string;
  category:
    | "president"
    | "honneur"
    | "vice-president"
    | "direction"
    | "commission"
    | "ambassadeur";
  region?: string;
  commission?: string;
  bio?: string;
  external?: string;
};

// Verified names from brief. Additional profiles to be synced from live site.
export const team: TeamMember[] = [
  { id: "jean-lou-blachier", name: "Jean-Lou Blachier", role: "Président du GPF", category: "president", bio: "Président du Groupement du Patronat Francophone. Engagé pour une Francophonie économique connectée et ambitieuse." },
  { id: "teddy-riner", name: "Teddy Riner", role: "Membre d'honneur", category: "honneur" },
  { id: "edith-cresson", name: "Édith Cresson", role: "Membre d'honneur", category: "honneur" },
  { id: "jean-marie-bockel", name: "Jean-Marie Bockel", role: "Membre d'honneur", category: "honneur" },
  { id: "mbagnick-diop", name: "Mbagnick Diop", role: "Vice-président", category: "vice-president", region: "Afrique de l'Ouest" },
  { id: "pierre-jean-sibran", name: "Pierre-Jean Sibran", role: "Vice-président", category: "vice-president" },
  { id: "stephane-tiki", name: "Stéphane Tiki", role: "Membre de direction", category: "direction" },
  { id: "rachida-jebnoun", name: "Rachida Jebnoun", role: "Membre de direction", category: "direction" },
  { id: "jean-daniel-ovaga", name: "Jean-Daniel Ovaga", role: "Membre de direction", category: "direction" },
  { id: "genevieve-salsat", name: "Geneviève Salsat", role: "Membre de direction", category: "direction" },
  { id: "coumba-dioukhane", name: "Coumba Dioukhane", role: "Membre de direction", category: "direction" },
  {
    id: "ousama-boujaouane",
    name: "Ousama Boujaouane",
    role: "Président de la Commission Intelligence Artificielle",
    category: "commission",
    commission: "Intelligence artificielle",
    bio: "Entrepreneur et expert en technologies, avec une solide expérience en informatique, transformation numérique et intégration de l'intelligence artificielle au service des organisations.",
  },
];
