export type Commission = {
  slug: string;
  name: string;
  purpose: string;
  president?: string;
  featured?: boolean;
};

export const commissions: Commission[] = [
  { slug: "adhesions", name: "Adhésions", purpose: "Développement et animation du réseau des adhérents." },
  { slug: "climat-rse", name: "Climat et RSE", purpose: "Responsabilité sociétale et transition écologique des entreprises francophones." },
  { slug: "diasporas", name: "Diasporas", purpose: "Mobilisation des diasporas comme leviers économiques entre pays francophones." },
  { slug: "entreprendre-au-feminin", name: "Entreprendre au Féminin", purpose: "Promotion et accompagnement de l'entrepreneuriat féminin." },
  { slug: "formation", name: "Formation", purpose: "Développement des compétences et de la formation professionnelle." },
  { slug: "innovation-b2b", name: "Innovation et écosystèmes B2B francophones", purpose: "Structuration d'écosystèmes B2B innovants dans l'espace francophone." },
  { slug: "institutionnelle", name: "Institutionnelle", purpose: "Relations avec les institutions et les organisations multilatérales." },
  { slug: "intelligence-economique", name: "Intelligence économique", purpose: "Veille, information stratégique et intelligence économique." },
  { slug: "intelligence-artificielle", name: "Intelligence artificielle", purpose: "Adoption responsable de l'IA au service de la Francophonie économique.", president: "Ousama Boujaouane", featured: true },
  { slug: "mobilite-transport", name: "Mobilité et transport", purpose: "Enjeux de mobilité, logistique et transport internationaux." },
  { slug: "numerique", name: "Numérique", purpose: "Transformation numérique des entreprises et des territoires." },
  { slug: "operationnelle", name: "Opérationnelle", purpose: "Coordination opérationnelle des actions du GPF." },
  { slug: "partenariats", name: "Partenariats", purpose: "Développement des partenariats stratégiques." },
  { slug: "petites-industries-luxe", name: "Petites industries et métiers du luxe", purpose: "Valorisation des savoir-faire et des métiers du luxe francophones." },
  { slug: "securite", name: "Sécurité", purpose: "Enjeux de sécurité économique et de sûreté." },
  { slug: "sport", name: "Sport", purpose: "Économie du sport et diplomatie sportive." },
];
