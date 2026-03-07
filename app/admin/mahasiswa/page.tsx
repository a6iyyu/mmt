import type { Metadata } from "next";
import Statistics from "@/app/admin/mahasiswa/components/statistics";
import Filter from "@/app/admin/mahasiswa/components/filter";
import List from "@/app/admin/mahasiswa/components/list";
import { getStudents, getStudentStats } from "@/app/admin/mahasiswa/services/student";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

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

export default async function DaftarAnggota({ searchParams }: { searchParams: Promise<{ query?: string; status?: string }> }) {
  const resolvedParams = await searchParams;
  const query = resolvedParams?.query || "";
  const status = resolvedParams?.status || "";

  const students = await getStudents(query, status);
  const stats = await getStudentStats();

  return (
    <>
      <span className="absolute inset-0 -z-10 bg-[url('/images/motion-grid.svg')] mask-[linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center opacity-10" />
      <Statistics stats={stats} />
      <Filter />
      <List students={students} />
    </>
  );
}