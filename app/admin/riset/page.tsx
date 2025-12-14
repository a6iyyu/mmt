import type { Metadata } from "next";
import Statistics from "@/app/admin/riset/components/statistics";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Daftar Riset | Lab MMT",
  description: "Halaman daftar riset untuk administrator Lab MMT.",
  openGraph: {
    title: "Daftar Riset | Lab MMT",
    description: "Halaman daftar riset untuk administrator Lab MMT.",
  },
  twitter: {
    title: "Daftar Riset | Lab MMT",
    description: "Halaman daftar riset untuk administrator Lab MMT.",
  },
};

export default async function DaftarRiset() {
  return (
    <>
      <span className="absolute inset-0 -z-10 bg-[url('/images/motion-grid.svg')] mask-[linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center opacity-10" />
      <Statistics />
    </>
  );
}