import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/gpf/PageShell";
import { news } from "@/data/news";
import { images } from "@/data/images";
import { absoluteUrl } from "@/data/seo";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/actualites/$slug")({
  loader: ({ params }) => {
    const article = news.find((n) => n.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article | GPF" }, { name: "robots", content: "noindex" }] };
    const a = loaderData.article;
    return {
      meta: [
        { title: `${a.title} | GPF` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/actualites/${a.slug}` },
        { property: "og:image", content: absoluteUrl(images.news[a.slug]) },
      ],
      links: [{ rel: "canonical", href: `/actualites/${a.slug}` }],
    };
  },
  component: Article,
});

function Article() {
  const { article } = Route.useLoaderData();
  return (
    <PageShell>
      <article className="container-gpf max-w-3xl py-20">
        <Link to="/actualites" className="text-textgrey hover:text-navy text-sm inline-flex items-center gap-1"><ArrowLeft className="w-4 h-4" /> Toutes les actualités</Link>
        <div className="mt-8 flex gap-3 text-xs text-textgrey">
          <span className="text-navy font-semibold">{article.category}</span>
          <span>·</span>
          <span>{new Date(article.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}</span>
        </div>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold">{article.title}</h1>
        <p className="mt-4 text-textgrey">Par {article.author}</p>
        <div className="mt-10 aspect-[16/9] overflow-hidden rounded-2xl">
          <img src={images.news[article.slug]} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="mt-10 space-y-6 text-lg text-ink leading-relaxed">
          {article.body.map((p: string, i: number) => (<p key={i}>{p}</p>))}
        </div>
      </article>
    </PageShell>
  );
}
