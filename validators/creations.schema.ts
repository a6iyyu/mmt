import { z } from "zod";
import { PublicationStatus } from "@/lib/generated/prisma/enums";

export const CreationsSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Judul karya wajib diisi!" })
    .max(150, { message: "Judul karya maksimal 150 karakter!" })
    .trim(),
  description: z
    .string()
    .min(1, { message: "Deskripsi wajib diisi!" })
    .max(1000, { message: "Deskripsi maksimal 1000 karakter!" })
    .trim(),
  image: z
    .instanceof(File, { message: "Gambar harus berupa berkas." })
    .refine((file) => file.size <= 5 * 1024 * 1024, { message: "Ukuran gambar tidak boleh lebih dari 5MB." })
    .refine((file) => ["image/jpeg", "image/jpg", "image/png", "image/gif"].includes(file.type), { message: "Format gambar harus JPEG, JPG, PNG, atau GIF." }),
  demo_link: z
    .url({ message: "Tautan demo harus berupa URL yang valid!" })
    .optional()
    .or(z.literal("")),
  code_link: z
    .url({ message: "Tautan repositori harus berupa URL yang valid!" })
    .optional()
    .or(z.literal("")),
  featured: z.boolean().default(false),
  publication_status: z
    .enum(Object.values(PublicationStatus as Record<string, string>), { error: "Status publikasi tidak valid!" })
    .default(PublicationStatus.SCHEDULED),
  publish_date: z.coerce.date().optional(),
  category: z
    .string()
    .min(1, { message: "Kategori wajib dipilih!" }),
  studentIds: z.array(z.number()).optional().default([]),
  technologies: z.array(z.string()).optional().default([]),
});