import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { images, socialLinks } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ARCA — Advance Richmond" },
      {
        name: "description",
        content:
          "How Advance Richmond Community Association began: from neighbourhood concern in 2024 to a registered Elections BC elector organization leading a community movement.",
      },
      { property: "og:title", content: "About ARCA — Advance Richmond" },
      {
        property: "og:description",
        content:
          "Our origin story, mission, and what it means to lead Richmond forward.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const timeline = [
  {
    period: "Early 2024",
    title: "Awakening through crisis",
    body:
      "Richmond residents attended a public hearing on a proposed supervised injection site. More than 120 people registered to speak and nearly 100 voiced opposition — yet City Council voted 7–2 to explore the site's feasibility. The disconnect between public input and policy became impossible to ignore.",
  },
  {
    period: "Spring 2024",
    title: "From collective concern to initial organization",
    body:
      "A loosely connected group of residents realized that protest — no matter how energized — was not enough. We began organizing more formally, hosting small gatherings and discussions to plan how to better influence future decisions.",
  },
  {
    period: "Through early 2025",
    title: "A nameless coalition",
    body:
      "For nearly a year we operated as a nameless coalition of concerned citizens, organizing around the injection site, hasty housing proposals, and other neighbourhood issues — without yet adopting a formal name or structure.",
  },
  {
    period: "Mid 2025",
    title: "Formalization with Elections BC",
    body:
      "The group formally adopted the name Advance Richmond Community Association (ARCA) and registered as an elector organization with Elections BC — enabling us to endorse municipal candidates and participate formally in local elections.",
  },
];

const principles = [
  "Stand firm against toxic drugs and unsafe social experiments that harm families and youth.",
  "Create prosperity and promote a healthy local economy so ordinary residents and small businesses can thrive.",
  "Strengthen unity across communities, cultures, and generations, instead of letting politics divide us.",
  "Improve public safety and restore accountability in our streets, schools, and neighbourhoods.",
  "Take responsibility and offer constructive solutions on housing, youth support, and social policy — not just saying no, but building better options.",
];

function AboutPage() {
  return (
    <>
      <section className="bg-[color:var(--cream)] pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="container-wide grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">About ARCA</p>
            <h1 className="mt-4 font-serif text-5xl text-[color:var(--ink)] md:text-7xl">
              We started as neighbours.
              <br />
              We became a movement.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
              Advance Richmond is a grassroots civic organization of Richmond
              residents who came together out of concern for unsafe drug and
              housing policies, and grew into a long-term movement to protect
              our city's future.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
              <img
                src={images.richmondAerial}
                alt="Aerial view of Richmond, BC at golden hour"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-wide grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Origin story</p>
            <h2 className="mt-3 font-serif text-4xl text-[color:var(--ink)] md:text-5xl">
              How we got here
            </h2>
          </div>
          <ol className="relative md:col-span-8">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-[color:var(--border)]" />
            {timeline.map((t) => (
              <li key={t.period} className="relative mb-10 pl-12">
                <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--gold)] ring-4 ring-white">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--ink)]" />
                </span>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">
                  {t.period}
                </p>
                <h3 className="mt-1 font-serif text-2xl text-[color:var(--ink)]">
                  {t.title}
                </h3>
                <p className="mt-2 leading-relaxed text-[color:var(--ink-soft)]">
                  {t.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="container-wide grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Mission</p>
            <h2 className="mt-3 font-serif text-4xl text-[color:var(--ink)] md:text-5xl">
              Leading Richmond Forward
            </h2>
            <p className="mt-5 leading-relaxed text-[color:var(--ink-soft)]">
              Our mission is to build organized civic power rooted in
              community voice, so that decisions in Richmond are made
              <em> with </em>residents, not imposed on them.
            </p>
            <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">
              We advance our mission by endorsing municipal candidates who
              reflect local priorities, organizing town halls and forums,
              supporting parents and families, and mobilizing voters to speak
              through democratic action.
            </p>
          </div>
          <ul className="grid gap-3 md:col-span-7">
            {principles.map((p, i) => (
              <li
                key={p}
                className="flex gap-4 rounded-2xl border border-[color:var(--border)] bg-white p-5"
              >
                <span className="font-serif text-3xl leading-none text-[color:var(--gold)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="leading-relaxed text-[color:var(--ink-soft)]">{p}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-wide flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-[color:var(--primary)] px-8 py-10 text-[color:var(--primary-foreground)] md:px-14">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl">
              Meet the people behind the movement.
            </h3>
            <p className="mt-2 text-sm opacity-80">
              Real Richmond residents — parents, business owners, organizers.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-5 py-3 text-sm font-semibold text-[color:var(--ink)] transition hover:bg-[color:var(--gold-soft)]"
            >
              Meet the team
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={socialLinks.joinList}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              Join our list
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
