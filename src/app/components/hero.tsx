"use client";

import { ArrowRight, Code, Palette, RectangleGoggles, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="mt-20 py-16">
      <div className="container mx-auto flex flex-col items-center justify-between gap-10 px-6 lg:flex-row">
        {/* Gambar */}
        <figure className="relative">
          <Image src="/images/mascot.png" alt="Ilustrasi multimedia" width={1080} height={720} className="hidden h-auto w-full object-cover lg:block lg:basis-1/3" loading="lazy" />
          <span className="from-accent to-secondary absolute -top-4 -right-16 flex h-16 w-16 animate-bounce items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg">
            <Code className="h-8 w-8 text-white" />
          </span>
          <span className="from-secondary to-primary absolute -right-32 bottom-6 flex h-14 w-14 animate-bounce items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg">
            <Palette className="h-7 w-7 text-white" />
          </span>
          <span className="from-primary to-hover-blue absolute -top-10 left-8 flex h-12 w-12 animate-bounce items-center justify-center rounded-xl bg-gradient-to-br shadow-lg delay-300">
            <Sparkles className="h-6 w-6 text-white" />
          </span>
        </figure>

        {/* Konten */}
        <figure className="relative flex flex-col lg:basis-11/20">
          <span className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-[#FF7626]/20 to-[#28AFB0]/20 opacity-60 blur-2xl" />
          <span className="border-accent/20 from-accent/10 to-secondary/10 mb-6 inline-flex w-fit items-center rounded-full border bg-gradient-to-r px-4 py-2">
            <Sparkles className="text-accent mr-2 h-4 w-4" />
            <h5 className="cursor-default text-sm font-medium text-[#314158]">
              Inovasi Multimedia Terdepan
            </h5>
          </span>
          <h1 className="mb-4 cursor-default text-2xl leading-14 font-bold text-[#314158] lg:text-[44px]">
            Selamat Datang di Lab{" "}
            <span className="from-accent to-secondary bg-gradient-to-r bg-clip-text text-transparent">
              Multimedia
            </span>
          </h1>
          <figcaption className="mb-6 cursor-default text-base leading-9 text-gray-600 lg:text-lg">
            Tempat kolaborasi mahasiswa dan dosen dalam menciptakan karya
            multimedia inovatif yang mengubah dunia digital.
          </figcaption>
          <Button onClick={() => router.push("/karya")} className="from-accent to-secondary hover:from-secondary hover:to-accent group w-fit cursor-pointer rounded-lg border-0 bg-gradient-to-r !px-7.5 py-6.5 text-sm font-semibold text-white shadow-xl transition-all duration-300 ease-in-out lg:text-base lg:hover:shadow-2xl">
            Jelajahi Karya
            <ArrowRight className="mt-0.25 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <figcaption className="flex cursor-default flex-wrap gap-6 pt-8">
            <span className="flex items-center space-x-2">
              <Code className="text-accent h-5 w-5" />
              <h5 className="font-medium text-[#314158]">Game Development</h5>
            </span>
            <span className="flex items-center space-x-2">
              <Palette className="text-secondary h-5 w-5" />
              <h5 className="font-medium text-[#314158]">UI/UX Design</h5>
            </span>
            <span className="flex items-center space-x-2">
              <RectangleGoggles className="text-primary h-5 w-5" />
              <h5 className="font-medium text-[#314158]">AR/VR</h5>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}