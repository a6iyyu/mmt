import { Metadata } from "next";
import Hero from "@/app/riset/components/hero";

export const metadata: Metadata = {
  title: "Riset | Lab MMT",
  description: "Halaman riset Lab MMT",
  openGraph: {
    title: "Riset | Lab MMT",
    description: "Halaman riset Lab MMT",
  },
  twitter: {
    title: "Riset | Lab MMT",
    description: "Halaman riset Lab MMT",
  },
}

export default function Riset() {
  return (
    <main className="relative grow overflow-hidden">
      <Hero />
    </main>
  );
}