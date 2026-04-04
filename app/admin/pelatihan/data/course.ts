import { Availability, Category, type course as Course } from "@/lib/generated/prisma/client";

export const course: Course[] = [
  {
    id: 0,
    title: "Pelatihan Pengembangan Game Dasar",
    slug: "pelatihan-pengembangan-game-dasar",
    description: "Pelatihan ini akan mengajarkan dasar-dasar pengembangan game menggunakan Unity.",
    date: new Date("2026-01-01"),
    mentor_name: "Muhammad Ali Zulfikar",
    category: Category.GAME_DEVELOPMENT,
    location: "Lab Multimedia dan Teknologi Perangkat Bergerak",
    image: "/images/mascot.png",
    quota: null,
    availability: Availability.OPEN,
    level: "Beginner",
    mentor_avatar: "/images/placeholder.png",
    price: "Rp120.000",
    duration: "1h",
    rating: 5,
    created_at: new Date("2026-01-01"),
    updated_at: new Date("2026-01-01"),
  }
]