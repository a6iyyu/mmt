"use client";

import { MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  const whatsAppLink = "https://wa.me/6281234567890?text=Halo%20Lab%20MMT,%20saya%20tertarik%20untuk%20berkolaborasi.";

  return (
    <section className="mx-auto max-w-7xl cursor-default px-6 py-24">
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-primary/5 relative flex flex-col items-center gap-10 overflow-hidden rounded-[2.5rem] px-8 py-18 lg:flex-row lg:px-12"
      >
        <div className="bg-accent/10 pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full blur-3xl" />
        <div className="bg-primary/10 pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-1 flex-col items-start space-y-4 text-left">
          <span className="text-primary inline-flex items-center gap-2 rounded-full bg-white/60 px-3.5 py-1.5 text-xs font-bold backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Kolaborasi & Inovasi
          </span>
          <h2 className="text-heading text-2xl leading-snug font-extrabold tracking-tight lg:text-4xl">
            Wujudkan Ide Liar <br />
            Menjadi <span className="text-primary">Karya Nyata</span>
          </h2>
          <p className="text-text-secondary max-w-lg text-base leading-loose">
            Punya gagasan proyek multimedia tapi butuh tim dan fasilitas? Mari
            diskusikan bagaimana Lab MMT bisa membantu merealisasikannya.
          </p>
          <Link
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-2 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-7 py-4 font-bold text-white transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/20"
          >
            <MessageCircle className="h-5 w-5" />
            <h5 className="text-sm">Hubungi via WhatsApp</h5>
          </Link>
        </div>
        <div className="relative order-first min-h-[280px] w-full flex-1 overflow-hidden rounded-3xl lg:order-last lg:h-[350px]">
          <Image
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
            alt="Ilustrasi 3D"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </motion.article>
    </section>
  );
}