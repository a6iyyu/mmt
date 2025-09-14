"use client";

import { useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState<boolean>(true);

  if (!loading) return null;

  setTimeout(() => setLoading(false), 4000);

  return (
    <section className="flex h-screen items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-gray-900"></div>
    </section>
  );
}