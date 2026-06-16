import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/lib/site-data";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Advance Richmond" },
      { name: "description", content: "Volunteer, donate, become a member, or join our contact list — help lead Richmond forward." },
      { property: "og:title", content: "Get Involved — Advance Richmond" },
      { property: "og:description", content: "Volunteer, donate, or become a member of Advance Richmond." },
    ],
    links: [{ rel: "canonical", href: "https://advance-richmond.lovable.app/get-involved" }],
  }),
  component: GetInvolvedPage,
});

type Action = { title: string; desc: string; href: string; label: string };

const actions: Action[] = [
  { title: "Join our Contact List", desc: "Get bilingual updates on town halls, public hearings, and volunteer opportunities in your neighbourhood.", href: socialLinks.joinList, label: "Sign up" },
  { title: "Become a Member", desc: "Formally join the Advance Richmond Community Association and help shape our direction.", href: socialLinks.membership, label: "Become a member" },
  { title: "RSVP — Advance Richmond Social", desc: "Join us for a relaxed evening to meet neighbours and exchange ideas. April 18, 2026 · Legends Pub, Richmond.", href: socialLinks.socialRsvp, label: "RSVP now" },
  { title: "Donate to the Council Fund", desc: "Support our City Council slate. Email us for donation instructions and compliance details.", href: `mailto:${socialLinks.donateCouncilEmail}`, label: `Email ${socialLinks.donateCouncilEmail}` },
  { title: "Donate to the Trustee Fund", desc: "Support our School Trustee slate. Email us for donation instructions.", href: `mailto:${socialLinks.donateTrusteeEmail}`, label: `Email ${socialLinks.donateTrusteeEmail}` },
  { title: "Community Surveys", desc: "Share your experience on substance-use policy and youth wellbeing in Richmond.", href: socialLinks.youthSurvey, label: "Take the survey" },
];

function GetInvolvedPage() {
  return (
    <>
      <section className="bg-[color:var(--cream)] py-16 md:py-24">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Get involved</p>
          <h1 className="mt-3 font-serif text-4xl text-[color:var(--ink)] md:text-6xl">
            Richmond's future is written by the people who show up.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[color:var(--ink-soft)] md:text-lg">
            Whether you have five minutes or five hours a week, there's a
            meaningful way to help. Pick one of the actions below to get started.
          </p>
        </div>
      </section>
      <section className="page-bg py-16 md:py-24">
        <div className="container-wide grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {actions.map((a) => {
            const isMail = a.href.startsWith("mailto:");
            return (
              <article key={a.title} className="flex flex-col gap-3 rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-sm transition hover:shadow-md">
                <h2 className="font-serif text-2xl text-[color:var(--ink)]">{a.title}</h2>
                <p className="text-sm leading-relaxed text-[color:var(--ink-soft)]">{a.desc}</p>
                <a
                  href={a.href}
                  target={isMail ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-[color:var(--primary)]"
                >
                  {a.label} <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
        <div className="container-wide mt-16 rounded-3xl bg-[color:var(--ink)] p-10 text-white md:p-14">
          <p className="eyebrow text-[color:var(--gold-soft)]">Contact us</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Have a question, story, or partnership idea?</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed opacity-85">
            Email <a className="underline underline-offset-4" href={`mailto:${socialLinks.contactEmail}`}>{socialLinks.contactEmail}</a> or use our community portal.
          </p>
          <a
            href={socialLinks.contactPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-semibold text-[color:var(--ink)]"
          >
            Open community portal <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}