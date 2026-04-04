import { mkdir, writeFile } from "fs/promises";
import { NextResponse, NextRequest } from "next/server";
import { join } from "path";
import { API_COURSES_PATCH } from "@/constants/route";
import { Prisma } from "@/lib/prisma";
import { Availability, Category } from "@/lib/generated/prisma/enums";
import { CoursesSchema } from "@/validators/courses.schema";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }): Promise<NextResponse> {
  try {
    const id = Number((await params).id);

    if (!id) {
      return NextResponse.json({ message: "ID tidak valid." }, { status: 400 });
    }

    const formData = await request.formData();
    const file = formData.get("gambar") as File | null;
    const body = Object.fromEntries(formData) as Record<keyof typeof CoursesSchema.shape, string>;

    let imageUrl: string | undefined = undefined;

    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;
      const uploadDir = join(process.cwd(), "public/storage/course");

      await mkdir(uploadDir, { recursive: true });
      await writeFile(join(uploadDir, filename), buffer);

      imageUrl = `/storage/course/${filename}`;
    }

    const categoryEnums = (Object.keys(Category) as (keyof typeof Category)[]).find((key) => Category[key] === body.kategori);
    const availabilityEnums = (Object.keys(Availability) as (keyof typeof Availability)[]).find((key) => Availability[key] === body.buka_pendaftaran);

    await Prisma.course.update({
      where: { id },
      data: {
        title: body.nama,
        slug: body.nama ? body.nama.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now() : undefined,
        description: body.deskripsi,
        mentor_name: body.mentor,
        location: body.lokasi,
        date: body.tanggal ? new Date(body.tanggal) : undefined,
        quota: body.kuota ? Number(body.kuota) : undefined,
        ...(imageUrl && { image: imageUrl }),
        ...(categoryEnums && { category: categoryEnums as Category }),
        ...(availabilityEnums && { availability: availabilityEnums as Availability }),
        updated_at: new Date(),
      },
    });

    return NextResponse.json({ message: "Data pelatihan berhasil diperbarui." }, { status: 200 });
  } catch (error: unknown) {
    console.error(`[PATCH ${API_COURSES_PATCH(Number((await params).id))}] Terjadi kesalahan saat memperbarui data pelatihan: ${error instanceof Error ? error.message : String(error)}`);
    return NextResponse.json({ message: "Gagal memperbarui data pelatihan." }, { status: 500 });
  }
}