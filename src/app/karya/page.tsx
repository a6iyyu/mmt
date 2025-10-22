import type { Metadata } from "next";
import Hero from "@/app/karya/components/hero";
import BestWorks from "@/app/karya/components/best-works";
import LatestWorksProvider from "@/app/karya/providers/latest-works";

export const dynamic = "force-dynamic";

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
      <span className="from-accent/5 to-secondary/5 pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b" />
      <Hero />
      <BestWorks />
      <LatestWorksProvider />
    </main>
  );
}