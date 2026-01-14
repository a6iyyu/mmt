// students.ts
import { Prodi } from "@/lib/generated/prisma/enums";

export type Student = {
  id_mahasiswa: number;
  nama_lengkap: string;
  nim: string;
  foto_profil: string;
  program_studi: Prodi;
  angkatan: number;
  linkedin?: string | null;
  surel: string;
  status?: string; 
};

export const dummyStudents: Student[] = [
  {
    id_mahasiswa: 1,
    nama_lengkap: "Rafi Abiyyu Airlangga",
    nim: "2141720001",
    foto_profil: "/images/placeholder.png",
    program_studi: "TI",
    angkatan: 2021,
    linkedin: "https://www.linkedin.com/in/rafi-abiyyu-airlangga",
    surel: "rafi.abiyyu@student.polinema.ac.id",
    status: "Aktif",
  },
  {
    id_mahasiswa: 2,
    nama_lengkap: "Siti Aminah",
    nim: "2141720002",
    foto_profil: "/images/placeholder.png",
    program_studi: "SIB",
    angkatan: 2021,
    linkedin: "https://www.linkedin.com/in/siti-aminah",
    surel: "siti.aminah@student.polinema.ac.id",
    status: "Cuti",
  },
];