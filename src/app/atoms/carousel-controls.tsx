import { ArrowLeft, ArrowRight } from "lucide-react";
import type { RefObject } from "react";
import { Button } from "@/components/ui/button";

export function CarouselControls({ previous, next }: { previous: RefObject<HTMLButtonElement | null>; next: RefObject<HTMLButtonElement | null> }) {
  return (
    <nav className="mt-10 flex items-center justify-center gap-4 lg:justify-start">
      <Button ref={previous} variant="outline" size="icon" className="h-12 w-12 cursor-pointer rounded-full border-slate-300 hover:bg-slate-100">
        <ArrowLeft className="h-6 w-6 text-slate-700" />
      </Button>
      <Button ref={next} variant="outline" size="icon" className="h-12 w-12 cursor-pointer rounded-full border-slate-300 hover:bg-slate-100">
        <ArrowRight className="h-6 w-6 text-slate-700" />
      </Button>
    </nav>
  );
}