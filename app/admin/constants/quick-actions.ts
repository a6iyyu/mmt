import { PlusCircle, Upload, User } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { PiGraduationCap } from "react-icons/pi";
import { ADMIN_COURSES_CREATE, ADMIN_CREATIONS_CREATE, ADMIN_LECTURERS_CREATE, ADMIN_STUDENT_CREATE } from "@/constants/route";

type QuickActions = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  description: string;
  href: string;
  color: string;
  bg: string;
  hover: string;
};

export const quickActions: QuickActions[] = [
  {
    icon: PlusCircle,
    label: "Tambah Pelatihan",
    description: "Buat jadwal pelatihan baru.",
    href: ADMIN_COURSES_CREATE,
    color: "text-blue-600",
    bg: "bg-blue-50",
    hover: "hover:border-blue-200 hover:bg-blue-50",
  },
  {
    icon: Upload,
    label: "Unggah Karya",
    description: "Publikasikan karya mahasiswa.",
    href: ADMIN_CREATIONS_CREATE,
    color: "text-purple-600",
    bg: "bg-purple-50",
    hover: "hover:border-purple-200 hover:bg-purple-50",
  },
  {
    icon: User,
    label: "Input Dosen",
    description: "Tambahkan dosen.",
    href: ADMIN_LECTURERS_CREATE,
    color: "text-orange-600",
    bg: "bg-orange-50",
    hover: "hover:border-orange-200 hover:bg-orange-50",
  },
  {
    icon: PiGraduationCap,
    label: "Input Mahasiswa",
    description: "Tambahkan mahasiswa.",
    href: ADMIN_STUDENT_CREATE,
    color: "text-green-600",
    bg: "bg-green-50",
    hover: "hover:border-green-200 hover:bg-green-50",
  },
];