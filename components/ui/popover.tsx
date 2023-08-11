"use client";

import React from "react";

import * as PopoverPrimitives from "@radix-ui/react-popover";

import { cn } from "../../lib/utils";

const Popover = PopoverPrimitives.Root;

const PopoverTrigger = PopoverPrimitives.Trigger;

const PopoverPortal = PopoverPrimitives.Portal;

const PopoverClose = PopoverPrimitives.Close;

const PopoverArrow = PopoverPrimitives.Arrow;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitives.Content>
>(({ side, className, ...props }, ref) => {
  return (
    <PopoverPrimitives.Content
      ref={ref}
      className={cn("bg-background", className)}
      {...props}
    />
  );
});

PopoverContent.displayName = "@1stmmd/popover-content";

export {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverPortal,
  PopoverClose,
  PopoverArrow,
};
