"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import LatestWorks from "@/app/karya/components/latest-works";

export default function LatestWorksProvider() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <LatestWorks />
    </QueryClientProvider>
  );
}