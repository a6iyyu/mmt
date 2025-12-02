"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CREATIONS } from "@/constants/route";
import { container, item } from "@/constants/variants";
import { Truncate } from "@/utils/text";
import Image from "next/image";

export default function LatestWork() {
  const router = useRouter();

  const dummyProjects = [
    {
      title: "Project A",
      description: "Deskripsi singkat project A.",
      image: "/images/placeholder.png",
      category: "Game Development",
      featured: true,
      views: 230,
      stars: 12,
      tech: ["React", "Tailwind", "Three.js"],
      demo: "#",
      code: "#",
    },
    {
      title: "Project B",
      description: "Deskripsi singkat project B.",
      image: "/images/placeholder.png",
      category: "UI/UX",
      featured: false,
      views: 120,
      stars: 8,
      tech: ["Figma", "Framer"],
      demo: "#",
      code: "#",
    },
    {
      title: "Project C",
      description: "Deskripsi singkat project C.",
      image: "/images/placeholder.png",
      category: "Game Development",
      featured: true,
      views: 230,
      stars: 12,
      tech: ["React", "Tailwind", "Three.js"],
      demo: "#",
      code: "#",
    },
  ];

  return (
    <motion.section className="relative mt-6 flex flex-col items-center" initial="hidden" animate="visible" variants={container}>
      <div className="pointer-events-none absolute inset-0 -z-10 hidden lg:inline">
        <span className="bg-secondary/20 absolute -top-20 -right-20 h-96 w-96 rounded-full blur-3xl" />
      </div>
      <motion.div initial="hidden" animate="visible" variants={item} className="border-accent/20 from-accent/10 to-secondary/10 mb-4 inline-flex items-center rounded-full border bg-linear-to-r px-4 py-2">
        <Star className="text-accent mr-2 h-4 w-4" />
        <h5 className="text-heading text-xs font-semibold lg:text-sm">
          Karya Unggulan
        </h5>
      </motion.div>
      <motion.h2 className="text-heading mb-2 text-[26px] font-bold text-balance lg:text-[44px]" initial="hidden" animate="visible" variants={item}>
        Karya{" "}
        <span className="from-accent to-secondary bg-linear-to-r bg-clip-text text-transparent">
          Terbaru
        </span>
      </motion.h2>
      <motion.p className="text-primary mx-auto max-w-3xl text-center text-sm leading-7 lg:text-base" initial="hidden" animate="visible" variants={item}>
        Karya terbaru mahasiswa dan dosen, mulai dari animasi, game, hingga
        desain interaktif yang siap menginspirasi dunia digital
      </motion.p>
      <motion.article className="mt-10 grid w-full gap-8 lg:grid-cols-3" initial="hidden" animate="visible" variants={item}>
        {dummyProjects.map((project, index) => (
          <figure key={index} className="group hover:shadow-primary/10 overflow-hidden rounded-2xl border-0 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl">
            <div className="relative overflow-hidden">
              <Image src={project.image} alt={project.title} width={600} height={400} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-102" loading="lazy" />
              <span className="absolute top-4 left-4 flex gap-2">
                {project.featured && (
                  <h6 className="bg-heading rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg">
                    Featured
                  </h6>
                )}
                <h6 className="text-heading rounded-full bg-white/90 px-3 py-1 text-xs font-medium shadow-lg backdrop-blur-sm">
                  {project.category}
                </h6>
              </span>
            </div>
            <figcaption className="p-6">
              <motion.h3 className="text-heading group-hover:text-accent mb-1 text-base font-semibold transition-colors duration-300 lg:text-lg" variants={item}>
                {Truncate(project.title, 12)}
              </motion.h3>
              <motion.p className="text-primary mb-4 text-xs leading-relaxed lg:text-sm" variants={item}>
                {Truncate(project.description, 16, 28)}
              </motion.p>
              <span className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((tag, i) => (
                  <h6 key={i} className="border-hover-blue/30 from-hover-blue/20 to-secondary/20 text-heading rounded-full border bg-linear-to-r px-3 py-1 text-xs font-medium">
                    {tag}
                  </h6>
                ))}
              </span>
              <Button size="sm" className="group/btn bg-accent hover:bg-accent/80 cursor-pointer rounded-sm border-0 p-5! text-xs text-white transition-all duration-300 lg:px-6.5! lg:py-5.5!">
                <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                Demo
              </Button>
            </figcaption>
          </figure>
        ))}
      </motion.article>
      <Button onClick={() => router.push(CREATIONS)} className="group/btn bg-primary hover:bg-primary/80 mt-10 cursor-pointer rounded-sm border-0 px-6.5! py-5.5 text-xs font-semibold text-white transition-all duration-300 lg:px-7.5! lg:py-6.5 lg:text-sm">
        Lihat Semua Karya
        <ArrowRight className="mt-px h-4 w-4 transition-transform lg:group-hover/btn:translate-x-0.5 lg:group-hover/btn:scale-110" />
      </Button>
    </motion.section>
  );
}