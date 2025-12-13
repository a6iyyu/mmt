import { Home, Palette } from "lucide-react";
import type { Metadata } from "next";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ADMIN_CREATIONS, ADMIN_DASHBOARD } from "@/constants/route";
import FormulirTambahKarya from "@/app/admin/karya/tambah/components/form";

export const metadata: Metadata = {
  title: "Tambah Karya | Lab MMT",
  description: "Halaman untuk menambahkan karya baru di Lab MMT.",
  openGraph: {
    title: "Tambah Karya | Lab MMT",
    description: "Halaman untuk menambahkan karya baru di Lab MMT.",
  },
  twitter: {
    title: "Tambah Karya | Lab MMT",
    description: "Halaman untuk menambahkan karya baru di Lab MMT.",
  },
};

export default function TambahKarya() {
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
            <BreadcrumbLink href={ADMIN_CREATIONS} className="flex items-center gap-2">
              <Palette className="h-4 w-4" /> Karya
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="cursor-default">
              Tambah Karya
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="cursor-default">
        <h1 className="text-2xl font-bold text-gray-800">
          Tambah Karya Baru
        </h1>
        <p className="mt-1 mb-2.5 text-sm text-gray-500">
          Isi formulir di bawah untuk membuat karya baru.
        </p>
      </div>
      <FormulirTambahKarya />
    </section>
  );
}