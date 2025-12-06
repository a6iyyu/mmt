export type Work = {
  id: number;
  title: string;
  link: string;
  image: string;
  category: string | string[];
  creator: string | string[];
  year: string;
  views: number;
  status: "Akan Datang" | "Progres" | "Selesai";
};

export const works: Work[] = [
  {
    id: 1,
    title: "EcoWarrior: Adventure Game",
    link: "https://example.com/ecowarrior",
    image: "/images/placeholder.png",
    category: "Game Dev",
    creator: "Rafi Abiyyu (Mhs)",
    year: "2024",
    views: 1205,
    status: "Akan Datang",
  },
  {
    id: 2,
    title: "Virtual Tour Kampus Polinema",
    link: "https://example.com/virtualtour",
    image: "/images/placeholder.png",
    category: "AR/VR",
    creator: "Tim Riset Dosen",
    year: "2023",
    views: 850,
    status: "Progres",
  },
  {
    id: 3,
    title: "Redesign Aplikasi Siakad",
    link: "https://example.com/siakad-redesign",
    image: "/images/placeholder.png",
    category: "UI/UX",
    creator: "Siti Aminah (Mhs)",
    year: "2024",
    views: 0,
    status: "Selesai",
  },
  {
    id: 4,
    title: "Animasi Pendek: Semangat Pagi",
    link: "https://example.com/semangat-pagi",
    image: "/images/placeholder.png",
    category: "Animasi",
    creator: "Budi Santoso (Mhs)",
    year: "2023",
    views: 45,
    status: "Progres",
  },
];