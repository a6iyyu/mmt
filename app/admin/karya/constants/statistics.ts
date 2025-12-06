import { FileText, Layers, type LucideIcon, Eye } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type Statistics = {
  icon: ComponentType<SVGProps<SVGSVGElement>> | LucideIcon;
  title: string;
  value: string;
  color: string;
};

export const statistics: Statistics[] = [
  {
    icon: FileText,
    title: "Total Karya",
    value: "145",
    color: "blue",
  },
  {
    icon: Layers,
    title: "Kategori Terbanyak",
    value: "Game Dev",
    color: "purple",
  },
  {
    icon: Eye,
    title: "Total Dilihat",
    value: "12.5K",
    color: "green",
  },
];