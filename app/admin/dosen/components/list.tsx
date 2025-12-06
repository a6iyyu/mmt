import { Edit3, Mail, Phone, Trash2 } from "lucide-react";
import { FaCircleInfo } from "react-icons/fa6";
import { lecturers } from "@/app/admin/dosen/data/lecturers";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import Table from "@/components/common/table";

// prettier-ignore
export default function List() {
  const rows = lecturers.map((item) => [
    <article key="info" className="flex w-full gap-4">
      <span className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </span>
      <span>
        <h4 className="line-clamp-1 font-semibold text-gray-900">
          {item.name}
        </h4>
        <h5 className="mt-1 inline-block rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-bold tracking-wider text-gray-500 uppercase">
          {item.nip}
        </h5>
      </span>
    </article>,
    <article key="expertise" className="flex w-full max-w-[250px] flex-wrap gap-1.5">
      {item.expertise.map((skill, index) => (
        <Badge key={index} variant="outline" className="border-blue-200 bg-blue-50/50 px-2 py-0.5 text-[10px] font-medium whitespace-nowrap text-blue-700">
          {skill}
        </Badge>
      ))}
    </article>,
    <article key="contact" className="flex w-full flex-col gap-1.5 text-sm text-gray-600">
      <div className="flex items-center gap-2.5">
        <Mail className="h-3.5 w-3.5 text-gray-400" />
        <h5 className="cursor-pointer truncate transition-colors hover:text-blue-600">
          {item.email}
        </h5>
      </div>
      <div className="flex items-center gap-2.5">
        <Phone className="h-3.5 w-3.5 text-gray-400" />
        <h5 className="font-mono text-xs">{item.phone}</h5>
      </div>
    </article>,
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
        <Table headers={["Profil Dosen", "Keahlian", "Kontak", "Aksi"]} rows={rows} sortable={["Keahlian"]} />
      </div>
    </>
  );
}