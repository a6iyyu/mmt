"use client";

import { motion } from "framer-motion";
import { Code, Gamepad2, Layers, PenTool, Smartphone, Sparkles } from "lucide-react";
import { Orbit } from "@/app/pelatihan/atoms/orbit";
import { Badge } from "@/components/ui/badge";
import { container, item } from "@/constants/variants";

export default function Hero() {
  return (
    <motion.section variants={container} initial="hidden" animate="visible" className="bg-background text-heading relative flex min-h-screen w-full items-center justify-center overflow-hidden py-24 lg:pt-40">
      <span className="absolute inset-0 bg-[url('/images/motion-grid.svg')] [mask-image:linear-gradient(180deg,_white,_rgba(255,_255,_255,_0))] bg-center opacity-10" />
      <motion.div variants={item} initial="hidden" animate="visible" className="absolute top-1/5 left-3/20 animate-bounce [animation-delay:100ms]">
        <Orbit icon={Gamepad2} colorClass="bg-red-500" />
      </motion.div>
      <motion.div variants={item} initial="hidden" animate="visible" className="absolute top-1/3 right-1/10 animate-bounce [animation-delay:300ms]">
        <Orbit icon={Code} colorClass="bg-blue-500" />
      </motion.div>
      <motion.div variants={item} initial="hidden" animate="visible" className="absolute right-3/20 bottom-1/3 animate-bounce [animation-delay:500ms]">
        <Orbit icon={PenTool} colorClass="bg-purple-500" />
      </motion.div>
      <motion.div variants={item} initial="hidden" animate="visible" className="absolute bottom-1/5 left-1/10 animate-bounce [animation-delay:400ms]">
        <Orbit icon={Smartphone} colorClass="bg-green-500" />
      </motion.div>
      <motion.div variants={item} initial="hidden" animate="visible" className="absolute bottom-1/20 left-1/4 -translate-x-1/2 animate-bounce [animation-delay:200ms]">
        <Orbit icon={Layers} colorClass="bg-amber-500" />
      </motion.div>
      <motion.div variants={item} initial="hidden" animate="visible" className="relative z-10 max-w-3xl cursor-default px-6 text-center">
        <Badge className="border-primary/40 bg-primary/20 text-primary mb-4 inline-flex items-center gap-2 border px-4 py-2 text-sm backdrop-blur">
          <Sparkles className="text-primary h-4 w-4" />
          Pelatihan Resmi Lab MMT
        </Badge>
        <h1 className="text-2xl leading-tight font-extrabold tracking-wide lg:text-5xl">
          Belajar dari Mentor Bersertifikasi{" "}
          <span className="from-primary to-secondary block bg-gradient-to-r bg-clip-text text-transparent drop-shadow">
            Unity & Multimedia
          </span>
        </h1>
        <p className="text-text-secondary mt-4 text-sm lg:text-lg">
          Program pelatihan komprehensif untuk meningkatkan keterampilan Game
          Development, UI/UX, Animasi, 3D, dan VR.
        </p>
        <span className="mt-8 flex flex-col items-center justify-center gap-7 lg:flex-row">
          <button className="bg-primary hover:bg-hover-blue cursor-pointer rounded-md px-8 py-3.5 font-medium text-white shadow-lg transition-all duration-300 ease-in-out">
            Mulai Pelatihan
          </button>
          <button className="text-text-secondary hover:text-heading cursor-pointer underline-offset-4 transition-all duration-300 ease-in-out hover:underline">
            Lihat Sertifikasi
          </button>
        </span>
      </motion.div>
    </motion.section>
  );
}