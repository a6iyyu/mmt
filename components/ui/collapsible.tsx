"use client";

import { CollapsibleContent as Content, CollapsibleTrigger as Trigger, Root } from "@radix-ui/react-collapsible";
import type { ComponentProps } from "react";

function Collapsible({ ...props }: ComponentProps<typeof Root>) {
  return <Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({ ...props }: ComponentProps<typeof Trigger>) {
  return <Trigger data-slot="collapsible-trigger" {...props} />;
}

function CollapsibleContent({ ...props }: ComponentProps<typeof Content>) {
  return <Content data-slot="collapsible-content" {...props} />;
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };