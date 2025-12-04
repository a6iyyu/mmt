import type { LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

export type categories = {
  title: string;
  slug: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>> | LucideIcon;
  stats: { works: number; mentors: number };
  theme: string;
  bgGradient: string;
  iconColor: string;
  iconBg: string;
};