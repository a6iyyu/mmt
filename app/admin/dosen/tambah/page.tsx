import { Home } from "lucide-react";
import type { Metadata } from "next";
import { PiStudentFill } from "react-icons/pi";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ADMIN_DASHBOARD, ADMIN_LECTURERS } from "@/constants/route";
import FormulirTambahDosen from "@/app/admin/dosen/tambah/components/form";

export const metadata: Metadata = {
  title: "Tambah Dosen | Lab MMT",
  description: "Halaman untuk menambahkan dosen baru di Lab MMT.",
  openGraph: {
    title: "Tambah Dosen | Lab MMT",
    description: "Halaman untuk menambahkan dosen baru di Lab MMT.",
  },
  twitter: {
    title: "Tambah Dosen | Lab MMT",
    description: "Halaman untuk menambahkan dosen baru di Lab MMT.",
  },
};

export default function TambahDosen() {
  return (
    <section className="mx-auto mt-8 flex w-9/10 flex-col gap-4 lg:w-19/20">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={ADMIN_DASHBOARD} className="flex items-center gap-2">
              <Home className="h-4 w-4" /> Dasbor
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={ADMIN_LECTURERS} className="flex items-center gap-2">
              <PiStudentFill className="h-4 w-4" /> Dosen
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="cursor-default">
              Tambah Dosen
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="cursor-default">
        <h1 className="text-2xl font-bold text-gray-800">
          Tambah Dosen Baru
        </h1>
        <p className="mt-1 mb-2.5 text-sm text-gray-500">
          Isi formulir di bawah untuk membuat dosen baru.
        </p>
      </div>
      <FormulirTambahDosen />
    </section>
  );
}