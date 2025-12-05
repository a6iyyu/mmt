import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daftar Anggota | Lab MMT",
  description: "Halaman dasbor untuk administrator Lab MMT.",
  openGraph: {
    title: "Daftar Anggota | Lab MMT",
    description: "Halaman dasbor untuk administrator Lab MMT.",
  },
  twitter: {
    title: "Daftar Anggota | Lab MMT",
    description: "Halaman dasbor untuk administrator Lab MMT.",
  },
};

export default function DaftarAnggota() {
  return (
    <section className="cursor-default p-10">
      <h1 className="mb-4 text-xl font-bold lg:text-3xl">Daftar Anggota</h1>
    </section>
  );
}