import { cn } from "../../lib/utils";
import React from "react";

interface ChipProps extends React.ComponentPropsWithoutRef<"span"> {
  color?: "primary" | "foreground" | "yellow" | "red" | "green" | "cyan";
  varinat?: "ghost" | "contained" | "outlined";
}

const Chip = React.forwardRef<React.ElementRef<"span">, ChipProps>(
  (
    { children, className, color = "primary", varinat = "ghost", ...props },
    ref
  ) => {
    const variants = {
      ghost: {
        shared: "",
        primary: "bg-primary/10 text-primary",
        foreground: "bg-foreground/10 text-foreground",
        yellow: "bg-yellow-500/10 text-yellow-500",
        red: "bg-red-500/10 text-red-500",
        green: "bg-green-500/10 text-green-500",
        cyan: "bg-cyan-500/10 text-cyan-500",
      },
      contained: {
        shared: "",
        primary: "bg-primary text-background",
        foreground: "bg-foreground text-background",
        yellow: "bg-yellow-500 text-background",
        red: "bg-red-500 text-background",
        green: "bg-green-500 text-background",
        cyan: "bg-cyan-500 text-background",
      },
      outlined: {
        shared: "border",
        primary: "border-primary/25 text-primary bg-background",
        foreground: "border-foreground/25 text-foreground bg-background",
        yellow: "border-yellow-500/25 text-yellow-500 bg-background",
        red: "border-red-500/25 text-red-500 bg-background",
        green: "border-green-500/25 text-green-500 bg-background",
        cyan: "border-cyan-500/25 text-cyan-500 bg-background",
      },
    };
    return (
      <span
        ref={ref}
        className={cn(
          "py-1 px-2 flex items-center gap-1 text-[12px] w-fit rounded-full leading-none",
          variants[varinat]["shared"],
          variants[varinat][color],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Chip.displayName = "@1stmmd/chip";

export { Chip };
