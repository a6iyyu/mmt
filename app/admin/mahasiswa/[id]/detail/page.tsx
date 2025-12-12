import type { Metadata } from "next";
import { Prisma } from "@/lib/prisma";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;

  try {
    const family = await Prisma.mahasiswa.findUniqueOrThrow({ where: { id_mahasiswa: parseInt(id, 10) } });

    return {
      title: `Data Mahasiswa ${family.nama_lengkap ?? ""} | Lab MMT`,
      description: "",
      openGraph: {
        title: `Data Mahasiswa ${family.nama_lengkap ?? ""} | Lab MMT`,
        description: "",
      },
      twitter: {
        title: `Data Mahasiswa ${family.nama_lengkap ?? ""} | Lab MMT`,
        description: "",
      },
    };
  } catch (err: unknown) {
    console.error(`❌ [metadata] Gagal mendapatkan data mahasiswa: ${err}`);
    return {
      title: "Detail Mahasiswa | Lab MMT",
      description: "",
      openGraph: { title: "Detail Mahasiswa | Lab MMT", description: "" },
      twitter: { title: "Detail Mahasiswa | Lab MMT", description: "" },
    };
  }
}

export default async function DetailMahasiswa({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <div>Admin Member Detail Page - ID: {id}</div>;
}