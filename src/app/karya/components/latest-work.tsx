"use client";

import { ArrowRight, Code2, ExternalLink, Eye, Search as SearchIcon, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { CREATIONS } from "@/constants/route";
import { Truncate } from "@/utils/text";
import Image from "next/image";
import Input from "@/components/common/input";
import Select from "@/components/common/select";

const dummyProjects = [
  {
    title: "Project A",
    description: "Deskripsi singkat project A.",
    image: "/images/placeholder.png",
    category: "Game Development",
    featured: true,
    views: 230,
    stars: 12,
    tech: ["React", "Tailwind", "Three.js"],
    demo: "#",
    code: "#",
  },
  {
    title: "Project B",
    description: "Deskripsi singkat project B.",
    image: "/images/placeholder.png",
    category: "UI/UX",
    featured: false,
    views: 120,
    stars: 8,
    tech: ["Figma", "Framer"],
    demo: "#",
    code: "#",
  },
  {
    title: "Project C",
    description: "Deskripsi singkat project C.",
    image: "/images/placeholder.png",
    category: "Animasi",
    featured: true,
    views: 310,
    stars: 15,
    tech: ["Blender", "Unity"],
    demo: "#",
    code: "#",
  },
];

export default function LatestWork() {
  return (
    <section className="relative flex w-full flex-col items-center pb-32">
      <span className="bg-accent/10 pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full blur-3xl" />
      <span className="bg-secondary/10 pointer-events-none absolute top-0 right-1/4 h-72 w-72 rounded-full blur-3xl" />
      <div className="mx-auto w-[90%] text-center"></div>
    </section>
  );
}