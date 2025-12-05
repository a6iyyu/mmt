"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Footer } from "@/components/common/footer";
import { AdminHeader, PublicHeader } from "@/components/common/header";
import { ScrollIndicator } from "@/components/common/scroll-indicator";
import { Sidebar } from "@/components/common/sidebar";
import { ADMIN, LOGIN } from "@/constants/route";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const resize = () => window.innerWidth < 1024 ? setSidebarOpen(false) : setSidebarOpen(true);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  if (pathname.startsWith(LOGIN)) {
    return <main className="min-h-screen w-full bg-white">{children}</main>;
  }

  if (pathname.startsWith(ADMIN)) {
    return (
      <>
        <Sidebar isOpen={sidebarOpen} />
        {sidebarOpen && <div className="fixed inset-0 z-30 bg-black/20 lg:hidden" onClick={() => setSidebarOpen(false)} />}
        <main className={`flex-1 transition-all duration-300 ease-in-out ${sidebarOpen ? "lg:ml-64" : "ml-0"}`}>
          <AdminHeader setSidebarOpen={setSidebarOpen} />
          {children}
        </main>
      </>
    );
  }

  return (
    <>
      <ScrollIndicator />
      <PublicHeader />
      {children}
      <Footer />
    </>
  );
}