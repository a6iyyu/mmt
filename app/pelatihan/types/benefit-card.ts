import { ComponentType, SVGProps } from "react";
import { Interface } from "@/utils/decorator";

@Interface
export class BenefitCard {
  title!: string;
  description!: string;
  icon!: ComponentType<SVGProps<SVGSVGElement>>;
  backgroundImage!: string;
  styling!: string;
}