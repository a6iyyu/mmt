import { NextResponse } from "next/server";
import { API_COURSES_DELETE } from "@/constants/route";

export async function DELETE() {
  try {
    return NextResponse.json({ message: `Berhasil menghapus data pelatihan.` }, { status: 200 });
  } catch (error: unknown) {
    console.error(`[DELETE ${API_COURSES_DELETE}] Terjadi kesalahan saat membuat data pelatihan: ${error}`);
    return NextResponse.json(
      { message: "Gagal menambahkan data pelatihan karena kesalahan server." },
      { status: 500 },
    );
  }
}