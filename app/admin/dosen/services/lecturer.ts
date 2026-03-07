import { LecturerPosition } from "@/lib/generated/prisma/enums";
import { Prisma } from "@/lib/prisma";

export async function getLecturers(query: string = "", position: string = "") {
  return await Prisma.lecturer.findMany({
    where: {
      AND: [
        query ? { OR: [{ name: { contains: query } }, { nip: { contains: query } }, { field: { contains: query } }] } : {},
        position ? { position: position as LecturerPosition } : {},
      ],
    },
    orderBy: { created_at: "desc" },
  });
}

export async function getLecturerStats() {
  const total = await Prisma.lecturer.count();
  const professor = await Prisma.lecturer.count({ where: { position: "PROFESSOR" } });
  const expertAssistant = await Prisma.lecturer.count({ where: { position: "EXPERT_ASSISTANT" } });

  return { total, professor, expertAssistant };
}