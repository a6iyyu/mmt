import { z } from "zod";

export const CourseCreateSchema = z.object({
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
    .max(500, { message: "Deskripsi maksimal 500 karakter!" })
    .trim(),
  lokasi: z
    .string()
    .min(1, { message: "Lokasi wajib diisi!" })
    .max(200, { message: "Lokasi maksimal 200 karakter!" })
    .trim(),
  tanggal: z.string().min(1, { message: "Tanggal wajib diisi!" }),
  kuota: z
    .number({ error: "Kuota harus berupa angka!" })
    .int()
    .positive({ message: "Kuota harus lebih dari 0!" }),
  status: z.enum(["DRAF", "DIJADWALKAN", "DITERBITKAN", "DIARSIPKAN"], {
    error: "Status publikasi tidak valid!",
  }),
});