"use client";

import { cn } from "../../lib/utils";
import React from "react";
import { Icons } from "../icons";
import Icon from "../icon";

interface props extends React.ComponentPropsWithoutRef<"button"> {
  color?: "primary" | "foreground";
  variant?: "contained" | "outlined" | "text";
  block?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<React.ElementRef<"button">, props>(
  (
    {
      className,
      color = "primary",
      variant = "contained",
      block = false,
      loading = false,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const variants = {
      contained: {
        shared: "border",
        primary: "bg-primary border-primary text-white",
        foreground: "bg-foreground border-foreground text-background",
      },
      outlined: {
        shared: "border",
        primary: "border-primary/10 hover:bg-primary/10 text-primary",
        foreground:
          "border-foreground/10 hover:bg-foreground/10 text-foreground",
      },
      text: {
        shared: "",
        primary: "text-primary/80 hover:bg-primary/10 hover:text-primary",
        foreground:
          "text-foreground/80 hover:bg-foreground/10 hover:text-foreground",
      },
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative flex items-center justify-center rounded transition-all",
          "py-2 px-4 text-[14px]",
          block ? "w-full" : "",
          loading ? "opacity-75 pointer-events-none" : "",
          variants[variant]["shared"],
          variants[variant][color],
          className
        )}
        onClick={loading ? () => {} : onClick}
        {...props}
      >
        <div
          className={cn(
            "flex items-center justify-center gap-1",
            loading ? "opacity-0" : ""
          )}
        >
          {children}
        </div>
        {loading ? (
          <Icon
            name="Spinner"
            className="absolute inset-0 m-auto text-[21px] animate-spin repeat-infinite"
          />
        ) : null}
      </button>
    );
  }
);

Button.displayName = "@1stmmd/Button";

export default Button;
