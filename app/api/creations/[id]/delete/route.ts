import { unlink } from "fs/promises";
import { NextResponse, NextRequest } from "next/server";
import { join } from "path";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import { API_COURSES_DELETE } from "@/constants/route";
import { Prisma } from "@/lib/prisma";

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const id = Number((await params).id);

    if (!id) {
      return NextResponse.json({ message: "ID tidak valid." }, { status: 400 });
    }

    const existingCourse = await Prisma.pelatihan.findUnique({
      where: { id_pelatihan: id },
      select: { gambar: true },
    });

    if (!existingCourse) {
      return NextResponse.json({ message: "Data tidak ditemukan." }, { status: 404 });
    }

    await Prisma.pelatihan.delete({ where: { id_pelatihan: id } });

    if (existingCourse.gambar) {
      const imagePath = join(process.cwd(), "public", existingCourse.gambar);
      try {
        await unlink(imagePath);
        console.log(`[DELETE FILE SUCCESS] Berhasil menghapus gambar fisik di ${imagePath}`);
      } catch (err: unknown) {
        console.error(`[DELETE FILE ERROR] Gagal menghapus gambar fisik di ${imagePath} karena ${err instanceof Error ? err.message : String(err)}`);
      }
    }

    return NextResponse.json({ message: "Data pelatihan berhasil dihapus." }, { status: 200 });
  } catch (error: unknown) {
    console.error(`[DELETE ${API_COURSES_DELETE(Number((await params).id))}] Error: ${error}`);

    if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
      return NextResponse.json({ message: "Data tidak ditemukan." }, { status: 404 });
    }

    return NextResponse.json({ message: "Gagal menghapus data pelatihan." }, { status: 500 });
  }
}