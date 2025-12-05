import type { Metadata } from "next";
import Filter from "@/app/admin/pelatihan/components/filter";
import Statistics from "@/app/admin/pelatihan/components/statistics";
import List from "@/app/admin/pelatihan/components/list";

export const metadata: Metadata = {
  title: "Daftar Pelatihan | Lab MMT",
  description: "Halaman daftar pelatihan untuk administrator Lab MMT.",
  openGraph: {
    title: "Daftar Pelatihan | Lab MMT",
    description: "Halaman daftar pelatihan untuk administrator Lab MMT.",
  },
  twitter: {
    title: "Daftar Pelatihan | Lab MMT",
    description: "Halaman daftar pelatihan untuk administrator Lab MMT.",
  },
};

export default function DaftarPelatihan() {
  return (
    <>
      <span className="absolute inset-0 -z-10 bg-[url('/images/motion-grid.svg')] mask-[linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center opacity-10" />
      <Statistics />
      <Filter />
      <List />
    </>
  );
}