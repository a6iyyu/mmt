import { Home, Microscope } from "lucide-react";
import type { Metadata } from "next";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ADMIN_DASHBOARD, ADMIN_RESEARCH } from "@/constants/route";
import FormulirTambahRiset from "@/app/admin/riset/tambah/components/form";

export const metadata: Metadata = {
  title: "Tambah Riset | Lab MMT",
  description: "Halaman untuk menambahkan riset baru di Lab MMT.",
  openGraph: {
    title: "Tambah Riset | Lab MMT",
    description: "Halaman untuk menambahkan riset baru di Lab MMT.",
  },
  twitter: {
    title: "Tambah Riset | Lab MMT",
    description: "Halaman untuk menambahkan riset baru di Lab MMT.",
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
            <BreadcrumbLink href={ADMIN_RESEARCH} className="flex items-center gap-2">
              <Microscope className="h-4 w-4" /> Riset
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="cursor-default">
              Tambah Riset
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="cursor-default">
        <h1 className="text-2xl font-bold text-gray-800">
          Tambah Riset Baru
        </h1>
        <p className="mt-1 mb-2.5 text-sm text-gray-500">
          Isi formulir di bawah untuk membuat jadwal riset baru.
        </p>
      </div>
      <FormulirTambahRiset />
    </section>
  );
}