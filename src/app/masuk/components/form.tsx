import { Mail, Lock, ArrowRight } from "lucide-react";
import Input from "@/components/common/input";
import Image from "next/image";

export default function Form() {
  return (
    <section className="mx-auto flex w-1/2 max-w-19/20 flex-col justify-center gap-8 px-[2.5%] lg:max-w-3/4 lg:px-[7.5%]">
      <div className="flex items-center gap-5">
        <Image src="/images/jti.png" alt="Logo JTI" width={100} height={40} className="h-9 w-auto object-contain" priority />
        <span className="h-8 w-[1.5px] bg-gray-200" />
        <Image src="/images/mascot.png" alt="Logo Lab MMT" width={40} height={40} className="h-10 w-auto object-contain" priority />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-heading cursor-default text-2xl font-extrabold tracking-tight">
          Selamat Datang!
        </h1>
        <p className="text-text-secondary cursor-default text-sm">
          Silakan masuk untuk melanjutkan aktivitas anda.
        </p>
      </div>
      <form className="flex flex-col gap-5" method="POST" action="/api/auth/login">
        <Input label="Surel" name="surel" type="email" placeholder="nama@polinema.ac.id" icon={<Mail size={18} />} required />
        <Input label="Kata Sandi" name="kata_sandi" type="password" placeholder="••••••••" icon={<Lock size={18} />} required />
        <button type="submit" className="group bg-accent hover:bg-accent/90 mt-6 flex cursor-pointer items-center justify-center gap-2 rounded-lg py-3.75 text-xs font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98] lg:text-sm">
          Masuk Sekarang
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </form>
    </section>
  );
}