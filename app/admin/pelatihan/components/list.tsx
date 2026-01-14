"use client";

import { Calendar, Edit3, Trash2, Users } from "lucide-react";
import { FaCircleInfo } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { ADMIN_COURSES_DETAIL, API_COURSES_DELETE } from "@/constants/route";
import type { pelatihan as Trainings } from "@/lib/generated/prisma/client";
import Image from "next/image";
import Link from "next/link";
import Table from "@/components/common/table";
import axios from "axios";

// prettier-ignore
export default function List({ data }: { data: Trainings[] }) {
  const formattedDate = (date: Date) => {
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(date));
  };

  const handleDelete = async (id: number, nama: string) => {
    if (confirm(`Apakah Anda yakin ingin menghapus pelatihan "${nama}"?`)) {
      try {
        await axios.delete(API_COURSES_DELETE(id));
        window.location.reload();
      } catch (err: unknown) {
        throw new Error(`[DELETE ${API_COURSES_DELETE(id)}] Terjadi kesalahan saat menghapus data pelatihan: ${err instanceof Error ? err.message : String(err)}`);
      }
    }
  };

  const rows = data.map((item) => [
    <article key="info" className="flex w-full gap-4">
      <span className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
        <Image src={item.gambar || "/images/placeholder.png"} alt={item.nama} fill className="object-cover" />
      </span>
      <span>
        <h4 className="line-clamp-1 font-semibold text-gray-900">
          {item.nama}
        </h4>
        <p className="mt-1 text-[10px] font-bold tracking-wider text-gray-500 uppercase">
          {item.kategori.replace(/_/g, " ")}
        </p>
      </span>
    </article>,
    <article key="details" className="flex flex-col gap-1">
      <h5 className="flex items-center gap-2 text-xs text-gray-700">
        <Calendar className="h-3.5 w-3.5 text-gray-400" /> {formattedDate(item.tanggal)}
      </h5>
      <h5 className="flex items-center gap-2 text-xs text-gray-500">
        <Users className="h-3.5 w-3.5 text-gray-400" /> {item.mentor}
      </h5>
    </article>,
    <article key="quota" className="w-24 text-center">
      <h5 className="text-xs font-medium text-gray-700">
        {item.kuota ? `${item.kuota} Peserta` : "Tanpa Batas"}
      </h5>
    </article>,
    <Badge
      key="status"
      className={`pointer-events-none border px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase ${item.buka_pendaftaran === "DIBUKA"
        ? "border-green-200 bg-green-50 text-green-700"
        : item.buka_pendaftaran === "PENUH"
        ? "border-red-200 bg-red-50 text-red-700"
        : "border-blue-200 bg-blue-50 text-blue-700"
      }`}
    >
      {item.buka_pendaftaran.replace("_", " ")}
    </Badge>,
    <article key="actions" className="flex justify-end gap-2">
      <Link href={ADMIN_COURSES_DETAIL(item.id_pelatihan)} className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-blue-600">
        <FaCircleInfo className="h-4 w-4" />
      </Link>
      <Link href="" className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-yellow-600">
        <Edit3 className="h-4 w-4" />
      </Link>
      <button
        onClick={() => handleDelete(item.id_pelatihan, item.nama)}
        className="cursor-pointer rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-red-600"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </article>,
  ]);

  return (
    <>
      <div className="mx-auto mt-8 flex w-9/10 items-end justify-between gap-4 lg:w-19/20">
        <Table
          headers={["Info Pelatihan", "Jadwal & Mentor", "Kuota", "Status", "Aksi"]}
          rows={rows}
          sortable={["Status"]}
        />
      </div>
    </>
  );
}