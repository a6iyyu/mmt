import { NextResponse, NextRequest } from "next/server";
import { API_COURSES_CREATE } from "@/constants/route";
import { Prisma } from "@/lib/prisma";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const data = await request.json();

    if (
      !data.nama ||
      !data.deskripsi ||
      !data.tanggal ||
      !data.lokasi ||
      !data.mentor
    ) {
      return NextResponse.json(
        { message: "Data pelatihan tidak lengkap." },
        { status: 400 },
      );
    }

    const newCourse = await Prisma.pelatihan.create({
      data: {
        nama: data.nama,
        slug: data.nama.toLowerCase().replace(/ /g, "-") + "-" + Date.now(),
        deskripsi: data.deskripsi,
        tanggal: new Date(data.tanggal),
        mentor: data.mentor,
        lokasi: data.lokasi,
        gambar: "/images/placeholder.png",
        kuota: Number(data.kuota),
        status: data.status,
      },
    });

    return NextResponse.json(
      { message: "Data pelatihan berhasil ditambahkan.", data: newCourse },
      { status: 201 },
    );
  } catch (error: unknown) {
    console.error(`[POST ${API_COURSES_CREATE}] Terjadi kesalahan saat membuat data pelatihan: ${error}`);
    return NextResponse.json(
      { message: "Gagal menambahkan data pelatihan karena kesalahan server." },
      { status: 500 },
    );
  }
}