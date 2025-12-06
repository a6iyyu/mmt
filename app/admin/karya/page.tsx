import type { Metadata } from "next";
import Statistics from "@/app/admin/karya/components/statistics";
import Filter from "@/app/admin/karya/components/filter";
import List from "@/app/admin/karya/components/list";

export const metadata: Metadata = {
  title: "Daftar Karya | Lab MMT",
  description: "Halaman daftar karya untuk administrator Lab MMT.",
  openGraph: {
    title: "Daftar Karya | Lab MMT",
    description: "Halaman daftar karya untuk administrator Lab MMT.",
  },
  twitter: {
    title: "Daftar Karya | Lab MMT",
    description: "Halaman daftar karya untuk administrator Lab MMT.",
  },
};

export default function Karya() {
  return (
    <>
      <span className="absolute inset-0 -z-10 bg-[url('/images/motion-grid.svg')] mask-[linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center opacity-10" />
      <Statistics />
      <Filter />
      <List />
    </>
  );
}