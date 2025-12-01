"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6,  ease: [0.25, 0.46, 0.45, 0.94] as const } 
  },
};

export default function Hero() {
  return (
    <section className="bg-background relative flex min-h-[50vh] w-full cursor-default flex-col items-center justify-center overflow-hidden px-6 pt-40 pb-24 text-center">
      <span className="absolute inset-0 bg-[url('/images/motion-grid.svg')] mask-[radial-gradient(ellipse_at_center,white,transparent)] bg-center opacity-10" />
      <span className="bg-primary/5 absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      <motion.article initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }} className="relative z-10 max-w-3xl">
        <motion.span variants={fadeInUp} className="border-accent/30 bg-accent/10 text-accent mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold tracking-wide uppercase">
          <Sparkles className="h-3.5 w-3.5" />
          Pusat Keahlian & Inovasi
        </motion.span>
        <motion.h1 variants={fadeInUp} className="text-heading text-2xl leading-tight font-extrabold tracking-tight lg:text-5xl">
          Eksplorasi Bidang <br />
          <span className="from-primary to-secondary bg-linear-to-r bg-clip-text text-transparent">
            Multimedia
          </span>
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-text-secondary mx-auto mt-6 max-w-2xl text-sm leading-relaxed lg:text-lg">
          Temukan inovasi spesifik berdasarkan bidang keahlian. Dari
          pengembangan game yang imersif hingga desain pengalaman pengguna yang
          intuitif, Lab MMT memiliki fokus yang mendalam.
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-8 flex items-center justify-center gap-4 opacity-40">
          <span className="h-px w-16 bg-gray-400" />
          <span className="text-heading text-xs font-bold tracking-[0.3em]">
            ✦
          </span>
          <span className="h-px w-16 bg-gray-400" />
        </motion.div>
      </motion.article>
    </section>
  );
}