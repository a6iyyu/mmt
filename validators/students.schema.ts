import { z } from "zod";

export const StudentsSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Nama lengkap harus terdiri dari minimal 3 karakter." })
    .max(100, { message: "Nama lengkap tidak boleh lebih dari 100 karakter." })
    .regex(/^[a-zA-Z\s]+$/, { message: "Nama lengkap hanya boleh mengandung huruf dan spasi." })
    .trim(),
  status: z.enum(["ACTIVE", "ON_LEAVE", "GRADUATED"], { error: "Status tidak valid." }),
  nim: z
    .string()
    .min(10, { message: "NIM harus terdiri dari minimal 10 digit." })
    .max(15, { message: "NIM tidak boleh lebih dari 15 digit." })
    .regex(/^\d+$/, { message: "NIM harus berupa angka." })
    .optional()
    .or(z.literal("")),
  major: z
    .string()
    .min(2, { message: "Program studi wajib dipilih." }),
  batch: z
    .number({ error: "Angkatan harus berupa angka." })
    .min(2015, { message: "Angkatan tidak boleh kurang dari tahun 2015." })
    .max(new Date().getFullYear(), { message: "Angkatan tidak boleh lebih dari tahun saat ini." }),
  image: z
    .instanceof(File, { message: "Foto profil harus berupa berkas." })
    .refine((file) => file.size <= 2 * 1024 * 1024, { message: "Ukuran foto profil tidak boleh lebih dari 2MB." })
    .refine((file) => ["image/jpeg", "image/jpg", "image/png"].includes(file.type), { message: "Format foto profil harus JPEG, JPG, atau PNG." }),
  github: z
    .string()
    .max(39, { message: "Nama pengguna GitHub tidak boleh lebih dari 39 karakter." })
    .regex(/^[a-zA-Z0-9-]+$/, { message: "Nama pengguna GitHub hanya boleh mengandung huruf, angka, dan tanda hubung." })
    .trim()
    .optional()
    .or(z.literal("")),
  linkedin: z
    .string()
    .max(100, { message: "Tautan LinkedIn tidak boleh lebih dari 100 karakter." })
    .trim()
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .email({ message: "Format surel tidak valid." })
    .max(100, { message: "Surel tidak boleh lebih dari 100 karakter." })
    .trim(),
  whatsapp: z
    .string()
    .regex(/^628\d{8,13}$/, { message: "Format nomor WhatsApp tidak valid, gunakan format 628xxxxxxxxxx." })
    .trim()
    .optional()
    .or(z.literal("")),
});