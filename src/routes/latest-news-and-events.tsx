import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { images, news } from "@/lib/site-data";

export const Route = createFileRoute("/latest-news-and-events")({
  head: () => ({
    meta: [
      { title: "News & Events — Advance Richmond" },
      { name: "description", content: "The latest news, advocacy work, and community events from Advance Richmond." },
      { property: "og:title", content: "News & Events — Advance Richmond" },
      { property: "og:description", content: "Latest news and upcoming events." },
    ],
    links: [{ rel: "canonical", href: "https://advance-richmond.lovable.app/latest-news-and-events" }],
  }),
  component: NewsListPage,
});

function NewsListPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[color:var(--ink)] py-16 text-white md:py-20">
        <img src={images.newsHero} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="container-wide relative">
          <p className="eyebrow text-[color:var(--gold-soft)]">News &amp; Events</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            Latest news, advocacy, and community events from across Richmond.
          </h1>
        </div>
      </section>
      <section className="page-bg page-bg-dual py-16 md:py-24">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.map((n) => (
              <Link
                key={n.slug}
                to="/latest-news-and-events/$slug"
                params={{ slug: n.slug }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={n.image} alt={n.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--ink)]">{n.category}</span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <time className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--ink-soft)]">
                    {new Date(n.date).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" })}
                  </time>
                  <h2 className="font-serif text-xl text-[color:var(--ink)]">{n.title}</h2>
                  <p className="line-clamp-3 text-sm text-[color:var(--ink-soft)]">{n.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-[color:var(--primary)]">
                    Read more <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}