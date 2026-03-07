"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function Filter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("query")?.toString() || "");

  const handleSearch = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("cari") as string;
    const status = formData.get("status") as string;

    const params = new URLSearchParams(searchParams);

    if (query) params.set("query", query);
    else params.delete("query");

    if (status && status !== "all") params.set("status", status);
    else params.delete("status");

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="mx-auto mt-8 flex w-9/10 flex-col items-center justify-between gap-4 lg:w-19/20 lg:flex-row">
      <fieldset className="relative w-full">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Cari mahasiswa..."
          name="cari"
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          className="h-10.5 w-full bg-white pl-10"
        />
      </fieldset>
      <div className="flex w-full items-center gap-2 lg:w-auto">
        <fieldset className="w-full lg:w-64">
          <Select name="status" defaultValue={searchParams.get("status")?.toString() || "all"}>
            <SelectTrigger className="h-10.5 bg-white">
              <SelectValue placeholder="Semua Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Status</SelectItem>
              <SelectItem value="ACTIVE">Aktif</SelectItem>
              <SelectItem value="ON_LEAVE">Cuti</SelectItem>
              <SelectItem value="GRADUATED">Lulus</SelectItem>
            </SelectContent>
          </Select>
        </fieldset>
        <button
          type="submit"
          className="bg-primary hover:bg-hover-blue flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-lg text-white transition-colors"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}