import { z } from "zod";

export const UserLoginSchema = z.object({
  surel: z.email({ message: "Alamat surel tidak valid." }).nonempty({ message: "Alamat surel wajib diisi." }).toLowerCase(),
  kata_sandi: z.string().min(6, { message: "Kata sandi harus terdiri dari minimal 6 karakter." }).nonempty({ message: "Kata sandi wajib diisi." }).max(12, { message: "Kata sandi tidak boleh lebih dari 12 karakter." }),
});