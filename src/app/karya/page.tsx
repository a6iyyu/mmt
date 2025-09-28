import type { Metadata } from "next";
import Hero from "@/app/karya/components/hero";
import LatestWork from "@/app/karya/components/latest-work";

export const metadata: Metadata = {
  title: "Karya | Lab Multimedia",
  description: "",
  openGraph: {
    title: "Karya | Lab Multimedia",
    description: "",
  },
  twitter: {
    title: "Karya | Lab Multimedia",
    description: "",
  },
};

export default function Karya() {
  return (
    <main className="relative flex-grow overflow-hidden">
      <div className="from-accent/5 to-secondary/5 pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b" />
      <Hero />
      <LatestWork />
    </main>
  );
}