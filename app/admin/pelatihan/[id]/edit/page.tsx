import type { Metadata } from "next";
import { ADMIN_COURSES_EDIT } from "@/constants/route";
import { Prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Error | Metadata> {
  const { id } = await params;

  try {
    const trainings = await Prisma.course.findUnique({
      where: { id: parseInt(id, 10) },
      select: { title: true },
    });

    if (!trainings) {
      throw new Error(`Data pelatihan dengan ID ${id} tidak ditemukan.`);
    }

    return {
      title: `Edit Pelatihan ${trainings.title} | Lab MMT`,
      description: `Halaman edit pelatihan ${trainings.title} untuk administrator Lab MMT.`,
      openGraph: {
        title: `Edit Pelatihan ${trainings.title} | Lab MMT`,
        description: `Halaman edit pelatihan ${trainings.title} untuk administrator Lab MMT.`,
      },
      twitter: {
        title: `Edit Pelatihan ${trainings.title} | Lab MMT`,
        description: `Halaman edit pelatihan ${trainings.title} untuk administrator Lab MMT.`,
      },
    };
  } catch (error: unknown) {
    console.error(`❌ [metadata] Gagal mendapatkan data di URL ${ADMIN_COURSES_EDIT(parseInt(id, 10))}: ${error instanceof Error ? error.message : String(error)}`);
    return {
      title: `Edit Pelatihan | Lab MMT`,
      description: "",
      openGraph: { title: `Edit Pelatihan | Lab MMT`, description: "" },
      twitter: { title: `Edit Pelatihan | Lab MMT`, description: "" },
    };
  }
}

export default async function EditPelatihan({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <div>Edit Pelatihan {id}</div>;
}