import { Interface } from "@/utils/decorator";

@Interface
class Student {
  id!: number;
  name!: string;
  major!: string;
  focus!: string;
  field!: "Game Development" | "UI/UX" | "VR/AR" | "Animasi" | "3D Asset";
  image!: string;
  linkedin!: URL | string;
  email!: string;
  whatsapp!: URL | string;
}

export { Student };