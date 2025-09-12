import { Metadata } from "next";
import Hero from "@/app/components/hero";
import LatestCreation from "@/app/components/latest-creation";

export const metadata: Metadata = {
  title: "Beranda | Lab Multimedia",
  description: "",
  openGraph: {
    title: "Beranda | Lab Multimedia",
    description: "",
  },
  twitter: {
    title: "Beranda | Lab Multimedia",
    description: "",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <LatestCreation />
    </>
  );
}