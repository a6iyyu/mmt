"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Menu as M } from "@/constants/menu";
import Image from "next/image";
import Link from "next/link";

// prettier-ignore
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setIsScrolled(window.scrollY > 20));
    return () => window.removeEventListener("scroll", () => setIsScrolled(window.scrollY > 20));
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all ${isScrolled ? "bg-white/80 shadow backdrop-blur dark:bg-neutral-900/80" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between px-10 py-5">
        <section className="flex items-center gap-3">
          <Image height={48} width={48} src="/images/jti.png" alt="JTI Polinema" className="h-5 w-5 lg:h-8 lg:w-8" loading="lazy" />
          <Image height={48} width={48} src="/images/console.png" alt="Game Developer Polinema" className="h-5 w-5 lg:h-8 lg:w-8" loading="lazy" />
          <h5 className="text-heading ml-2 hidden cursor-default font-semibold lg:block dark:text-white">
            Lab Multimedia MMT
          </h5>
        </section>
        <nav className="hidden gap-6 text-sm font-medium lg:flex">
          {M.map((route, index) => (
            <Link key={index} href={route.name === "Beranda" ? "/" : `/${route.name.toLowerCase().replace(/ /g, "-")}`} className="group text-heading transition duration-300">
              {route.name}
              <span className="bg-heading block h-0.5 max-w-0 transition-all duration-500 group-hover:max-w-full" />
            </Link>
          ))}
        </nav>
        <button className="lg:hidden" onClick={() => setIsOpen(true)}>
          <Menu className="h-5 w-5 lg:h-8 lg:w-8" />
        </button>
      </div>
      <nav className={`fixed top-0 left-0 h-screen w-full transform transition-transform duration-500 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"} z-40 bg-white dark:bg-neutral-900`}>
        <section className="flex h-full flex-col px-6 py-6">
          <button className="mb-6 self-end" onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5 lg:h-8 lg:w-8" />
          </button>
          {M.map((route, index) => (
            <Link
              key={index}
              href={route.name === "Beranda" ? "/" : `/${route.name.toLowerCase().replace(/ /g, "-")}`}
              className="group text-heading border-b-heading/50 flex items-center gap-3 border-b py-4 text-sm transition duration-300 last:border-b-0"
              onClick={() => setIsOpen(false)}
            >
              {route.icon}
              {route.name}
            </Link>
          ))}
        </section>
      </nav>
    </header>
  );
}