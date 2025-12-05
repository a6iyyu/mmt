import type { Metadata } from "next";
import Statistics from "@/app/admin/components/statistics";
import QuickActions from "@/app/admin/components/quick-actions";
import TrainingStatus from "@/app/admin/components/training-status";
import RecentActivities from "@/app/admin/components/recent-activities";

export const metadata: Metadata = {
  title: "Dasbor Admin | Lab MMT",
  description: "Halaman dasbor untuk administrator Lab MMT.",
  openGraph: {
    title: "Dasbor Admin | Lab MMT",
    description: "Halaman dasbor untuk administrator Lab MMT.",
  },
  twitter: {
    title: "Dasbor Admin | Lab MMT",
    description: "Halaman dasbor untuk administrator Lab MMT.",
  },
};

export default function DasborAdmin() {
  return (
    <>
      <span className="absolute inset-0 -z-10 bg-[url('/images/motion-grid.svg')] mask-[linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center opacity-10" />
      <Statistics />
      <QuickActions />
      <TrainingStatus />
      <RecentActivities />
    </>
  );
}