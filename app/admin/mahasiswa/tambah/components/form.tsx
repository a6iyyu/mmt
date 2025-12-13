/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { IdCard, Mail, Save } from "lucide-react";
import { useState } from "react";
import { FaLinkedin, FaUsersLine, FaWhatsapp } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import Input from "@/components/common/input";
import Select from "@/components/common/select";
import Textarea from "@/components/common/textarea";

export default function FormulirTambahMahasiswa() {
  const [isLoading, _setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    foto_profil: null as File | null,
    nama_lengkap: "",
    nim: "",
    program_studi: "",
    angkatan: "",
    bio: "",
    github: "",
    linkedin: "",
    surel: "",
    whatsapp: "",
  });

  return (
    <form
      onSubmit={() => {}}
      encType="multipart/form-data"
      className="mb-8 grid grid-cols-1 gap-x-8 gap-y-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:grid-cols-2"
    >
      <div className="md:col-span-2">
        <Input
          label="Foto Mahasiswa"
          name="foto_profil"
          required
          type="file"
          icon={undefined}
        />
      </div>
      <Input
        label="Nama Lengkap"
        name="nama_lengkap"
        placeholder="Masukkan nama lengkap"
        required
        icon={<PiStudentFill className="h-4 w-4" />}
        type="text"
        value={formData.nama_lengkap}
        onChange={(e) => setFormData({ ...formData, nama_lengkap: e.target.value })}
      />
      <Input
        label="NIM (Nomor Induk Mahasiswa)"
        name="nim"
        placeholder="Masukkan NIM"
        required
        icon={<IdCard className="h-4 w-4" />}
        type="number"
        value={formData.nim}
        onChange={(e) => setFormData({ ...formData, nim: e.target.value })}
      />
      <Select
        label="Program Studi"
        name="program_studi"
        required
        options={[
          { label: "Teknik Informatika", value: "D-IV Teknik Informatika" },
          { label: "Sistem Informasi", value: "D-IV Sistem Informasi Bisnis" },
          { label: "Pengembangan Piranti Lunak Situs", value: "D-II Pengembangan Piranti Lunak Situs" },
          { label: "Manajemen Informatika", value: "D-III Manajemen Informatika" },
          { label: "Rekayasa Teknologi Informasi", value: "S2 Rekayasa Teknologi Informasi" },
        ]}
        value={formData.program_studi}
        onChange={(val) => setFormData({ ...formData, program_studi: val })}
      />
      <Input
        label="Angkatan"
        name="angkatan"
        placeholder="Masukkan angkatan"
        required
        icon={<FaUsersLine className="h-4 w-4" />}
        type="number"
        value={formData.angkatan}
        onChange={(e) => setFormData({ ...formData, angkatan: e.target.value })}
      />
      <div className="md:col-span-2">
        <Textarea
          label="Bio"
          name="bio"
          placeholder="Jelaskan tentang diri Anda..."
          required
        />
      </div>
      <Input
        label="GitHub"
        name="github"
        info='Tanpa "https://www.github.com/"'
        placeholder="Cth. labmmt"
        required
        icon={<FaLinkedin className="h-4 w-4" />}
        type="text"
        value={formData.github}
        onChange={(e) => setFormData({ ...formData, github: e.target.value })}
      />
      <Input
        label="LinkedIn"
        name="linkedin"
        info='Tanpa "https://www.linkedin.com/in/"'
        placeholder="Cth. labmmt"
        required
        icon={<FaLinkedin className="h-4 w-4" />}
        type="text"
        value={formData.linkedin}
        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
      />
      <Input
        label="Surel"
        name="surel"
        info="Gunakan surel yang valid"
        placeholder="Cth. labmmt@gmail.com"
        required
        icon={<Mail className="h-4 w-4" />}
        type="email"
        value={formData.surel}
        onChange={(e) => setFormData({ ...formData, surel: e.target.value })}
      />
      <Input
        label="WhatsApp"
        name="whatsapp"
        info="Gunakan format internasional"
        placeholder="Cth. +6281234567890"
        required
        icon={<FaWhatsapp className="h-4 w-4" />}
        type="text"
        value={formData.whatsapp}
        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
      />
      <div className="flex items-center justify-end border-t border-gray-50 pt-6 md:col-span-2">
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-primary hover:bg-hover-blue flex cursor-pointer items-center gap-3 rounded-lg p-6! text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 active:scale-95"
        >
          {isLoading ? (
            "Menyimpan..."
          ) : (
            <>
              <Save className="h-4 w-4" /> Simpan Data
            </>
          )}
        </Button>
      </div>
    </form>
  );
}