import { Course } from "@/app/pelatihan/types/courses";

export const courses: Course[] = [
  {
    title: "Mastering Unity 3D: From Zero to Hero",
    slug: "mastering-unity-3d",
    category: "Game Dev",
    level: "Pemula",
    image: "/images/placeholder.png",
    mentor: {
      name: "Budi Santoso",
      avatar: "/images/placeholder.png",
    },
    price: "Gratis",
    duration: "4 Minggu",
    rating: 4.8,
  },
  {
    title: "UI/UX Design Masterclass for Mobile Apps",
    slug: "ui-ux-design",
    category: "UI/UX",
    level: "Menengah",
    image: "/images/placeholder.png",
    mentor: {
      name: "Siti Aminah",
      avatar: "/images/placeholder.png",
    },
    price: "Rp 150.000",
    duration: "2 Minggu",
    rating: 4.9,
  },
  {
    title: "Blender 3D: Creating Realistic Environments",
    slug: "blender-3d-environments",
    category: "3D Art",
    level: "Lanjutan",
    image: "/images/placeholder.png",
    mentor: {
      name: "Joko Anwar",
      avatar: "/images/placeholder.png",
    },
    price: "Gratis",
    duration: "6 Minggu",
    rating: 4.7,
  },
];