import { NextResponse, NextRequest } from "next/server";
import { API_COURSES_DELETE } from "@/constants/route";
import { Prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";

export async function DELETE(_request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);

    if (!id) {
      return NextResponse.json({ message: "ID tidak valid." }, { status: 400 });
    }

    await Prisma.pelatihan.delete({ where: { id_pelatihan: id } });

    return NextResponse.json({ message: "Data pelatihan berhasil dihapus." }, { status: 200 });
  } catch (error: unknown) {
    console.error(`[DELETE ${API_COURSES_DELETE(Number(params.id))}] Error: ${error}`);

    if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
      return NextResponse.json({ message: "Data tidak ditemukan." }, { status: 404 });
    }

    return NextResponse.json({ message: "Gagal menghapus data pelatihan." }, { status: 500 });
  }
}