import { Metadata } from "next";
import Hero from "@/app/components/hero";
import LatestWork from "@/app/components/latest-work";
import Lecturer from "@/app/components/lecturer";
import Course from "@/app/components/course";
import Member from "@/app/components/member";

export const dynamic = "force-dynamic";

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
    <main className="container mx-auto w-[90%] flex-grow">
      <Hero />
      <LatestWork />
      <Lecturer />
      <Course />
      <Member />
    </main>
  );
}