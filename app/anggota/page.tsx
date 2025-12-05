import type { Metadata } from "next";
import Hero from "@/app/anggota/components/hero";
import Lecturer from "@/app/anggota/components/lecturer";
import Student from "@/app/anggota/components/student";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Anggota | Lab MMT",
  description: "",
  openGraph: {
    title: "Anggota | Lab MMT",
    description: "",
  },
  twitter: {
    title: "Anggota | Lab MMT",
    description: "",
  },
};

export default function Anggota() {
  return (
    <main className="relative grow overflow-hidden">
      <Hero />
      <Lecturer />
      <Student />
    </main>
  );
}