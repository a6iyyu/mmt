"use client";

import { Badge } from "@/components/ui/badge";
import { Code, Gamepad2, Layers, type LucideIcon, PenTool, Smartphone, Sparkles } from "lucide-react";

function OrbitItem({ icon: Icon, colorClass }: { icon: LucideIcon; colorClass: string }) {
  return (
    <span className={`relative flex h-12 w-12 items-center justify-center rounded-full ${colorClass} shadow-lg`}>
      <Icon className="h-6 w-6 text-white" />
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[var(--color-background)] py-24 text-[var(--color-heading)] lg:py-40">
      <span className="absolute inset-0 bg-[url('/images/motion-grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center opacity-10" />
      <div className="absolute top-1/5 left-3/20 animate-bounce [animation-delay:100ms]">
        <OrbitItem icon={Gamepad2} colorClass="bg-red-500" />
      </div>
      <div className="absolute top-1/3 right-1/10 animate-bounce [animation-delay:300ms]">
        <OrbitItem icon={Code} colorClass="bg-blue-500" />
      </div>
      <div className="absolute right-3/20 bottom-1/3 animate-bounce [animation-delay:500ms]">
        <OrbitItem icon={PenTool} colorClass="bg-purple-500" />
      </div>
      <div className="absolute bottom-1/5 left-1/10 animate-bounce [animation-delay:400ms]">
        <OrbitItem icon={Smartphone} colorClass="bg-green-500" />
      </div>
      <div className="absolute bottom-1/20 left-1/2 -translate-x-1/2 animate-bounce [animation-delay:200ms]">
        <OrbitItem icon={Layers} colorClass="bg-amber-500" />
      </div>
      <div className="relative z-10 max-w-3xl cursor-default px-6 text-center">
        <Badge className="mb-4 inline-flex items-center gap-2 border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/20 px-4 py-2 text-sm text-[var(--color-primary)] backdrop-blur">
          <Sparkles className="h-4 w-4 text-[var(--color-primary)]" />
          Pelatihan Resmi Lab MMT
        </Badge>
        <h1 className="text-2xl leading-tight font-extrabold tracking-wide lg:text-5xl">
          Belajar dari Mentor Bersertifikasi{" "}
          <span className="block bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent drop-shadow">
            Unity & Multimedia
          </span>
        </h1>
        <p className="mt-4 text-sm text-[var(--color-text-secondary)] lg:text-lg">
          Program pelatihan komprehensif untuk meningkatkan keterampilan Game
          Development, UI/UX, Animasi, 3D, dan VR.
        </p>
        <span className="mt-8 flex flex-col items-center justify-center gap-4 lg:flex-row">
          <button className="cursor-pointer rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-[var(--color-hover-blue)]">
            Mulai Pelatihan
          </button>
          <button className="cursor-pointer text-[var(--color-text-secondary)] underline-offset-4 transition-all duration-300 ease-in-out hover:text-[var(--color-heading)] hover:underline">
            Lihat Sertifikasi
          </button>
        </span>
      </div>
    </section>
  );
}