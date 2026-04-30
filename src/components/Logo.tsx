import { ImgHTMLAttributes } from "react";
import logoPrimary from "../logo/logo-primary.svg";
import logoCharcoal from "../logo/logo-charcoal.svg";
import logoOrange from "../logo/logo-orange.svg";
import iconBicolor from "../logo/icon-bicolor.svg";
import iconOrange from "../logo/icon-orange.svg";

type LogoVariant = "primary" | "charcoal" | "orange" | "icon" | "icon-orange";

export interface LogoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  variant?: LogoVariant;
  alt?: string;
}

const sources: Record<LogoVariant, string> = {
  primary: logoPrimary,
  charcoal: logoCharcoal,
  orange: logoOrange,
  icon: iconBicolor,
  "icon-orange": iconOrange,
};

export function Logo({ variant = "primary", alt = "RevTrue", ...props }: LogoProps) {
  return <img src={sources[variant]} alt={alt} {...props} />;
}
