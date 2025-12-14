import { Kategori as Category, type pelatihan as Course } from "@/lib/generated/prisma/client";

export const course: Course[] = [
  {
    id_pelatihan: 0,
    nama: "Pelatihan Pengembangan Game Dasar",
    slug: "pelatihan-pengembangan-game-dasar",
    deskripsi: "Pelatihan ini akan mengajarkan dasar-dasar pengembangan game menggunakan Unity.",
    tanggal: new Date("2026-01-01"),
    mentor: "Muhammad Ali Zulfikar",
    kategori: Category.GAME_DEVELOPMENT,
    lokasi: "Lab Multimedia dan Teknologi Perangkat Bergerak",
    gambar: "/images/mascot.png",
    kuota: null,
    buka_pendaftaran: "Dibuka",
    created_at: new Date("2026-01-01"),
    updated_at: new Date("2026-01-01"),
  }
]