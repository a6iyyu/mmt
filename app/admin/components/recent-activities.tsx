import { Activity } from "lucide-react";
import Table from "@/components/common/table";

export default function RecentActivities() {
  return (
    <>
      <div className="mx-auto my-8 flex w-9/10 cursor-default flex-col lg:w-19/20">
        <article className="mb-5 flex cursor-default lg:items-center">
          <span className="flex h-fit rounded-lg border border-gray-200 bg-gray-500/10 p-3 shadow-sm lg:rounded-2xl lg:p-4">
            <Activity className="h-4 w-4 text-gray-600 lg:h-6 lg:w-6" />
          </span>
          <span className="ml-5 flex flex-col">
            <h3 className="cursor-default text-base font-bold text-gray-800 lg:text-lg">
              Aktivitas Terbaru
            </h3>
            <p className="mt-0.5 text-xs leading-relaxed text-gray-500/90 lg:text-sm">
              Ringkasan aktivitas terbaru dalam sistem.
            </p>
          </span>
        </article>
        <Table
          headers={["Tanggal", "Aktivitas"]}
          rows={[]}
          sortable={["Tanggal"]}
        />
      </div>
    </>
  );
}