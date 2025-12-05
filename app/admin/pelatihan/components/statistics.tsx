import { Plus } from "lucide-react";
import { StatsCard } from "@/app/admin/atoms/stats-card";
import { statistics } from "@/app/admin/pelatihan/constants/statistics";
import { ADMIN_COURSES_CREATE } from "@/constants/route";
import Link from "next/link";

export default function Statistics() {
  return (
    <>
      <div className="mx-auto mt-8 flex w-9/10 flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:w-19/20">
        <span className="cursor-default">
          <h1 className="text-lg font-bold text-gray-800 lg:text-2xl">
            Daftar Pelatihan
          </h1>
          <p className="mt-1 text-xs text-gray-500 lg:text-sm">
            Kelola jadwal dan data pelatihan laboratorium.
          </p>
        </span>
        <Link href={ADMIN_COURSES_CREATE} className="bg-primary hover:bg-primary/90 flex h-fit w-fit items-center gap-2 rounded-lg px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 ease-in-out lg:text-sm lg:hover:-translate-y-0.5 lg:active:scale-95">
          <Plus className="h-4 w-4" />
          <span>Tambah Baru</span>
        </Link>
      </div>
      <article className="mx-auto mt-6 flex w-9/10 snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:grid lg:w-19/20 lg:grid-cols-3 lg:justify-center lg:gap-6 lg:overflow-visible lg:pb-0">
        {statistics.map((item, index) => {
          return (
            <span key={index} className="min-w-[300px] shrink-0 snap-center lg:min-w-0">
              <StatsCard icon={item.icon} title={item.title} value={item.value} color={item.color} />
            </span>
          );
        })}
      </article>
    </>
  );
}