"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Slider() {
  const images = Array.from({ length: 3 }, () => "/images/placeholder.png");
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1)), 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative hidden h-screen w-1/2 overflow-hidden bg-gray-900 lg:block">
      {images.map((src, index) => (
        <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "z-10 opacity-100" : "z-0 opacity-0"}`}>
          <Image src={src} alt={`Slide ${index + 1}`} fill className="object-cover" priority={index === 0} />
        </div>
      ))}
      <span className="absolute inset-0 z-20 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
      <figure className="absolute bottom-12 left-12 z-30 space-y-4 text-white">
        <span>
          <h4 className="mb-2 cursor-default text-2xl font-bold tracking-tight">
            Lab Multimedia MMT
          </h4>
          <h6 className="cursor-default text-sm font-medium text-gray-300">
            Politeknik Negeri Malang
          </h6>
        </span>
        <div className="mt-6 flex space-x-3 pt-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 cursor-pointer rounded-full border-2 transition-all duration-300 ${index === current ? "w-8 border-white bg-white" : "border-white/50 bg-transparent hover:border-white"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </figure>
    </section>
  );
}