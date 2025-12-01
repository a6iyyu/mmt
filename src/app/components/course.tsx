"use client";

import { ArrowRight } from "lucide-react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Course() {
  const images = Array.from({ length: 8 }, () => `/images/placeholder.png`);

  return (
    <figure className="from-heading to-primary mb-8 grid items-center gap-16 rounded-2xl bg-linear-to-br px-16 lg:grid-cols-2">
      <figcaption className="basis-1/2 text-white">
        <h2 className="mb-8 text-lg leading-11 font-bold text-balance lg:text-3xl">
          Belajar dengan kelas standar industri global
        </h2>
        <p className="mb-10 text-base leading-8 text-pretty text-white/80">
          Kelas di Dicoding Academy tersedia bagi yang belum memiliki kemampuan
          programming (dasar) hingga yang sudah profesional.
        </p>
        <Button size="lg" className="group text-heading cursor-pointer rounded-lg border-0 bg-white p-6! text-sm font-semibold transition-all duration-300 hover:bg-white/90">
          Lihat semua kelas
          <ArrowRight className="mt-0.5 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </figcaption>
      <Swiper
        autoplay={{ delay: 0, disableOnInteraction: false }}
        className="h-[500px] w-full basis-1/2 cursor-grab"
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