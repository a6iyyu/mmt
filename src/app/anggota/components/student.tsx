"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useMemo, useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { container, item } from "@/constants/variants";
import { dummyStudents } from "@/app/anggota/data/student";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

type Options = "Semua" | "Game Development" | "UI/UX" | "VR/AR" | "Animasi" | "3D Asset";
const options: Options[] = ["Semua", "Game Development", "UI/UX", "VR/AR", "Animasi", "3D Asset"];

export default function Student() {
  const [selectedField, setSelectedField] = useState<Options>("Semua");

  const filteredStudents = useMemo(() => {
    if (selectedField === "Semua") return dummyStudents;
    return dummyStudents.filter((s) => s.field === selectedField);
  }, [selectedField]);

  return (
    <section className="relative z-10 mx-auto flex w-[90%] max-w-7xl flex-col items-center pb-32">
      <motion.div
        className="flex w-full flex-col items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={item} className="from-accent to-secondary bg-gradient-to-r bg-clip-text text-center text-xl font-extrabold tracking-tight text-transparent lg:text-3xl">
          Mahasiswa Anggota Lab
        </motion.h2>
        <motion.p variants={item} className="mx-auto mt-4 max-w-2xl text-center text-sm leading-8 text-gray-600 lg:text-base">
          Daftar mahasiswa aktif yang berkontribusi dalam proyek, riset, dan
          pengembangan inovasi multimedia di bawah bimbingan dosen lab.
        </motion.p>
        <motion.span variants={item} className="mt-6 mb-10 flex flex-wrap items-center justify-center gap-3">
          {options.map((field) => (
            <Button key={field} variant={selectedField === field ? "default" : "outline"} onClick={() => setSelectedField(field)} className="cursor-pointer rounded-full hover:text-white">
              {field}
            </Button>
          ))}
        </motion.span>
        <motion.figure
          key={selectedField}
          className="grid w-full gap-6 md:grid-cols-2"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {filteredStudents.map((student) => (
            <motion.a
              href={student.name.toLowerCase().replace(/\s+/g, "-")}
              key={student.id}
              variants={item}
              className="group flex items-center gap-5 rounded-xl border border-gray-200 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full bg-gray-100">
                <Image
                  src={student.image}
                  alt={student.name}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </span>
              <figcaption className="flex flex-col justify-center">
                <h3 className="text-heading text-base font-semibold">
                  {student.name}
                </h3>
                <p className="text-primary text-sm">
                  {student.major} — {student.focus}
                </p>
                <span className="mt-2 flex gap-3 text-gray-500">
                  <Link href={student.linkedin.toLowerCase().replace(/\s+/g, "")} target="_blank" rel="noreferrer">
                    <FaLinkedin className="hover:text-accent h-4 w-4 transition-colors" />
                  </Link>
                  <Link href={`mailto:${student.email.toLowerCase().replace(/\s+/g, "")}`}>
                    <Mail className="hover:text-secondary h-4 w-4 transition-colors" />
                  </Link>
                </span>
              </figcaption>
            </motion.a>
          ))}
        </motion.figure>
        {filteredStudents.length === 0 && (
          <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-muted-foreground col-span-full py-16 text-center">
            <h3 className="text-xl font-semibold">Tidak Ada Mahasiswa</h3>
            <p className="mt-2">Coba ubah filter bidang keahlian di atas.</p>
          </motion.article>
        )}
      </motion.div>
    </section>
  );
}