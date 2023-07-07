"use client";

import { cn } from "@/lib/utils";
import * as ScrollAreaPrimitives from "@radix-ui/react-scroll-area";
import React from "react";

const ScrollArea = ScrollAreaPrimitives.Root;

const ScrollAreaViewport = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ScrollAreaPrimitives.Viewport
    ref={ref}
    className={cn("w-full h-full", className)}
    {...props}
  />
));

ScrollAreaViewport.displayName = "@1stmmd/scroll-area";

const ScrollAreaThumb = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitives.Thumb>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitives.Thumb>
>(({ className, ...props }, ref) => (
  <ScrollAreaPrimitives.Thumb
    ref={ref}
    className={cn("flex-1 bg-foreground/75 rounded relative", className)}
    {...props}
  />
));

ScrollAreaThumb.displayName = "@1stmmd/scroll-area-thumb";

const ScrollAreaScrollbar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitives.Scrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitives.Scrollbar>
>(({ className, ...props }, ref) => (
  <ScrollAreaPrimitives.Scrollbar
    ref={ref}
    className={cn(
      "flex select-none touch-none transition-colors duration-[160ms] ease-out data-[orientation=vertical]:w-2 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2",
      className
    )}
    {...props}
  />
));

ScrollAreaScrollbar.displayName = "@1stmmd/scroll-area-thumb";

const ScrollAreaCorner = ScrollAreaPrimitives.Corner;

export {
  ScrollArea,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
  ScrollAreaCorner,
};
