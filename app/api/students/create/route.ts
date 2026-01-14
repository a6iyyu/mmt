import { mkdir, writeFile } from "fs/promises";
import { NextResponse, NextRequest } from "next/server";
import { join } from "path";
import { ADMIN_STUDENT, API_STUDENTS_CREATE } from "@/constants/route";
import { Prisma } from "@/lib/prisma";
import { Prodi } from "@/lib/generated/prisma/enums";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const formData = await request.formData();

    const body = {
      nama_lengkap: formData.get("nama_lengkap") as string,
      nim: formData.get("nim") as string,
      program_studi: formData.get("program_studi") as string,
      angkatan: formData.get("angkatan") as string,
      bio: formData.get("bio") as string,
      github: formData.get("github") as string,
      linkedin: formData.get("linkedin") as string,
      surel: formData.get("surel") as string,
      whatsapp: formData.get("whatsapp") as string,
    };
    
    const file = formData.get("foto_profil") as File | null;

    if (!body.nama_lengkap || !body.program_studi || !body.angkatan || !file || file.size === 0) {
      return NextResponse.json({ message: "Data tidak lengkap atau foto belum diunggah." }, { status: 400 });
    }

    let imageUrl = "/images/placeholder.png";

    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;
      const uploadDir = join(process.cwd(), "public/storage/student");

      await mkdir(uploadDir, { recursive: true });
      await writeFile(join(uploadDir, filename), buffer);

      imageUrl = `/storage/student/${filename}`;
    }

    await Prisma.mahasiswa.create({
      data: {
        nama_lengkap: body.nama_lengkap,
        nim: body.nim,
        program_studi: String(body.program_studi) as Prodi,
        angkatan: Number(body.angkatan),
        foto_profil: imageUrl,
        bio: body.bio,
        github: body.github,
        linkedin: body.linkedin,
        surel: body.surel,
        whatsapp: body.whatsapp,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    return NextResponse.json({ message: "Data mahasiswa berhasil ditambahkan.", url: ADMIN_STUDENT }, { status: 201 });
  } catch (error: unknown) {
    console.error(`[POST ${API_STUDENTS_CREATE}] Terjadi kesalahan saat menambahkan data mahasiswa: ${error instanceof Error ? error.message : String(error)}`);
    return NextResponse.json({ message: "Gagal menambahkan data mahasiswa karena kesalahan server." }, { status: 500 });
  }
}