import { Student } from "@/app/anggota/types/student";

export const dummyStudents: Student[] = [
  {
    id: 1,
    name: "Rafi Abiyyu Airlangga",
    major: "Informatika",
    focus: "Game Design & AI",
    field: "Game Development",
    image: "/images/placeholder.png",
    linkedin: new URL("https://www.linkedin.com/in/rafiabiyyuairlangga/"),
    email: "rafi@labmultimedia.id",
    whatsapp: new URL("https://wa.me/6281234567890"),
  },
  {
    id: 2,
    name: "Muhammad Erril Putra Pratidina",
    major: "Desain Komunikasi Visual",
    focus: "UI/UX Research",
    field: "UI/UX",
    image: "/images/placeholder.png",
    linkedin: new URL("https://www.linkedin.com/in/muhammad-erril-putra-pratidina/"),
    email: "aisyah@labmultimedia.id",
    whatsapp: new URL("https://wa.me/6280987654321"),
  },
  {
    id: 3,
    name: "Budi Prasetyo",
    major: "Teknik Komputer",
    focus: "VR Simulation",
    field: "VR/AR",
    image: "/images/placeholder.png",
    linkedin: new URL("https://www.linkedin.com/in/budi-prasetyo/"),
    email: "budi@labmultimedia.id",
    whatsapp: new URL("https://wa.me/6281122334455"),
  },
];