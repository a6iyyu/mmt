"use client";

import { ArrowRight, Layers, Users } from "lucide-react";
import { motion } from "framer-motion";
import { categories } from "@/app/kategori/constants/categories";
import { container } from "@/constants/variants";
import Link from "next/link";

export default function CategoryGrid() {
  return (
    <motion.section variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-20 md:grid-cols-2 lg:grid-cols-3 lg:px-12">
      {categories.map((category, index) => (
        <Link href={`/kategori/${category.slug}`} key={index} className="group relative block h-full">
          <motion.article
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
          >
            <div className={`absolute inset-0 bg-linear-to-br ${category.bgGradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
            <div className={`absolute -top-12 -right-12 h-40 w-40 rounded-full ${category.iconBg} opacity-20 blur-3xl transition-transform duration-500 group-hover:scale-150`} />
            <div className="relative mb-6 flex items-start justify-between">
              <span className={`inline-flex rounded-2xl ${category.iconBg} p-4 ${category.iconColor} ring-1 ring-black/5`}>
                <category.icon className="h-5 w-5 lg:h-7 lg:w-7" />
              </span>
              <span className={`flex h-10 w-10 -translate-x-2 items-center justify-center rounded-full bg-white text-gray-400 opacity-0 shadow-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100`}>
                <ArrowRight className="h-3 w-3 lg:h-5 lg:w-5" />
              </span>
            </div>
            <div className="relative flex-1">
              <h3 className="text-heading group-hover:text-primary mb-3 text-base font-bold transition-colors lg:text-lg">
                {category.title}
              </h3>
              <p className="text-text-secondary mb-6 text-xs leading-loose lg:text-sm">
                {category.description}
              </p>
            </div>
            <div className="relative mt-auto flex items-center gap-5 border-t border-gray-100 pt-5 text-[10px] font-semibold text-gray-500">
              <span className="flex items-center gap-1.5">
                <Layers className="h-4 w-4 text-gray-400" />
                {category.stats.works} Karya
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-gray-400" />
                {category.stats.mentors} Dosen
              </span>
            </div>
          </motion.article>
        </Link>
      ))}
    </motion.section>
  );
}