import axios, { isAxiosError } from "axios";
import { toast } from "sonner";
import { z } from "zod";
import { ADMIN_STUDENT, API_STUDENTS_CREATE } from "@/constants/route";
import { StudentsSchema } from "@/validators/students.schema";

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

export class StudentForm {
  private static toFormData(data: z.output<typeof StudentsSchema>): FormData {
    const formData = new FormData();
    const keys = Object.keys(data) as Array<keyof z.output<typeof StudentsSchema>>;

    keys.forEach((key) => {
      const value = data[key];
      if (value === undefined || value === null || value === "") return;
      if (value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, String(value));
      }
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

  public static async submit(data: z.output<typeof StudentsSchema>): Promise<void> {
    try {
      const useAPI = process.env.NEXT_PUBLIC_USE_DB === "true";

      if (useAPI) {
        const payload = this.toFormData(data);
        await axios.post(API_STUDENTS_CREATE, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        const existingData = localStorage.getItem("students_data");
        const students = existingData ? JSON.parse(existingData) : [];

        let imageBase64 = "/images/placeholder.png";
        if (data.image instanceof File) {
          imageBase64 = await fileToBase64(data.image);
        }

        const newStudent = {
          id: Date.now(),
          name: data.name,
          nim: data.nim || "-",
          batch: data.batch,
          major: data.major,
          image: imageBase64,
          linkedin: data.linkedin || null,
          status: data.status,
          github: data.github || null,
          email: data.email,
          whatsapp: data.whatsapp || null,
        };

        students.push(newStudent);
        localStorage.setItem("students_data", JSON.stringify(students));
      }

      toast.success("Data mahasiswa berhasil disimpan!");
      setTimeout(() => {
        window.location.href = ADMIN_STUDENT;
      }, 1000);
      
    } catch (error: unknown) {
      this.handleError(error);
    }
  }
}

export const Submit = async (data: z.output<typeof StudentsSchema>): Promise<void> => StudentForm.submit(data);