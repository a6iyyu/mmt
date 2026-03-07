import axios, { isAxiosError } from "axios";
import { toast } from "sonner";
import { z } from "zod";
import { ADMIN_LECTURERS, API_LECTURERS_CREATE } from "@/constants/route";
import { LecturerSchema } from "@/validators/lecturer.schema";

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

export class LecturerForm {
  private static toFormData(data: z.output<typeof LecturerSchema>): FormData {
    const formData = new FormData();
    const keys = Object.keys(data) as Array<keyof z.output<typeof LecturerSchema>>;

    keys.forEach((key) => {
      const value = data[key];
      if (value === undefined || value === null || value === "") return;
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
      const useAPI = process.env.NEXT_PUBLIC_USE_DB === "true";

      if (useAPI) {
        const payload = this.toFormData(data);
        await axios.post(API_LECTURERS_CREATE, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        const existingData = localStorage.getItem("lecturers_data");
        const lecturers = existingData ? JSON.parse(existingData) : [];

        let imageBase64 = "/images/placeholder.png";
        if (data.photo instanceof File) {
          imageBase64 = await fileToBase64(data.photo);
        }

        const newLecturer = {
          id: Date.now().toString(),
          name: data.name,
          nip: data.nip || "-",
          image: imageBase64,
          expertise: [data.field],
          email: data.email,
          phone: data.linkedin || "-",
        };

        lecturers.push(newLecturer);
        localStorage.setItem("lecturers_data", JSON.stringify(lecturers));
      }

      toast.success("Data berhasil disimpan!");
      setTimeout(() => {
        window.location.href = ADMIN_LECTURERS;
      }, 1000);
      
    } catch (error: unknown) {
      this.handleError(error);
    }
  }
}

export const Submit = async (data: z.output<typeof LecturerSchema>): Promise<void> => LecturerForm.submit(data);