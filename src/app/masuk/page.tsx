import type { Metadata } from "next";
import Form from "@/app/masuk/components/form";
import Slider from "@/app/masuk/components/slider";

export const dynamic = "force-dynamic";

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
    <main className="bg-background flex min-h-screen w-full">
      <section className="flex w-full flex-col justify-center px-8 sm:px-12 lg:w-1/2 xl:px-24">
        <Form />
      </section>
      <section className="hidden h-screen w-1/2 overflow-hidden lg:block">
        <Slider />
      </section>
    </main>
  );
}