import axios, { isAxiosError } from "axios";
import type { Dispatch, FormEvent, SetStateAction } from "react";
import type { NextRouter } from "next/router";
import { ZodError } from "zod";
import { ADMIN_COURSES, API_COURSES_CREATE } from "@/constants/route";
import { CourseCreateSchema } from "@/validators/courses.schema";

type CourseFormData = {
  nama: FormDataEntryValue;
  mentor: FormDataEntryValue;
  deskripsi: FormDataEntryValue;
  lokasi: FormDataEntryValue;
  tanggal: FormDataEntryValue;
  kuota: number;
  status: FormDataEntryValue;
}

class CourseForm {
  private static router: NextRouter;

  private static getFormData(form: HTMLFormElement) {
    const formData = Object.fromEntries(new FormData(form).entries());

    return {
      nama: formData.nama,
      mentor: formData.mentor,
      deskripsi: formData.deskripsi,
      lokasi: formData.lokasi,
      tanggal: formData.tanggal,
      kuota: Number(formData.kuota),
      status: formData.status,
    };
  }

  private static validate(data: CourseFormData) {
    return CourseCreateSchema.parse(data);
  }

  private static handleError(error: unknown): void {
    if (error instanceof ZodError) {
      const errorMessages = error.issues.map((err) => `• ${err.message}`).join("\n");
      console.error(`[${new Date().toISOString()}] Terjadi kesalahan saat memvalidasi data pelatihan: ${errorMessages}`);
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
      const formData = this.getFormData(e.currentTarget);
      const payload = this.validate(formData);
      await axios.post(API_COURSES_CREATE, payload);
      this.router.push(ADMIN_COURSES);
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
) => CourseForm.submit(e, setIsLoading);