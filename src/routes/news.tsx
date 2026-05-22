import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { news } from "@/lib/site-data";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Latest News — Advance Richmond" },
      {
        name: "description",
        content:
          "Updates from Advance Richmond on local policy, community advocacy, and the issues shaping Richmond, BC.",
      },
      { property: "og:title", content: "Latest News — Advance Richmond" },
      {
        property: "og:description",
        content:
          "Updates from Advance Richmond on local policy and community advocacy.",
      },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <>
      <section className="bg-[color:var(--cream)] pb-12 pt-20 md:pb-16 md:pt-28">
        <div className="container-wide max-w-4xl">
          <p className="eyebrow">Latest news</p>
          <h1 className="mt-4 font-serif text-5xl text-[color:var(--ink)] md:text-7xl">
            What we're working on right now.
          </h1>
        </div>
      </section>

      <section className="bg-white pb-24 pt-8">
        <div className="container-wide grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((n) => (
            <Link
              key={n.slug}
              to="/news/$slug"
              params={{ slug: n.slug }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={n.image}
                  alt={n.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--ink)]">
                  {n.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <time className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--ink-soft)]">
                  {new Date(n.date).toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="font-serif text-2xl text-[color:var(--ink)]">
                  {n.title}
                </h2>
                <p className="text-sm leading-relaxed text-[color:var(--ink-soft)]">
                  {n.excerpt}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-[color:var(--primary)]">
                  Read more <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
