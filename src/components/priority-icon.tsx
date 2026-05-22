import {
  Shield,
  Scale,
  Home,
  Users,
  Heart,
  Briefcase,
  Vote,
} from "lucide-react";
import type { Priority } from "@/lib/site-data";

const map = {
  shield: Shield,
  scale: Scale,
  home: Home,
  users: Users,
  heart: Heart,
  briefcase: Briefcase,
  vote: Vote,
} as const;

export function PriorityIcon({
  name,
  className,
}: {
  name: Priority["icon"];
  className?: string;
}) {
  const Icon = map[name];
  return <Icon className={className} strokeWidth={1.5} />;
}
