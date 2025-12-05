"use client";

import { ArrowLeft, Headset, Lightbulb } from "lucide-react";
import { COURSES } from "@/constants/route";
import Link from "next/link";

export default function NotFoundClient() {
  return (
    <main className="bg-background relative flex flex-col items-center justify-center px-4 pt-40 pb-20 text-center">
      <section className="decoration-wrapper pointer-events-none absolute inset-0 z-0">
        <div className="bg-primary/10 absolute -top-24 -left-24 h-[300px] w-[300px] rounded-full blur-3xl" />
        <div className="bg-accent/20 absolute -right-36 -bottom-36 hidden h-[400px] w-[400px] rounded-full blur-3xl lg:inline" />
        <div className="bg-tertiary/10 absolute top-12 left-1/2 h-[200px] w-[200px] -translate-x-1/2 rounded-full blur-2xl" />
        <span className="bg-primary absolute top-20 left-20 block h-3 w-3 animate-pulse rounded-full opacity-40" />
        <span className="bg-accent absolute top-40 right-32 block h-2 w-2 animate-bounce rounded-full opacity-60" />
        <span className="bg-tertiary absolute bottom-32 left-1/4 block h-4 w-4 animate-ping rounded-full opacity-30" />
        <span className="bg-primary absolute top-1/2 right-20 block h-2 w-2 animate-pulse rounded-full opacity-50" />
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          <span className="bg-primary block h-2 w-2 animate-pulse rounded-full opacity-40" />
          <span className="bg-accent block h-2 w-2 rounded-full opacity-30" />
          <span className="bg-tertiary block h-2 w-2 animate-pulse rounded-full opacity-40" />
          <span className="bg-primary block h-2 w-2 rounded-full opacity-20" />
          <span className="bg-accent block h-2 w-2 animate-pulse rounded-full opacity-40" />
        </div>
      </section>
      <div className="relative z-10 w-full max-w-2xl cursor-default">
        <h1 className="text-primary mb-4 text-5xl leading-none font-black tracking-tighter lg:text-9xl">
          4
          <span className="from-primary to-secondary animate-pulse bg-linear-to-r bg-clip-text text-transparent">
            0
          </span>
          4
        </h1>
        <h3 className="mb-2 text-xl font-bold text-gray-900 lg:text-4xl">
          Halaman Tidak Ditemukan
        </h3>
        <h4 className="text-text-secondary mb-10 text-xs leading-relaxed lg:text-lg">
          Ups! Sepertinya Anda tersesat di ruang digital.
          <br />
          Mungkin ada <i>glitch</i> di matriks atau tautan ini sudah kadaluarsa.
          👾
        </h4>
        <section className="relative mb-12 flex justify-center">
          <div className="from-primary/20 to-secondary/20 animate-pulse rounded-full bg-linear-to-br p-8">
            <svg className="text-primary h-32 w-32" fill="none" viewBox="0 0 64 64" stroke="currentColor">
              <circle cx="32" cy="32" r="30" strokeWidth="4" className="opacity-30" />
              <path d="M24 40c2-4 12-4 16 0" strokeWidth="3" strokeLinecap="round" />
              <circle cx="26" cy="28" r="2.5" fill="currentColor" />
              <circle cx="38" cy="28" r="2.5" fill="currentColor" />
            </svg>
          </div>
          <div className="bg-accent absolute -top-2 right-60 animate-bounce rounded-full p-2">
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
          </div>
          <figcaption className="sr-only">
            Ilustrasi emoji sedih menunjukkan halaman tidak ditemukan
          </figcaption>
        </section>
        <section className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="bg-primary group hover:shadow-primary/25 hover:bg-primary/80 flex cursor-pointer items-center justify-center gap-3 rounded-lg px-6 py-4 text-xs font-semibold text-white transition-all duration-300 lg:text-sm lg:hover:shadow-lg"
          >
            <ArrowLeft className="h-4.5 w-4.5" />
            <span>Kembali ke Halaman Sebelumnya</span>
          </button>
          <Link href={COURSES} className="border-primary text-primary hover:bg-primary group flex items-center justify-center gap-3 rounded-lg border-2 px-6 py-3.5 text-xs font-semibold transition-all duration-300 hover:text-white lg:text-sm">
            <Headset className="h-4.5 w-4.5" />
            <span>Cari Pelatihan</span>
          </Link>
        </section>
        <figure className="mx-auto max-w-md rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <figcaption className="mb-3 flex items-center justify-center gap-3">
            <span className="bg-primary/10 rounded-full p-2.75">
              <Lightbulb className="text-primary h-4.5 w-4.5" />
            </span>
            <h3 className="text-base font-semibold text-gray-900 lg:text-lg">
              Tahukah Anda?
            </h3>
          </figcaption>
          <p className="text-text-secondary text-xs leading-relaxed lg:text-sm">
            Bug komputer pertama ditemukan pada tahun 1947, dan itu benar-benar
            seekor ngengat (bug) asli yang terjebak di relay komputer! 🐛
          </p>
        </figure>
      </div>
    </main>
  );
}