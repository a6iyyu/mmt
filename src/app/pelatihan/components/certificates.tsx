"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { useRef } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions } from "swiper/types";
import { CertificateCard } from "@/app/pelatihan/atoms/certificate-card";
import { certificates } from "@/app/pelatihan/data/certificates";
import { CarouselControls } from "@/components/common/carousel-controls";
import { container, item } from "@/constants/variants";

export default function Member() {
  const previous = useRef<HTMLButtonElement>(null);
  const next = useRef<HTMLButtonElement>(null);

  return (
    <motion.section initial="hidden" animate="visible" variants={container} className="mx-auto mt-20 mb-16 grid w-9/10 max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
      <motion.article variants={item} className="flex cursor-default flex-col items-start justify-start text-left">
        <h5 className="inline-flex w-fit items-center rounded-full bg-sky-100 px-5 py-2.5 text-xs font-semibold text-sky-800 ring-1 ring-sky-200 ring-inset lg:text-sm">
          <Users className="mr-2 h-4 w-4" />
          Kualifikasi Standar Industri
        </h5>
        <h2 className="mt-6 text-[26px] leading-tight font-bold text-slate-900 lg:text-[44px]">
          Sertifikasi Resmi &
          <span className="block bg-linear-to-r from-sky-600 to-cyan-400 bg-clip-text text-transparent">
            Mentor Berpengalaman
          </span>
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 lg:text-base">
          Jangan ragukan proses belajarmu. Dapatkan pengakuan kompetensi melalui
          kurikulum berstandar industri yang diajarkan langsung oleh
          mentor-mentor terbaik kami.
        </p>
        <CarouselControls previous={previous} next={next} />
      </motion.article>
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
          {certificates.map((certificate) => (
            <SwiperSlide key={certificate.title} className="h-auto">
              <CertificateCard certificate={certificate} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </motion.section>
  );
}