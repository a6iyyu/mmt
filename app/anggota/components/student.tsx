"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useMemo, useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { container, item } from "@/constants/variants";
import { dummyStudents } from "@/app/anggota/data/student";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

type Options =
  | "Semua"
  | "Game Development"
  | "UI/UX"
  | "VR/AR"
  | "Animasi"
  | "3D Asset";
const options: Options[] = [
  "Semua",
  "Game Development",
  "UI/UX",
  "VR/AR",
  "Animasi",
  "3D Asset",
];

export default function Student() {
  const [selectedField, setSelectedField] = useState<Options>("Semua");

  const filteredStudents = useMemo(() => {
    if (selectedField === "Semua") return dummyStudents;
    return dummyStudents.filter((s) => s.field === selectedField);
  }, [selectedField]);

  return (
    <motion.section variants={container} initial="hidden" animate="visible" className="relative z-10 mx-auto flex w-[90%] max-w-7xl flex-col pb-20 lg:items-center">
      <motion.h2 variants={item} className="from-accent to-secondary cursor-default bg-linear-to-r bg-clip-text text-[26px] font-extrabold tracking-tight text-transparent lg:text-center lg:text-[44px]">
        Mahasiswa Anggota Lab
      </motion.h2>
      <motion.p variants={item} className="text-text-secondary mx-auto mt-4 max-w-2xl cursor-default text-sm leading-8 lg:text-center lg:text-base">
        Daftar mahasiswa aktif yang berkontribusi dalam proyek, riset, dan
        pengembangan inovasi multimedia di bawah bimbingan dosen lab.
      </motion.p>
      <motion.div variants={item} className="no-scrollbar mt-6 mb-10 flex w-full max-w-full overflow-x-auto pb-2 lg:justify-center">
        <div className="flex gap-3 px-1">
          {options.map((field) => (
            <Button
              key={field}
              variant={selectedField === field ? "default" : "outline"}
              onClick={() => setSelectedField(field)}
              className="shrink-0 cursor-pointer rounded-full px-5 text-xs lg:text-sm lg:hover:text-white"
            >
              {field}
            </Button>
          ))}
        </div>
      </motion.div>
      <motion.div key={selectedField} variants={container} initial="hidden" animate="visible" className="grid w-full gap-6 md:grid-cols-2">
        {filteredStudents.map((student) => (
          <motion.article
            key={student.id}
            variants={item}
            className="group hover:border-primary/30 flex items-center gap-5 rounded-xl border border-gray-200 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="group-hover:ring-primary/20 relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gray-100 ring-2 ring-transparent transition-all lg:h-20 lg:w-20">
              <Image
                src={student.image}
                alt={student.name}
                width={80}
                height={80}
                className="h-full w-full object-cover transition-transform duration-500 lg:group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col justify-center">
              <Link
                href={`/anggota/${student.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-heading hover:text-primary mb-1 text-sm font-semibold transition-colors lg:text-base"
              >
                {student.name}
              </Link>
              <p className="text-primary text-xs leading-relaxed font-medium lg:text-sm">
                {student.major} —{" "}
                <span className="text-text-secondary font-normal">
                  {student.focus}
                </span>
              </p>
              <span className="mt-2.5 flex items-center gap-3 text-gray-400">
                <Link href={student.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="h-4 w-4 transition-colors hover:scale-110 hover:text-[#0077b5]" />
                </Link>
                <Link href={`mailto:${student.email}`} aria-label="Email">
                  <Mail className="h-4 w-4 transition-colors hover:scale-110 hover:text-red-500" />
                </Link>
                <Link href={student.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <FaWhatsapp className="h-4 w-4 transition-colors hover:scale-110 hover:text-[#25D366]" />
                </Link>
              </span>
            </div>
          </motion.article>
        ))}
      </motion.div>
      {filteredStudents.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full py-16 text-center">
          <h3 className="text-xl font-semibold">Tidak Ada Mahasiswa</h3>
          <p className="mt-2">Coba ubah filter bidang keahlian di atas.</p>
        </motion.div>
      )}
    </motion.section>
  );
}