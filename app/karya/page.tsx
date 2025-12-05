import type { Metadata } from "next";
import Hero from "@/app/karya/components/hero";
import BestWorks from "@/app/karya/components/best-works";
import LatestWorksProvider from "@/app/karya/providers/latest-works";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Karya | Lab MMT",
  description: "",
  openGraph: {
    title: "Karya | Lab MMT",
    description: "",
  },
  twitter: {
    title: "Karya | Lab MMT",
    description: "",
  },
};

export default function Karya() {
  return (
    <main className="relative grow overflow-hidden">
      <span className="from-accent/5 to-secondary/5 pointer-events-none absolute inset-0 -z-10 bg-linear-to-b" />
      <Hero />
      <BestWorks />
      <LatestWorksProvider />
    </main>
  );
}