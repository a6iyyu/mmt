"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { ScrollIndicator } from "@/components/common/scroll-indicator";
import { LOGIN } from "@/constants/route";

export function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname.startsWith(LOGIN)) {
    return <>{children}</>;
  }

  return (
    <>
      <ScrollIndicator />
      <Header />
      {children}
      <Footer />
    </>
  );
}