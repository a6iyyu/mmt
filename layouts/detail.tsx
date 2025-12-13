import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function DetailShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main className={`cursor-default space-y-8 p-8 ${className}`}>
      {children}
    </main>
  );
}

function DetailHeader({ backUrl, title, actions }: { backUrl: string; title: string; actions?: ReactNode }) {
  return (
    <section className="flex flex-col gap-4 border-b border-gray-100 lg:flex-row lg:items-center lg:justify-between">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2">
        <Link href={backUrl} className="group flex items-center gap-2 rounded-lg text-sm font-medium text-gray-500 transition-colors">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Kembali
        </Link>
        <h5 className="mb-1 text-gray-300">/</h5>
        <h1 className="text-[15px] font-bold text-gray-900">{title}</h1>
      </nav>
      {actions && <div className="flex gap-2">{actions}</div>}
    </section>
  );
}

function DetailGrid({ children }: { children: ReactNode }) {
  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      {children}
    </section>
  );
}

function DetailAside({ children }: { children: ReactNode }) {
  return <aside className="space-y-6 lg:col-span-4 xl:col-span-3">{children}</aside>;
}

function DetailContent({ children }: { children: ReactNode }) {
  return <article className="lg:col-span-8 xl:col-span-9">{children}</article>;
}

function InfoCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xs font-bold tracking-widest text-gray-400 uppercase">
        {title}
      </h2>
      <dl className="space-y-5">{children}</dl>
    </section>
  );
}

function InfoItem({ icon, label, value, iconColorClass = "bg-gray-50 text-gray-600" }: { icon: ReactNode; label: string; value: ReactNode; iconColorClass?: string }) {
  return (
    <div className="flex items-start gap-4">
      <dt className={`rounded-full p-2.5 ${iconColorClass}`}>{icon}</dt>
      <dd>
        <p className="text-xs text-gray-500">{label}</p>
        <div className="font-semibold text-gray-900">{value}</div>
      </dd>
    </div>
  );
}

export { DetailAside, DetailContent, DetailGrid, DetailHeader, DetailShell, InfoCard, InfoItem };