import { Calendar, Edit3, Trash2, Users } from "lucide-react";
import { FaCircleInfo } from "react-icons/fa6";
import { students } from "@/app/admin/mahasiswa/data/students";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import Table from "@/components/common/table";

// prettier-ignore
export default function List() {
  const rows = students.map((item) => [
    <article key="info" className="flex w-full gap-4">
      <span className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </span>
      <span>
        <h4 className="line-clamp-1 font-semibold text-gray-900">
          {item.name}
        </h4>
        <h5 className="mt-1 inline-block rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-bold tracking-wider text-gray-500 uppercase">
          {item.nim}
        </h5>
      </span>
    </article>,
    <article key="team" className="flex w-full flex-col gap-1">
      <span className="flex items-center gap-2 text-sm text-gray-700">
        <Calendar className="h-3.5 w-3.5 text-gray-400" /> {item.batch}
      </span>
      <span className="flex items-center gap-2 text-xs text-gray-500">
        <Users className="h-3.5 w-3.5 text-gray-400" />{" "}
        {Array.isArray(item.focus) ? item.focus.join(", ") : item.focus}
      </span>
    </article>,
    <article key="link" className="w-40 truncate wrap-break-word">
      <Link href={item.linkedin as string} className="text-xs text-blue-600 underline lg:text-sm">{item.linkedin}</Link>
    </article>,
    <Badge key="status" className={`pointer-events-none border px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase ${item.status === "Aktif" ? "border-green-200 bg-green-50 text-green-700 hover:bg-green-50" : item.status === "Cuti" ? "border-red-200 bg-red-50 text-red-700 hover:bg-red-50" : "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-50"}`}>
      {item.status}
    </Badge>,
    <article key="actions" className="flex justify-end gap-2">
      <Link href="" className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-blue-600">
        <FaCircleInfo className="h-4 w-4" />
      </Link>
      <Link href="" className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-yellow-600">
        <Edit3 className="h-4 w-4" />
      </Link>
      <Link href="" className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-red-600">
        <Trash2 className="h-4 w-4" />
      </Link>
    </article>,
  ]);

  return (
    <>
      <div className="mx-auto mt-8 flex w-9/10 items-end justify-between gap-4 lg:w-19/20">
        <Table headers={["Info Karya", "Tim Produksi", "LinkedIn", "Status", "Aksi"]} rows={rows} sortable={["Status"]} />
      </div>
    </>
  );
}