"use client";

import { Users } from "lucide-react";
import { useRef } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions } from "swiper/types";
import { CertificateCard } from "@/app/pelatihan/atoms/certificate-card";
import { certificates } from "@/app/pelatihan/data/certificates";
import { CarouselControls } from "@/components/common/carousel-controls";

export default function Member() {
  const previous = useRef<HTMLButtonElement>(null);
  const next = useRef<HTMLButtonElement>(null);

  return (
    <section className="mx-auto my-12 grid w-full max-w-6xl grid-cols-1 gap-8 px-6 lg:grid-cols-2 lg:items-center lg:px-0">
      <article className="cursor-default text-center lg:text-left">
        <h5 className="inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800 ring-1 ring-sky-200 ring-inset">
          <Users className="mr-2 h-4 w-4" />
          Kualifikasi Standar Industri
        </h5>
        <h2 className="mt-6 text-xl leading-11 font-bold text-slate-900 lg:text-4xl">
          Sertifikasi Resmi &
          <span className="block bg-linear-to-r from-sky-600 to-cyan-400 bg-clip-text text-transparent">
            Mentor Berpengalaman
          </span>
        </h2>
        <p className="mt-3 text-xs leading-8 text-slate-600 lg:text-base">
          Jangan ragukan proses belajarmu. Dapatkan pengakuan kompetensi
          melalui kurikulum berstandar industri yang diajarkan langsung
          oleh mentor-mentor terbaik kami.
        </p>
        <CarouselControls previous={previous} next={next} />
      </article>
      <ul className="relative h-full min-h-[500px] w-full">
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
          spaceBetween={20}
          slidesPerView={1.25}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            1024: { slidesPerView: 1.2, spaceBetween: 30 },
          }}
          className="h-full w-full py-4"
        >
          {certificates.map((certificate) => (
            <SwiperSlide key={certificate.title} className="h-auto">
              <CertificateCard certificate={certificate} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </section>
  );
}