import type { LucideIcon } from "lucide-react";

export function Orbit({ icon: Icon, colorClass }: { icon: LucideIcon; colorClass: string }) {
  return (
    <span className={`relative flex h-12 w-12 items-center justify-center rounded-full ${colorClass} shadow-lg`}>
      <Icon className="h-6 w-6 text-white" />
    </span>
  );
}