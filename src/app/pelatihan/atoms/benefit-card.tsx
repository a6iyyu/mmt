import { motion } from "framer-motion";
import { BenefitCard as BC } from "@/app/pelatihan/types/benefit-card";
import { card } from "@/constants/variants";
import Image from "next/image";

export function BenefitCard({ title, description, icon: Icon, backgroundImage, styling }: BC) {
  return (
    <motion.figure variants={card} initial="hidden" animate="visible" className={`relative h-full w-full overflow-hidden rounded-2xl ${styling}`}>
      <div className="absolute inset-0 bg-gray-800">
        <Image height={1920} width={1920} src={backgroundImage} alt={`Benefit ${title}`} className="h-full w-full object-cover opacity-20" loading="lazy" />
      </div>
      <figcaption className="relative z-10 flex h-full cursor-default flex-col justify-end p-6 text-white">
        <Icon className="text-accent mb-4 h-9 w-9" />
        <figcaption className="mb-2 text-xl font-bold">{title}</figcaption>
        <p className="text-sm text-gray-300">{description}</p>
      </figcaption>
    </motion.figure>
  );
}