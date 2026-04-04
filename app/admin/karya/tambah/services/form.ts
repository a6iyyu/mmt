import axios from "axios";
import { toast } from "sonner";
import { z } from "zod";
import { ADMIN_CREATIONS, API_CREATIONS_CREATE } from "@/constants/route";
import { CreationsSchema } from "@/validators/creations.schema";

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

export class Form {
  private static toFormData(data: z.output<typeof CreationsSchema>): FormData {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (value === undefined || value === null) return;

      if (value instanceof File) formData.append(key, value);
      else if (Array.isArray(value)) formData.append(key, JSON.stringify(value));
      else formData.append(key, String(value));
    });

    return formData;
  }

  public static async submit(data: z.output<typeof CreationsSchema>): Promise<void> {
    try {

      if (process.env.NEXT_PUBLIC_USE_DB === "true") {
        const payload = this.toFormData(data);
        await axios.post(API_CREATIONS_CREATE, payload, { headers: { "Content-Type": "multipart/form-data" } });
      } else {
        const existingData = localStorage.getItem("creations_data");
        const creations = existingData ? JSON.parse(existingData) : [];

        let imageBase64 = "/images/placeholder.png";

        if (data.image instanceof File) {
          imageBase64 = await fileToBase64(data.image);
        }

        creations.push({
          ...data,
          id: Date.now(),
          image: imageBase64,
          publish_date: data.publish_date?.toISOString(),
        });

        localStorage.setItem("creations_data", JSON.stringify(creations));
      }

      toast.success("Data karya berhasil disimpan!");
      setTimeout(() => window.location.href = ADMIN_CREATIONS, 1000);
    } catch (error: unknown) {
      toast.error("Terjadi kesalahan saat menyimpan data.");
    }
  }
}

export const Submit = async (data: z.output<typeof CreationsSchema>): Promise<void> => Form.submit(data);