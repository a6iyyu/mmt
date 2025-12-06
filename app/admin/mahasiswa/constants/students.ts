import { Clapperboard, Gamepad2, type LucideIcon, Palette, Users } from "lucide-react";
import { ComponentType, SVGProps } from "react";

type Student = {
  icon: ComponentType<SVGProps<SVGSVGElement>> | LucideIcon;
  title: string;
  value: string;
  color: string;
};

export const students: Student[] = [
  {
    icon: Users,
    title: "Total",
    value: "215",
    color: "blue",
  },
  {
    icon: Gamepad2,
    title: "Game Dev",
    value: "85",
    color: "purple",
  },
  {
    icon: Palette,
    title: "UI/UX",
    value: "70",
    color: "orange",
  },
  {
    icon: Clapperboard,
    title: "Multimedia",
    value: "60",
    color: "red",
  },
];