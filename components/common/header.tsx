"use client";

import { LogOut, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import { Menu as IMenu } from "@/constants/menu";
import { API_AUTH_LOGOUT, LOGIN } from "@/constants/route";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

// prettier-ignore
export function AdminHeader({ setSidebarOpen }: { setSidebarOpen: Dispatch<SetStateAction<boolean>> }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.post(API_AUTH_LOGOUT);
      router.push(LOGIN);
    } catch (error: unknown) {
      console.error(`❌ Logout failed because ${error}`);
      throw error;
    }
  };

  return (
    <header className="bg-background sticky top-0 z-40 flex w-full items-center justify-between border-b border-gray-200 px-6 py-4 shadow-sm">
      <section className="flex items-center gap-4">
        <button onClick={() => setSidebarOpen((prev) => !prev)} className="cursor-pointer rounded-lg p-2 text-gray-600 hover:bg-gray-100">
          <Menu className="h-5 w-5" />
        </button>
        <h4 className="hidden cursor-default text-lg font-semibold text-gray-800 lg:block">
          CMS Admin Panel
        </h4>
      </section>
      <section className="relative">
        <button onClick={() => setIsDropdownOpen((prev) => !prev)} className="flex cursor-pointer items-center gap-3 focus:outline-none">
          <div className="hidden text-right text-sm lg:block">
            <p className="font-semibold text-gray-700">Administrator</p>
            <p className="text-xs text-gray-500">admin@labmmt.ac.id</p>
          </div>
          <Image src="/images/profile-photo.png" alt="Profile" width={40} height={40} className="rounded-full border border-gray-200 object-cover" />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-3 w-48 rounded border border-gray-100 bg-white py-2 shadow-lg">
            <button onClick={logout} className="flex w-full cursor-pointer items-center gap-2 px-4 py-2 text-left text-xs text-red-600 hover:bg-red-50 lg:text-sm">
              <LogOut className="h-4 w-4" /> Keluar
            </button>
          </div>
        )}
      </section>
    </header>
  );
}

// prettier-ignore
export function PublicHeader() {
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
          <Image height={48} width={48} src="/images/jti.png" alt="JTI" className="h-5 w-5 lg:h-8 lg:w-8" loading="lazy" />
          <span className="h-6 w-px bg-gray-500/30" />
          <Image height={48} width={48} src="/images/mascot.png" alt="MMT" className="h-6 w-6 lg:h-8 lg:w-8" loading="lazy" />
          <h5 className="text-heading ml-2 hidden cursor-default font-semibold lg:block dark:text-white">
            Lab MMT
          </h5>
        </section>
        <nav className="hidden gap-6 text-sm font-medium lg:flex">
          {IMenu.map((route, index) => (
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
          {IMenu.map((route, index) => (
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