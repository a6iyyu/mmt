"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { motion, Variants } from "framer-motion";
import { ExternalLink, Eye, Search as SearchIcon, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { dummyProjects } from "@/app/karya/data/latest-works";
import { loadMore } from "@/app/karya/services/load-more";
import { Button } from "@/components/ui/button";
import { Truncate } from "@/utils/text";
import Image from "next/image";
import Link from "next/link";
import Input from "@/components/common/input";
import Select from "@/components/common/select";

export default function LatestWorks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const categoryOptions = ["Semua Kategori", ...new Set(dummyProjects.map((p) => p.category))].map((category) => ({ label: category, value: category }));

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: ({ pageParam }) => loadMore({ pageParams: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  const allProjects = useMemo(() => data?.pages.flatMap((page) => page.projects) ?? [], [data]);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const categoryMatch = selectedCategory === "Semua Kategori" || project.category === selectedCategory;
      const searchMatch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || project.description.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [allProjects, searchTerm, selectedCategory]);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
      y: 0,
    }),
  };

  return (
    <section className="relative flex w-full flex-col items-center pb-20">
      <div className="z-10 mt-16 grid w-[90%] max-w-7xl grid-cols-1 items-end gap-4 md:grid-cols-3">
        <span className="md:col-span-2">
          <Input
            name="search"
            label="Cari Karya"
            placeholder="Cari berdasarkan judul atau deskripsi..."
            icon={<SearchIcon size={18} className="text-slate-400" />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required={false}
            type="text"
          />
        </span>
        <Select
          name="category"
          label="Kategori"
          options={categoryOptions}
          required={false}
          value={selectedCategory}
          onChange={(value) => setSelectedCategory(value as string)}
        />
      </div>
      <article className="mt-8 grid w-[90%] max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            className="border-border/50 bg-card/40 flex h-full flex-col overflow-hidden rounded-xl border shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            initial="hidden"
            variants={cardVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            <Image src={project.image} alt={`Gambar ${project.title}`} height={1920} width={1080} className="relative h-56 w-full object-cover brightness-90" />
            <figure className="flex flex-1 flex-col p-6">
              <figcaption className="text-muted-foreground flex items-center justify-between text-sm">
                <h6 className="font-medium">{project.category}</h6>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <Eye size={16} />
                    <h6>{project.views}</h6>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star size={16} />
                    <h6>{project.stars}</h6>
                  </span>
                </div>
              </figcaption>
              <h3 className="text-foreground mt-2 text-xl font-bold">
                {project.title}
              </h3>
              <p className="text-muted-foreground mt-1 flex-grow text-sm">
                {Truncate(project.description, 100)}
              </p>
              <span className="my-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <h6 key={tech} className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-semibold">
                    {tech}
                  </h6>
                ))}
              </span>
              <Button asChild className="mt-4 h-12 w-full">
                <Link href={`/${project.title.toLowerCase().replace(/ /g, "-")}`} rel="noopener noreferrer">
                  Demo <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </figure>
          </motion.div>
        ))}
        {filteredProjects.length === 0 && (
          <div className="text-muted-foreground col-span-full py-16 text-center">
            <h3 className="text-xl font-semibold">Tidak Ada Karya Ditemukan</h3>
            <p className="mt-2">
              Coba ubah kata kunci pencarian atau filter kategori Anda.
            </p>
          </div>
        )}
      </article>
      {hasNextPage && (
        <motion.span
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <Button onClick={() => fetchNextPage()} className="border-secondary/80 mx-auto mt-12 h-12 w-fit cursor-pointer rounded-md border-b-4 px-8 text-sm transition-all duration-100 ease-in-out active:translate-y-1 active:border-b-0 active:brightness-95">
            Load More
          </Button>
        </motion.span>
      )}
    </section>
  );
}