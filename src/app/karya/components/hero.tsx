import { Sparkles, Star, Circle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative flex w-full cursor-default items-center justify-center py-48">
      <span className="bg-accent/20 pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full blur-3xl" />
      <span className="bg-secondary/20 pointer-events-none absolute -right-40 -bottom-40 h-96 w-96 rounded-full blur-3xl" />
      <div className="relative mx-auto w-[90%] text-center">
        <Badge className="border-accent/20 mb-6 inline-flex items-center rounded-full border bg-white/60 px-4 py-2 text-sm font-medium text-[#314158] backdrop-blur">
          <Sparkles className="text-accent mr-2 h-4 w-4 animate-pulse" />
          Karya Mahasiswa & Dosen
        </Badge>
        <h1 className="relative mb-4 text-4xl font-bold text-[#314158] lg:text-5xl">
          Jelajahi{" "}
          <span className="from-accent to-secondary bg-gradient-to-r bg-clip-text text-transparent">
            Karya Multimedia
          </span>
          <span className="from-accent/10 to-secondary/10 absolute -inset-x-10 -inset-y-2 -z-10 bg-gradient-to-r blur-2xl"></span>
        </h1>
        <h5 className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
          Kumpulan karya inovatif dari mahasiswa dan penelitian dosen di bidang
          multimedia, gim, animasi, UI/UX, VR, dan banyak lagi.
        </h5>
        <span className="mt-6 flex flex-col items-center gap-2 text-sm text-gray-500 lg:flex-row lg:justify-center lg:gap-6">
          <h6>120+ karya telah dipublikasikan</h6>
          <h6 className="hidden lg:inline">•</h6>
          <h6>12 Dosen pembimbing</h6>
          <h6 className="hidden lg:inline">•</h6>
          <h6>200+ Mahasiswa terlibat</h6>
        </span>
      </div>
      <Star className="text-accent/50 absolute top-10 left-10 h-6 w-6 animate-bounce" />
      <Star className="text-secondary/50 absolute right-20 bottom-20 h-8 w-8 animate-pulse" />
      <Circle className="text-accent/30 absolute top-32 right-1/3 h-10 w-10" />
      <Circle className="text-secondary/30 absolute bottom-32 left-1/4 h-12 w-12" />
    </section>
  );
}