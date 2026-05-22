import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { news } from "@/lib/site-data";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const item = news.find((n) => n.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    const item = loaderData?.item;
    if (!item) return { meta: [{ title: "Article — Advance Richmond" }] };
    return {
      meta: [
        { title: `${item.title} — Advance Richmond` },
        { name: "description", content: item.excerpt },
        { property: "og:title", content: item.title },
        { property: "og:description", content: item.excerpt },
        { property: "og:url", content: `/news/${item.slug}` },
        { property: "og:type", content: "article" },
        { property: "og:image", content: item.image },
      ],
      links: [{ rel: "canonical", href: `/news/${item.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: item.title,
            datePublished: item.date,
            articleSection: item.category,
            author: {
              "@type": "Organization",
              name: "Advance Richmond Community Association",
            },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-wide py-32 text-center">
      <h1 className="font-serif text-4xl text-[color:var(--ink)]">
        Article not found
      </h1>
      <Link to="/news" className="link-underline mt-6 inline-flex text-sm">
        Back to all news
      </Link>
    </div>
  ),
  errorComponent: () => (
    <div className="container-wide py-32 text-center">
      <h1 className="font-serif text-4xl text-[color:var(--ink)]">
        Something went wrong loading this article.
      </h1>
      <Link to="/news" className="link-underline mt-6 inline-flex text-sm">
        Back to all news
      </Link>
    </div>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { item } = Route.useLoaderData();
  return (
    <>
      <section className="bg-[color:var(--cream)] pb-12 pt-16 md:pb-16 md:pt-24">
        <div className="container-prose max-w-3xl">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-soft)] transition hover:text-[color:var(--primary)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All news
          </Link>
          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
            {item.category} ·{" "}
            {new Date(item.date).toLocaleDateString("en-CA", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-[color:var(--ink)] md:text-6xl">
            {item.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--ink-soft)]">
            {item.excerpt}
          </p>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="container-prose max-w-5xl">
          <img
            src={item.image}
            alt={item.title}
            className="aspect-[16/9] w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
        <article className="container-prose mt-12 max-w-3xl space-y-5 text-lg leading-relaxed text-[color:var(--ink-soft)]">
          {item.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-[color:var(--border)] pt-6 text-sm">
            <a
              href={item.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              View original on advancerichmond.ca
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </article>
      </section>
    </>
  );
}
