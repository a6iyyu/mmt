"use client";

import { useMemo, useState } from "react";
import { motion, Variants } from "framer-motion";
import { LECTURER_FIELDS } from "@/app/anggota/constants/lecturer";
import { dummyLecturers } from "@/app/anggota/data/lecturer";
import { Button } from "@/components/ui/button";
import LecturerCard from "@/app/anggota/shared/card";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export default function LecturerList() {
  const [selectedField, setSelectedField] = useState("Semua");

  const filteredLecturers = useMemo(() => {
    if (selectedField === "Semua") return dummyLecturers;
    return dummyLecturers.filter((lecturer) => lecturer.field === selectedField);
  }, [selectedField]);

  return (
    <section className="relative z-10 mx-auto flex w-[90%] max-w-7xl flex-col items-center pb-20">
      <motion.div className="flex w-full flex-col items-center" variants={containerVariants} initial="hidden" animate="visible">
        <motion.h2 variants={itemVariants} className="from-accent to-secondary cursor-default bg-gradient-to-r bg-clip-text text-center text-xl font-extrabold tracking-tight text-transparent lg:text-3xl">
          Dosen Pembimbing
        </motion.h2>
        <motion.p variants={itemVariants} className="mx-auto mt-4 max-w-2xl cursor-default text-center text-sm leading-8 lg:text-base">
          Filter dosen berdasarkan bidang keahlian untuk menemukan pembimbing
          yang paling sesuai dengan minat penelitian Anda.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-6 mb-10 flex flex-wrap items-center justify-center gap-3">
          {["Semua", ...LECTURER_FIELDS].map((field) => (
            <Button key={field} variant={selectedField === field ? "default" : "outline"} onClick={() => setSelectedField(field)} className="cursor-pointer rounded-full hover:text-white">
              {field}
            </Button>
          ))}
        </motion.div>
      </motion.div>
      <motion.div key={selectedField} className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3" variants={containerVariants} initial="hidden" animate="visible">
        {filteredLecturers.map((lecturer) => <LecturerCard key={lecturer.id} lecturer={lecturer} variants={itemVariants} />)}
      </motion.div>
      {filteredLecturers.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-muted-foreground col-span-full py-16 text-center">
          <h3 className="text-xl font-semibold">Tidak Ada Dosen Ditemukan</h3>
          <p className="mt-2">
            Coba ganti filter bidang untuk melihat dosen lainnya.
          </p>
        </motion.div>
      )}
    </section>
  );
}