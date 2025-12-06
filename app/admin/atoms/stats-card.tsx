import type { LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { styles } from "@/app/admin/constants/statistics";

type Statistics = {
  icon: ComponentType<SVGProps<SVGSVGElement>> | LucideIcon;
  title: string;
  value: string | number;
  color: string;
};

export function StatsCard({ icon: Icon, title, value, color }: Statistics) {
  return (
    <figure className="flex h-full w-full cursor-default items-center gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 lg:hover:shadow-md">
      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${color ? styles[color]?.bg : styles.default.bg} ${color ? styles[color]?.text : styles.default.text}`}>
        <Icon className="h-6 w-6 lg:h-7 lg:w-7" />
      </div>
      <figcaption className="flex flex-col overflow-hidden">
        <h2 className="text-sm font-medium whitespace-nowrap text-gray-500">
          {title}
        </h2>
        <h5 className="mt-1 text-2xl font-extrabold text-gray-800">
          {value}
        </h5>
      </figcaption>
    </figure>
  );
}