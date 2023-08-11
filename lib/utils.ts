import { LanguageType } from "@/types/language";
import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const createUrlInitilizer = (language: "tr" | "en" | "fa") => {
  return (path: string): string => {
    if (!language) return path;

    return `/${language}${path}`;
  };
};

export const isLtr = (language: LanguageType): boolean => {
  return language !== "fa";
};

export const toPersianNumbers = (str: string | number) => {
  const numbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return str
    .toString()
    .split("")
    .map((n) => numbers[Number?.parseInt(n)] ?? n)
    .join("");
};
