"use client";

import React from "react";

import * as DialogPrimitives from "@radix-ui/react-dialog";
import { cn } from "../../lib/utils";

const Dialog = DialogPrimitives.Root;
const DialogTrigger = DialogPrimitives.Trigger;
const DialogPortal = DialogPrimitives.Portal;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Content>
>(({ className, ...props }, ref) => (
  <DialogPrimitives.Content
    ref={ref}
    className={cn("rounded border border-border p-2", className)}
    {...props}
  />
));

DialogContent.displayName = "@1stmmd/dialog-content";

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitives.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitives.Overlay
    ref={ref}
    className={cn("w-full h-full bg-foreground/50", className)}
    {...props}
  />
));

DialogOverlay.displayName = "@1stmmd/dialog-overlay";

export { Dialog, DialogContent, DialogOverlay, DialogTrigger, DialogPortal };
