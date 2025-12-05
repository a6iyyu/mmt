type Training = {
  id: number;
  title: string;
  image: string;
  category: string;
  date: string;
  mentor: string;
  quota: number;
  registered: number;
  status: string;
};

export const trainings: Training[] = [
  {
    id: 1,
    title: "Workshop Unity Basic",
    image: "/images/placeholder.png",
    category: "Game Dev",
    date: "12 Des 2025",
    mentor: "Budi Santoso",
    quota: 20,
    registered: 15,
    status: "Dibuka",
  },
  {
    id: 2,
    title: "UI/UX Masterclass",
    image: "/images/placeholder.png",
    category: "UI/UX",
    date: "20 Jan 2026",
    mentor: "Siti Aminah",
    quota: 30,
    registered: 30,
    status: "Penuh",
  },
  {
    id: 3,
    title: "Blender 3D Modeling",
    image: "/images/placeholder.png",
    category: "3D Art",
    date: "25 Feb 2026",
    mentor: "Joko Anwar",
    quota: 25,
    registered: 5,
    status: "Akan Datang",
  },
];