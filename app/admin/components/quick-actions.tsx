import { type LucideIcon, Zap } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { quickActions } from "@/app/admin/constants/quick-actions";
import Link from "next/link";

type QuickActions = {
  icon: ComponentType<SVGProps<SVGSVGElement>> | LucideIcon;
  label: string;
  description: string;
  href: string;
  color: string;
  bg: string;
  hover: string;
}

export default function QuickActions() {
  return (
    <div className="mx-auto mt-8 w-9/10 lg:w-19/20">
      <article className="mb-5 flex cursor-default lg:items-center">
        <span className="flex h-fit rounded-lg border border-gray-200 bg-gray-500/10 p-3 shadow-sm lg:rounded-2xl lg:p-4">
          <Zap className="h-4 w-4 text-gray-600 lg:h-6 lg:w-6" />
        </span>
        <span className="ml-5 flex flex-col">
          <h3 className="cursor-default text-base font-bold text-gray-800 lg:text-lg">
            Aksi Cepat
          </h3>
          <p className="mt-0.5 text-xs leading-relaxed text-gray-500/90 lg:text-sm">
            Jalan pintas untuk mengelola konten lab dengan efisien.
          </p>
        </span>
      </article>
      <article className="flex snap-x snap-mandatory gap-4 overflow-visible overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:pb-0">
        {quickActions.map((action, index) => (
          <Link
            key={index}
            href={action.href}
            className={`group flex min-w-[280px] shrink-0 snap-center items-center gap-4 rounded-xl border border-dashed border-gray-300 bg-white p-5 transition-all duration-300 lg:w-full lg:min-w-0 lg:hover:-translate-y-1 lg:hover:shadow-md ${action.hover}`}
          >
            <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${action.bg} ${action.color} transition-transform group-hover:scale-110`}>
              <action.icon className="h-6 w-6" />
            </span>
            <span className="flex flex-col overflow-hidden">
              {" "}
              <h5 className="truncate font-semibold text-gray-700 group-hover:text-gray-900">
                {" "}
                {action.label}
              </h5>
              <p className="mt-1 line-clamp-1 text-xs text-gray-500 group-hover:text-gray-600">
                {action.description}
              </p>
            </span>
          </Link>
        ))}
      </article>
    </div>
  );
}