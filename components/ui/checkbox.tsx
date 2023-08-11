"use client";
import React from "react";

import * as CheckboxPrimitives from "@radix-ui/react-checkbox";

import { cn } from "../../lib/utils";

import { Icons } from "../icons";

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitives.Root> {
  color?: "primary" | "foreground";
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitives.Root>,
  CheckboxProps
>(({ color = "primary", className, ...props }, ref) => {
  const colors = {
    primary:
      "data-[state='checked']:bg-primary data-[state='checked']:border-primary border-border",
    foreground:
      "data-[state='checked']:bg-foreground data-[state='checked']:border-foreground border-border",
  };
  return (
    <CheckboxPrimitives.Root
      ref={ref}
      className={cn(
        "flex items-center justify-center bg-background w-5 h-5 border rounded-[4px] transition-all",
        colors[color],
        className
      )}
      {...props}
    >
      <CheckboxIndicator />
    </CheckboxPrimitives.Root>
  );
});

Checkbox.displayName = "@1stmmd/checkbox";

const CheckboxIndicator = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitives.Indicator>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitives.Indicator>
>(({ className, ...props }, ref) => {
  return (
    <CheckboxPrimitives.Indicator ref={ref} {...props}>
      <Icons.Check className="text-background text-[16px]" />
    </CheckboxPrimitives.Indicator>
  );
});

CheckboxIndicator.displayName = "@1stmmd/checkbox-indicator";

export { Checkbox };
