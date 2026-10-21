import type { JSX } from "react";
export type Feature = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string;
  tone?: "brand" | "lotus";
  /** Condition chips; linked to their guide pages. */
  highlights?: { label: string; href: string }[];
  link?: {
    text: string;
    href: string;
    external?: boolean;
  };
};
