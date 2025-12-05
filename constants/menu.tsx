import { BookOpen, Home, Palette, Plus, Search, User, Users } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import type { ReactElement } from "react";
import { ADMIN_COURSES, ADMIN_COURSES_CREATE, ADMIN_CREATIONS, ADMIN_CREATIONS_CREATE, ADMIN_DASHBOARD, ADMIN_LECTURERS, ADMIN_LECTURERS_CREATE, ADMIN_STUDENT, ADMIN_STUDENT_CREATE, CATEGORY, COURSES, CREATIONS, HOME, MEMBER } from "@/constants/route";
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
    icon: <Palette className="h-5 w-5" />,
    label: "Karya",
    subMenu: [
      {
        href: ADMIN_CREATIONS,
        icon: <Palette className="h-4 w-4" />,
        label: "Daftar",
      },
      {
        href: ADMIN_CREATIONS_CREATE,
        icon: <Plus className="h-4 w-4" />,
        label: "Tambah",
      }
    ],
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "Dosen",
    subMenu: [
      {
        href: ADMIN_LECTURERS,
        icon: <User className="h-4 w-4" />,
        label: "Daftar",
      },
      {
        href: ADMIN_LECTURERS_CREATE,
        icon: <Plus className="h-4 w-4" />,
        label: "Tambah",
      }
    ],
  },
  {
    icon: <PiStudentFill className="h-5 w-5" />,
    label: "Mahasiswa",
    subMenu: [
      {
        href: ADMIN_STUDENT,
        icon: <PiStudentFill className="h-4 w-4" />,
        label: "Daftar",
      },
      {
        href: ADMIN_STUDENT_CREATE,
        icon: <Plus className="h-4 w-4" />,
        label: "Tambah",
      }
    ],
  },
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
];

export { Menu, Sidebar, SocialMediaLinks };