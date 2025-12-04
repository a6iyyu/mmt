import { BookOpen, Home, Palette, Plus, Search, Users } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import type { ReactElement } from "react";
import { ADMIN_CATEGORIES, ADMIN_COURSES, ADMIN_COURSES_CREATE, ADMIN_CREATIONS, ADMIN_DASHBOARD, ADMIN_MEMBERS, ADMIN_MEMBERS_CREATE, CATEGORY, COURSES, CREATIONS, HOME, MEMBER } from "@/constants/route";
import { Sidebar as ISidebar } from "@/types/components";

type Menu = {
  href: string;
  icon: ReactElement;
  name: string;
};

const Menu: Menu[] = [
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

const Sidebar: ISidebar[] = [
  {
    href: ADMIN_DASHBOARD,
    icon: <Home className="h-5 w-5" />,
    label: "Dasbor",
  },
  {
    href: ADMIN_CATEGORIES,
    icon: <Search className="h-5 w-5" />,
    label: "Kategori",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    label: "Pelatihan",
    subMenu: [
      {
        href: ADMIN_COURSES,
        icon: <BookOpen className="h-4 w-4" />,
        label: "Daftar",
      },
      {
        href: ADMIN_COURSES_CREATE,
        icon: <Plus className="h-4 w-4" />,
        label: "Tambah",
      },
    ]
  },
  {
    href: ADMIN_CREATIONS,
    icon: <Palette className="h-5 w-5" />,
    label: "Karya",
  },
  {
    icon: <Users className="h-5 w-5" />,
    label: "Anggota",
    subMenu: [
      {
        href: ADMIN_MEMBERS,
        icon: <Users className="h-4 w-4" />,
        label: "Daftar",
      },
      {
        href: ADMIN_MEMBERS_CREATE,
        icon: <Plus className="h-4 w-4" />,
        label: "Tambah",
      }
    ],
  }
];

const SocialMediaLinks: Menu[] = [
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

export { Menu, Sidebar, SocialMediaLinks };