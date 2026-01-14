import axios, { isAxiosError } from "axios";
import type { Dispatch, FormEvent, SetStateAction } from "react";
import { z, ZodError } from "zod";
import { ADMIN_STUDENT, API_STUDENTS_CREATE } from "@/constants/route";
import { LecturerSchema } from "@/validators/lecturer.schema";

class LecturerForm {
  private static getFormData(form: HTMLFormElement) {
    const data = Object.fromEntries(new FormData(form).entries()) as Record<keyof typeof LecturerSchema.shape, string>;

    return {
      foto_profil: data.foto_profil as unknown as File,
      nama_lengkap: String(data.nama_lengkap),
      nip: data.nip ? Number(data.nip) : 0,
    };
  }

  private static validate(data: z.infer<typeof LecturerSchema>) {
    return LecturerSchema.parse(data);
  }

  private static handleError(error: unknown) {
    if (error instanceof ZodError) {
      const errorMessages = error.issues.map((err) => `• ${err.message}`).join("\n");
      console.error(`[${new Date().toISOString()}] Terjadi kesalahan saat memvalidasi data mahasiswa:\n${errorMessages}`);
      return;
    }

    if (isAxiosError(error)) {
      const message = error.response?.data || "Gagal menghubungi server.";
      console.error(`[${new Date().toISOString()}] Terjadi kesalahan saat menghubungi server: ${message}`);
      return;
    }

    console.error(`[${new Date().toISOString()}] Terjadi kesalahan tak terduga: ${(error as Error).message}`);
    throw error;
  }

  public static async submit(e: FormEvent<HTMLFormElement>, setIsLoading: Dispatch<SetStateAction<boolean>>): Promise<void> {
    e.preventDefault();
    setIsLoading(true);

    try {
      this.validate(this.getFormData(e.currentTarget));

      await axios.post(API_STUDENTS_CREATE, new FormData(e.currentTarget), {
        headers: { "Content-Type": "multipart/form-data" },
      });

      window.location.href = ADMIN_STUDENT;
    } catch (error: unknown) {
      this.handleError(error);
    } finally {
      setIsLoading(false);
    }
  }
}

export const Submit = (
  e: FormEvent<HTMLFormElement>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
) => LecturerForm.submit(e, setIsLoading);