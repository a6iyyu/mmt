import Input from "@/components/common/input";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function Form() {
  return (
    <div className="mx-auto w-full max-w-md space-y-8">
      <h2 className="text-heading text-left text-3xl font-extrabold tracking-tight md:text-4xl">
        Selamat Datang!
      </h2>
      <p className="text-text-secondary text-left">
        Silakan masuk dengan akun anda.
      </p>
      <form className="space-y-6" method="POST" action="/api/auth/login">
        <Input
          label="Surel"
          name="surel"
          type="email"
          placeholder="nama@email.com"
          icon={<Mail className="h-5 w-5 text-gray-400" />}
          required
        />
        <Input
          label="Kata Sandi"
          name="kata_sandi"
          type="password"
          placeholder="••••••••"
          icon={<Lock className="h-5 w-5 text-gray-400" />}
          required
        />
        <button type="submit" className="group bg-accent hover:bg-accent/90 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 font-bold text-white shadow-lg transition-all hover:shadow-xl active:scale-[0.98]">
          Masuk Sekarang
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>
      </form>
    </div>
  );
}