import { NextResponse } from "next/server";
import { Prisma } from "@/lib/prisma";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const name = formData.get("name") as string;
    const nip = formData.get("nip") as string | null;
    const field = formData.get("field") as string;
    const position = formData.get("position") as "EXPERT_ASSISTANT" | "ASSISTANT_PROFESSOR" | "ASSOCIATE_PROFESSOR" | "PROFESSOR";
    const email = formData.get("email") as string;
    const linkedin = formData.get("linkedin") as string | null;
    const sinta = formData.get("sinta") as string | null;
    const scholar = formData.get("scholar") as string | null;
    const photo = formData.get("photo") as File | null;

    let photoPath = null;

    if (photo && photo.size > 0) {
      const bytes = await photo.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileName = `${Date.now()}-${photo.name.replace(/\s+/g, "_")}`;
      const uploadDir = path.join(process.cwd(), "public", "storage", "lecturers");
      
      await mkdir(uploadDir, { recursive: true });
      await writeFile(path.join(uploadDir, fileName), buffer);
      photoPath = `/storage/lecturers/${fileName}`;
    }

    const newLecturer = await Prisma.lecturer.create({
      data: {
        name,
        nip: nip || null,
        field,
        position,
        email,
        linkedin: linkedin || null,
        sinta: sinta || null,
        scholar: scholar || null,
        photo: photoPath,
      },
    });

    return NextResponse.json({ message: "Data berhasil ditambahkan", data: newLecturer }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Gagal menyimpan data ke database" }, { status: 500 });
  }
}