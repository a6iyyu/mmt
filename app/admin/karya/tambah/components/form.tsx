"use client";

import { Notebook, Palette } from "lucide-react";
import Input from "@/components/common/input";

export default function FormulirTambahKarya() {
  return (
    <form
      onSubmit={() => {}}
      encType="multipart/form-data"
      className="mb-8 grid grid-cols-1 gap-x-8 gap-y-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:grid-cols-2"
    >
      <Input
        label="Judul Karya"
        name="judul"
        placeholder="Masukkan judul karya"
        required
        icon={<Palette />}
        type={"number"}
      />
      <Input
        label="Deskripsi Karya"
        name="deskripsi"
        placeholder="Masukkan deskripsi karya"
        required
        icon={<Notebook />}
        type={"number"}
      />
    </form>
  );
}