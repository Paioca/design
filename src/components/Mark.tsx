import { ImgHTMLAttributes } from "react";
import { cn } from "../lib/cn";

import bracketStack from "../icons/marks/bracket-stack.png";
import bracketFrame from "../icons/marks/bracket-frame.png";
import bracketOrange from "../icons/marks/bracket-orange.png";
import bracketCharcoal from "../icons/marks/bracket-charcoal.png";
import bracketOutline from "../icons/marks/bracket-outline.png";
import arrowUpRight from "../icons/marks/arrow-up-right.png";
import arrowUpRightBold from "../icons/marks/arrow-up-right-bold.png";
import chevronCircle from "../icons/marks/chevron-circle.png";
import navArrows from "../icons/marks/nav-arrows.png";
import expand from "../icons/marks/expand.png";
import growthSteps from "../icons/marks/growth-steps.png";
import plus from "../icons/marks/plus.png";

export const marks = {
  "bracket-stack": bracketStack,
  "bracket-frame": bracketFrame,
  "bracket-orange": bracketOrange,
  "bracket-charcoal": bracketCharcoal,
  "bracket-outline": bracketOutline,
  "arrow-up-right": arrowUpRight,
  "arrow-up-right-bold": arrowUpRightBold,
  "chevron-circle": chevronCircle,
  "nav-arrows": navArrows,
  expand: expand,
  "growth-steps": growthSteps,
  plus: plus,
} as const;

export type MarkName = keyof typeof marks;
export const markNames = Object.keys(marks) as MarkName[];

const sizeMap = {
  xs: "h-6 w-auto",
  sm: "h-10 w-auto",
  md: "h-16 w-auto",
  lg: "h-24 w-auto",
  xl: "h-32 w-auto",
  "2xl": "h-48 w-auto",
} as const;

export interface MarkProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  name: MarkName;
  size?: keyof typeof sizeMap;
  alt?: string;
}

/**
 * Brand graphic mark. Abstract shapes from the RevTrue identity:
 * brackets, arrows, the growth-steps motif, the +. Use for decorative
 * accents, section dividers, and visual rhythm.
 */
export function Mark({ name, size = "md", alt, className, ...props }: MarkProps) {
  return (
    <img
      src={marks[name]}
      alt={alt ?? name.replace(/-/g, " ")}
      className={cn(sizeMap[size], "object-contain", className)}
      {...props}
    />
  );
}
