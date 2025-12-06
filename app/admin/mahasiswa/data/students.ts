export type Student = {
  id: number;
  name: string;
  nim: string;
  image: string;
  major: "D4 TI" | "D4 SIB" | "D4 PPLS";
  linkedin?: string;
  batch: number;
  focus: string[];
  status: "Aktif" | "Lulus" | "Cuti";
  email: string;
};

export const students: Student[] = [
  {
    id: 1,
    name: "Rafi Abiyyu Airlangga",
    nim: "2141720001",
    image: "/images/placeholder.png",
    major: "D4 TI",
    linkedin: "https://www.linkedin.com/in/rafi-abiyyu-airlangga",
    batch: 2021,
    focus: ["Game Development"],
    status: "Aktif",
    email: "rafi.abiyyu@student.polinema.ac.id",
  },
  {
    id: 2,
    name: "Siti Aminah",
    nim: "2141720002",
    image: "/images/placeholder.png",
    major: "D4 SIB",
    linkedin: "https://www.linkedin.com/in/siti-aminah",
    batch: 2021,
    focus: ["UI/UX Design"],
    status: "Aktif",
    email: "siti.aminah@student.polinema.ac.id",
  },
  {
    id: 3,
    name: "Budi Santoso",
    nim: "2041720003",
    image: "/images/placeholder.png",
    major: "D4 TI",
    linkedin: "https://www.linkedin.com/in/budi-santoso",
    batch: 2020,
    focus: ["3D Animation"],
    status: "Lulus",
    email: "budi.santoso@alumni.polinema.ac.id",
  },
  {
    id: 4,
    name: "Muhammad Erril",
    nim: "2241720004",
    image: "/images/placeholder.png",
    major: "D4 PPLS",
    linkedin: "https://www.linkedin.com/in/muhammad-erril",
    batch: 2022,
    focus: ["AR/VR"],
    status: "Aktif",
    email: "erril.putra@student.polinema.ac.id",
  },
];