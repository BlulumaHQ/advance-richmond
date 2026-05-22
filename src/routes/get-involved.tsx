import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MessageSquare, Megaphone, Mail, HeartHandshake } from "lucide-react";
import { socialLinks, images } from "@/lib/site-data";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Advance Richmond" },
      {
        name: "description",
        content:
          "Join Advance Richmond's contact list, volunteer in your neighbourhood, or share your story. Help lead Richmond forward.",
      },
      { property: "og:title", content: "Get Involved — Advance Richmond" },
      {
        property: "og:description",
        content:
          "Join, volunteer, or share your story with Advance Richmond.",
      },
      { property: "og:url", content: "/get-involved" },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
  component: GetInvolvedPage,
});

const ways = [
  {
    icon: Mail,
    title: "Join our contact list",
    body:
      "The fastest way to stay in the loop. We'll let you know about town halls, public hearings, and volunteer opportunities in your neighbourhood.",
    cta: "Sign up",
    href: socialLinks.joinList,
  },
  {
    icon: HeartHandshake,
    title: "Volunteer",
    body:
      "Help canvas your street, translate materials into Chinese, run a festival booth, or host a small porch gathering with neighbours.",
    cta: "Get matched",
    href: socialLinks.joinList,
  },
  {
    icon: Megaphone,
    title: "Speak at City Hall",
    body:
      "We help residents prepare and deliver public-hearing comments so your perspective lands clearly with Council.",
    cta: "Request support",
    href: socialLinks.joinList,
  },
  {
    icon: MessageSquare,
    title: "Share your story",
    body:
      "Personal stories from Richmond residents are what move policy. Tell us what you're seeing in your neighbourhood.",
    cta: "Tell us",
    href: socialLinks.joinList,
  },
];

function GetInvolvedPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[color:var(--ink)] pb-20 pt-24 text-[color:var(--primary-foreground)] md:pb-28 md:pt-32">
        <img
          src={images.heroCommunity}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--ink)] via-[color:var(--ink)]/85 to-transparent" />
        <div className="container-wide relative max-w-3xl">
          <p className="eyebrow text-[color:var(--gold-soft)]">Get involved</p>
          <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
            Lead Richmond forward — with us.
          </h1>
          <p className="mt-6 text-lg leading-relaxed opacity-85">
            Every meaningful change in Richmond starts with one neighbour
            deciding to show up. Here are four ways to start.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container-wide grid gap-6 md:grid-cols-2">
          {ways.map((w) => {
            const Icon = w.icon;
            return (
              <a
                key={w.title}
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-5 rounded-3xl border border-[color:var(--border)] bg-[color:var(--cream)] p-8 transition hover:-translate-y-1 hover:border-[color:var(--ink)]/30 hover:shadow-lg md:p-10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--primary)] text-[color:var(--primary-foreground)]">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h2 className="font-serif text-3xl text-[color:var(--ink)]">
                  {w.title}
                </h2>
                <p className="leading-relaxed text-[color:var(--ink-soft)]">
                  {w.body}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--primary)]">
                  {w.cta}
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="bg-[color:var(--cream)] pb-24">
        <div className="container-wide rounded-3xl bg-[color:var(--primary)] px-8 py-12 text-[color:var(--primary-foreground)] md:px-14 md:py-16">
          <div className="grid items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <h3 className="font-serif text-3xl md:text-4xl">
                Already on Facebook or X?
              </h3>
              <p className="mt-3 text-sm opacity-85">
                Follow Advance Richmond for daily updates and event reminders.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[color:var(--gold)] px-5 py-3 text-sm font-semibold text-[color:var(--ink)] transition hover:bg-[color:var(--gold-soft)]"
              >
                Facebook
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                X / Twitter
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
