"use client";

import { motion, Variants } from "framer-motion";
import { BookUser, GraduationCap, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { Lecturer as ILecturer } from "@/app/anggota/types/lecturer";
import Image from "next/image";
import Link from "next/link";

export default function LecturerCard({ lecturer, variants }: { lecturer: ILecturer; variants: Variants }) {
  return (
    <motion.figure variants={variants} className="border-border/50 bg-card/40 flex h-full w-full flex-col overflow-hidden rounded-xl border shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-56 w-full">
        <Image src={lecturer.photo} alt={`Foto ${lecturer.name}`} fill className="object-cover" />
        <h5 className="bg-primary/80 text-primary-foreground absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm">
          {lecturer.field}
        </h5>
      </div>
      <figcaption className="flex flex-1 flex-col p-5">
        <h3 className="text-foreground text-xl font-bold">{lecturer.name}</h3>
        <p className="text-muted-foreground text-sm">{lecturer.position}</p>
        <div className="mt-4 flex-grow">
          <h4 className="text-foreground mb-2 text-xs font-semibold tracking-wider uppercase">
            Minat Penelitian:
          </h4>
          <span className="flex flex-wrap gap-2">
            {lecturer.research_interests.map((interest) => (
              <h5 key={interest} className="bg-muted/50 text-muted-foreground rounded-full px-3 py-1 text-xs">
                {interest}
              </h5>
            ))}
          </span>
        </div>
        <div className="border-border/50 mt-5 flex items-center justify-between gap-4 border-t pt-4">
          <span className="flex items-center gap-4">
            <Link
              href={lecturer.links?.sinta as string}
              target="_blank"
              rel="noopener noreferrer"
              title="Sinta"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <BookUser size={20} />
            </Link>
            <Link
              href={lecturer.links?.scholar as string}
              target="_blank"
              rel="noopener noreferrer"
              title="Google Scholar"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <GraduationCap size={20} />
            </Link>
            <Link
              href={lecturer.links?.linkedin as string}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaLinkedin size={20} />
            </Link>
          </span>
          <Link href={`mailto:${lecturer.email}`} title="Email" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={20} />
          </Link>
        </div>
      </figcaption>
    </motion.figure>
  );
}