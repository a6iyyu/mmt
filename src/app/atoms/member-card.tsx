import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { members } from "@/app/data/members";
import Image from "next/image";
import Link from "next/link";

export function MemberCard({ member }: { member: (typeof members)[0] }) {
  return (
    <figure className="group relative flex h-[480px] w-full cursor-pointer flex-col justify-end overflow-hidden rounded-2xl bg-slate-900 transition-shadow duration-300">
      <Image src={member.image} alt={`Foto ${member.name}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
      <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" aria-hidden="true" />
      <figcaption className="relative z-10 space-y-4 p-6 text-white">
        <div>
          <h3 className="text-2xl font-bold">{member.name}</h3>
          <p className="text-sky-300">{member.role}</p>
        </div>
        <span className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
          {member.expertise.map((skill) => (
            <Badge key={skill} variant="secondary" className="bg-white/10 text-white backdrop-blur-sm">
              {skill}
            </Badge>
          ))}
        </span>
        <span className="flex items-center space-x-3 pt-2">
          <Link href={member.social.linkedin} className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
            <FaLinkedin className="h-4 w-4" />
          </Link>
          <Link href={member.social.github} className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
            <FaGithub className="h-4 w-4" />
          </Link>
          <Link href={`mailto:${member.social.email}`} className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
            <Mail className="h-4 w-4" />
          </Link>
        </span>
      </figcaption>
    </figure>
  );
}