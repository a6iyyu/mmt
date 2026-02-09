import axios, { isAxiosError } from "axios";
import { toast } from "sonner";
import { z } from "zod";
import { ADMIN_LECTURERS, API_LECTURERS_CREATE, API_STUDENTS_CREATE } from "@/constants/route";
import { LecturerSchema } from "@/validators/lecturer.schema";

export class LecturerForm {
  private static toFormData(data: z.output<typeof LecturerSchema>): FormData {
    const formData = new FormData();
    const keys = Object.keys(data) as Array<keyof z.output<typeof LecturerSchema>>;

    keys.forEach((key) => {
      const value = data[key];
      if (value === undefined || value === null) return;
      value instanceof File ? formData.append(key, value) : formData.append(key, String(value));
    });

    return formData;
  }

  private static handleError(error: unknown) {
    if (isAxiosError(error)) {
      const message: string = error.response?.data?.message || JSON.stringify(error.response?.data) || "Gagal menghubungi server.";
      toast.error(`Error: ${message}`);
      return;
    }

    const errorMessage = error instanceof Error ? error.message : "Ada yang tidak beres.";
    if (process.env.NODE_ENV === "development") console.error(`Terjadi kesalahan: ${errorMessage}`);
    toast.error("Terjadi kesalahan sistem yang tidak terduga.");
  }

  public static async submit(data: z.output<typeof LecturerSchema>): Promise<void> {
    try {
      const payload = this.toFormData(data);

      await axios.post(API_LECTURERS_CREATE, payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      window.location.href = ADMIN_LECTURERS;
    } catch (error: unknown) {
      this.handleError(error);
    }
  }
}

export const Submit = async (data: z.output<typeof LecturerSchema>): Promise<void> => LecturerForm.submit(data);