export type Project = {
  title: string;
  description: string;
  image: string;
  category: string;
  featured: boolean;
  views: number;
  stars: number;
  tech: string[];
  code: string;
};

// SEKARANG BERISI 12 DATA
export const dummyProjects: Project[] = [
  // 6 data pertama (yang sudah ada)
  {
    title: "Project A",
    description: "Deskripsi singkat project A yang menjelaskan tujuan dan teknologi yang digunakan.",
    image: "/images/placeholder.png",
    category: "Game Development",
    featured: true,
    views: 230,
    stars: 12,
    tech: ["React", "Tailwind", "Three.js"],
    code: "#",
  },
  {
    title: "Project B",
    description: "Deskripsi singkat project B, sebuah aplikasi inovatif dengan desain antarmuka modern.",
    image: "/images/placeholder.png",
    category: "UI/UX",
    featured: false,
    views: 120,
    stars: 8,
    tech: ["Figma", "Framer"],
    code: "#",
  },
  {
    title: "Project C",
    description: "Deskripsi singkat project C, sebuah karya animasi 3D yang memukau secara visual.",
    image: "/images/placeholder.png",
    category: "Animasi",
    featured: true,
    views: 310,
    stars: 15,
    tech: ["Blender", "Unity"],
    code: "#",
  },
  {
    title: "Project D",
    description: "Eksplorasi virtual reality untuk simulasi pelatihan medis.",
    image: "/images/placeholder.png",
    category: "AR/VR",
    featured: false,
    views: 180,
    stars: 11,
    tech: ["Unity", "C#"],
    code: "#",
  },
  {
    title: "Project E",
    description: "Platform e-learning interaktif berbasis web dengan gamifikasi.",
    image: "/images/placeholder.png",
    category: "UI/UX",
    featured: true,
    views: 450,
    stars: 25,
    tech: ["Next.js", "TypeScript", "Tailwind"],
    code: "#",
  },
  {
    title: "Project F",
    description: "Game 2D platformer dengan pixel art yang unik dan menantang.",
    image: "/images/placeholder.png",
    category: "Game Development",
    featured: false,
    views: 95,
    stars: 7,
    tech: ["Godot", "GDScript"],
    code: "#",
  },

  // --- 6 DATA BARU ---
  {
    title: "Project G",
    description: "Aplikasi mobile AR untuk museum dan pameran seni.",
    image: "/images/placeholder.png",
    category: "AR/VR",
    featured: true,
    views: 280,
    stars: 19,
    tech: ["React Native", "ARKit"],
    code: "#",
  },
  {
    title: "Project H",
    description: "Desain sistem dashboard analitik untuk e-commerce.",
    image: "/images/placeholder.png",
    category: "UI/UX",
    featured: false,
    views: 150,
    stars: 10,
    tech: ["Figma", "Tableau"],
    code: "#",
  },
  {
    title: "Project I",
    description: "Film pendek animasi 3D dengan tema fiksi ilmiah.",
    image: "/images/placeholder.png",
    category: "Animasi",
    featured: false,
    views: 400,
    stars: 22,
    tech: ["Maya", "After Effects"],
    code: "#",
  },
  {
    title: "Project J",
    description: "Game puzzle fisika 2D untuk platform mobile.",
    image: "/images/placeholder.png",
    category: "Game Development",
    featured: true,
    views: 330,
    stars: 14,
    tech: ["Unity", "C#"],
    code: "#",
  },
  {
    title: "Project K",
    description: "Website portofolio interaktif menggunakan WebGL.",
    image: "/images/placeholder.png",
    category: "UI/UX",
    featured: false,
    views: 110,
    stars: 9,
    tech: ["Three.js", "Next.js"],
    code: "#",
  },
  {
    title: "Project L",
    description: "Simulasi pelatihan VR untuk keselamatan kerja.",
    image: "/images/placeholder.png",
    category: "AR/VR",
    featured: true,
    views: 500,
    stars: 30,
    tech: ["Unreal Engine", "Oculus SDK"],
    code: "#",
  },
];