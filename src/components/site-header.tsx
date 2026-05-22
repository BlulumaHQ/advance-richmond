import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import heron from "@/assets/arca-bird.png";
import { navLinks, socialLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const pathname = location.pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--cream)]/85 backdrop-blur">
      <div className="hidden bg-[color:var(--primary)] text-[color:var(--primary-foreground)] md:block">
        <div className="container-wide flex h-9 items-center justify-between text-xs">
          <p className="tracking-wide">
            Leading Richmond Forward — join us in building a safer, stronger, more united city.
          </p>
          <div className="flex items-center gap-5">
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 transition hover:opacity-100"
            >
              Facebook
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 transition hover:opacity-100"
            >
              X / Twitter
            </a>
            <a
              href="mailto:fund@advancerichmond.ca"
              className="opacity-80 transition hover:opacity-100"
            >
              fund@advancerichmond.ca
            </a>
          </div>
        </div>
      </div>

      <div className="container-wide flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={heron}
            alt="ARCA heron mark"
            width={44}
            height={44}
            className="h-10 w-10 object-contain md:h-11 md:w-11"
          />
          <div className="leading-tight">
            <div className="font-serif text-xl text-[color:var(--ink)] md:text-2xl">
              Advance Richmond
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-soft)] md:text-[11px]">
              Community Association
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.to === "/"
                ? pathname === "/"
                : pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors",
                  active
                    ? "text-[color:var(--primary)]"
                    : "text-[color:var(--ink-soft)] hover:text-[color:var(--primary)]",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={socialLinks.joinList}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--primary)] px-5 py-2.5 text-sm font-semibold text-[color:var(--primary-foreground)] transition hover:bg-[color:var(--ink)]"
          >
            Join the Movement
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[color:var(--border)] text-[color:var(--ink)] lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[color:var(--border)] bg-[color:var(--cream)] lg:hidden">
          <div className="container-wide flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-[color:var(--ink)] hover:bg-[color:var(--muted)]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={socialLinks.joinList}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[color:var(--primary)] px-5 py-3 text-sm font-semibold text-[color:var(--primary-foreground)]"
            >
              Join the Movement
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
