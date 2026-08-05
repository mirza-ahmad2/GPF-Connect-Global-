import { Link } from "@tanstack/react-router";
import { Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { GpfLogo } from "./GpfLogo";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#081C36] text-white/80 mt-24">
      <div className="container-gpf py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <GpfLogo variant="light" />
          <p className="mt-5 text-sm leading-relaxed text-white/70 max-w-sm">
            Le Groupement du Patronat Francophone relie les économies, accélère la Francophonie et transforme
            la langue partagée en croissance internationale depuis 1987.
          </p>
          <div className="flex gap-3 mt-6">
            <a href={site.socials.linkedin} aria-label="LinkedIn" className="p-2 rounded-full border border-white/15 hover:border-white/40 ring-focus">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={site.socials.youtube} aria-label="YouTube" className="p-2 rounded-full border border-white/15 hover:border-white/40 ring-focus">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-white text-sm font-semibold mb-4">Le GPF</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/qui-sommes-nous" className="hover:text-white">Qui sommes-nous</Link></li>
            <li><Link to="/equipe" className="hover:text-white">Équipe</Link></li>
            <li><Link to="/commissions" className="hover:text-white">Commissions</Link></li>
            <li><Link to="/partenaires" className="hover:text-white">Partenaires</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-white text-sm font-semibold mb-4">Agir</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/adherer" className="hover:text-white">Adhérer</Link></li>
            <li><Link to="/devenir-partenaire" className="hover:text-white">Devenir partenaire</Link></li>
            <li><Link to="/evenements" className="hover:text-white">Événements</Link></li>
            <li><Link to="/actualites" className="hover:text-white">Actualités</Link></li>
            <li><Link to="/gpf-business-connect" className="hover:text-white">GPF Business Connect</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-white text-sm font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2 items-start"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> {site.contact.address}</li>
            <li className="flex gap-2 items-center"><Mail className="w-4 h-4 shrink-0" /> <a href={`mailto:${site.contact.email}`} className="hover:text-white">{site.contact.email}</a></li>
            <li className="flex gap-2 items-center"><Phone className="w-4 h-4 shrink-0" /> {site.contact.phone}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-gpf py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/mentions-legales" className="hover:text-white">Mentions légales</Link>
            <Link to="/politique-de-confidentialite" className="hover:text-white">Politique de confidentialité</Link>
            <Link to="/conditions-generales-utilisation" className="hover:text-white">CGU</Link>
            <Link to="/conditions-generales-adhesion-paiement" className="hover:text-white">CGA</Link>
          </div>
          <div>© {year} Groupement du Patronat Francophone. Tous droits réservés.</div>
        </div>
        <div className="container-gpf pb-6 text-xs text-white/50">
          Powered by{" "}
          <a href="https://theinnovations.tech/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white underline underline-offset-2">
            The Innovations
          </a>
        </div>
      </div>
    </footer>
  );
}
