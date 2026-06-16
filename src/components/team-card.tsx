import type { TeamMember } from "@/lib/site-data";
import { Languages } from "lucide-react";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[35/44] w-full overflow-hidden border-b border-[color:var(--primary)] bg-white">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-7xl text-white/90">
              {member.initials}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--primary)]">
          {member.role}
        </p>
        <h3 className="font-serif text-2xl text-[color:var(--ink)]">
          {member.name}
        </h3>
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
