"use client";

import { Calendar, Edit3, Users } from "lucide-react";
import { FaCircleInfo, FaLinkedin } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { ADMIN_STUDENT_DETAIL } from "@/constants/route";
import Image from "next/image";
import Link from "next/link";
import Delete from "@/app/admin/mahasiswa/atoms/delete";
import Table from "@/components/common/table";

type StudentProps = {
  id: number;
  name: string;
  nim: string | null;
  batch: number | null;
  major: string;
  image: string | null;
  linkedin: string | null;
  status: "ACTIVE" | "ON_LEAVE" | "GRADUATED";
};

export default function List({ students }: { students: StudentProps[] }) {
  if (students.length === 0) {
    return (
      <div className="mx-auto mt-8 flex w-9/10 flex-col items-center justify-center gap-4 py-20 lg:w-19/20">
        <p className="text-gray-500">Belum ada data mahasiswa. Silakan tambah data baru.</p>
      </div>
    );
  }

  const rows = students.map((item) => [
    <article key={`info-${item.id}`} className="flex w-full gap-4">
      <span className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
        <Image src={item.image || "/images/placeholder.png"} alt={item.name} fill className="object-cover" />
      </span>
      <span>
        <h4 className="line-clamp-1 font-semibold text-gray-900">
          {item.name}
        </h4>
        <h5 className="mt-1 inline-block rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-bold tracking-wider text-gray-500 uppercase">
          {item.nim || "-"}
        </h5>
      </span>
    </article>,
    <article key={`academic-${item.id}`} className="flex w-full flex-col gap-1">
      <span className="flex items-center gap-2 text-sm text-gray-700">
        <Calendar className="h-3.5 w-3.5 text-gray-400" /> {item.batch || "-"}
      </span>
      <span className="flex items-center gap-2 text-xs text-gray-500">
        <Users className="h-3.5 w-3.5 text-gray-400" /> {item.major}
      </span>
    </article>,
    <article key={`link-${item.id}`} className="flex w-40 items-center justify-center truncate wrap-break-word">
      {item.linkedin ? (
        <Link href={item.linkedin} target="_blank" className="text-xs text-blue-600 underline lg:text-sm">
          <FaLinkedin />
        </Link>
      ) : (
        <span className="text-gray-400">-</span>
      )}
    </article>,
    <Badge key={`status-${item.id}`} className={`pointer-events-none border px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase ${item.status === "ACTIVE" ? "border-green-200 bg-green-50 text-green-700 hover:bg-green-50" : item.status === "ON_LEAVE" ? "border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-50" : "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-50"}`}>
      {item.status === "ACTIVE" ? "Aktif" : item.status === "ON_LEAVE" ? "Cuti" : "Lulus"}
    </Badge>,
    <article key={`actions-${item.id}`} className="flex justify-end gap-2">
      <Link href={ADMIN_STUDENT_DETAIL(item.name.replace(/\s+/g, "-").toLowerCase())} className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-blue-600">
        <FaCircleInfo className="h-4 w-4" />
      </Link>
      <Link href={`/admin/mahasiswa/${item.id}/edit`} className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-yellow-600">
        <Edit3 className="h-4 w-4" />
      </Link>
      <Delete id={item.id} />
    </article>,
  ]);

  return (
    <div className="mx-auto mt-8 flex w-9/10 items-end justify-between gap-4 lg:w-19/20">
      <Table
        headers={["Profil Mahasiswa", "Akademik", "Sosial Media", "Status", "Aksi"]}
        rows={rows}
        sortable={["Status"]}
      />
    </div>
  );
}