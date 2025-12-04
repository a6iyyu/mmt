"use client";

import { motion } from "framer-motion";
import { Award, Clock, Target, User } from "lucide-react";
import { BenefitCard } from "@/app/pelatihan/atoms/benefit-card";
import { container, item } from "@/constants/variants";

export default function Benefits() {
  return (
    <motion.section variants={container} initial="hidden" animate="visible" className="bg-background mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-4 lg:grid-cols-4 lg:grid-rows-3 lg:px-0 lg:py-16">
      <motion.h2 variants={item} initial="hidden" animate="visible" className="text-accent cursor-default text-center text-[26px] leading-tight font-extrabold md:col-span-4 md:text-left lg:col-span-1 lg:row-span-1 lg:self-start lg:text-[44px]">
        Mengapa Memilih{" "}
        <br className="inline lg:hidden" />
        Kami?
      </motion.h2>
      <BenefitCard
        title="Waktu Fleksibel"
        description="Atur jadwal belajar Anda sendiri."
        icon={Clock}
        backgroundImage="/images/placeholder.png"
        styling="md:col-span-2 lg:col-span-1 lg:row-span-2 lg:row-start-2"
      />
      <BenefitCard
        title="Mentor Ahli"
        description="Belajar dari praktisi industri terbaik."
        icon={User}
        backgroundImage="/images/placeholder.png"
        styling="md:col-span-4 lg:col-span-2 lg:row-span-2 lg:col-start-2 lg:row-start-1"
      />
      <BenefitCard
        title="Sertifikasi Resmi"
        description="Dapatkan sertifikat yang diakui industri."
        icon={Award}
        backgroundImage="/images/placeholder.png"
        styling="md:col-span-4 lg:col-span-2 lg:row-span-1 lg:col-start-2 lg:row-start-3"
      />
      <BenefitCard
        title="Kurikulum Relevan"
        description="Sesuai dengan kebutuhan industri terkini."
        icon={Target}
        backgroundImage="/images/placeholder.png"
        styling="md:col-span-4 lg:col-span-1 lg:row-span-3"
      />
    </motion.section>
  );
}