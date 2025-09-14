"use client";

import { ArrowLeft, ArrowRight, Mail, Users } from "lucide-react";
import { RefObject, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions } from "swiper/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";

const members = [
  {
    name: "Dr. Ahmad Multimedia",
    role: "Kepala Lab",
    expertise: ["Game Development", "VR/AR", "Computer Graphics"],
    image: "/images/placeholder.png",
    social: { linkedin: "#", github: "#", email: "ahmad@mmt.ac.id" },
  },
  {
    name: "Sarah Creative",
    role: "Dosen Multimedia",
    expertise: ["Motion Graphics", "UI/UX Design", "Video Production"],
    image: "/images/placeholder.png",
    social: { linkedin: "#", github: "#", email: "sarah@mmt.ac.id" },
  },
  {
    name: "Prof. Tech Innovation",
    role: "Peneliti Senior",
    expertise: ["AI/ML", "Computer Vision", "Interactive Media"],
    image: "/images/placeholder.png",
    social: { linkedin: "#", github: "#", email: "tech@mmt.ac.id" },
  },
  {
    name: "Maya Digital",
    role: "Asisten Lab",
    expertise: ["3D Modeling", "Animation", "Digital Art"],
    image: "/images/placeholder.png",
    social: { linkedin: "#", github: "#", email: "maya@mmt.ac.id" },
  },
  {
    name: "Rizki Developer",
    role: "Mahasiswa S2",
    expertise: ["Web Development", "Mobile Apps", "IoT"],
    image: "/images/placeholder.png",
    social: { linkedin: "#", github: "#", email: "rizki@student.mmt.ac.id" },
  },
  {
    name: "Andi Gamer",
    role: "Mahasiswa S1",
    expertise: ["Game Design", "Level Design", "Storytelling"],
    image: "/images/placeholder.png",
    social: { linkedin: "#", github: "#", email: "andi@student.mmt.ac.id" },
  },
];

function MemberCard({ member }: { member: (typeof members)[0] }) {
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

function CarouselControls({ previous, next }: { previous: RefObject<HTMLButtonElement | null>; next: RefObject<HTMLButtonElement | null> }) {
  return (
    <nav className="mt-10 flex items-center justify-center gap-4 lg:justify-start">
      <Button ref={previous} variant="outline" size="icon" className="h-12 w-12 cursor-pointer rounded-full border-slate-300 hover:bg-slate-100">
        <ArrowLeft className="h-6 w-6 text-slate-700" />
      </Button>
      <Button ref={next} variant="outline" size="icon" className="h-12 w-12 cursor-pointer rounded-full border-slate-300 hover:bg-slate-100">
        <ArrowRight className="h-6 w-6 text-slate-700" />
      </Button>
    </nav>
  );
}

export default function Member() {
  const previous = useRef<HTMLButtonElement>(null);
  const next = useRef<HTMLButtonElement>(null);

  return (
    <section className="mt-24 mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
      <article className="cursor-default text-center lg:text-left">
        <h5 className="inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800 ring-1 ring-sky-200 ring-inset">
          <Users className="mr-2 h-4 w-4" />
          Tim Profesional & Berbakat
        </h5>
        <h2 className="mt-6 text-xl leading-11 font-bold text-slate-900 lg:text-4xl">
          Dosen & Mahasiswa
          <span className="block bg-gradient-to-r from-sky-600 to-cyan-400 bg-clip-text text-transparent">
            Penuh Inspirasi
          </span>
        </h2>
        <p className="mt-3 text-xs leading-8 text-slate-600 lg:text-base">
          Berkenalan dengan para ahli di balik inovasi Lab Multimedia. Sebuah
          tim solid yang terdiri dari dosen, peneliti, dan mahasiswa berbakat
          yang siap berkolaborasi.
        </p>
        <CarouselControls previous={previous} next={next} />
      </article>

      {/* === Kolom Kanan: Carousel dengan SwiperJS === */}
      <ul className="relative h-full min-h-[500px] w-full">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          onInit={(swiper) => {
            (swiper.params.navigation as NavigationOptions).prevEl = previous.current;
            (swiper.params.navigation as NavigationOptions).nextEl = next.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          spaceBetween={20}
          slidesPerView={1.25}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            1024: { slidesPerView: 1.2, spaceBetween: 30 },
          }}
          className="h-full w-full py-4"
        >
          {members.map((member) => (
            <SwiperSlide key={member.name}>
              <MemberCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </section>
  );
}