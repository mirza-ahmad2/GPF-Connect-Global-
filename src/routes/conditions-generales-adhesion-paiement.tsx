import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/gpf/LegalPageLayout";

export const Route = createFileRoute("/conditions-generales-adhesion-paiement")({
  head: () => ({
    meta: [
      { title: "Conditions générales d'adhésion et de paiement | GPF" },
      { name: "description", content: "Conditions générales d'adhésion et de paiement du Groupement du Patronat Francophone." },
      { property: "og:title", content: "CGA | GPF" },
      { property: "og:description", content: "Adhésion et paiement." },
      { property: "og:url", content: "/conditions-generales-adhesion-paiement" },
    ],
    links: [{ rel: "canonical", href: "/conditions-generales-adhesion-paiement" }],
  }),
  component: Page,
});

function Page() {
  return (
    <LegalPageLayout
      eyebrow="Légal"
      title="Conditions générales d'adhésion et de paiement"
      updated="Juillet 2026"
      toc={[
        { id: "adhesion", label: "Adhésion" },
        { id: "paiement", label: "Paiement" },
        { id: "retractation", label: "Rétractation" },
      ]}
    >
      <h2 id="adhesion">Adhésion</h2>
      <p>L'adhésion au GPF est soumise à validation par le bureau. Les formules et bénéfices sont détaillés sur la page Adhérer.</p>
      <h2 id="paiement">Paiement</h2>
      <p>Les paiements sont réalisés via prestataire sécurisé. Aucun donnée bancaire n'est collectée directement sur le site du GPF.</p>
      <h2 id="retractation">Rétractation</h2>
      <p>Conditions de rétractation à préciser conformément à la réglementation applicable et à valider avec le client.</p>
    </LegalPageLayout>
  );
}
