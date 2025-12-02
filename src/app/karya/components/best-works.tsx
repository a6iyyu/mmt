"use client";

import { Star } from "lucide-react";
import { useRef } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions } from "swiper/types";
import { WorksCard } from "@/app/karya/atoms/works-card";
import { bestWorks } from "@/app/karya/data/best-works";
import { CarouselControls } from "@/components/common/carousel-controls";
import "swiper/swiper.css";
import "swiper/swiper-bundle.css";

export default function BestWorks() {
  const previous = useRef<HTMLButtonElement>(null);
  const next = useRef<HTMLButtonElement>(null);

  return (
    <section className="mx-auto mt-16 grid w-9/10 max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
      <article className="flex cursor-default flex-col items-start justify-start text-left">
        <h5 className="inline-flex w-fit items-center rounded-full bg-sky-100 px-5 py-2.5 text-xs font-semibold text-sky-800 ring-1 ring-sky-200 ring-inset lg:text-sm">
          <Star className="mr-2 h-4 w-4" />
          Karya Unggulan Pilihan
        </h5>
        <h2 className="mt-6 text-xl leading-11 font-bold text-slate-900 lg:text-4xl">
          Inovasi Terbaik{" "}
          <span className="inline bg-linear-to-r from-sky-600 to-cyan-400 bg-clip-text text-transparent">
            Dari Lab Kami
          </span>
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 lg:text-base">
          Lihat lebih dekat beberapa karya paling inovatif dan inspiratif yang
          lahir dari kolaborasi mahasiswa dan dosen di Lab Multimedia.
        </p>
        <CarouselControls previous={previous} next={next} />
      </article>
      <ul className="relative order-first h-full min-h-[500px] w-full lg:order-last">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          onInit={(swiper) => {
            (swiper.params.navigation as NavigationOptions).prevEl = previous.current;
            (swiper.params.navigation as NavigationOptions).nextEl = next.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            1024: { slidesPerView: 1, spaceBetween: 30 },
          }}
          className="h-full w-full py-4"
        >
          {bestWorks.map((project) => (
            <SwiperSlide key={project.title}>
              <WorksCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </section>
  );
}