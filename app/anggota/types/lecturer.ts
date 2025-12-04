import { Interface } from "@/utils/decorator";

@Interface
export class Lecturer {
  id!: number;
  name!: string;
  email!: string;
  photo!: string;
  position!: string;
  field!: "Game Development" | "UI/UX" | "Animasi" | "AR/VR";
  research_interests!: string[];
  links?: {
    sinta: string;
    scholar: string;
    linkedin: string;
  };
}