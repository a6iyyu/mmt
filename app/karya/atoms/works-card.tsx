import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { bestWorks } from "@/app/karya/data/best-works";
import { Badge } from "@/components/ui/badge";
import { item } from "@/constants/variants";
import Image from "next/image";
import Link from "next/link";

export function WorksCard({ project }: { project: (typeof bestWorks)[0] }) {
  return (
    <motion.figure variants={item} className="group relative flex h-[480px] w-full cursor-pointer flex-col justify-end overflow-hidden rounded-2xl bg-slate-900 transition-shadow duration-300">
      <Image src={project.image} alt={`Gambar ${project.title}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
      <span className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" aria-hidden="true" />
      <figcaption className="relative z-10 space-y-4 p-6 text-white">
        <div>
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-sky-300">{project.category}</p>
        </div>
        <span className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
          {project.tech.map((skill) => (
            <Badge key={skill} variant="secondary" className="bg-white/10 text-white backdrop-blur-sm">
              {skill}
            </Badge>
          ))}
        </span>
        <span className="flex items-center space-x-3 pt-2">
          <Link href={project.links.demo} rel="noopener noreferrer" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
            <ExternalLink className="h-4 w-4" />
          </Link>
          <Link href={project.links.code} rel="noopener noreferrer" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
            <FaGithub className="h-4 w-4" />
          </Link>
        </span>
      </figcaption>
    </motion.figure>
  );
}