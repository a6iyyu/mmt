import axios, { isAxiosError } from "axios";
import type { Dispatch, FormEvent, SetStateAction } from "react";
import { z, ZodError } from "zod";
import { ADMIN_COURSES, API_COURSES_CREATE } from "@/constants/route";
import { CoursesSchema } from "@/validators/courses.schema";

class CourseForm {
  private static getFormData(form: HTMLFormElement) {
    const data = Object.fromEntries(new FormData(form).entries()) as Record<keyof typeof CoursesSchema.shape, string>;

    return {
      nama: data.nama,
      mentor: data.mentor,
      deskripsi: data.deskripsi,
      kategori: data.kategori,
      buka_pendaftaran: data.buka_pendaftaran,
      lokasi: data.lokasi,
      tanggal: data.tanggal,
      kuota: Number(data.kuota),
    };
  }

  private static validate(data: z.infer<typeof CoursesSchema>) {
    return CoursesSchema.parse(data);
  }

  private static handleError(error: unknown) {
    if (error instanceof ZodError) {
      const errorMessages = error.issues.map((err) => `• ${err.message}`).join("\n");
      console.error(`[${new Date().toISOString()}] Terjadi kesalahan saat memvalidasi data pelatihan:\n${errorMessages}`);
      return;
    }

    if (isAxiosError(error)) {
      const message = error.response?.data?.message || "Gagal menghubungi server.";
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

      await axios.post(API_COURSES_CREATE, new FormData(e.currentTarget), {
        headers: { "Content-Type": "multipart/form-data" },
      });

      window.location.href = ADMIN_COURSES;
    } catch (error: unknown) {
      this.handleError(
        error instanceof ZodError
        ? error
        : error instanceof Error
        ? error
        : new Error(`[${new Date().toISOString()}] An unknown error occurred in ${API_COURSES_CREATE}.`)
      );
    } finally {
      setIsLoading(false);
    }
  }
}

export const Submit = (
  e: FormEvent<HTMLFormElement>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
) => CourseForm.submit(e, setIsLoading);