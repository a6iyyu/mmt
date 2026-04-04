import { mkdir, writeFile } from "fs/promises";
import { NextResponse, NextRequest } from "next/server";
import { join } from "path";
import { ADMIN_CREATIONS } from "@/constants/route";
import { Prisma } from "@/lib/prisma";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const formData = await request.formData();

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const featured = formData.get("featured") === "true";
    const status = formData.get("publication_status") as any;
    const publishDate = formData.get("publish_date") as string;
    const demoLink = formData.get("demo_link") as string;
    const codeLink = formData.get("code_link") as string;
    const file = formData.get("image") as File | null;

    const studentIds = JSON.parse((formData.get("studentIds") as string) || "[]") as number[];
    const techNames = JSON.parse((formData.get("technologies") as string) || "[]") as string[];

    let imageUrl = "/images/placeholder.png";
    if (file && file.size > 0) {
      const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;
      const uploadDirectory = join(process.cwd(), "public/storage/creations");

      await mkdir(uploadDirectory, { recursive: true });
      await writeFile(join(uploadDirectory, filename), Buffer.from(await file.arrayBuffer()));

      imageUrl = `/storage/creations/${filename}`;
    }

    await Prisma.project.create({
      data: {
        title,
        slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now(),
        description,
        image: imageUrl,
        category,
        featured,
        publication_status: status,
        publish_date: publishDate ? new Date(publishDate) : null,
        demo_link: demoLink || null,
        code_link: codeLink || null,
        students: {
          connect: studentIds.map((id) => ({ id })),
        },
        technologies: {
          connectOrCreate: techNames.map((name) => ({
            where: { name },
            create: { name },
          })),
        },
      },
    });

    return NextResponse.json({ message: "Karya berhasil ditambahkan.", url: ADMIN_CREATIONS }, { status: 201 });
  } catch (error: unknown) {
    return NextResponse.json( { message: "Gagal menambahkan karya." }, { status: 500 });
  }
}