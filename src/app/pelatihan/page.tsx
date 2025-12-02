import type { Metadata } from "next";
import Hero from "@/app/pelatihan/components/hero";
import Benefits from "@/app/pelatihan/components/benefits";
import Certificates from "@/app/pelatihan/components/certificates";
import List from "@/app/pelatihan/components/list";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pelatihan | Lab Multimedia",
  description: "",
  openGraph: {
    title: "Pelatihan | Lab Multimedia",
    description: "",
  },
  twitter: {
    title: "Pelatihan | Lab Multimedia",
    description: "",
  },
};

export default function Pelatihan() {
  return (
    <main className="relative grow overflow-hidden">
      <Hero />
      <Benefits />
      <div className="mt-4 flex items-center justify-center gap-3">
        <span className="bg-border h-px w-10" />
        <span className="text-xs font-bold tracking-widest">✦</span>
        <span className="bg-border h-px w-10" />
      </div>
      <Certificates />
      <List />
    </main>
  );
}