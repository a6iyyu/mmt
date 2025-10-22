import { dummyProjects } from "@/app/karya/data/latest-works";

export async function loadMore({ pageParams = 0 }: { pageParams: number }) {
  const limit = 6;
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Mensimulasikan delay jaringan (1000ms)

  // Mengambil "slice" data berdasarkan pageParams
  const projects = dummyProjects.slice(pageParams, pageParams + limit);

  // Menentukan "cursor" untuk halaman berikutnya
  // Jika masih ada data setelah ini, cursor berikutnya adalah offset + limit
  const nextCursor = pageParams + limit < dummyProjects.length ? pageParams + limit : undefined;

  return { projects, nextCursor };
}