import { StudentStatus } from "@/lib/generated/prisma/client";
import { Prisma } from "@/lib/prisma";

export async function getStudents(query: string = "", status: string = "") {
  return await Prisma.student.findMany({
    where: {
      AND: [
        query ? { OR: [{ name: { contains: query } }, { nim: { contains: query } }, { major: { contains: query } }] } : {},
        status && status !== "all" ? { status: status as StudentStatus } : {},
      ],
    },
    orderBy: { created_at: "desc" },
  });
}

export async function getStudentStats() {
  const total = await Prisma.student.count();
  const active = await Prisma.student.count({ where: { status: "ACTIVE" } });
  const graduated = await Prisma.student.count({ where: { status: "GRADUATED" } });
  const onLeave = await Prisma.student.count({ where: { status: "ON_LEAVE" } });

  return { total, active, graduated, onLeave };
}