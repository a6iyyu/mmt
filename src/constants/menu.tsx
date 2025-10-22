import { BookOpen, Home, Palette, Search, Users } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import type { ReactElement } from "react";
import { CATEGORY, COURSES, CREATIONS, HOME, MEMBER } from "@/constants/route";

type Menu = {
  href: string;
  icon: ReactElement;
  name: string;
};

export const Menu: Menu[] = [
  {
    href: HOME,
    icon: <Home className="text-accent mt-0.5 h-4 w-4" />,
    name: "Beranda",
  },
  {
    href: CREATIONS,
    icon: <Palette className="text-accent mt-0.5 h-4 w-4" />,
    name: "Karya",
  },
  {
    href: COURSES,
    icon: <BookOpen className="text-accent mt-0.5 h-4 w-4" />,
    name: "Pelatihan",
  },
  {
    href: MEMBER,
    icon: <Users className="text-accent mt-0.5 h-4 w-4" />,
    name: "Anggota",
  },
  {
    href: CATEGORY,
    icon: <Search className="text-accent mt-0.5 h-4 w-4" />,
    name: "Kategori",
  },
];

export const SocialMediaLinks: Menu[] = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@labmultimediammt",
    icon: <FaYoutube size={20} />,
  },
  {
    name: "Instagram",
    href: "#",
    icon: <FaInstagram size={20} />,
  },
  {
    name: "Facebook",
    href: "#",
    icon: <FaFacebook size={20} />,
  },
  {
    name: "Twitter",
    href: "#",
    icon: <FaTwitter size={20} />,
  },
];