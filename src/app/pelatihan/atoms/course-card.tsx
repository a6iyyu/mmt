import { Course } from "@/app/pelatihan/types/courses";
import Link from "next/link";
import Image from "next/image";
import { Clock, Star } from "lucide-react";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/pelatihan/${course.slug}`} className="group hover:border-primary/50 block h-full overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <article className="flex h-full flex-col">
        <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
          <Image height={1080} width={1920} src={course.image} alt={course.title} className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <span className="text-primary absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold backdrop-blur-sm">
            {course.category}
          </span>
        </div>
        <figure className="flex flex-1 flex-col p-5">
          <div className="mb-3 flex items-center justify-between text-xs text-gray-500">
            <span className="text-secondary flex items-center gap-1 font-medium">
              <span className="bg-secondary h-1.5 w-1.5 rounded-full"></span>
              {course.level}
            </span>
            <span className="flex items-center gap-1 text-amber-500">
              <Star className="h-3.5 w-3.5 fill-current" />
              <span className="font-bold">{course.rating}</span>
            </span>
          </div>
          <h3 className="text-heading group-hover:text-primary mb-2 line-clamp-2 text-lg leading-snug font-bold transition-colors">
            {course.title}
          </h3>
          <figcaption className="mt-auto mb-4 flex items-center gap-2 pt-2">
            <div className="relative h-6 w-6 overflow-hidden rounded-full border border-gray-200">
              <Image height={1080} width={1920} src={course.mentor.avatar} alt={course.mentor.name} className="object-cover" />
            </div>
            <p className="truncate text-sm text-gray-600">
              {course.mentor.name}
            </p>
          </figcaption>
          <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
            <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
              <Clock className="h-3.5 w-3.5" />
              {course.duration}
            </span>
            <h5 className="text-primary font-bold">
              {course.price === "Gratis" ? "Free" : course.price}
            </h5>
          </div>
        </figure>
      </article>
    </Link>
  );
}