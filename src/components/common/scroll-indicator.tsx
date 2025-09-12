"use client";

import { useEffect, useState } from "react";

export function ScrollIndicator() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setWidth((window.scrollY / height) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <span className="bg-primary fixed top-0 left-0 z-[9999] h-0.5 transition-all duration-150 ease-out" style={{ width: `${width}%` }} />;
}