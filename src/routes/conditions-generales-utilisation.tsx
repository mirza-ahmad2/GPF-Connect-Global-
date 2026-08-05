import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/gpf/LegalPageLayout";

export const Route = createFileRoute("/conditions-generales-utilisation")({
  head: () => ({
    meta: [
      { title: "Conditions générales d'utilisation | GPF" },
      { name: "description", content: "Conditions générales d'utilisation du site du Groupement du Patronat Francophone." },
      { property: "og:title", content: "CGU | GPF" },
      { property: "og:description", content: "Conditions générales d'utilisation." },
      { property: "og:url", content: "/conditions-generales-utilisation" },
    ],
    links: [{ rel: "canonical", href: "/conditions-generales-utilisation" }],
  }),
  component: Page,
});

function Page() {
  return (
    <LegalPageLayout
      eyebrow="Légal"
      title="Conditions générales d'utilisation"
      updated="Juillet 2026"
      toc={[
        { id: "objet", label: "Objet" },
        { id: "acces", label: "Accès au site" },
        { id: "responsabilite", label: "Responsabilité" },
      ]}
    >
      <h2 id="objet">Objet</h2>
      <p>Les présentes CGU encadrent l'utilisation du site du GPF.</p>
      <h2 id="acces">Accès au site</h2>
      <p>Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet.</p>
      <h2 id="responsabilite">Responsabilité</h2>
      <p>Le GPF met tout en œuvre pour fournir des informations fiables mais ne saurait être tenu responsable d'éventuelles erreurs ou omissions.</p>
    </LegalPageLayout>
  );
}
