"use client";

import { Edit3, Mail, Trash2 } from "lucide-react";
import { FaCircleInfo, FaLinkedin } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import Table from "@/components/common/table";

type Lecturer = {
  id: number;
  name: string;
  nip: string | null;
  photo: string | null;
  field: string;
  email: string;
  linkedin: string | null;
};

export default function List({ lecturers }: { lecturers: Lecturer[] }) {
  const handleDelete = async (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      console.log("Jalankan API Delete untuk ID:", id);
    }
  };

  if (lecturers.length === 0) {
    return (
      <div className="mx-auto mt-8 flex w-9/10 flex-col items-center justify-center gap-4 py-20 lg:w-19/20">
        <p className="text-gray-500">Belum ada data dosen. Silakan tambah data baru.</p>
      </div>
    );
  }

  const rows = lecturers.map((item) => [
    <article key={`info-${item.id}`} className="flex w-full gap-4">
      <span className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
        <Image src={item.photo || "/images/placeholder.png"} alt={item.name} fill className="object-cover" />
      </span>
      <span>
        <h4 className="line-clamp-1 font-semibold text-gray-900">
          {item.name}
        </h4>
        <h5 className="mt-1 inline-block rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-bold tracking-wider text-gray-500 uppercase">
          {item.nip || "-"}
        </h5>
      </span>
    </article>,
    <article key={`expertise-${item.id}`} className="flex w-full max-w-62.5 flex-wrap gap-1.5">
      <Badge variant="outline" className="border-blue-200 bg-blue-50/50 px-2 py-0.5 text-[10px] font-medium whitespace-nowrap text-blue-700">
        {item.field}
      </Badge>
    </article>,
    <article key={`contact-${item.id}`} className="flex w-full flex-col gap-1.5 text-sm text-gray-600">
      <div className="flex items-center gap-2.5">
        <Mail className="h-3.5 w-3.5 text-gray-400" />
        <h5 className="cursor-pointer truncate transition-colors hover:text-blue-600">
          {item.email}
        </h5>
      </div>
      <div className="flex items-center gap-2.5">
        <FaLinkedin className="h-3.5 w-3.5 text-gray-400" />
        <h5 className="font-mono text-xs">{item.linkedin || "-"}</h5>
      </div>
    </article>,
    <article key={`actions-${item.id}`} className="flex justify-end gap-2">
      <Link href={`/admin/dosen/${item.id}`} className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-blue-600">
        <FaCircleInfo className="h-4 w-4" />
      </Link>
      <Link href={`/admin/dosen/${item.id}/edit`} className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-yellow-600">
        <Edit3 className="h-4 w-4" />
      </Link>
      <button 
        onClick={() => handleDelete(item.id)}
        className="cursor-pointer rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-red-600"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </article>,
  ]);

  return (
    <div className="mx-auto mt-8 flex w-9/10 items-end justify-between gap-4 lg:w-19/20">
      <Table headers={["Profil Dosen", "Keahlian", "Kontak", "Aksi"]} rows={rows} sortable={["Keahlian"]} />
    </div>
  );
}