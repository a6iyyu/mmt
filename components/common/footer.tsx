import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { Menu, SocialMediaLinks } from "@/constants/menu";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary space-y-8 p-8 text-white lg:px-16 lg:py-12">
      {/* --- Bagian Atas: Info, Menu Cepat, dan Kontak --- */}
      <section className="flex flex-col gap-10 lg:flex-row lg:justify-between">
        {/* Informasi Lab */}
        <article className="space-y-4 lg:basis-1/3">
          <span className="flex items-center gap-4">
            <Image height={512} width={512} src="/images/favicon.ico" alt="Logo Lab Multimedia" className="h-10 w-10" loading="lazy" />
            <h5 className="text-xl font-bold">Lab Multimedia</h5>
          </span>
          <p className="text-justify text-sm leading-7 text-white/80">
            Laboratorium Multimedia MMT adalah pusat inovasi dan kreativitas
            dalam bidang multimedia, tempat mahasiswa dan dosen berkolaborasi
            menciptakan karya-karya digital terdepan.
          </p>
        </article>

        {/* Menu Cepat dan Kontak */}
        <article className="flex flex-col gap-10 sm:flex-row sm:justify-between lg:basis-1/2 lg:justify-end lg:gap-20">
          {/* Menu Cepat */}
          <nav className="space-y-4">
            <h5 className="text-lg font-semibold">Menu Cepat</h5>
            <ul className="space-y-2">
              {Menu.map((item) => (
                <li key={item.name}>
                  <Link href={`${item.href}`} className="text-sm text-white/80 transition-colors hover:text-white hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontak */}
          <div className="space-y-4">
            <h5 className="text-lg font-semibold">Kontak Kami</h5>
            <address className="space-y-3 not-italic">
              <span className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 h-4 w-4 flex-shrink-0" />
                <p className="text-sm text-white/80">
                  Lantai 8 Gedung Sipil
                  <br />
                  Politeknik Negeri Malang
                </p>
              </span>
              <span className="flex items-center gap-3">
                <FaPhone className="h-4 w-4 flex-shrink-0" />
                <p className="text-sm text-white/80">+62 21 1234 5678</p>
              </span>
              <span className="flex items-center gap-3">
                <FaEnvelope className="h-4 w-4 flex-shrink-0" />
                <p className="text-sm text-white/80">info@labmmt.ac.id</p>
              </span>
            </address>
          </div>
        </article>
      </section>

      {/* --- Pemisah --- */}
      <hr className="border-t border-white/20" />

      {/* --- Bagian Bawah: Copyright dan Media Sosial --- */}
      <section className="flex flex-col-reverse items-center gap-6 sm:flex-row sm:justify-between">
        <h5 className="cursor-default text-sm text-white/60">
          &copy; {new Date().getFullYear()} Lab Multimedia MMT. Semua hak cipta
          dilindungi.
        </h5>
        <nav className="flex items-center gap-2">
          {SocialMediaLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              {social.icon}
            </Link>
          ))}
        </nav>
      </section>
    </footer>
  );
}