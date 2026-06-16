import { createFileRoute, Link } from "@tanstack/react-router";
import { cityCouncilTeam } from "@/lib/site-data";
import { TeamCard } from "@/components/team-card";

export const Route = createFileRoute("/city-council-team")({
  head: () => ({
    meta: [
      { title: "City Council Team — Advance Richmond" },
      { name: "description", content: "Meet ARCA's City Council candidates — neighbours running to lead Richmond forward." },
      { property: "og:title", content: "City Council Team — Advance Richmond" },
      { property: "og:description", content: "Meet our City Council candidates." },
    ],
    links: [{ rel: "canonical", href: "https://advance-richmond.lovable.app/city-council-team" }],
  }),
  component: CityCouncilPage,
});

function CityCouncilPage() {
  return (
    <section className="page-bg py-16 md:py-24">
      <div className="container-wide">
        <p className="eyebrow">Meet the team</p>
        <h1 className="mt-3 font-serif text-4xl text-[color:var(--ink)] md:text-5xl">
          City Council Team
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--ink-soft)]">
          The Advance Richmond candidates running for City Council — neighbours
          with deep roots in Richmond and decades of experience in business,
          public safety, finance, and community service.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cityCouncilTeam.map((m) => (
            <TeamCard key={m.slug} member={m} />
          ))}
        </div>
        <p className="mt-12 text-sm text-[color:var(--ink-soft)]">
          Looking for the trustees?{" "}
          <Link to="/education-team" className="link-underline">
            Meet our Education Team
          </Link>
        </p>
      </div>
    </section>
  );
}