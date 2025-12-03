"use client";

import { motion } from "framer-motion";
import { Circle, GraduationCap, Layers, Sparkles, Star, Users } from "lucide-react";
import { container, item } from "@/constants/variants";

const statsData = [
  { value: "12", label: "Dosen Pembimbing", icon: GraduationCap },
  { value: "200+", label: "Mahasiswa Terlibat", icon: Users },
  { value: "5", label: "Bidang Fokus Penelitian", icon: Layers },
];

export default function Hero() {
  return (
    <motion.section
      className="relative flex w-full cursor-default flex-col items-center overflow-hidden pt-32 pb-24 lg:pt-40"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <span className="bg-accent/20 pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full blur-3xl" />
      <span className="bg-accent/10 pointer-events-none absolute top-1/2 left-1/3 h-64 w-64 -translate-y-1/2 rounded-full blur-3xl" />
      <span className="bg-secondary/10 pointer-events-none absolute top-1/4 right-1/4 h-48 w-48 rounded-full blur-3xl" />
      <Star className="text-accent/50 absolute top-40 left-12 h-8 w-8 animate-bounce" />
      <Sparkles className="text-secondary/50 absolute right-12 bottom-20 h-8 w-8 animate-pulse" />
      <Circle className="text-accent/30 animate-spin-slow absolute bottom-60 left-1/3 h-10 w-10" />
      <article className="z-10 flex w-[90%] max-w-7xl flex-col lg:items-center justify-center lg:text-center">
        <motion.h5 className="text-primary text-xs font-bold tracking-widest uppercase lg:text-sm" variants={item}>
          Tim & Struktur Lab
        </motion.h5>
        <motion.h1 className="from-accent to-secondary mt-4 bg-linear-to-r bg-clip-text text-[26px] font-extrabold tracking-tight text-transparent lg:text-[44px]" variants={item}>
          Kenali Tim Inovator Kami
        </motion.h1>
        <motion.p className="mx-auto mt-6 max-w-3xl cursor-default text-sm leading-8 text-gray-600 lg:text-base lg:leading-9" variants={item}>
          Bertemu dengan para dosen, peneliti, dan mahasiswa berbakat yang
          menjadi motor penggerak inovasi di Lab Multimedia.
        </motion.p>
        <motion.div className="lg:border-border/50 lg:bg-card/40 mt-12 w-full max-w-5xl rounded-xl border-none bg-transparent p-0 lg:mt-16 lg:border lg:p-8 lg:shadow-lg lg:backdrop-blur-sm" variants={item}>
          <figure className="lg:divide-border/50 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8 lg:divide-x">
            {statsData.map((stat) => (
              <figcaption key={stat.label} className="flex items-center gap-4 rounded-lg border border-white/40 bg-white/40 p-4 shadow-sm backdrop-blur-sm lg:flex-col lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none">
                <span className="text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm lg:hidden lg:bg-transparent lg:shadow-none">
                  <stat.icon className="h-5 w-5" />
                </span>
                <span className="flex flex-col items-start text-left lg:items-center lg:text-center">
                  <h5 className="text-primary text-base font-bold tracking-tighter lg:text-4xl">
                    {stat.value}
                  </h5>
                  <h5 className="text-xs tracking-wide lg:mt-2 lg:text-sm">
                    {stat.label}
                  </h5>
                </span>
              </figcaption>
            ))}
          </figure>
        </motion.div>
      </article>
    </motion.section>
  );
}