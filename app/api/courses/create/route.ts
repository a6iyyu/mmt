import { mkdir, writeFile } from "fs/promises";
import { NextResponse, NextRequest } from "next/server";
import { join } from "path";
import { API_COURSES_CREATE } from "@/constants/route";
import { Kategori as Categories, Ketersediaan as Availability } from "@/lib/generated/prisma/enums";
import { Prisma } from "@/lib/prisma";
import { CoursesSchema } from "@/validators/courses.schema";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const formData = await request.formData();
    const file = formData.get("gambar") as File | null;

    const body = Object.fromEntries(formData) as Record<keyof typeof CoursesSchema.shape, string>;
    if (!body.nama || !body.kategori || !body.buka_pendaftaran || !file) {
      return NextResponse.json({ message: "Data tidak lengkap." }, { status: 400 });
    }

    let imageUrl = "/images/placeholder.png";

    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;
      const uploadDir = join(process.cwd(), "public/storage/course");

      await mkdir(uploadDir, { recursive: true });
      await writeFile(join(uploadDir, filename), buffer);

      imageUrl = `/storage/course/${filename}`;
    }

    await Prisma.pelatihan.create({
      data: {
        nama: body.nama,
        slug: body.nama.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now(),
        deskripsi: body.deskripsi,
        tanggal: new Date(body.tanggal),
        mentor: body.mentor,
        lokasi: body.lokasi,
        kuota: Number(body.kuota),
        gambar: imageUrl,
        kategori: [(Object.keys(Categories) as (keyof typeof Categories)[]).find((key) => Categories[key] === body.kategori) as Categories],
        buka_pendaftaran: (Object.keys(Availability) as (keyof typeof Availability)[]).find((key) => Availability[key] === body.buka_pendaftaran) as Availability,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    return NextResponse.json({ message: "Data pelatihan berhasil ditambahkan." }, { status: 201 });
  } catch (error: unknown) {
    console.error(`[POST ${API_COURSES_CREATE}] Terjadi kesalahan saat menambahkan data pelatihan: ${error instanceof Error ? error.message : String(error)}`);
    return NextResponse.json({ message: "Gagal menambahkan data pelatihan karena kesalahan server." }, { status: 500 });
  }
}