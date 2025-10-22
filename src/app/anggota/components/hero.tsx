"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles, Circle, Star } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const statsData: { label: string; value: string }[] = [
  { value: "12", label: "Dosen Pembimbing" },
  { value: "200+", label: "Mahasiswa Terlibat" },
  { value: "5", label: "Bidang Fokus Penelitian" },
];

export default function Hero() {
  return (
    <motion.section
      className="relative flex w-full cursor-default flex-col items-center overflow-hidden py-24 lg:py-40"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <span className="bg-accent/20 pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full blur-3xl" />
      <span className="bg-secondary/20 pointer-events-none absolute -right-40 -bottom-40 h-96 w-96 rounded-full blur-3xl" />
      <span className="bg-accent/10 pointer-events-none absolute top-1/2 left-1/3 h-64 w-64 -translate-y-1/2 rounded-full blur-3xl" />
      <span className="bg-secondary/10 pointer-events-none absolute top-1/4 right-1/4 h-48 w-48 rounded-full blur-3xl" />
      <Star className="text-accent/50 absolute top-40 left-12 h-8 w-8 animate-bounce" />
      <Sparkles className="text-secondary/50 absolute right-12 bottom-20 h-8 w-8 animate-pulse" />
      <Circle className="text-accent/30 animate-spin-slow absolute bottom-80 left-1/3 h-10 w-10" />
      <div className="z-10 flex w-[90%] max-w-7xl flex-col items-center justify-center text-center">
        <motion.h2 className="text-primary text-sm font-bold tracking-widest uppercase" variants={itemVariants}>
          Tim & Struktur Lab
        </motion.h2>
        <motion.h1 className="from-accent to-secondary mt-4 bg-gradient-to-r bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:text-5xl" variants={itemVariants}>
          Kenali Tim Inovator Kami
        </motion.h1>
        <motion.p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-lg leading-8" variants={itemVariants}>
          Bertemu dengan para dosen, peneliti, dan mahasiswa berbakat yang
          menjadi motor penggerak inovasi di Lab Multimedia.
        </motion.p>
        <motion.div className="border-border/50 bg-card/40 mt-16 w-full max-w-5xl rounded-xl border p-8 shadow-lg backdrop-blur-sm" variants={itemVariants}>
          <figure className="md:divide-border/50 grid grid-cols-1 gap-8 md:grid-cols-3 md:divide-x">
            {statsData.map((stat) => (
              <figcaption key={stat.label} className="flex flex-col items-center px-4">
                <h5 className="text-primary text-4xl font-bold tracking-tighter">
                  {stat.value}
                </h5>
                <h5 className="text-muted-foreground mt-2 text-sm font-medium tracking-wide">
                  {stat.label}
                </h5>
              </figcaption>
            ))}
          </figure>
        </motion.div>
      </div>
    </motion.section>
  );
}