import type { Metadata } from "next";
import Hero from "@/app/kategori/components/hero";
import CategoryGrid from "@/app/kategori/components/category-grid";
import Stats from "@/app/kategori/components/stats";
import CTA from "@/app/kategori/components/cta";

export const metadata: Metadata = {
  title: "Kategori | Lab Multimedia",
  description: "",
  openGraph: {
    title: "Kategori | Lab Multimedia",
    description: "",
  },
  twitter: {
    title: "Kategori | Lab Multimedia",
    description: "",
  },
};

export default function Kategori() {
  return (
    <main className="relative grow overflow-hidden">
      <Hero />
      <CategoryGrid />
      <Stats />
      <CTA />
    </main>
  );
}