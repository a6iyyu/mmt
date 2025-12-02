"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, XCircle } from "lucide-react";
import { useState, useMemo } from "react";
import { CourseCard } from "@/app/pelatihan/atoms/course-card";
import { courses } from "@/app/pelatihan/data/courses";
import Input from "@/components/common/input";
import Select from "@/components/common/select";

export default function CourseList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedLevel, setSelectedLevel] = useState("Semua");
  const [selectedType, setSelectedType] = useState("Semua");

  const toOptions = (items: string[], labelPrefix: string = "") =>
    items.map((item) => ({
      label: item === "Semua" ? `Semua ${labelPrefix}` : item,
      value: item,
    })
  );

  const categoryOptions = toOptions(["Semua", ...Array.from(new Set(courses.map((c) => c.category)))], "Kategori");
  const levelOptions = toOptions(["Semua", ...Array.from(new Set(courses.map((c) => c.level)))], "Level");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || course.mentor.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCategory = selectedCategory === "Semua" || course.category === selectedCategory;
      const matchLevel = selectedLevel === "Semua" || course.level === selectedLevel;
      const isFree = course.price.toLowerCase() === "gratis";
      const matchType = selectedType === "Semua" || (selectedType === "Gratis" ? isFree : !isFree);
      return matchSearch && matchCategory && matchLevel && matchType;
    });
  }, [searchQuery, selectedCategory, selectedLevel, selectedType]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("Semua");
    setSelectedLevel("Semua");
    setSelectedType("Semua");
  };

  const hasActiveFilters = searchQuery !== "" || selectedCategory !== "Semua" || selectedLevel !== "Semua" || selectedType !== "Semua";

  return (
    <section className="bg-background relative mx-auto min-h-[600px] max-w-6xl px-6 pb-20">
      <article className="flex flex-col items-start justify-start lg:items-center lg:justify-center lg:text-center">
        <span className="border-accent/30 bg-accent/10 text-accent mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs! font-bold tracking-wide uppercase">
          <Sparkles className="h-3 w-3" />
          Upgrade Skill Sekarang
        </span>
        <h2 className="text-heading text-2xl font-extrabold lg:text-4xl">
          Jadwal <span className="text-primary">Pelatihan</span>
        </h2>
        <p className="text-text-secondary mt-4 max-w-xl text-sm leading-relaxed lg:text-base">
          Pilih alur belajarmu sendiri. Temukan kelas yang cocok untuk
          meningkatkan skill digitalmu.
        </p>
        <div className="mt-6 hidden items-center gap-3 opacity-60 lg:flex">
          <span className="h-px w-12 bg-gray-300" />
          <span className="text-primary text-xs font-bold tracking-[0.2em]">
            ✦
          </span>
          <span className="h-px w-12 bg-gray-300" />
        </div>
      </article>
      <span className="absolute -inset-4 -z-10 rounded-4xl bg-linear-to-b from-gray-50/50 to-transparent opacity-60 blur-xl" />
      <span className="mt-4 flex justify-end">
        <AnimatePresence>
          {hasActiveFilters && (
            <motion.button
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              onClick={clearFilters}
              className="text-primary hover:text-secondary flex cursor-pointer items-center gap-1.5 text-xs font-bold tracking-wide uppercase transition-colors"
            >
              <XCircle className="h-4 w-4" /> Reset Filter
            </motion.button>
          )}
        </AnimatePresence>
      </span>
      <div className="mb-12 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-end">
        <span className="lg:col-span-5">
          <Input
            name="search"
            placeholder="Cari judul atau mentor..."
            type="text"
            icon={<Search className="h-5 w-5" />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            label={""}
            required={false}
          />
        </span>
        <span className="lg:col-span-3">
          <Select
            name="category"
            options={categoryOptions}
            value={selectedCategory}
            onChange={(val) => setSelectedCategory(val)}
            label={""}
            required={false}
          />
        </span>
        <span className="lg:col-span-2">
          <Select
            name="level"
            options={levelOptions}
            value={selectedLevel}
            onChange={(val) => setSelectedLevel(val)}
            label={""}
            required={false}
          />
        </span>
        <span className="lg:col-span-2">
          <Select
            name="type"
            options={toOptions(["Semua", "Gratis", "Berbayar"], "Harga")}
            value={selectedType}
            onChange={(val) => setSelectedType(val)}
            label={""}
            required={false}
          />
        </span>
      </div>
      {filteredCourses.length > 0 ? (
        <motion.article layout className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredCourses.map((course, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.article>
      ) : (
        <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-20 text-center">
          <span className="bg-accent/10 mb-4 rounded-full p-6">
            <Search className="text-accent h-10 w-10" />
          </span>
          <h3 className="text-heading text-xl font-bold">
            Pelatihan tidak ditemukan
          </h3>
          <p className="text-text-secondary mt-2">
            Coba atur ulang filter kamu.
          </p>
        </motion.article>
      )}
    </section>
  );
}