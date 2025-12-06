type Lecturer = {
  id: number;
  name: string;
  nip: number | string;
  image: string;
  expertise: string[];
  email: string;
  phone: string;
};

export const lecturers: Lecturer[] = [
  {
    id: 1,
    name: "Dr. Budi Santoso, M.Kom.",
    nip: "198501012010011001",
    image: "/images/placeholder.png",
    expertise: ["Game Development", "Artificial Intelligence"],
    email: "budi.santoso@polinema.ac.id",
    phone: "+62 812-3456-7890",
  },
  {
    id: 2,
    name: "Siti Aminah, S.Kom., M.T.",
    nip: "199002022015022002",
    image: "/images/placeholder.png",
    expertise: ["UI/UX Design", "Human Computer Interaction"],
    email: "siti.aminah@polinema.ac.id",
    phone: "+62 812-9876-5432",
  },
  {
    id: 3,
    name: "Joko Anwar, S.Sn., M.Sn.",
    nip: "198803032012031003",
    image: "/images/placeholder.png",
    expertise: ["3D Animation", "Visual Effects", "Motion Graphic"],
    email: "joko.anwar@polinema.ac.id",
    phone: "+62 813-4567-8901",
  },
  {
    id: 4,
    name: "Rina Wulandari, M.Cs.",
    nip: "199204042018042004",
    image: "/images/placeholder.png",
    expertise: ["Data Science", "Machine Learning"],
    email: "rina.wulandari@polinema.ac.id",
    phone: "+62 811-2233-4455",
  },
];