import { Link } from "@tanstack/react-router";
import arcaLogo from "@/assets/arca-logo-full.png";
import { navLinks, socialLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[#128DDB] text-white">
      <div className="container-wide grid gap-12 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="inline-flex items-center rounded-lg bg-[#F5EFE0] px-4 py-3">
            <img
              src={arcaLogo}
              alt="ARCA — Advance Richmond Community Association"
              className="h-16 w-auto object-contain md:h-20"
            />
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed opacity-80">
            A grassroots civic movement of Richmond, BC residents organizing for
            safer neighbourhoods, transparent local government, and a community
            voice that actually leads our city forward.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={socialLinks.joinList}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[color:var(--gold)] px-5 py-2.5 text-sm font-semibold text-[color:var(--ink)] transition hover:bg-[color:var(--gold-soft)]"
            >
              Join our Contact List
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium transition hover:bg-white/10"
            >
              Facebook
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium transition hover:bg-white/10"
            >
              X
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] opacity-70">
            Explore
          </div>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="opacity-85 transition hover:opacity-100">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] opacity-70">
            Contact
          </div>
          <p className="mt-5 text-sm leading-relaxed opacity-85">
            Advance Richmond Community Association<br />
            Richmond, British Columbia, Canada<br />
            Registered Elector Organization, Elections BC
          </p>
          <p className="mt-5 text-sm leading-relaxed opacity-75">
            For media or partnership inquiries, please reach out via our
            <a
              href={socialLinks.joinList}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 underline underline-offset-4"
            >
              contact form
            </a>
            .
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col gap-3 py-5 text-xs opacity-75 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 Advance Richmond. All rights reserved. | Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-4 hover:opacity-100"
            >
              Bluluma
            </a>
          </p>
          <p className="opacity-80">
            Authorized by the Advance Richmond Community Association,
            registered with Elections BC.
          </p>
        </div>
      </div>
    </footer>
  );
}
