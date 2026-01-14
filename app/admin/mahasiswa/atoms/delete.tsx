"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { API_STUDENTS_DELETE } from "@/constants/route";
import axios from "axios";

// prettier-ignore
export default function Delete({ id }: { id: number }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("Apakah Anda yakin ingin menghapus mahasiswa ini?")) return;

    try {
      await axios.delete(API_STUDENTS_DELETE(id));
      console.log(`✅ Berhasil menghapus mahasiswa ${id}`);
      router.refresh();
    } catch (error) {
      console.error(`❌ Gagal menghapus: ${error}`);
      alert("Gagal menghapus data.");
    }
  };

  return (
    <button onClick={handleDelete} className="cursor-pointer rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-red-600">
      <Trash2 className="h-4 w-4" />
    </button>
  );
}