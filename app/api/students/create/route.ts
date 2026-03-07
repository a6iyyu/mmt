import { mkdir, writeFile } from "fs/promises";
import { NextResponse, NextRequest } from "next/server";
import { join } from "path";
import { ADMIN_STUDENT, API_STUDENTS_CREATE } from "@/constants/route";
import { Prisma } from "@/lib/prisma";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const nim = formData.get("nim") as string | null;
    const major = formData.get("major") as string;
    const batch = Number(formData.get("batch"));
    const status = formData.get("status") as "ACTIVE" | "ON_LEAVE" | "GRADUATED";
    const email = formData.get("email") as string;
    const linkedin = formData.get("linkedin") as string | null;
    const whatsapp = formData.get("whatsapp") as string | null;
    const github = formData.get("github") as string | null;
    const file = formData.get("image") as File | null;

    if (!name || !major || !batch || !file || file.size === 0) {
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

    await Prisma.student.create({
      data: {
        name,
        nim: nim || null,
        major,
        batch,
        status,
        email: email || null,
        linkedin: linkedin || null,
        whatsapp: whatsapp || null,
        github: github || null,
        image: imageUrl,
      },
    });

    return NextResponse.json({ message: "Data mahasiswa berhasil ditambahkan.", url: ADMIN_STUDENT }, { status: 201 });
  } catch (error: unknown) {
    console.error(`[POST ${API_STUDENTS_CREATE}] Terjadi kesalahan saat menambahkan data mahasiswa: ${error instanceof Error ? error.message : String(error)}`);
    return NextResponse.json({ message: "Gagal menambahkan data mahasiswa karena kesalahan server." }, { status: 500 });
  }
}