import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/gpf/LegalPageLayout";

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité | GPF" },
      { name: "description", content: "Politique de confidentialité et traitement des données personnelles du GPF." },
      { property: "og:title", content: "Politique de confidentialité | GPF" },
      { property: "og:description", content: "Traitement des données personnelles." },
      { property: "og:url", content: "/politique-de-confidentialite" },
    ],
    links: [{ rel: "canonical", href: "/politique-de-confidentialite" }],
  }),
  component: Page,
});

function Page() {
  return (
    <LegalPageLayout
      eyebrow="Légal"
      title="Politique de confidentialité"
      updated="Juillet 2026"
      toc={[
        { id: "collecte", label: "Données collectées" },
        { id: "finalites", label: "Finalités" },
        { id: "droits", label: "Vos droits" },
      ]}
    >
      <h2 id="collecte">Données collectées</h2>
      <p>Le GPF collecte les données strictement nécessaires au traitement de vos demandes : identité, coordonnées, organisation, contenu du message.</p>
      <h2 id="finalites">Finalités</h2>
      <ul>
        <li>Répondre aux demandes de contact</li>
        <li>Gérer les adhésions et partenariats</li>
        <li>Envoyer la newsletter (avec consentement)</li>
      </ul>
      <h2 id="droits">Vos droits</h2>
      <p>Vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition au traitement de vos données. Contactez-nous pour exercer ces droits.</p>
    </LegalPageLayout>
  );
}
