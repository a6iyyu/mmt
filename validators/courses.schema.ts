import { z } from "zod";
import { Kategori as Categories, Ketersediaan as Availability } from "@/lib/generated/prisma/enums";

export const CoursesSchema = z.object({
  nama: z
    .string()
    .min(1, { message: "Nama pelatihan wajib diisi!" })
    .max(100, { message: "Nama pelatihan maksimal 100 karakter!" })
    .trim(),
  mentor: z
    .string()
    .min(1, { message: "Nama mentor wajib diisi!" })
    .max(100, { message: "Nama mentor maksimal 100 karakter!" })
    .trim(),
  deskripsi: z
    .string()
    .min(1, { message: "Deskripsi wajib diisi!" })
    .max(1000, { message: "Deskripsi maksimal 1000 karakter!" })
    .trim(),
  kategori: z
    .enum(Object.values(Categories as unknown as [string, ...string[]]), { error: "Kategori pelatihan tidak valid!" }),
  buka_pendaftaran: z
    .enum(Object.values(Availability as unknown as [string, ...string[]]), { error: "Status pendaftaran tidak valid!" }),
  lokasi: z
    .string()
    .min(1, { message: "Lokasi wajib diisi!" })
    .max(100, { message: "Lokasi maksimal 100 karakter!" })
    .trim(),
  tanggal: z.string().min(1, { message: "Tanggal wajib diisi!" }),
  kuota: z
    .coerce
    .number({ error: "Kuota harus berupa angka!" })
    .int()
    .positive({ message: "Kuota harus lebih dari 0!" }),
});