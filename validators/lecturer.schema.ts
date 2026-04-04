import { z } from "zod";
import { LecturerPosition } from "@/lib/generated/prisma/enums";

export const LecturerSchema = z.object({
  name: z
    .string()
    .min(3, { error: "Nama lengkap harus terdiri dari minimal 3 karakter." })
    .max(100, { error: "Nama lengkap tidak boleh lebih dari 100 karakter." })
    .regex(/^[a-zA-Z\s.,]+$/, { error: "Nama lengkap hanya boleh mengandung huruf, tanda baca gelar, dan spasi." })
    .trim(),
  nip: z
    .string()
    .min(10, { error: "NIP harus terdiri dari minimal 10 digit." })
    .max(18, { error: "NIP tidak boleh lebih dari 18 digit." })
    .regex(/^\d+$/, { error: "NIP harus berupa angka." })
    .optional()
    .or(z.literal("")),
  field: z
    .string()
    .min(3, { error: "Keahlian harus terdiri dari minimal 3 karakter." })
    .max(50, { error: "Keahlian tidak boleh lebih dari 50 karakter." })
    .trim(),
  position: z.enum(Object.values(LecturerPosition as Record<string, string>), { error: "Jabatan wajib dipilih." }),
  photo: z
    .instanceof(File, { error: "Foto profil harus berupa berkas." })
    .optional()
    .refine((file) => !file || file.size <= 2 * 1024 * 1024, { error: "Ukuran foto profil tidak boleh lebih dari 2MB." })
    .refine((file) => !file || ["image/jpeg", "image/jpg", "image/png"].includes(file.type), { error: "Format foto profil harus JPEG, JPG, atau PNG." }),
  linkedin: z
    .string()
    .max(100, { error: "Tautan LinkedIn tidak boleh lebih dari 100 karakter." })
    .trim()
    .optional()
    .or(z.literal("")),
  email: z
    .email({ error: "Surel harus berupa alamat email yang valid." })
    .max(100, { error: "Surel tidak boleh lebih dari 100 karakter." })
    .trim(),
  sinta: z
    .string()
    .max(255, { error: "Tautan SINTA tidak boleh lebih dari 255 karakter." })
    .trim()
    .optional()
    .or(z.literal("")),
  scholar: z
    .string()
    .max(255, { error: "Tautan Google Scholar tidak boleh lebih dari 255 karakter." })
    .trim()
    .optional()
    .or(z.literal("")),
});