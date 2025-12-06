import type { Metadata } from "next";
import Statistics from "@/app/admin/dosen/components/statistics";
import Filter from "@/app/admin/dosen/components/filter";
import List from "@/app/admin/dosen/components/list";

export const metadata: Metadata = {
  title: "Daftar Dosen | Lab MMT",
  description: "Halaman daftar dosen untuk administrator Lab MMT.",
  openGraph: {
    title: "Daftar Dosen | Lab MMT",
    description: "Halaman daftar dosen untuk administrator Lab MMT.",
  },
  twitter: {
    title: "Daftar Dosen | Lab MMT",
    description: "Halaman daftar dosen untuk administrator Lab MMT.",
  },
};

export default function Dosen() {
  return (
    <>
      <span className="absolute inset-0 -z-10 bg-[url('/images/motion-grid.svg')] mask-[linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center opacity-10" />
      <Statistics />
      <Filter />
      <List />
    </>
  );
}