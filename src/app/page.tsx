import { Metadata } from "next";
import Hero from "@/app/components/hero";
import LatestCreation from "@/app/components/latest-creation";
import Lecturer from "@/app/components/lecturer";
import Course from "@/app/components/course";
import Member from "@/app/components/member";

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
    <main className="container mx-auto w-[90%]">
      <Hero />
      <LatestCreation />
      <Lecturer />
      <Course />
      <Member />
    </main>
  );
}