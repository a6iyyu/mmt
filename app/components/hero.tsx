"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Palette, RectangleGoggles, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CREATIONS } from "@/constants/route";
import { container, item } from "@/constants/variants";
import Image from "next/image";

export default function Hero() {
  const router = useRouter();

  return (
    <motion.section initial="hidden" animate="visible" variants={container} className="mt-28 flex flex-col items-center justify-between gap-10 px-6 py-16 lg:flex-row">
      <span className="absolute inset-0 bg-[url('/images/motion-grid.svg')] mask-[linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center opacity-10" />
      <motion.div className="relative" variants={item}>
        <Image src="/images/mascot.png" alt="MMT Mascout" width={1080} height={720} className="hidden h-auto w-80 object-cover lg:block lg:basis-1/3" loading="lazy" />
        <span className="from-accent to-secondary absolute -top-4 -right-16 hidden h-16 w-16 animate-bounce items-center justify-center rounded-2xl bg-linear-to-br shadow-lg lg:flex">
          <Code className="h-8 w-8 text-white" />
        </span>
        <span className="from-secondary to-primary absolute -right-24 -bottom-6 hidden h-14 w-14 animate-bounce items-center justify-center rounded-2xl bg-linear-to-br shadow-lg lg:flex">
          <Palette className="h-7 w-7 text-white" />
        </span>
        <span className="from-primary to-hover-blue absolute -top-10 left-8 hidden h-12 w-12 animate-bounce items-center justify-center rounded-xl bg-linear-to-br shadow-lg delay-300 lg:flex">
          <Sparkles className="h-6 w-6 text-white" />
        </span>
      </motion.div>
      <motion.figure className="relative flex flex-col lg:basis-11/20" variants={item}>
        <span className="absolute -inset-4 -z-10 rounded-3xl bg-linear-to-br from-[#FF7626]/20 to-[#28AFB0]/20 opacity-60 blur-2xl" />
        <span className="border-accent/20 from-accent/10 to-secondary/10 mb-4 inline-flex w-fit items-center rounded-full border bg-linear-to-r px-4 py-2">
          <Sparkles className="text-accent mr-2 h-4 w-4" />
          <h5 className="text-heading cursor-default text-xs font-medium lg:text-sm">
            Inovasi Multimedia Terdepan
          </h5>
        </span>
        <h1 className="text-heading mb-4 cursor-default text-[26px] leading-10 font-bold lg:text-[44px] lg:leading-14">
          Selamat Datang di Lab{" "}
          <span className="from-accent to-secondary bg-linear-to-r bg-clip-text text-transparent">
            Multimedia
          </span>
        </h1>
        <figcaption className="mb-9 cursor-default text-sm leading-8 text-gray-600 lg:mb-6 lg:text-base lg:leading-9">
          Tempat kolaborasi mahasiswa dan dosen dalam menciptakan karya
          multimedia inovatif yang mengubah dunia digital.
        </figcaption>
        <Button onClick={() => router.push(CREATIONS)} className="from-accent to-secondary hover:from-secondary hover:to-accent group w-fit cursor-pointer rounded-lg border-0 bg-linear-to-r px-6.5! py-5.5 text-[12px] font-semibold text-white shadow-xl transition-all duration-300 ease-in-out lg:px-7.5! lg:py-6.5 lg:text-base lg:hover:shadow-2xl">
          Jelajahi Karya
          <ArrowRight className="mt-px h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
        <figcaption className="flex cursor-default flex-wrap gap-6 pt-8 text-xs lg:text-sm">
          <span className="flex items-center space-x-2">
            <Code className="text-accent h-5 w-5" />
            <h5 className="text-heading font-medium">Game Development</h5>
          </span>
          <span className="flex items-center space-x-2">
            <Palette className="text-secondary h-5 w-5" />
            <h5 className="text-heading font-medium">UI/UX Design</h5>
          </span>
          <span className="flex items-center space-x-2">
            <RectangleGoggles className="text-primary h-5 w-5" />
            <h5 className="text-heading font-medium">AR/VR</h5>
          </span>
        </figcaption>
      </motion.figure>
    </motion.section>
  );
}