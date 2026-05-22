import { createFileRoute } from "@tanstack/react-router";
import { priorities } from "@/lib/site-data";
import { PriorityIcon } from "@/components/priority-icon";

export const Route = createFileRoute("/priorities")({
  head: () => ({
    meta: [
      { title: "Our Priorities — Advance Richmond" },
      {
        name: "description",
        content:
          "Public safety, transparent government, responsible housing, families and youth, local economy, community unity — the priorities driving Advance Richmond.",
      },
      { property: "og:title", content: "Our Priorities — Advance Richmond" },
      {
        property: "og:description",
        content:
          "What Advance Richmond stands for, written in plain language.",
      },
      { property: "og:url", content: "/priorities" },
    ],
    links: [{ rel: "canonical", href: "/priorities" }],
  }),
  component: PrioritiesPage,
});

function PrioritiesPage() {
  return (
    <>
      <section className="bg-[color:var(--cream)] pb-12 pt-20 md:pb-16 md:pt-28">
        <div className="container-wide max-w-4xl">
          <p className="eyebrow">Our priorities</p>
          <h1 className="mt-4 font-serif text-5xl text-[color:var(--ink)] md:text-7xl">
            What we stand for, in plain language.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--ink-soft)]">
            No jargon, no platitudes. These are the everyday things Richmond
            families care about — written the way we'd explain them on your
            doorstep.
          </p>
        </div>
      </section>

      <section className="bg-white pb-24 pt-8">
        <div className="container-wide grid gap-8 md:grid-cols-2">
          {priorities.map((p, i) => (
            <article
              key={p.title}
              className="flex gap-6 rounded-3xl border border-[color:var(--border)] bg-white p-7 md:p-9"
            >
              <div className="flex-none">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--primary)] text-[color:var(--primary-foreground)]">
                  <PriorityIcon name={p.icon} className="h-7 w-7" />
                </div>
                <p className="mt-3 font-serif text-sm text-[color:var(--gold)]">
                  {String(i + 1).padStart(2, "0")}
                </p>
              </div>
              <div>
                <h2 className="font-serif text-3xl text-[color:var(--ink)]">
                  {p.title}
                </h2>
                <p className="mt-3 leading-relaxed text-[color:var(--ink-soft)]">
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
