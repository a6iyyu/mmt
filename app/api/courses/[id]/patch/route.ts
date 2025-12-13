import { NextResponse, NextRequest } from "next/server";
import { API_COURSES_PATCH } from "@/constants/route";
import { Prisma } from "@/lib/prisma";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const id = Number((await params).id);
    const body = await request.json();

    if (!id) {
      return NextResponse.json({ message: "ID tidak valid." }, { status: 400 });
    }

    await Prisma.pelatihan.update({
      where: { id_pelatihan: id },
      data: {
        nama: body.nama,
        mentor: body.mentor,
        deskripsi: body.deskripsi,
        lokasi: body.lokasi,
        tanggal: new Date(body.tanggal),
        kuota: Number(body.kuota),
        status: body.status,
      },
    });

    return NextResponse.json({ message: "Data pelatihan berhasil diperbarui." }, { status: 200 });
  } catch (error: unknown) {
    console.error(`[PATCH ${API_COURSES_PATCH(Number((await params).id))}] Error: ${error}`);
    return NextResponse.json({ message: "Gagal mengedit data pelatihan." }, { status: 500 });
  }
}