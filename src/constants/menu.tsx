import { BookOpen, Home, Palette, Search, Users } from "lucide-react";
import type { ReactElement } from "react";

export const Menu: { icon: ReactElement; name: string }[] = [
  {
    icon: <Home className="text-accent mt-0.5 h-4 w-4" />,
    name: "Beranda",
  },
  {
    icon: <Palette className="text-accent mt-0.5 h-4 w-4" />,
    name: "Karya",
  },
  {
    icon: <BookOpen className="text-accent mt-0.5 h-4 w-4" />,
    name: "Pelatihan",
  },
  {
    icon: <Users className="text-accent mt-0.5 h-4 w-4" />,
    name: "Anggota",
  },
  {
    icon: <Search className="text-accent mt-0.5 h-4 w-4" />,
    name: "Tentang Kami",
  },
];