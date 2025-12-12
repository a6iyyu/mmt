import { Dumbbell, Home } from "lucide-react";
import type { Metadata } from "next";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ADMIN_COURSES, ADMIN_DASHBOARD } from "@/constants/route";
import FormulirTambahPelatihan from "@/app/admin/pelatihan/tambah/components/form";

export const metadata: Metadata = {
  title: "Tambah Pelatihan | Lab MMT",
  description: "Halaman untuk menambahkan pelatihan baru di Lab MMT.",
  openGraph: {
    title: "Tambah Pelatihan | Lab MMT",
    description: "Halaman untuk menambahkan pelatihan baru di Lab MMT.",
  },
  twitter: {
    title: "Tambah Pelatihan | Lab MMT",
    description: "Halaman untuk menambahkan pelatihan baru di Lab MMT.",
  },
};

export default function TambahPelatihan() {
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
            <BreadcrumbLink href={ADMIN_COURSES} className="flex items-center gap-2">
              <Dumbbell className="h-4 w-4" /> Pelatihan
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="cursor-default">Tambah Pelatihan</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="cursor-default">
        <h1 className="text-2xl font-bold text-gray-800">
          Tambah Pelatihan Baru
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Isi formulir di bawah untuk membuat jadwal pelatihan baru.
        </p>
      </div>
      <FormulirTambahPelatihan />
    </section>
  );
}