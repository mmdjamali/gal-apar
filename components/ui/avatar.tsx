"use client";

import { cn } from "../../lib/utils";
import * as AvatarPrimitives from "@radix-ui/react-avatar";
import React from "react";
import { Icons } from "../icons";

export const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitives.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitives.Root
    ref={ref}
    className={cn(
      "relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full select-none",
      className
    )}
    {...props}
  />
));

Avatar.displayName = "@radix-ui/avatar";

export const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitives.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitives.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitives.Image
    ref={ref}
    className={cn("h-full w-full aspect-square", className)}
    {...props}
  />
));

AvatarImage.displayName = "@radix-ui/avatar-image";

export const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitives.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitives.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitives.Fallback
    ref={ref}
    className={cn(
      "grid place-items-center h-full w-full border border-border rounded-full aspect-square",
      className
    )}
    {...props}
  >
    <Icons.User className="text-[21px] text-border" />
  </AvatarPrimitives.Fallback>
));

AvatarFallback.displayName = "@radix-ui/avatar-fallback";
