import type { Metadata } from "next";
// import { Prisma } from "@/lib/prisma";
import { course } from "@/app/admin/pelatihan/data/course";
import Statistics from "@/app/admin/pelatihan/components/statistics";
import Filter from "@/app/admin/pelatihan/components/filter";
import List from "@/app/admin/pelatihan/components/list";

export const dynamic = "force-dynamic";

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

export default async function DaftarPelatihan() {
  // const trainings = await Prisma.pelatihan.findMany({
  //   orderBy: { created_at: "desc" },
  // });

  return (
    <>
      <span className="absolute inset-0 -z-10 bg-[url('/images/motion-grid.svg')] mask-[linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center opacity-10" />
      <Statistics />
      <Filter />
      <List data={course} />
    </>
  );
}