"use client";

import { Calendar, Palette } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { GiConsoleController } from "react-icons/gi";
import Input from "@/components/common/input";
import Select from "@/components/common/select";
import Textarea from "@/components/common/textarea";

export default function FormulirTambahKarya() {
  return (
    <form
      onSubmit={() => {}}
      encType="multipart/form-data"
      className="mb-8 grid grid-cols-1 gap-x-8 gap-y-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:grid-cols-2"
    >
      <div className="md:col-span-2">
        <Input
          label="Gambar (Thumbnail)"
          name="gambar"
          placeholder="Masukkan gambar karya"
          required
          icon={null}
          type="file"
        />
      </div>
      <Input
        label="Judul Karya"
        name="judul"
        placeholder="Masukkan judul karya"
        required
        icon={<Palette className="h-4 w-4" />}
        type="text"
      />
      <Input
        label="Tanggal Publikasi"
        name="tanggal_publikasi"
        placeholder="Masukkan tanggal publikasi karya"
        required
        icon={<Calendar className="h-4 w-4" />}
        type="date"
      />
      <div className="md:col-span-2">
        <Textarea
          label="Deskripsi Karya"
          name="deskripsi"
          placeholder="Masukkan deskripsi karya"
          required
        />
      </div>
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
      />
      <Input
        label="Tautan Demo"
        name="tautan_demo"
        placeholder="Masukkan tautan demo karya"
        required
        icon={<GiConsoleController className="h-4 w-4" />}
        type="text"
      />
      <Input
        label="Tautan Repositori"
        name="tautan_repo"
        info="Masukkan tautan repositori karya."
        placeholder="Masukkan tautan repositori karya"
        required
        icon={<FaGithub className="h-4 w-4" />}
        type="text"
      />
      <Select
        label="Unggulan"
        name="unggulan"
        info="Pilih apakah karya ini termasuk unggulan."
        required
        options={[
          { label: "Ya", value: "Ya" },
          { label: "Tidak", value: "Tidak" },
        ]}
      />
      <Select
        label="Status"
        name="status"
        required
        options={[
          { label: "Dijadwalkan", value: "Dijadwalkan" },
          { label: "Sedang Berlangsung", value: "Sedang Berlangsung" },
          { label: "Sudah Terbit", value: "Sudah Terbit" },
          { label: "Diarsipkan", value: "Diarsipkan" },
        ]}
      />
    </form>
  );
}