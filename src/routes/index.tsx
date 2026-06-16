import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Calendar, MapPin } from "lucide-react";
import {
  images,
  priorities,
  team,
  featuredEvents,
  news,
  socialLinks,
} from "@/lib/site-data";
import { TeamCard } from "@/components/team-card";
import { PriorityIcon } from "@/components/priority-icon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Advance Richmond — Leading Richmond Forward" },
      {
        name: "description",
        content:
          "A grassroots civic movement of Richmond, BC residents organizing for safer streets, transparent local government, and a stronger community voice.",
      },
      {
        property: "og:title",
        content: "Advance Richmond — Leading Richmond Forward",
      },
      {
        property: "og:description",
        content:
          "Leading Richmond Forward — join us in building a safer, stronger, more united city.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TeamSection />
      <PrioritiesSection />
      <ImpactSection />
      <EventsSection />
      <GallerySection />
      <NewsSection />
      <JoinCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--cream)]">
      <div className="container-wide grid items-center gap-12 py-14 md:grid-cols-12 md:py-24">
        <div className="md:col-span-7">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[color:var(--gold)]" />
            <span className="eyebrow text-[color:var(--ink-soft)]">
              Advance Richmond · Community Association
            </span>
          </div>
          <h1 className="mt-6 font-serif text-[42px] leading-[1.02] text-[color:var(--ink)] md:text-[72px]">
            Leading <em className="text-[color:var(--primary)]">Richmond</em>
            <br />
            forward — together.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--ink-soft)] md:text-lg">
            We're a grassroots movement of Richmond residents organizing for
            safer neighbourhoods, transparent local government, and a
            community voice that actually leads our city forward.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={socialLinks.joinList}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-[color:var(--primary-foreground)] transition hover:bg-[color:var(--ink)]"
            >
              Join the Movement
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/about-arca"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--ink)]/15 bg-white px-6 py-3 text-sm font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--ink)]/40"
            >
              See our Priorities
            </Link>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-[color:var(--border)] pt-6">
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-soft)]">
                Founded
              </dt>
              <dd className="mt-1 font-serif text-2xl text-[color:var(--ink)]">
                2024
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-soft)]">
                Neighbourhoods
              </dt>
              <dd className="mt-1 font-serif text-2xl text-[color:var(--ink)]">
                All of Richmond
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-soft)]">
                Status
              </dt>
              <dd className="mt-1 font-serif text-2xl text-[color:var(--ink)]">
                Elections BC
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
            <img
              src={images.heroCommunity}
              alt="Richmond residents gathered on a tree-lined neighbourhood street at golden hour"
              width={1920}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 text-white">
              <p className="font-serif text-lg leading-snug">
                "If we want long-term change, we need a strong and organized voice."
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] opacity-80">
                — From our origin story
              </p>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-[color:var(--gold)] p-5 text-[color:var(--ink)] shadow-xl md:block">
            <p className="font-serif text-3xl leading-none">2024</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em]">
              Family Day Rally —<br />
              largest in city history
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="page-bg py-20 md:py-28">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Meet the team</p>
            <h2 className="mt-3 font-serif text-4xl text-[color:var(--ink)] md:text-5xl">
              The neighbours leading this movement
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--ink-soft)]">
              ARCA is run by ordinary Richmond residents — parents, small
              business owners, long-time homeowners, and community
              organizers — who decided that showing up is no longer optional.
            </p>
          </div>
          <Link
            to="/city-council-team"
            className="link-underline text-sm"
          >
            Meet the full team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PrioritiesSection() {
  return (
    <section className="bg-[color:var(--cream)] py-20 md:py-28">
      <div className="container-wide">
        <div className="grid items-end gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">Our priorities</p>
            <h2 className="mt-3 font-serif text-4xl text-[color:var(--ink)] md:text-5xl">
              What we stand for, in plain language
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[color:var(--ink-soft)] md:col-span-5">
            We don't speak in political jargon. These are the everyday things
            that matter to Richmond families, written the way we'd explain
            them on your doorstep.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {priorities.map((p) => (
            <article
              key={p.title}
              className="flex flex-col gap-4 bg-white p-7 transition hover:bg-[color:var(--cream)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--primary)]/8 text-[color:var(--primary)]">
                <PriorityIcon name={p.icon} className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl text-[color:var(--ink)]">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-[color:var(--ink-soft)]">
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--primary)] py-20 text-[color:var(--primary-foreground)] md:py-28">
      <img
        src={images.richmondAerial}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--primary)] via-[color:var(--primary)]/85 to-transparent" />
      <div className="container-wide relative grid items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="eyebrow text-[color:var(--gold-soft)]">
            Community impact
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
            We don't just talk about Richmond.
            <br /> We show up for it.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed opacity-85">
            From the largest self-organized gathering in Richmond's recent
            history to quiet conversations on doorsteps across the city,
            ARCA exists because ordinary residents decided to lead.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 md:col-span-5">
          {[
            { k: "2024", v: "Family Day Rally — largest in city history" },
            { k: "120+", v: "Speakers registered at the injection-site hearing" },
            { k: "7", v: "Directors leading the association" },
            { k: "EN · 中文", v: "Bilingual community organizing" },
          ].map((s) => (
            <div key={s.v} className="bg-[color:var(--primary)] p-6">
              <dt className="font-serif text-3xl text-[color:var(--gold-soft)]">
                {s.k}
              </dt>
              <dd className="mt-2 text-xs uppercase tracking-[0.14em] opacity-80">
                {s.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function EventsSection() {
  const [featured, ...rest] = featuredEvents;
  return (
    <section className="page-bg page-bg-left py-20 md:py-28">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Featured events</p>
            <h2 className="mt-3 font-serif text-4xl text-[color:var(--ink)] md:text-5xl">
              Active in Richmond — every week
            </h2>
          </div>
          <Link to="/latest-news-and-events" className="link-underline text-sm">
            All events
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <article className="relative overflow-hidden rounded-3xl lg:col-span-7">
            <img
              src={featured.image}
              alt={featured.title}
              loading="lazy"
              className="aspect-[16/11] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white">
              <span className="rounded-full bg-[color:var(--gold)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink)]">
                {featured.tag}
              </span>
              <h3 className="mt-4 font-serif text-3xl md:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-lg text-sm opacity-90">{featured.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-5 text-xs uppercase tracking-[0.14em] opacity-80">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5" /> {featured.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5" /> {featured.location}
                </span>
              </div>
            </div>
          </article>

          <div className="grid gap-6 lg:col-span-5">
            {rest.slice(0, 3).map((e) => (
              <article
                key={e.title}
                className="group flex gap-4 overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white p-3 transition hover:border-[color:var(--ink)]/30"
              >
                <img
                  src={e.image}
                  alt={e.title}
                  loading="lazy"
                  className="h-28 w-32 flex-none rounded-xl object-cover"
                />
                <div className="min-w-0 py-1 pr-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-soft)]">
                    {e.tag}
                  </p>
                  <h4 className="mt-1 font-serif text-lg text-[color:var(--ink)]">
                    {e.title}
                  </h4>
                  <p className="mt-1 line-clamp-2 text-xs text-[color:var(--ink-soft)]">
                    {e.blurb}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const shots = [
    { src: images.eventCanvass, h: "row-span-2", label: "Door-to-door" },
    { src: images.galleryFamily, h: "", label: "Families" },
    { src: images.eventFestival, h: "", label: "Festivals" },
    { src: images.eventVigil, h: "row-span-2", label: "Vigils" },
    { src: images.galleryPark, h: "", label: "Neighbourhoods" },
    { src: images.eventTownhall, h: "", label: "Town halls" },
  ];
  return (
    <section className="bg-[color:var(--cream)] py-20 md:py-28">
      <div className="container-wide">
        <p className="eyebrow">Community gallery</p>
        <h2 className="mt-3 max-w-3xl font-serif text-4xl text-[color:var(--ink)] md:text-5xl">
          Richmond, as we live it.
        </h2>

        <div className="mt-12 grid auto-rows-[140px] grid-cols-2 gap-3 md:auto-rows-[180px] md:grid-cols-4 md:gap-4">
          {shots.map((s) => (
            <figure
              key={s.label}
              className={`group relative overflow-hidden rounded-2xl ${s.h}`}
            >
              <img
                src={s.src}
                alt={s.label}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-3 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                {s.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  return (
    <section className="page-bg page-bg-dual py-20 md:py-28">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Latest updates</p>
            <h2 className="mt-3 font-serif text-4xl text-[color:var(--ink)] md:text-5xl">
              What we're working on right now
            </h2>
          </div>
          <Link to="/latest-news-and-events" className="link-underline text-sm">
            All news
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {news.map((n) => (
            <Link
              key={n.slug}
              to="/latest-news-and-events/$slug"
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
              <div className="flex flex-1 flex-col gap-3 p-5">
                <time className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--ink-soft)]">
                  {new Date(n.date).toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <h3 className="font-serif text-xl text-[color:var(--ink)]">
                  {n.title}
                </h3>
                <p className="line-clamp-3 text-sm text-[color:var(--ink-soft)]">
                  {n.excerpt}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-[color:var(--primary)]">
                  Read more <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function JoinCta() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--ink)] py-20 text-[color:var(--primary-foreground)] md:py-28">
      <div className="container-wide grid items-center gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="eyebrow text-[color:var(--gold-soft)]">
            Join the movement
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-6xl">
            Richmond's future
            <br />
            is written by the people who show up.
          </h2>
        </div>
        <div className="md:col-span-5">
          <p className="text-base leading-relaxed opacity-85">
            Add your name to our contact list and we'll let you know when
            there's a town hall, public hearing, or volunteer opportunity in
            your neighbourhood. No spam — just the moments that matter.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={socialLinks.joinList}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-semibold text-[color:var(--ink)] transition hover:bg-[color:var(--gold-soft)]"
            >
              Join our Contact List
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              More ways to help
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
