import type { ReactNode } from "react";
import { PageShell, PageHero } from "./PageShell";

export function LegalPageLayout({
  eyebrow,
  title,
  updated,
  toc,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  toc: { id: string; label: string }[];
  children: ReactNode;
}) {
  return (
    <PageShell>
      <PageHero eyebrow={eyebrow} title={title} lead={`Dernière mise à jour : ${updated}. Ce document est susceptible d'être révisé. Validation finale à confirmer avec le client.`} />
      <section className="py-14">
        <div className="container-gpf grid md:grid-cols-12 gap-10">
          <aside className="md:col-span-3">
            <div className="sticky top-28 rounded-2xl border border-border p-5 bg-cool">
              <div className="eyebrow mb-3">Sommaire</div>
              <ul className="space-y-2 text-sm">
                {toc.map((t) => (
                  <li key={t.id}><a href={`#${t.id}`} className="text-ink hover:text-navy">{t.label}</a></li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="md:col-span-9 prose max-w-none text-ink [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_p]:text-textgrey [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-textgrey [&_ul]:space-y-1">
            {children}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
