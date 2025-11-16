import type { Metadata } from "next";

// prettier-ignore
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  try {
    const { id } = await params;
    return {
      title: `Anggota ${id} | Lab Multimedia`,
      description: `Detail anggota dengan ID ${id} di Lab Multimedia.`,
      openGraph: {
        title: `Anggota ${id} | Lab Multimedia`,
        description: `Detail anggota dengan ID ${id} di Lab Multimedia.`,
      },
      twitter: {
        title: `Anggota ${id} | Lab Multimedia`,
        description: `Detail anggota dengan ID ${id} di Lab Multimedia.`,
      },
    };
  } catch (error) {
    console.error(`Terjadi kesalahan saat menghasilkan metadata untuk anggota dengan ID ${params}: ${error}`);
    return {
      title: "Anggota | Lab Multimedia",
      description: "",
      openGraph: {
        title: "Anggota | Lab Multimedia",
        description: "",
      },
      twitter: {
        title: "Anggota | Lab Multimedia",
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