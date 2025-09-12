"use client";

import { ArrowRight, Mail, Medal, Phone, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LECTURER } from "@/constants/route";
import Image from "next/image";
import Link from "next/link";

export default function Lecturer() {
  const router = useRouter();

  const dummyLecturer = [
    {
      name: "Dimas Wahyu Wibowo, S.T., M.T.",
      category: "Game",
      longTimeTeaching: 6,
      email: "example@gmail.com",
      phoneNumber: "+6282143494259",
    },
    {
      name: "Rizky Andhika, S.Kom., M.Kom.",
      category: "UI/UX",
      longTimeTeaching: 4,
      email: "rizky@gmail.com",
      phoneNumber: "+6282143494259",
    },
    {
      name: "Siti Rahmawati, M.Ds.",
      category: "AR/VR",
      longTimeTeaching: 5,
      email: "siti@gmail.com",
      phoneNumber: "+6282143494259",
    },
  ];

  return (
    <section className="relative my-18 flex flex-col items-center">
      {/* Dekorasi background blur */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <span className="bg-accent/20 absolute -top-10 -left-10 h-72 w-72 rounded-full blur-3xl" />
      </div>

      {/* Floating icon dekorator */}
      <Sparkles className="text-accent/30 absolute top-20 left-12 z-0 h-12 w-12 animate-pulse" />

      {/* Judul */}
      <div className="border-accent/20 from-accent/10 to-secondary/10 mb-6 inline-flex w-fit items-center rounded-full border bg-gradient-to-r px-4 py-2">
        <Medal className="text-accent mr-2 h-4 w-4" />
        <h5 className="text-heading text-sm font-semibold">Tim Pengajar</h5>
      </div>
      <h2 className="text-heading mb-4 text-4xl font-bold text-balance lg:text-4xl">
        Dosen{" "}
        <span className="from-accent to-secondary bg-gradient-to-r bg-clip-text text-transparent">
          Multimedia
        </span>
      </h2>
      <p className="text-primary max-w-3xl text-center text-sm leading-relaxed lg:text-lg">
        Bertemu dengan para ahli multimedia yang berpengalaman dan berdedikasi
        dalam mengembangkan talenta mahasiswa di bidang teknologi kreatif
      </p>

      {/* Grid Card Dosen */}
      <article className="mt-10 grid w-full gap-8 lg:grid-cols-3">
        {dummyLecturer.map((lecturer, index) => (
          <figure key={index} className="group before:from-accent/40 before:to-secondary/40 relative transform-gpu overflow-hidden rounded-2xl border border-transparent bg-white shadow-md transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gradient-to-r before:opacity-0 before:transition-opacity group-hover:before:opacity-100 hover:-translate-y-1 hover:shadow-xl dark:bg-neutral-900">
            <Image src="/images/placeholder.png" alt={lecturer.name} width={500} height={500} className="h-64 w-full object-cover" loading="lazy" />
            <figcaption className="p-6">
              <h3 className="text-heading text-xl font-semibold">
                {lecturer.name}
              </h3>
              <p className="text-primary mt-1 text-sm">
                {lecturer.category} • {lecturer.longTimeTeaching} tahun
              </p>
              <span className="text-heading mt-4 flex items-center gap-3 text-sm">
                <Mail className="mt-0.5 h-4 w-4" />
                {lecturer.email}
              </span>
              <span className="text-heading mt-2 flex items-center gap-3 text-sm">
                <Phone className="mt-0.5 h-4 w-4" />
                {lecturer.phoneNumber}
              </span>
              <Link href={`https://wa.me/${lecturer.phoneNumber}`} target="_blank" className="group/btn bg-accent hover:bg-accent/80 mt-6 flex w-fit cursor-pointer items-center rounded-sm border-0 px-6 py-3 text-sm text-white transition-all duration-300">
                <Phone className="mr-3 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                Hubungi
              </Link>
            </figcaption>
          </figure>
        ))}
      </article>

      {/* Tombol Lihat Semua */}
      <Button onClick={() => router.push(LECTURER)} size="sm" className="group/btn bg-primary hover:bg-primary/80 mt-10 w-fit cursor-pointer rounded-sm border-0 !p-6 font-semibold text-white transition-all duration-300">
        Lihat Semua Dosen
        <ArrowRight className="mt-0.25 h-4 w-4 transition-transform lg:group-hover/btn:translate-x-0.5 lg:group-hover/btn:scale-110" />
      </Button>
    </section>
  );
}