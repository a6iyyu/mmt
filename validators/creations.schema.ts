import { z } from "zod";
import { Kategori as Categories, Publikasi as Publication } from "@/lib/generated/prisma/enums";

export const CreationsSchema = z.object({
  judul: z
    .string()
    .min(1, { message: "Judul karya wajib diisi!" })
    .max(150, { message: "Judul karya maksimal 150 karakter!" })
    .trim(),
  deskripsi: z
    .string()
    .min(1, { message: "Deskripsi wajib diisi!" })
    .max(1000, { message: "Deskripsi maksimal 1000 karakter!" })
    .trim(),
  gambar: z
    .instanceof(File, { message: "Gambar harus berupa berkas." })
    .refine((file) => file.size <= 5 * 1024 * 1024, { message: "Ukuran gambar tidak boleh lebih dari 5MB." })
    .refine((file) => ["image/jpeg", "image/jpg", "image/png", "image/gif"].includes(file.type), { message: "Format gambar harus JPEG, JPG, PNG, atau GIF." }),
  tautan_demo: z
    .url({ message: "Tautan demo harus berupa URL yang valid!" })
    .optional()
    .or(z.literal("")),
  tautan_repo: z
    .url({ message: "Tautan repository harus berupa URL yang valid!" })
    .optional()
    .or(z.literal("")),
  unggulan: z.boolean(),
  status: z
    .enum(Object.values(Publication as unknown as [string, ...string[]]), { error: "Kategori karya tidak valid!" }),
  tanggal_publikasi: z
    .date({ error: "Tanggal publikasi harus berupa tanggal yang valid!" })
    .min(new Date("2015-01-01"), { message: "Tanggal publikasi tidak boleh sebelum 1 Januari 2015!" }),
  kategori: z
    .enum(Object.values(Categories as unknown as [string, ...string[]]), { error: "Kategori karya tidak valid!" }),
});