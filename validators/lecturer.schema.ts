import { z } from "zod";

export const LecturerSchema = z.object({
  nama_lengkap: z
    .string()
    .min(3, { message: "Nama lengkap harus terdiri dari minimal 3 karakter." })
    .max(30, { message: "Nama lengkap tidak boleh lebih dari 30 karakter." })
    .regex(/^[a-zA-Z\s]+$/, { message: "Nama lengkap hanya boleh mengandung huruf dan spasi." })
    .trim(),
  nip: z
    .coerce
    .number({ error: "NIP harus berupa angka." })
    .min(1000000000, { message: "NIP harus terdiri dari minimal 10 digit." })
    .max(999999999999999, { message: "NIP tidak boleh lebih dari 15 digit." })
    .refine((val) => /^\d{10,15}$/.test(val.toString()), { message: "NIP harus terdiri dari 10 hingga 15 digit." }),
  keahlian: z
    .string()
    .min(3, { message: "Keahlian harus terdiri dari minimal 3 karakter." })
    .max(50, { message: "Keahlian tidak boleh lebih dari 50 karakter." })
    .trim(),
  jabatan: z
    .string()
    .min(3, { message: "Jabatan harus terdiri dari minimal 3 karakter." })
    .max(50, { message: "Jabatan tidak boleh lebih dari 50 karakter." })
    .trim(),
  foto_profil: z
    .instanceof(File, { message: "Foto profil harus berupa berkas." })
    .optional()
    .refine((file) => file instanceof File, { message: "Foto profil wajib diisi." })
    .refine((file) => !file || file.size <= 2 * 1024 * 1024, { message: "Ukuran foto profil tidak boleh lebih dari 2MB." })
    .refine((file) => !file || ["image/jpeg", "image/jpg", "image/png"].includes(file.type), { message: "Format foto profil harus JPEG, JPG, atau PNG." }),
  bio: z
    .string()
    .max(1000, { message: "Bio tidak boleh lebih dari 1000 karakter." })
    .trim()
    .optional(),   
  linkedin: z
    .string()
    .max(100, { message: "Tautan LinkedIn tidak boleh lebih dari 100 karakter." })
    .trim()
    .optional(),
  surel: z
    .email({ message: "Surel harus berupa alamat email yang valid." })
    .max(100, { message: "Surel tidak boleh lebih dari 100 karakter." })
    .trim(),
  sinta: z
    .string()
    .max(100, { message: "Tautan SINTA tidak boleh lebih dari 100 karakter." })
    .trim()
    .optional(),
  scholar: z
    .string()
    .max(100, { message: "Tautan Google Scholar tidak boleh lebih dari 100 karakter." })
    .trim()
    .optional(),
  whatsapp: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Nomor WhatsApp harus berupa nomor telepon internasional yang valid." })
    .optional(),
});