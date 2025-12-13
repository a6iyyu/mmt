import { mkdir, writeFile } from "fs/promises";
import { NextResponse, NextRequest } from "next/server";
import { join } from "path";
import { Prisma } from "@/lib/prisma";
import { Kategori as Categories, Ketersediaan as Availability } from "@/lib/generated/prisma/enums";
import { API_COURSES_PATCH } from "@/constants/route";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }): Promise<NextResponse> {
  try {
    const id = Number((await params).id);

    if (!id) {
      return NextResponse.json({ message: "ID tidak valid." }, { status: 400 });
    }

    const formData = await request.formData();
    const file = formData.get("gambar") as File | null;
    const body = Object.fromEntries(formData) as Record<string, string>;

    let imageUrl: string | undefined = undefined;

    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;
      const uploadDir = join(process.cwd(), "public/storage/course");

      await mkdir(uploadDir, { recursive: true });
      await writeFile(join(uploadDir, filename), buffer);

      imageUrl = `/storage/course/${filename}`;
    }

    const categoryEnums = (Object.keys(Categories) as (keyof typeof Categories)[]).find((key) => Categories[key] === body.kategori);
    const availabilityEnums = (Object.keys(Availability) as (keyof typeof Availability)[]).find((key) => Availability[key] === body.buka_pendaftaran);

    await Prisma.pelatihan.update({
      where: { id_pelatihan: id },
      data: {
        nama: body.nama,
        slug: body.nama ? body.nama.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now() : undefined,
        deskripsi: body.deskripsi,
        mentor: body.mentor,
        lokasi: body.lokasi,
        tanggal: body.tanggal ? new Date(body.tanggal) : undefined,
        kuota: body.kuota ? Number(body.kuota) : undefined,
        ...(imageUrl && { gambar: imageUrl }),
        ...(categoryEnums && { kategori: [categoryEnums as Categories] }),
        ...(availabilityEnums && {
          buka_pendaftaran: availabilityEnums as Availability,
        }),
        updated_at: new Date(),
      },
    });

    return NextResponse.json({ message: "Data pelatihan berhasil diperbarui." }, { status: 200 });
  } catch (error: unknown) {
    console.error(`[PATCH ${API_COURSES_PATCH}] Terjadi kesalahan saat memperbarui data pelatihan: ${error instanceof Error ? error.message : String(error)}`);
    return NextResponse.json({ message: "Gagal memperbarui data pelatihan." }, { status: 500 });
  }
}