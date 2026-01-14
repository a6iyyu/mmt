import { unlink } from "fs/promises";
import { NextResponse, NextRequest } from "next/server";
import { join } from "path";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import { Prisma } from "@/lib/prisma";
import { API_STUDENTS_DELETE } from "@/constants/route";

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const id = Number((await params).id);

    if (!id) {
      return NextResponse.json({ message: "ID tidak valid." }, { status: 400 });
    }

    const existingStudent = await Prisma.mahasiswa.findUnique({
      where: { id_mahasiswa: id },
      select: { foto_profil: true },
    });

    if (!existingStudent) {
      return NextResponse.json({ message: "Data tidak ditemukan." }, { status: 404 });
    }

    await Prisma.mahasiswa.delete({ where: { id_mahasiswa: id } });

    if (existingStudent.foto_profil) {
      const imagePath = join(process.cwd(), "public", existingStudent.foto_profil);
      try {
        await unlink(imagePath);
        console.log(`[DELETE FILE SUCCESS] Berhasil menghapus foto profil fisik di ${imagePath}`);
      } catch (err: unknown) {
        console.error(`[DELETE FILE ERROR] Gagal menghapus foto profil fisik di ${imagePath} karena ${err instanceof Error ? err.message : String(err)}`);
      }
    }

    return NextResponse.json({ message: "Data mahasiswa berhasil dihapus." }, { status: 200 });
  } catch (error: unknown) {
    console.error(`[DELETE ${API_STUDENTS_DELETE(Number((await params).id))}] Error: ${error}`);

    if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
      return NextResponse.json({ message: "Data tidak ditemukan." }, { status: 404 });
    }

    return NextResponse.json({ message: "Gagal menghapus data mahasiswa." }, { status: 500 });
  }
}