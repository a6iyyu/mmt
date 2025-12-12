"use client";

import { Calendar, Pin, Save, School, ScrollText, Users } from "lucide-react";
import { useState } from "react";
import { GiTeacher } from "react-icons/gi";
import { Submit } from "@/app/admin/pelatihan/tambah/services/form";
import { Button } from "@/components/ui/button";
import Input from "@/components/common/input";
import Select from "@/components/common/select";

// prettier-ignore
export default function FormulirTambahPelatihan() {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    nama: "",
    mentor: "",
    deskripsi: "",
    lokasi: "",
    tanggal: "",
    kuota: "",
    status: "",
  });

  return (
    <form onSubmit={(e) => Submit(e, setIsLoading)} className="grid grid-cols-1 gap-x-8 gap-y-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:grid-cols-2">
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
        <Input
          label="Deskripsi Singkat"
          name="deskripsi"
          placeholder="Jelaskan materi yang akan dipelajari..."
          required
          value={formData.deskripsi}
          onChange={(e) =>
            setFormData({ ...formData, deskripsi: e.target.value })
          }
          icon={<ScrollText className="h-4 w-4" />}
          type="text"
        />
      </div>
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
      <Select
        label="Status Publikasi"
        name="status"
        required
        options={[
          { label: "Draf (Simpan dulu)", value: "DRAF" },
          { label: "Terjadwal (Akan datang)", value: "DIJADWALKAN" },
          { label: "Terbit (Sedang berlangsung)", value: "DITERBITKAN" },
          { label: "Arsip (Selesai)", value: "DIARSIPKAN" },
        ]}
        value={formData.status}
        onChange={(val) => setFormData({ ...formData, status: val })}
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