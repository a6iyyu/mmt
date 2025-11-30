import type { Metadata } from "next";
import Hero from "@/app/pelatihan/components/hero";
import Benefits from "@/app/pelatihan/components/benefits";
import Certificates from "@/app/pelatihan/components/certificates";
import List from "@/app/pelatihan/components/list";
import CallToAction from "@/app/pelatihan/components/cta";

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
    <main className="relative flex-grow overflow-hidden">
      <Hero />
      <Benefits />
      <Certificates />
      <List />
      <CallToAction />
    </main>
  );
}