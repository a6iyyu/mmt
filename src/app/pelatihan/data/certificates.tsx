import { Truncate } from "@/utils/text";

type ICertificate = {
  title: string;
  image: string;
  description: string;
  link?: string;
  tags: string[];
};

export const certificates: ICertificate[] = [
  {
    title: "Sertifikat Pelatihan Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    description: Truncate("Sertifikat ini diberikan kepada peserta yang telah menyelesaikan pelatihan intensif dalam pengembangan web, mencakup HTML, CSS, JavaScript, dan framework populer.", 25, 75),
    link: "https://example.com/certificates/web-development",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Sertifikat Pelatihan Desain Grafis",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    description: Truncate("Sertifikat ini diberikan kepada peserta yang telah menyelesaikan pelatihan desain grafis, mencakup penggunaan alat desain seperti Adobe Photoshop, Illustrator, dan prinsip-prinsip desain visual.", 25, 75),
    tags: ["Adobe Photoshop", "Illustrator", "Visual Design"],
  },
  {
    title: "Sertifikat Pelatihan Pemasaran Digital",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    description: Truncate("Sertifikat ini diberikan kepada peserta yang telah menyelesaikan pelatihan pemasaran digital, mencakup strategi pemasaran online, SEO, media sosial, dan analitik web.", 25, 75),
    link: "https://example.com/certificates/digital-marketing",
    tags: ["SEO", "Social Media", "Analytics"],
  },
];