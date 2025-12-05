import { Award, type LucideIcon, MonitorPlay, Users } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type Statistics = {
  icon: ComponentType<SVGProps<SVGSVGElement>> | LucideIcon;
  title: string;
  value: string;
  color: string;
}

export const statistics: Statistics[] = [
  {
    icon: MonitorPlay,
    title: "Total Pelatihan",
    value: "12",
    color: "blue",
  },
  {
    icon: Users,
    title: "Sedang Dibuka",
    value: "5",
    color: "green",
  },
  {
    icon: Award,
    title: "Telah Selesai",
    value: "7",
    color: "orange",
  },
];