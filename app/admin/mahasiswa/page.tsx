import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daftar Mahasiswa | Lab MMT",
  description: "Halaman daftar mahasiswa untuk administrator Lab MMT.",
  openGraph: {
    title: "Daftar Mahasiswa | Lab MMT",
    description: "Halaman daftar mahasiswa untuk administrator Lab MMT.",
  },
  twitter: {
    title: "Daftar Mahasiswa | Lab MMT",
    description: "Halaman daftar mahasiswa untuk administrator Lab MMT.",
  },
};

export default function DaftarAnggota() {
  return (
    <>
      <span className="absolute inset-0 -z-10 bg-[url('/images/motion-grid.svg')] mask-[linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center opacity-10" />
    </>
  );
}