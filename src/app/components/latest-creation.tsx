import { Star } from "lucide-react";

export default function LatestCreation() {
  return (
    <section className="mt-12 flex flex-col items-center">
      <div className="border-accent/20 from-accent/10 mb-6 inline-flex items-center rounded-full border bg-gradient-to-r to-[#28AFB0]/10 px-4 py-2">
        <Star className="text-accent mr-2 h-4 w-4" />
        <h5 className="text-heading text-sm font-medium">Karya Unggulan</h5>
      </div>
      <h2 className="text-heading mb-6 text-4xl font-bold text-balance lg:text-4xl">
        Karya{" "}
        <span className="from-accent to-secondary bg-gradient-to-r bg-clip-text text-transparent">
          Terbaru
        </span>
      </h2>
      <p className="text-primary mx-auto max-w-3xl text-center text-sm leading-relaxed text-pretty lg:text-lg">
        Karya terbaru mahasiswa dan dosen, mulai dari animasi, game, hingga
        desain interaktif yang siap menginspirasi dunia digital
      </p>
    </section>
  );
}