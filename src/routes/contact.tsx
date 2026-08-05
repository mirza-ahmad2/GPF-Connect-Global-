import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/gpf/PageShell";
import { site } from "@/data/site";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | GPF" },
      { name: "description", content: "Contactez le Groupement du Patronat Francophone : adhésion, partenariats, événements, presse et relations institutionnelles." },
      { property: "og:title", content: "Contact | GPF" },
      { property: "og:description", content: "Nous écrire." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const subjects = [
  "Adhésion",
  "Partenariat",
  "Événement",
  "GPF Business Connect",
  "Commission Intelligence Artificielle",
  "Presse et médias",
  "Relations institutionnelles",
  "Intervention ou conférence",
  "Demande générale",
];

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHero eyebrow="Contact" title="Écrire au GPF." lead="Nous vous répondons dans les meilleurs délais. Pour la Commission IA, un contact dédié est indiqué en bas de page." />
      <section className="py-16">
        <div className="container-gpf grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-border p-6 bg-cool">
              <div className="eyebrow">Contact général GPF</div>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-navy" /> {site.contact.address}</li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-navy" /> <a href={`mailto:${site.contact.email}`} className="hover:text-navy underline underline-offset-2">{site.contact.email}</a></li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-navy" /> {site.contact.phone}</li>
                <li className="text-xs text-textgrey">SIREN {site.contact.siren}</li>
                <li className="text-xs text-textgrey italic">Numéro de téléphone à re-vérifier avec le client.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border p-6 bg-white">
              <div className="eyebrow">Commission Intelligence Artificielle · contact dédié</div>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-navy" /> <a href={`mailto:${site.aiCommission.contactEmail}`} className="hover:text-navy underline underline-offset-2">{site.aiCommission.contactEmail}</a></li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-navy" /> {site.aiCommission.contactPhone}</li>
              </ul>
              <p className="mt-3 text-xs text-textgrey">Ce contact est réservé à la Commission IA du GPF et ne remplace pas le contact général.</p>
            </div>
          </div>

          <form className="lg:col-span-7 rounded-2xl border border-border bg-white p-8 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            {sent && <div className="md:col-span-2 rounded-lg bg-green-50 border border-green-200 text-green-800 px-4 py-3 text-sm">Merci, votre message a bien été envoyé (démo).</div>}
            {[
              ["Prénom", "text", true],
              ["Nom", "text", true],
              ["E-mail", "email", true],
              ["Téléphone", "tel", false],
              ["Organisation", "text", true],
              ["Fonction", "text", false],
              ["Pays", "text", true],
            ].map(([label, type, req]) => (
              <label key={label as string} className="text-sm">
                <span className="block text-ink font-medium mb-1">{label as string} {req ? <span className="text-destructive">*</span> : <span className="text-textgrey">(optionnel)</span>}</span>
                <input required={Boolean(req)} type={type as string} className="w-full px-3 py-2.5 rounded-lg border border-border ring-focus" />
              </label>
            ))}
            <label className="text-sm md:col-span-2">
              <span className="block text-ink font-medium mb-1">Objet de la demande <span className="text-destructive">*</span></span>
              <select required className="w-full px-3 py-2.5 rounded-lg border border-border ring-focus bg-white">
                <option value="">Sélectionnez un objet…</option>
                {subjects.map((s) => (<option key={s}>{s}</option>))}
              </select>
            </label>
            <label className="text-sm md:col-span-2">
              <span className="block text-ink font-medium mb-1">Message <span className="text-destructive">*</span></span>
              <textarea required rows={5} className="w-full px-3 py-2.5 rounded-lg border border-border ring-focus" />
            </label>
            <label className="md:col-span-2 flex items-start gap-2 text-xs text-textgrey">
              <input required type="checkbox" className="mt-0.5" />
              J'accepte que mes données soient traitées conformément à la politique de confidentialité du GPF.
            </label>
            <div className="md:col-span-2 flex justify-end">
              <button type="submit" className="px-6 py-3 rounded-full bg-navy text-white font-semibold hover:bg-navy-deep ring-focus">Envoyer</button>
            </div>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
