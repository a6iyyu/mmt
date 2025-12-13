"use client";

import { Calendar, Pin, Save, School, Users } from "lucide-react";
import { useState } from "react";
import { GiTeacher } from "react-icons/gi";
import { Submit } from "@/app/admin/pelatihan/tambah/services/form";
import { Button } from "@/components/ui/button";
import Input from "@/components/common/input";
import Select from "@/components/common/select";
import TextArea from "@/components/common/textarea";

// prettier-ignore
export default function FormulirTambahPelatihan() {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    nama: "",
    mentor: "",
    kategori: "",
    gambar: null as File | null,
    deskripsi: "",
    lokasi: "",
    tanggal: "",
    kuota: "",
    buka_pendaftaran: "",
  });

  return (
    <form onSubmit={(e) => Submit(e, setIsLoading)} encType="multipart/form-data" className="grid grid-cols-1 gap-x-8 gap-y-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:grid-cols-2">
      <Input
        label="Nama Pelatihan"
        name="nama"
        placeholder="Contoh: Workshop Unity Basic"
        required
        value={formData.nama}
        onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
        icon={<School className="h-4 w-4" />}
        type="text"
      />
      <Input
        label="Nama Mentor"
        name="mentor"
        placeholder="Siapa pengajarnya?"
        required
        value={formData.mentor}
        onChange={(e) => setFormData({ ...formData, mentor: e.target.value })}
        icon={<GiTeacher className="h-4 w-4" />}
        type="text"
      />
      <div className="md:col-span-2">
        <TextArea
          label="Deskripsi Singkat"
          name="deskripsi"
          placeholder="Jelaskan materi yang akan dipelajari..."
          maxLength={1000}
          required
          value={formData.deskripsi}
          onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
        />
      </div>
      <div className="md:col-span-2">
        <Select
          label="Kategori"
          name="kategori"
          required
          options={[
            { label: "Game Development", value: "Game Development" },
            { label: "UI/UX Design", value: "UI/UX Design" },
            { label: "AR/VR", value: "AR/VR" },
            { label: "Animasi", value: "Animasi" },
            { label: "Multimedia", value: "Multimedia" },
            { label: "Lainnya", value: "Lainnya" },
          ]}
          value={formData.kategori}
          onChange={(val) => setFormData({ ...formData, kategori: val })}
        />
      </div>
      <div className="md:col-span-2">
        <Input
          label="Gambar"
          name="gambar"
          type="file"
          required
          onChange={(e) => setFormData({ ...formData, gambar: e.target.files?.[0] || null })}
          icon={null}
        />
      </div>
      <Select
        label="Status Pendaftaran"
        name="buka_pendaftaran"
        required
        options={[
          { label: "Dibuka", value: "Dibuka" },
          { label: "Akan Datang", value: "Akan Datang" },
        ]}
        value={formData.buka_pendaftaran}
        onChange={(val) => setFormData({ ...formData, buka_pendaftaran: val })}
      />
      <Input
        label="Lokasi"
        name="lokasi"
        placeholder="Contoh: Lab Komputer 1 / Zoom"
        required
        value={formData.lokasi}
        onChange={(e) => setFormData({ ...formData, lokasi: e.target.value })}
        icon={<Pin className="h-4 w-4" />}
        type="text"
      />
      <Input
        label="Tanggal Pelaksanaan"
        name="tanggal"
        type="date"
        required
        value={formData.tanggal}
        onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
        icon={<Calendar className="h-4 w-4" />}
      />
      <Input
        label="Kuota Peserta"
        name="kuota"
        type="number"
        placeholder="20"
        required
        value={formData.kuota}
        onChange={(e) => setFormData({ ...formData, kuota: e.target.value })}
        icon={<Users className="h-4 w-4" />}
      />
      <div className="mt-4 flex items-center justify-end border-t border-gray-50 pt-6 md:col-span-2">
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