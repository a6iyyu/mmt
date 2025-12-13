import { Calendar, Edit, MapPin, User, Users } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ADMIN_COURSES, ADMIN_COURSES_DETAIL, ADMIN_COURSES_EDIT } from "@/constants/route";
import { DetailAside, DetailContent, DetailGrid, DetailHeader, DetailShell, InfoCard, InfoItem } from "@/layouts/detail";
import { Prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;

  if (isNaN(parseInt(id, 10))) {
    return { title: "Pelatihan Tidak Valid | Lab MMT" };
  }

  try {
    const course = await Prisma.pelatihan.findUnique({
      where: { id_pelatihan: parseInt(id, 10) },
      select: { nama: true, deskripsi: true },
    });

    if (!course) {
      return { title: "Pelatihan Tidak Ditemukan | Lab MMT" };
    }

    return {
      title: `Detail ${course.nama} | Lab MMT`,
      description: course.deskripsi?.slice(0, 150) || "Detail Pelatihan Lab MMT",
    };
  } catch (error) {
    console.error(`[metadata ${ADMIN_COURSES_DETAIL(parseInt(id, 10))}] Terjadi kesalahan saat membuat metadata pelatihan: ${error}`);
    return { title: "Detail Pelatihan | Lab MMT" };
  }
}

export default async function DetailPelatihan({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const course = await Prisma.pelatihan.findUnique({
    where: { id_pelatihan: parseInt(id, 10) },
  });

  if (isNaN(parseInt(id, 10)) || !course) {
    notFound();
  }

  return (
    <DetailShell>
      <DetailHeader
        title="Detail Pelatihan"
        backUrl={ADMIN_COURSES}
        actions={
          <Link href={ADMIN_COURSES_EDIT(course.id_pelatihan)} className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-xs font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95">
            <Edit className="h-4 w-4" />
            Edit Data
          </Link>
        }
      />
      <DetailGrid>
        <DetailAside>
          <figure className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-sm">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={course.gambar || "/images/placeholder.png"}
                alt={course.nama}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
              <div className="absolute top-3 left-3">
                <span className={`rounded-full px-3 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-sm backdrop-blur-sm ${course.buka_pendaftaran === "Dibuka" ? "bg-green-500/90" : "bg-red-500/90"}`}>
                  {course.buka_pendaftaran.replace("_", " ")}
                </span>
              </div>
            </div>
          </figure>
          <InfoCard title="Informasi Singkat">
            <InfoItem
              icon={<User className="h-5 w-5" />}
              label="Mentor"
              value={course.mentor}
              iconColorClass="bg-purple-50 text-purple-600"
            />
            <InfoItem
              icon={<Users className="h-5 w-5" />}
              label="Kuota Peserta"
              value={`${course.kuota} Orang`}
              iconColorClass="bg-orange-50 text-orange-600"
            />
            <InfoItem
              icon={<MapPin className="h-5 w-5" />}
              label="Lokasi"
              value={course.lokasi}
              iconColorClass="bg-emerald-50 text-emerald-600"
            />
          </InfoCard>
        </DetailAside>
        <DetailContent>
          <section className="h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="mb-8 border-b border-gray-100 pb-8">
              <span className="mb-4 flex flex-wrap gap-2">
                <h5 className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-bold text-gray-600">
                  {course.kategori.replace(/_/g, " ")}
                </h5>
              </span>
              <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                {course.nama}
              </h1>
              <h5 className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                <time dateTime={course.tanggal.toISOString()}>
                  Tanggal Pelaksanaan:{" "}
                  {new Date(course.tanggal).toLocaleDateString("id-ID", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </h5>
            </div>
            <span className="prose prose-lg prose-blue max-w-none text-gray-600">
              <h3 className="text-xl font-bold text-gray-900">
                Deskripsi Pelatihan
              </h3>
              <h5 className="leading-relaxed whitespace-pre-wrap">
                {course.deskripsi || "Tidak ada deskripsi tersedia."}
              </h5>
            </span>
          </section>
        </DetailContent>
      </DetailGrid>
    </DetailShell>
  );
}