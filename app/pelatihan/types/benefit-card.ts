import { ComponentType, SVGProps } from "react";

export type BenefitCard = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  backgroundImage: string;
  styling: string;
}