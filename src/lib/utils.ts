import { clsx , ClassValue } from "clsx";
import { twMerge } from "tw-merge";

export const cn = (...inputs : ClassValue[]) => twMerge(clsx(inputs))