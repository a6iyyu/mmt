"use client";

import { ArrowLeft, ArrowRight, Star, ExternalLink } from "lucide-react";
import { RefObject, useRef } from "react";
import { FaGithub } from "react-icons/fa6";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions } from "swiper/types";
import { bestWorks } from "@/app/karya/data/best-works";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import "swiper/swiper.css";
import "swiper/swiper-bundle.css";

function WorksCard({ project }: { project: (typeof bestWorks)[0] }) {
  return (
    <figure className="group relative flex h-[480px] w-full cursor-pointer flex-col justify-end overflow-hidden rounded-2xl bg-slate-900 transition-shadow duration-300">
      <Image src={project.image} alt={`Gambar ${project.title}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
      <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" aria-hidden="true" />
      <figcaption className="relative z-10 space-y-4 p-6 text-white">
        <div>
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-sky-300">{project.category}</p>
        </div>
        <span className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
          {project.tech.map((skill) => (
            <Badge key={skill} variant="secondary" className="bg-white/10 text-white backdrop-blur-sm">
              {skill}
            </Badge>
          ))}
        </span>
        <span className="flex items-center space-x-3 pt-2">
          <Link href={project.links.demo} rel="noopener noreferrer" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
            <ExternalLink className="h-4 w-4" />
          </Link>
          <Link href={project.links.code} rel="noopener noreferrer" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
            <FaGithub className="h-4 w-4" />
          </Link>
        </span>
      </figcaption>
    </figure>
  );
}

function CarouselControls({ previous, next }: { previous: RefObject<HTMLButtonElement | null>; next: RefObject<HTMLButtonElement | null> }) {
  return (
    <nav className="mt-10 flex items-center justify-center gap-4 lg:justify-start">
      <Button ref={previous} variant="outline" size="icon" className="h-12 w-12 cursor-pointer rounded-full border-slate-300 hover:bg-slate-100">
        <ArrowLeft className="h-6 w-6 text-slate-700" />
      </Button>
      <Button ref={next} variant="outline" size="icon" className="h-12 w-12 cursor-pointer rounded-full border-slate-300 hover:bg-slate-100">
        <ArrowRight className="h-6 w-6 text-slate-700" />
      </Button>
    </nav>
  );
}

export default function BestWorks() {
  const previous = useRef<HTMLButtonElement>(null);
  const next = useRef<HTMLButtonElement>(null);

  return (
    <section className="mx-auto mt-16 grid w-[90%] max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
      <article className="cursor-default text-center lg:text-left">
        <h5 className="inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800 ring-1 ring-sky-200 ring-inset">
          <Star className="mr-2 h-4 w-4" />
          Karya Unggulan Pilihan
        </h5>
        <h2 className="mt-6 text-xl leading-11 font-bold text-slate-900 lg:text-4xl">
          Inovasi Terbaik{" "}
          <span className="inline bg-gradient-to-r from-sky-600 to-cyan-400 bg-clip-text text-transparent">
            Dari Lab Kami
          </span>
        </h2>
        <p className="mt-3 text-xs leading-8 text-slate-600 lg:text-base">
          Lihat lebih dekat beberapa karya paling inovatif dan inspiratif yang
          lahir dari kolaborasi mahasiswa dan dosen di Lab Multimedia.
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