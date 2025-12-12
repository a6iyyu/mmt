import { NextResponse } from "next/server";
import { API_COURSES_EDIT } from "@/constants/route";

export async function EDIT() {
  try {
    return NextResponse.json({ message: `Berhasil mengedit data pelatihan.` }, { status: 200 });
  } catch (error: unknown) {
    console.error(`[PATCH ${API_COURSES_EDIT}] Terjadi kesalahan saat membuat data pelatihan: ${error}`);
    return NextResponse.json(
      { message: "Gagal menambahkan data pelatihan karena kesalahan server." },
      { status: 500 },
    );
  }
}