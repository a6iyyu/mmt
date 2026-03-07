import type { Metadata } from "next";
import Statistics from "@/app/admin/dosen/components/statistics";
import Filter from "@/app/admin/dosen/components/filter";
import List from "@/app/admin/dosen/components/list";
import { getLecturers, getLecturerStats } from "@/app/admin/dosen/services/lecturer";

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

export default async function Dosen({ searchParams }: { searchParams: Promise<{ query?: string; position?: string }> }) {
  const resolvedParams = await searchParams;
  const query = resolvedParams?.query || "";
  const position = resolvedParams?.position || "";

  const lecturers = await getLecturers(query, position);
  const stats = await getLecturerStats();

  return (
    <>
      <span className="absolute inset-0 -z-10 bg-[url('/images/motion-grid.svg')] mask-[linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center opacity-10" />
      <Statistics stats={stats} />
      <Filter />
      <List lecturers={lecturers} />
    </>
  );
}