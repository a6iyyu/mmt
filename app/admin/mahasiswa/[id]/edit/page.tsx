import type { Metadata } from "next";
import { API_STUDENTS_PATCH } from "@/constants/route";
import { Prisma } from "@/lib/prisma";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;

  try {
    const family = await Prisma.mahasiswa.findUniqueOrThrow({ where: { id_mahasiswa: parseInt(id, 10) } });

    return {
      title: `Edit Mahasiswa ${family.nama_lengkap ?? ""} | Lab MMT`,
      description: "",
      openGraph: {
        title: `Edit Mahasiswa ${family.nama_lengkap ?? ""} | Lab MMT`,
        description: "",
      },
      twitter: {
        title: `Edit Mahasiswa ${family.nama_lengkap ?? ""} | Lab MMT`,
        description: "",
      },
    };
  } catch (err: unknown) {
    console.error(`❌ [metadata] Gagal mendapatkan data di URL ${API_STUDENTS_PATCH(parseInt(id, 10))}: ${err}`);
    return {
      title: "Edit Mahasiswa | Lab MMT",
      description: "",
      openGraph: { title: "Edit Mahasiswa | Lab MMT", description: "" },
      twitter: { title: "Edit Mahasiswa | Lab MMT", description: "" },
    };
  }
}

export default async function EditMahasiswa({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <div>Admin Member Edit Page - ID: {id}</div>;
}