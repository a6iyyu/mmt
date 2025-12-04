"use client";

import { motion } from "framer-motion";
import { Circle, FileText, GraduationCap, Sparkles, Star, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { container, item } from "@/constants/variants";

export default function Hero() {
  return (
    <motion.section initial="hidden" animate="visible" variants={container} className="relative flex w-full cursor-default items-center justify-center pt-48 pb-12">
      <span className="bg-accent/20 pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full blur-3xl" />
      <span className="bg-secondary/20 pointer-events-none absolute -right-40 -bottom-40 h-96 w-96 rounded-full blur-3xl" />
      <article className="relative mx-auto w-[90%] text-center">
        <Badge className="border-accent/20 text-heading mb-6 inline-flex items-center rounded-full border bg-white/60 px-4 py-2 text-xs font-medium backdrop-blur lg:text-sm">
          <Sparkles className="text-accent mr-2 h-4 w-4 animate-pulse" />
          Karya Mahasiswa & Dosen
        </Badge>
        <motion.h1 variants={item} className="text-heading relative mx-auto mb-4 max-w-3xl text-[26px] leading-10 font-bold lg:text-[44px] lg:leading-14">
          Jelajahi{" "}
          <span className="from-accent to-secondary bg-linear-to-r bg-clip-text text-transparent">
            Karya Multimedia
          </span>
          <span className="from-accent/10 to-secondary/10 absolute -inset-x-10 -inset-y-2 -z-10 bg-linear-to-r blur-2xl"></span>
        </motion.h1>
        <motion.h5 variants={item} className="mx-auto max-w-2xl text-sm leading-8 text-gray-600 lg:text-base lg:leading-9">
          Kumpulan karya inovatif dari mahasiswa dan penelitian dosen di bidang
          multimedia, gim, animasi, UI/UX, VR, dan banyak lagi.
        </motion.h5>
        <motion.div variants={item} className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:flex lg:justify-center lg:gap-8">
          <span className="flex items-center justify-center gap-3 rounded-xl border border-white/40 bg-white/40 py-3 backdrop-blur-sm transition-transform hover:scale-105 lg:border-none lg:bg-transparent lg:p-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-orange-500 shadow-sm lg:bg-orange-100">
              <FileText className="h-4 w-4" />
            </div>
            <h6 className="text-sm font-medium text-gray-600">
              120+ Karya Publikasi
            </h6>
          </span>
          <span className="flex items-center justify-center gap-3 rounded-xl border border-white/40 bg-white/40 py-3 backdrop-blur-sm transition-transform hover:scale-105 lg:border-none lg:bg-transparent lg:p-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-500 shadow-sm lg:bg-blue-100">
              <GraduationCap className="h-4 w-4" />
            </div>
            <h6 className="text-sm font-medium text-gray-600">
              12 Dosen Pembimbing
            </h6>
          </span>
          <span className="flex items-center justify-center gap-3 rounded-xl border border-white/40 bg-white/40 py-3 backdrop-blur-sm transition-transform hover:scale-105 lg:border-none lg:bg-transparent lg:p-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-500 shadow-sm lg:bg-green-100">
              <Users className="h-4 w-4" />
            </div>
            <h6 className="text-sm font-medium text-gray-600">
              200+ Mahasiswa
            </h6>
          </span>
        </motion.div>
      </article>
      <Star className="text-accent/50 absolute top-10 left-10 h-6 w-6 animate-bounce" />
      <Star className="text-secondary/50 absolute right-20 bottom-20 h-8 w-8 animate-pulse" />
      <Circle className="text-accent/30 absolute top-32 right-1/3 h-10 w-10" />
      <Circle className="text-secondary/30 absolute bottom-32 left-1/4 h-12 w-12" />
    </motion.section>
  );
}