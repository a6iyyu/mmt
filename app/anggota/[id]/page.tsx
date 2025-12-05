import type { Metadata } from "next";

export const dynamic = "force-dynamic";

// prettier-ignore
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  try {
    const { id } = await params;
    return {
      title: `Anggota ${id} | Lab MMT`,
      description: `Detail anggota dengan ID ${id} di Lab MMT.`,
      openGraph: {
        title: `Anggota ${id} | Lab MMT`,
        description: `Detail anggota dengan ID ${id} di Lab MMT.`,
      },
      twitter: {
        title: `Anggota ${id} | Lab MMT`,
        description: `Detail anggota dengan ID ${id} di Lab MMT.`,
      },
    };
  } catch (error) {
    console.error(`Terjadi kesalahan saat menghasilkan metadata untuk anggota dengan ID ${params}: ${error}`);
    return {
      title: "Anggota | Lab MMT",
      description: "",
      openGraph: {
        title: "Anggota | Lab MMT",
        description: "",
      },
      twitter: {
        title: "Anggota | Lab MMT",
        description: "",
      },
    };
  }
}

// prettier-ignore
export default async function DetailAnggota({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return id;
}