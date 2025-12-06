import { Gamepad2, GraduationCap, type LucideIcon, PenTool } from "lucide-react";
import { ComponentType, SVGProps } from "react";

type Statistics = {
  icon: ComponentType<SVGProps<SVGSVGElement>> | LucideIcon;
  title: string;
  value: string;
  color: "blue" | "purple" | "orange";
};

export const statistics: Statistics[] = [
  {
    icon: GraduationCap,
    title: "Total Dosen",
    value: "12",
    color: "blue",
  },
  {
    icon: Gamepad2,
    title: "Ahli Game Dev",
    value: "4",
    color: "purple",
  },
  {
    icon: PenTool,
    title: "Ahli UI/UX",
    value: "3",
    color: "orange",
  },
];