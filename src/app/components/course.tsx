"use client";

import { ArrowRight } from "lucide-react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Course() {
  const images = Array.from({ length: 8 }, () => `/images/placeholder.png`);

  return (
    <figure className="from-heading to-primary mb-8 grid cursor-default grid-cols-1 items-center gap-6 rounded-2xl bg-linear-to-br p-6 lg:grid-cols-2 lg:gap-16 lg:p-16">
      <figcaption className="order-last text-center text-white lg:order-first lg:text-left">
        <h2 className="mb-3 text-xl leading-relaxed font-bold lg:mb-8 lg:text-3xl lg:leading-11">
          Belajar dengan kelas standar industri global
        </h2>
        <p className="mb-6 block text-xs leading-loose text-white/80 lg:hidden">
          Lab MMT menyediakan pelatihan intensif Game Development hingga
          Multimedia agar Anda siap berkarya.
        </p>
        <p className="mb-10 hidden text-base leading-8 text-white/80 lg:block">
          Lab Multimedia MMT menyediakan pelatihan intensif berbasis industri.
          Dari <strong>Game Development</strong> hingga{" "}
          <strong>Multimedia</strong>, semua materi dirancang agar Anda siap
          berkarya dan bersertifikat.
        </p>
        <Button size="lg" className="text-heading group w-full cursor-pointer rounded-lg border-0 bg-white px-6! py-4 text-xs font-semibold transition-all duration-300 hover:bg-white/90 sm:w-auto lg:py-6 lg:text-sm">
          Lihat semua kelas
          <ArrowRight className="mt-0.5 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 lg:h-5 lg:w-5" />
        </Button>
      </figcaption>
      <Swiper
        autoplay={{ delay: 0, disableOnInteraction: false }}
        className="order-first block h-[400px] w-full cursor-grab rounded-xl lg:order-last lg:h-[500px]"
        direction="vertical"
        freeMode
        loop
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        spaceBetween={16}
        speed={6000}
      >
        {images.map((source, index) => (
          <SwiperSlide key={index} className="flex w-full items-center justify-between rounded-xl">
            <Image src={source} alt={`Image ${index + 1}`} width={1920} height={1080} className="h-full w-full rounded-lg object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </figure>
  );
}