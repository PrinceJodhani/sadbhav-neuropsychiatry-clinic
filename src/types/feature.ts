import type { JSX } from "react";
export type Feature = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string;
  iconColor?: string;
  bgColor?: string;
  link?: {
    text: string;
    href: string;
  };
};
