"use client";

import React from "react";

import * as DialogPrimitives from "@radix-ui/react-dialog";

import { cn } from "../../lib/utils";

const Drawer = ({
  onOpenChange,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitives.Root>) => (
  <DialogPrimitives.Root
    onOpenChange={(open) => {
      open
        ? document.body.classList.add("overflow-hidden")
        : document.body.classList.remove("overflow-hidden");

      onOpenChange ? onOpenChange(open) : null;
    }}
    {...props}
  />
);

const DrawerTrigger = DialogPrimitives.Trigger;

const DrawerPortal = DialogPrimitives.Portal;

const DrawerClose = DialogPrimitives.Close;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Content>
>(({ className, ...props }, ref) => (
  <DialogPrimitives.Content
    ref={ref}
    className={cn("", className)}
    {...props}
  />
));

DrawerContent.displayName = "@1stmmd/drawer-content";

export { Drawer, DrawerContent, DrawerTrigger, DrawerPortal, DrawerClose };
