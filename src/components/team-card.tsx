import type { TeamMember } from "@/lib/site-data";
import { MapPin, Languages } from "lucide-react";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-[color:var(--primary)] via-[color:var(--ink-soft)] to-[color:var(--ink)]">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-7xl text-[color:var(--gold-soft)]/90">
            {member.initials}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-[color:var(--gold)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink)]">
          {member.role}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-serif text-2xl text-[color:var(--ink)]">
          {member.name}
        </h3>
        <div className="flex items-center gap-2 text-xs text-[color:var(--ink-soft)]">
          <MapPin className="h-3.5 w-3.5" strokeWidth={1.8} />
          {member.area}
        </div>
        <p className="text-sm leading-relaxed text-[color:var(--ink-soft)]">
          {member.bio}
        </p>
        {member.languages && (
          <div className="mt-auto flex items-center gap-2 pt-3 text-xs text-[color:var(--ink-soft)]">
            <Languages className="h-3.5 w-3.5" strokeWidth={1.8} />
            {member.languages.join(" · ")}
          </div>
        )}
      </div>
    </article>
  );
}
