import { mkdir, writeFile } from "fs/promises";
import { NextResponse, NextRequest } from "next/server";
import { join } from "path";
import { API_STUDENT_PATCH } from "@/constants/route";
import { Prodi } from "@/lib/generated/prisma/enums";
import { Prisma } from "@/lib/prisma";
import { StudentsSchema } from "@/validators/students.schema";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }): Promise<NextResponse> {
  try {
    const id = Number((await params).id);

    if (!id) {
      return NextResponse.json({ message: "ID tidak valid." }, { status: 400 });
    }

    const formData = await request.formData();
    const file = formData.get("gambar") as File | null;
    const body = Object.fromEntries(formData) as Record<keyof typeof StudentsSchema.shape, string>;

    let imageUrl: string | undefined = undefined;

    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;
      const uploadDir = join(process.cwd(), "public/storage/student");

      await mkdir(uploadDir, { recursive: true });
      await writeFile(join(uploadDir, filename), buffer);

      imageUrl = `/storage/student/${filename}`;
    }

    const majorEnums = (Object.keys(Prodi) as (keyof typeof Prodi)[]).find((key) => Prodi[key] === body.program_studi);

    await Prisma.mahasiswa.update({
      where: { id_mahasiswa: id },
      data: {
        nama_lengkap: body.nama_lengkap,
        nim: body.nim,
        ...(majorEnums && { program_studi: majorEnums as Prodi }),
        angkatan: body.angkatan ? Number(body.angkatan) : undefined,
        ...(imageUrl && { foto_profil: imageUrl }),
        bio: body.bio,
        github: body.github,
        surel: body.surel,
        linkedin: body.linkedin,
        whatsapp: body.whatsapp,
        updated_at: new Date().toISOString(),
      },
    });

    return NextResponse.json({ message: "Data mahasiswa berhasil diperbarui." }, { status: 200 });
  } catch (error: unknown) {
    console.error(`[PATCH ${API_STUDENT_PATCH(Number((await params).id))}] Terjadi kesalahan saat memperbarui data mahasiswa: ${error instanceof Error ? error.message : String(error)}`);
    return NextResponse.json({ message: "Gagal memperbarui data mahasiswa." }, { status: 500 });
  }
}