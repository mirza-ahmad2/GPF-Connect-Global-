import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { events } from "@/data/events";
import { news } from "@/data/news";
import { siteUrl } from "@/data/seo";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths: string[] = [
          "/",
          "/qui-sommes-nous",
          "/equipe",
          "/commissions",
          "/commissions/intelligence-artificielle",
          "/partenaires",
          "/devenir-partenaire",
          "/evenements",
          "/actualites",
          "/gpf-business-connect",
          "/adherer",
          "/contact",
          "/mentions-legales",
          "/politique-de-confidentialite",
          "/conditions-generales-utilisation",
          "/conditions-generales-adhesion-paiement",
          ...events.map((e) => `/evenements/${e.slug}`),
          ...news.map((n) => `/actualites/${n.slug}`),
        ];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...paths.map((p) => `  <url><loc>${siteUrl}${p}</loc></url>`),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
