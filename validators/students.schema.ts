import { z } from "zod";
import { Prodi } from "@/lib/generated/prisma/enums";

// prettier-ignore
export const StudentsSchema = z.object({
  nama_lengkap: z
    .string()
    .min(3, { message: "Nama lengkap harus terdiri dari minimal 3 karakter." })
    .max(30, { message: "Nama lengkap tidak boleh lebih dari 30 karakter." })
    .regex(/^[a-zA-Z\s]+$/, { message: "Nama lengkap hanya boleh mengandung huruf dan spasi." })
    .trim(),
  status: z
    .enum(["Aktif", "Cuti", "Lulus", "Dikeluarkan"] as const, { error: "Status tidak valid." }),
  nim: z
    .number({ error: "NIM harus berupa angka." })
    .min(1000000000, { message: "NIM harus terdiri dari minimal 10 digit." })
    .max(999999999999, { message: "NIM tidak boleh lebih dari 12 digit." })
    .refine((val) => /^\d{10,12}$/.test(val.toString()), { message: "NIM harus terdiri dari 10 hingga 12 digit." }),
  program_studi: z
    .enum(Object.values(Prodi as unknown as [string, ...string[]]), { error: "Program studi tidak valid." }),
  angkatan: z
    .number({ error: "Angkatan harus berupa angka." })
    .min(2015, { message: "Angkatan tidak boleh kurang dari tahun 2015." })
    .max(new Date().getFullYear(), { message: "Angkatan tidak boleh lebih dari tahun saat ini." }),
  foto_profil: z
    .instanceof(File, { message: "Foto profil harus berupa berkas." })
    .refine((file) => file.size <= 2 * 1024 * 1024, { message: "Ukuran foto profil tidak boleh lebih dari 2MB." })
    .refine((file) => ["image/jpeg", "image/jpg", "image/png"].includes(file.type), { message: "Format foto profil harus JPEG, JPG, atau PNG." }),
  bio: z
    .string()
    .max(1000, { message: "Bio tidak boleh lebih dari 1000 karakter." })
    .trim()
    .optional(),
  github: z
    .string()
    .min(3, { message: "Nama pengguna GitHub harus terdiri dari minimal 3 karakter." })
    .max(39, { message: "Nama pengguna GitHub tidak boleh lebih dari 39 karakter." })
    .regex(/^[a-zA-Z0-9-]+$/, { message: "Nama pengguna GitHub hanya boleh mengandung huruf, angka, dan tanda hubung." })
    .trim()
    .optional(),
  linkedin: z
    .string()
    .min(5, { message: "Nama pengguna LinkedIn harus terdiri dari minimal 5 karakter." })
    .max(40, { message: "Nama pengguna LinkedIn tidak boleh lebih dari 40 karakter." })
    .regex(/^[a-zA-Z0-9-]+$/, { message: "Nama pengguna LinkedIn hanya boleh mengandung huruf, angka, dan tanda hubung." })
    .trim()
    .optional(),
  surel: z
    .email({ message: "Format surel tidak valid." })
    .max(75, { message: "Surel tidak boleh lebih dari 75 karakter." })
    .trim(),
  whatsapp: z
    .string()
    .min(10, { message: "Nomor WhatsApp harus terdiri dari minimal 10 karakter." })
    .max(15, { message: "Nomor WhatsApp tidak boleh lebih dari 15 karakter." })
    .regex(/^628\d{8,13}$/, { message: "Format nomor WhatsApp tidak valid, gunakan format 628xxxxxxxxxx." })
    .trim(),
});