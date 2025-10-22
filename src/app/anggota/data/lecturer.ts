import { Interface } from "@/utils/decorator";

@Interface
class Lecturer {
  id!: string;
  name!: string;
  email!: string;
}

export const Lecturers: Lecturer[] = []