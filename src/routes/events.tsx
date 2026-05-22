import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import { featuredEvents, images } from "@/lib/site-data";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Community Events — Advance Richmond" },
      {
        name: "description",
        content:
          "Town halls, door-to-door visits, rallies, festival booths and vigils. See where Advance Richmond is showing up across Richmond, BC.",
      },
      { property: "og:title", content: "Community Events — Advance Richmond" },
      {
        property: "og:description",
        content:
          "Where Advance Richmond is showing up across the city.",
      },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <>
      <section className="bg-[color:var(--cream)] pb-12 pt-20 md:pb-16 md:pt-28">
        <div className="container-wide grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">Community events</p>
            <h1 className="mt-4 font-serif text-5xl text-[color:var(--ink)] md:text-7xl">
              Active in Richmond, every week.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
              Most of our work happens off-stage: at kitchen tables, on front
              porches, in community centres. Here's how we keep neighbours
              connected to the issues shaping Richmond's future.
            </p>
          </div>
          <div className="md:col-span-5">
            <img
              src={images.eventRally}
              alt="Community rally at Richmond City Hall"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 pt-12">
        <div className="container-wide grid gap-6 md:grid-cols-2">
          {featuredEvents.map((e, i) => (
            <article
              key={e.title}
              className={`group relative overflow-hidden rounded-3xl border border-[color:var(--border)] ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <img
                src={e.image}
                alt={e.title}
                loading="lazy"
                className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                  i === 0 ? "aspect-[21/9]" : "aspect-[16/10]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <span className="rounded-full bg-[color:var(--gold)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink)]">
                  {e.tag}
                </span>
                <h2 className="mt-4 font-serif text-3xl md:text-4xl">
                  {e.title}
                </h2>
                <p className="mt-3 max-w-xl text-sm opacity-90">{e.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-5 text-xs uppercase tracking-[0.14em] opacity-85">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5" /> {e.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5" /> {e.location}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
