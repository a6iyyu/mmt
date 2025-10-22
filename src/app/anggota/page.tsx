import type { Metadata } from "next";
import Hero from "@/app/anggota/components/hero";
import List from "@/app/anggota/components/list";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Anggota | Lab Multimedia",
  description: "",
  openGraph: {
    title: "Anggota | Lab Multimedia",
    description: "",
  },
  twitter: {
    title: "Anggota | Lab Multimedia",
    description: "",
  },
};

export default function Anggota() {
  return (
    <main className="relative flex-grow overflow-hidden">
      <Hero />
      <List />
    </main>
  );
}