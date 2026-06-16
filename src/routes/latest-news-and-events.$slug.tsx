import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { news } from "@/lib/site-data";

export const Route = createFileRoute("/latest-news-and-events/$slug")({
  loader: ({ params }) => {
    const item = news.find((n) => n.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.item.title ?? "News"} — Advance Richmond` },
      { name: "description", content: loaderData?.item.excerpt ?? "" },
      { property: "og:title", content: loaderData?.item.title ?? "" },
      { property: "og:description", content: loaderData?.item.excerpt ?? "" },
      { property: "og:type", content: "article" },
    ],
  }),
  notFoundComponent: () => (
    <div className="container-wide py-24 text-center">
      <h1 className="font-serif text-3xl">Article not found</h1>
      <Link to="/latest-news-and-events" className="link-underline mt-6 inline-flex">
        Back to News &amp; Events
      </Link>
    </div>
  ),
  component: NewsDetail,
});

function NewsDetail() {
  const { item } = Route.useLoaderData();
  return (
    <article className="bg-white">
      <div className="relative h-[42vh] min-h-[320px] w-full overflow-hidden bg-[color:var(--ink)]">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="container-wide absolute inset-x-0 bottom-0 pb-10 text-white">
          <span className="rounded-full bg-[color:var(--gold)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink)]">
            {item.category}
          </span>
          <h1 className="mt-4 max-w-3xl font-serif text-3xl leading-tight md:text-5xl">{item.title}</h1>
          <time className="mt-3 block text-xs uppercase tracking-[0.16em] opacity-80">
            {new Date(item.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
          </time>
        </div>
      </div>
      <div className="container-wide max-w-3xl py-14">
        <Link to="/latest-news-and-events" className="inline-flex items-center gap-2 text-sm text-[color:var(--ink-soft)] hover:text-[color:var(--primary)]">
          <ArrowLeft className="h-4 w-4" /> All news &amp; events
        </Link>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-[color:var(--ink)]">
          {item.body.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <a
          href={item.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-[color:var(--primary-foreground)] hover:bg-[color:var(--ink)]"
        >
          View original source <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}