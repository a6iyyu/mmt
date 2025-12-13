import { mkdir, writeFile } from "fs/promises";
import { NextResponse, NextRequest } from "next/server";
import { join } from "path";
import { API_STUDENT_CREATE } from "@/constants/route";
import { Prisma } from "@/lib/prisma";
import { Prodi } from "@/lib/generated/prisma/enums";
import { StudentsSchema } from "@/validators/students.schema";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const formData = await request.formData();
    const file = formData.get("foto_profil") as File | null;
    const body = Object.fromEntries(formData) as Record<keyof typeof StudentsSchema.shape, string>;

    if (!body.nama_lengkap || !body.program_studi || !body.angkatan || !file) {
      return NextResponse.json({ message: "Data tidak lengkap." }, { status: 400 });
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
        program_studi: (Object.keys(Prodi) as (keyof typeof Prodi)[]).find((key) => Prodi[key] === body.program_studi) as Prodi,
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

    return NextResponse.json({ message: "Data mahasiswa berhasil ditambahkan." }, { status: 201 });
  } catch (error: unknown) {
    console.error(`[POST ${API_STUDENT_CREATE}] Terjadi kesalahan saat menambahkan data mahasiswa: ${error instanceof Error ? error.message : String(error)}`);
    return NextResponse.json({ message: "Gagal menambahkan data mahasiswa karena kesalahan server." }, { status: 500 });
  }
}