export const siteUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ?? "";

export const defaultSeo = {
  siteName: "Groupement du Patronat Francophone",
  defaultTitle: "GPF | Groupement du Patronat Francophone",
  defaultDescription:
    "Le réseau mondial de la Francophonie économique. 60 organisations patronales, 1 million d'entreprises, 5 continents.",
  ogImage: "/og-image.png",
  locale: "fr_FR",
  twitterHandle: "@GPF_int",
} as const;

export function absoluteUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return siteUrl ? `${siteUrl}${normalized}` : normalized;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: defaultSeo.siteName,
    alternateName: "GPF",
    url: siteUrl || undefined,
    logo: siteUrl ? absoluteUrl("/favicon.svg") : "/favicon.svg",
    description: defaultSeo.defaultDescription,
    foundingDate: "1987",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6 bis rue Galvani",
      addressLocality: "Paris",
      postalCode: "75017",
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "contact@gpf-int.org",
      availableLanguage: ["French", "English"],
    },
  };
}
