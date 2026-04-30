import { ImgHTMLAttributes } from "react";
import { cn } from "../lib/cn";

import briefcaseSwap from "../icons/themed/briefcase-swap.png";
import handshake from "../icons/themed/handshake.png";
import bracketFrameEmpty from "../icons/themed/bracket-frame-empty.png";
import funnel from "../icons/themed/funnel.png";
import dealHandshake from "../icons/themed/deal-handshake.png";
import teamGrowth from "../icons/themed/team-growth.png";
import workflow from "../icons/themed/workflow.png";

export const brandIcons = {
  "briefcase-swap": briefcaseSwap,
  handshake: handshake,
  "bracket-frame-empty": bracketFrameEmpty,
  funnel: funnel,
  "deal-handshake": dealHandshake,
  "team-growth": teamGrowth,
  workflow: workflow,
} as const;

export type BrandIconName = keyof typeof brandIcons;
export const brandIconNames = Object.keys(brandIcons) as BrandIconName[];

const sizeMap = {
  sm: "h-12 w-12",
  md: "h-16 w-16",
  lg: "h-24 w-24",
  xl: "h-32 w-32",
  "2xl": "h-40 w-40",
} as const;

export interface BrandIconProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  name: BrandIconName;
  size?: keyof typeof sizeMap;
  alt?: string;
}

/**
 * Themed brand illustration. Each icon carries the RevTrue bracket frame
 * + a line illustration of a concept (handshake, funnel, workflow, etc.).
 * Use for hero cards, value props, "what we do" sections.
 */
export function BrandIcon({
  name,
  size = "lg",
  alt,
  className,
  ...props
}: BrandIconProps) {
  return (
    <img
      src={brandIcons[name]}
      alt={alt ?? name.replace(/-/g, " ")}
      className={cn(sizeMap[size], "object-contain", className)}
      {...props}
    />
  );
}
