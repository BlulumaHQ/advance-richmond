import { createFileRoute } from "@tanstack/react-router";
import { team } from "@/lib/site-data";
import { TeamCard } from "@/components/team-card";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Advance Richmond" },
      {
        name: "description",
        content:
          "Meet the Richmond residents — parents, small business owners, and community organizers — leading the Advance Richmond Community Association.",
      },
      { property: "og:title", content: "Our Team — Advance Richmond" },
      {
        property: "og:description",
        content:
          "Real neighbours leading the Advance Richmond Community Association.",
      },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <section className="bg-[color:var(--cream)] pb-12 pt-20 md:pb-16 md:pt-28">
        <div className="container-wide max-w-4xl">
          <p className="eyebrow">Our team</p>
          <h1 className="mt-4 font-serif text-5xl text-[color:var(--ink)] md:text-7xl">
            The neighbours leading this movement.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--ink-soft)]">
            ARCA is run by ordinary Richmond residents who decided that
            showing up is no longer optional. Together they bring decades of
            community involvement, professional experience, and language skills
            that reflect the real diversity of Richmond.
          </p>
        </div>
      </section>

      <section className="bg-white pb-24 pt-12">
        <div className="container-wide grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>
        <p className="container-wide mt-10 text-xs text-[color:var(--ink-soft)]">
          Roles shown reflect ARCA's current organizational structure. Individual
          public biographies are added as members opt in to public-facing profiles.
        </p>
      </section>
    </>
  );
}
