import { FileText, GraduationCap, Users } from "lucide-react";
import { Statistics } from "@/app/admin/types/statistics";

const styles: Record<string, { bg: string; text: string }> = {
  blue: { bg: "bg-blue-100", text: "text-blue-600" },
  purple: { bg: "bg-purple-100", text: "text-purple-600" },
  orange: { bg: "bg-orange-100", text: "text-orange-600" },
  green: { bg: "bg-green-100", text: "text-green-600" },
  default: { bg: "bg-gray-100", text: "text-gray-600" },
};

const statistics: Statistics[] = [
  {
    icon: FileText,
    title: "Karya Publikasi",
    value: "120+",
    color: "blue",
  },
  {
    icon: GraduationCap,
    title: "Dosen Pembimbing",
    value: "12",
    color: "purple",
  },
  {
    icon: Users,
    title: "Mahasiswa Aktif",
    value: "200+",
    color: "orange",
  },
];

export { statistics, styles };