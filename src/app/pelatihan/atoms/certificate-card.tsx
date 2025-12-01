import { Badge } from "@/components/ui/badge";
import { certificates } from "@/app/pelatihan/data/certificates";
import Image from "next/image";

export function CertificateCard({ certificate }: { certificate: (typeof certificates)[0] }) {
  return (
    <figure className="group relative flex h-[480px] w-full cursor-pointer flex-col justify-end overflow-hidden rounded-2xl bg-slate-900 transition-shadow duration-300">
      <Image src={certificate.image} alt={`Foto ${certificate.title}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
      <span className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" aria-hidden="true" />
      <figcaption className="relative z-10 space-y-4 p-6 text-white">
        <div>
          <h3 className="text-2xl font-bold">{certificate.title}</h3>
          <p className="mt-2 text-sm text-sky-300 lg:text-base">
            {certificate.description}
          </p>
        </div>
        <span className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
          {certificate.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-white/10 text-white backdrop-blur-sm">
              {tag}
            </Badge>
          ))}
        </span>
      </figcaption>
    </figure>
  );
}