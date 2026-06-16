import { createFileRoute, Link } from "@tanstack/react-router";
import { educationTeam } from "@/lib/site-data";
import { TeamCard } from "@/components/team-card";

export const Route = createFileRoute("/education-team")({
  head: () => ({
    meta: [
      { title: "Education Team — Advance Richmond" },
      { name: "description", content: "Meet ARCA's School Trustee candidates — parents and educators advocating for safe, transparent Richmond schools." },
      { property: "og:title", content: "Education Team — Advance Richmond" },
      { property: "og:description", content: "Meet our School Trustee candidates." },
    ],
    links: [{ rel: "canonical", href: "https://advance-richmond.lovable.app/education-team" }],
  }),
  component: EducationPage,
});

function EducationPage() {
  return (
    <section className="page-bg page-bg-left py-16 md:py-24">
      <div className="container-wide">
        <p className="eyebrow">Meet the team</p>
        <h1 className="mt-3 font-serif text-4xl text-[color:var(--ink)] md:text-5xl">
          Education Team
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--ink-soft)]">
          ARCA's School Trustee candidates — educators, parents, and community
          leaders standing up for safe, welcoming, and accountable Richmond
          schools.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {educationTeam.map((m) => (
            <TeamCard key={m.slug} member={m} />
          ))}
        </div>
        <p className="mt-12 text-sm text-[color:var(--ink-soft)]">
          Looking for council candidates?{" "}
          <Link to="/city-council-team" className="link-underline">
            Meet our City Council Team
          </Link>
        </p>
      </div>
    </section>
  );
}