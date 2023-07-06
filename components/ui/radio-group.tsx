"use client";

import React from "react";
import * as RadioGroupPrimitives from "@radix-ui/react-radio-group";
import { cn } from "../../lib/utils";

const RadioGroup = RadioGroupPrimitives.Root;

interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Item> {
  color?: "primary" | "foreground";
}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitives.Item>,
  RadioGroupItemProps
>(({ color = "primary", className, ...props }, ref) => {
  const colors = {
    primary: "data-[state='checked']:border-primary",
    foreground: "data-[state='checked']:border-foreground",
  };
  return (
    <RadioGroupPrimitives.Item
      ref={ref}
      className={cn(
        "flex items-center border border-border justify-center w-5 h-5 rounded-full",
        colors[color],
        className
      )}
      {...props}
    />
  );
});

RadioGroupItem.displayName = "@1stmmd/radio-group-item";

interface RadioGroupIndicatorProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Item> {
  color?: "primary" | "foreground";
}

const RadioGroupIndicator = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitives.Indicator>,
  RadioGroupIndicatorProps
>(({ color = "primary", className, ...props }, ref) => {
  const colors = {
    primary: "bg-primary",
    foreground: "bg-foreground",
  };
  return (
    <RadioGroupPrimitives.Indicator
      ref={ref}
      className={cn("w-2 h-2 rounded-full", colors[color], className)}
      {...props}
    />
  );
});

RadioGroupIndicator.displayName = "@1stmmd/radio-group-indicator";

export { RadioGroup, RadioGroupIndicator, RadioGroupItem };
