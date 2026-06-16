import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { images, priorities, socialLinks } from "@/lib/site-data";
import { PriorityIcon } from "@/components/priority-icon";

export const Route = createFileRoute("/about-arca")({
  head: () => ({
    meta: [
      { title: "About ARCA — Advance Richmond" },
      { name: "description", content: "Advance Richmond Community Association (ARCA) is a grassroots civic movement of Richmond residents organizing for safer neighbourhoods and transparent local government." },
      { property: "og:title", content: "About ARCA — Advance Richmond" },
      { property: "og:description", content: "Who we are and what we stand for." },
    ],
    links: [{ rel: "canonical", href: "https://advance-richmond.lovable.app/about-arca" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-[color:var(--cream)] py-16 md:py-24">
        <div className="container-wide grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">About ARCA</p>
            <h1 className="mt-4 font-serif text-4xl text-[color:var(--ink)] md:text-6xl">
              Leading Richmond forward — together.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--ink-soft)] md:text-lg">
              The Advance Richmond Community Association (ARCA) is a grassroots
              civic movement of Richmond, BC residents organizing for safer
              neighbourhoods, transparent local government, and a stronger
              community voice. We are not a political party — we are
              neighbours who decided that showing up is no longer optional.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={socialLinks.membership}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-[color:var(--primary-foreground)] hover:bg-[color:var(--ink)]"
              >
                Become a Member
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/get-involved"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--ink)]/15 bg-white px-6 py-3 text-sm font-semibold text-[color:var(--ink)]"
              >
                Get involved
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <img
              src={images.aboutHero}
              alt="Richmond residents gathered at a community event"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl ring-1 ring-black/5"
            />
          </div>
        </div>
      </section>

      <section className="page-bg py-20 md:py-24">
        <div className="container-wide grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 font-serif text-3xl text-[color:var(--ink)] md:text-4xl">
              Born from neighbours showing up.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-[color:var(--ink-soft)] md:col-span-7">
            <p>
              ARCA was founded after the 2024 Family Day rally — one of the
              largest self-organized resident gatherings in Richmond's recent
              history. Thousands of families gathered at City Hall and Minoru
              Park to call for safer streets, accountable government, and
              genuine consultation on issues that affect our community.
            </p>
            <p>
              What started as a one-day rally has grown into a year-round civic
              association — door-knocking, hosting bilingual town halls,
              raising concerns at council meetings, and preparing community
              leaders to run for City Council and the Board of Education.
            </p>
            <p>
              Our work is bilingual (English / 中文), volunteer-led, and
              accountable to the residents who fund it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--cream)] py-20 md:py-24">
        <div className="container-wide">
          <p className="eyebrow">Our priorities</p>
          <h2 className="mt-3 font-serif text-3xl text-[color:var(--ink)] md:text-4xl">
            What we stand for, in plain language.
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
            {priorities.map((p) => (
              <article key={p.title} className="flex flex-col gap-4 bg-white p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--primary)]/10 text-[color:var(--primary)]">
                  <PriorityIcon name={p.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl text-[color:var(--ink)]">{p.title}</h3>
                <p className="text-sm leading-relaxed text-[color:var(--ink-soft)]">{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}