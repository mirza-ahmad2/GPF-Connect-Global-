import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/gpf/LegalPageLayout";
import { site } from "@/data/site";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales | GPF" },
      { name: "description", content: "Mentions légales du Groupement du Patronat Francophone." },
      { property: "og:title", content: "Mentions légales | GPF" },
      { property: "og:description", content: "Informations légales." },
      { property: "og:url", content: "/mentions-legales" },
    ],
    links: [{ rel: "canonical", href: "/mentions-legales" }],
  }),
  component: Page,
});

function Page() {
  return (
    <LegalPageLayout
      eyebrow="Légal"
      title="Mentions légales"
      updated="Juillet 2026"
      toc={[
        { id: "editeur", label: "Éditeur" },
        { id: "hebergement", label: "Hébergement" },
        { id: "propriete", label: "Propriété intellectuelle" },
      ]}
    >
      <h2 id="editeur">Éditeur</h2>
      <p>Groupement du Patronat Francophone, {site.contact.address}. SIREN {site.contact.siren}. Contact : {site.contact.email}.</p>
      <h2 id="hebergement">Hébergement</h2>
      <p>Informations d'hébergement à confirmer avec le client.</p>
      <h2 id="propriete">Propriété intellectuelle</h2>
      <p>L'ensemble des contenus (textes, images, logos) présents sur le site sont la propriété du GPF ou de leurs auteurs respectifs. Toute reproduction non autorisée est interdite.</p>
    </LegalPageLayout>
  );
}
