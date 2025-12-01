"use client";

import { motion } from "framer-motion";

const chartData = [
  { label: "2023", height: "h-16", opacity: "opacity-40" },
  { label: "2024", height: "h-24", opacity: "opacity-70" },
  { label: "2025", height: "h-32", opacity: "opacity-100" },
];

export default function Stats() {
  return (
    <section className="relative mx-auto grid max-w-7xl cursor-default grid-cols-1 items-center gap-12 px-6 pt-8 pb-4 lg:grid-cols-2 lg:px-12">
      <span className="bg-accent/20 absolute top-0 -left-32 z-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full blur-[80px]" />
      <figure className="space-y-8">
        <h2 className="text-heading text-3xl leading-snug font-extrabold md:text-4xl">
          Dampak Nyata <br />
          <span className="text-primary">Inovasi Digital</span>
        </h2>
        <p className="text-text-secondary text-lg leading-relaxed">
          Lab Multimedia bukan sekadar tempat belajar, tapi inkubator
          kreativitas. Lihat bagaimana komunitas kami berkembang dan memberikan
          dampak.
        </p>
        <figcaption className="grid grid-cols-2 gap-6">
          <span>
            <h3 className="text-heading text-4xl font-black">200+</h3>
            <p className="text-text-secondary mt-1 text-sm font-medium">
              Mahasiswa Aktif
            </p>
          </span>
          <span>
            <h3 className="text-heading text-4xl font-black">120+</h3>
            <p className="text-text-secondary mt-1 text-sm font-medium">
              Karya Terpublikasi
            </p>
          </span>
        </figcaption>
      </figure>
      <article className="bg-heading relative flex aspect-video w-full items-end justify-around overflow-hidden rounded-3xl p-8 shadow-2xl">
        <span className="bg-accent/20 absolute top-0 right-0 z-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full blur-[80px]" />
        {chartData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            whileInView={{ height: Number(item.height.replace("h-", "")) * 4 + "px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "backOut" }}
            className={`bg-primary relative w-16 rounded-t-xl md:w-24 ${item.opacity} ${item.height}`}
          >
            <h5 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-bold text-white/80">
              {item.label}
            </h5>
          </motion.div>
        ))}
        <span className="absolute bottom-0 left-0 h-1 w-full bg-white/10" />
      </article>
    </section>
  );
}