import type { Metadata } from "next";
import Form from "@/app/masuk/components/form";
import Slider from "@/app/masuk/components/slider";

export const metadata: Metadata = {
  title: "Masuk | Lab Multimedia",
  description: "",
  openGraph: {
    title: "Masuk | Lab Multimedia",
    description: "",
  },
  twitter: {
    title: "Masuk | Lab Multimedia",
    description: "",
  },
};

export default function Masuk() {
  return (
    <main className="relative flex-grow overflow-hidden">
      <Form />
      <Slider />
    </main>
  );
}