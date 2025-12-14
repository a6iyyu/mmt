import { CheckCheck, Hourglass, type LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { FaFlask } from "react-icons/fa6";

type Research = {
  icon: ComponentType<SVGProps<SVGSVGElement>> | LucideIcon;
  title: string;
  value: string;
  color: string;
}

export const research: Research[] = [
  {
    icon: FaFlask,
    title: "Total Riset",
    value: "128",
    color: "blue",
  },
  {
    icon: CheckCheck,
    title: "Riset Selesai",
    value: "96",
    color: "green",
  },
  {
    icon: Hourglass,
    title: "Riset Berjalan",
    value: "32",
    color: "orange",
  }
]