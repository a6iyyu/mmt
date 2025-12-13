/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { IdCard, Mail, Save } from "lucide-react";
import { useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { PiChalkboardTeacher } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import Input from "@/components/common/input";
import Select from "@/components/common/select";
import TextArea from "@/components/common/textarea";

export default function FormulirTambahDosen() {
  const [isLoading, _setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    foto_profil: null as File | null,
    nama_lengkap: "",
    nip: "",
    keahlian: "",
    jabatan: "",
    bio: "",
    linkedin: "",
    surel: "",
    sinta: "",
    scholar: "",
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
          label="Foto Dosen"
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
        icon={<PiChalkboardTeacher className="h-4 w-4" />}
        type="text"
        value={formData.nama_lengkap}
        onChange={(e) => setFormData({ ...formData, nama_lengkap: e.target.value })}
      />
      <Input
        label="NIP (Nomor Induk Pegawai)"
        name="nip"
        placeholder="Masukkan NIP"
        required
        icon={<IdCard className="h-4 w-4" />}
        type="number"
        value={formData.nip}
        onChange={(e) => setFormData({ ...formData, nip: e.target.value })}
      />
      <Select
        label="Keahlian"
        name="keahlian"
        required
        options={[
          { label: "Game Development", value: "Game Development" },
          { label: "UI/UX Design", value: "UI/UX Design" },
          { label: "AR/VR", value: "AR/VR" },
          { label: "Animasi", value: "Animasi" },
          { label: "Multimedia", value: "Multimedia" },
          { label: "Lainnya", value: "Lainnya" },
        ]}
        value={formData.keahlian}
        onChange={(val) => setFormData({ ...formData, keahlian: val })}
      />
      <Select
        label="Jabatan"
        name="jabatan"
        required
        options={[
          { label: "Asisten Ahli", value: "Asisten Ahli" },
          { label: "Lektor", value: "Lektor" },
          { label: "Lektor Kepala", value: "Lektor Kepala" },
          { label: "Guru Besar", value: "Guru Besar" },
        ]}
        value={formData.jabatan}
        onChange={(val) => setFormData({ ...formData, jabatan: val })}
      />
      <div className="md:col-span-2">
        <TextArea
          label="Bio"
          name="bio"
          placeholder="Masukkan bio singkat"
          required={false}
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
        />
      </div>
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
        label="SINTA"
        name="sinta"
        info="Gunakan nama yang valid"
        placeholder="Cth. labmmt"
        required
        icon={<Mail className="h-4 w-4" />}
        type="email"
        value={formData.sinta}
        onChange={(e) => setFormData({ ...formData, sinta: e.target.value })}
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