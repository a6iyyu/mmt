import type { LucideIcon } from "lucide-react";
import { StatsCard } from "@/app/admin/atoms/stats-card";
import { statistics } from "@/app/admin/constants/statistics";

type Statistics = {
  color?: "blue" | "purple" | "orange" | "green" | string;
  icon: LucideIcon;
  title: string;
  value: string;
};

export default function Statistics() {
  return (
    <>
      <div className="mx-auto mt-8 flex w-9/10 cursor-default flex-col lg:w-19/20">
        <h1 className="cursor-default text-lg font-bold text-gray-800 lg:text-2xl">
          Selamat datang, Admin!
        </h1>
        <h5 className="mt-1 text-xs text-gray-600 lg:text-sm">
          Apa yang ingin Anda kelola hari ini?
        </h5>
      </div>
      <article className="mx-auto mt-5 flex w-9/10 snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:grid lg:w-19/20 lg:grid-cols-3 lg:justify-center lg:gap-6 lg:overflow-visible lg:pb-0">
        {statistics.map((statistic, index) => (
          <div key={index} className="min-w-[280px] shrink-0 snap-center lg:w-full lg:min-w-0">
            <StatsCard icon={statistic.icon} title={statistic.title} value={statistic.value} color={statistic.color} />
          </div>
        ))}
      </article>
    </>
  );
}