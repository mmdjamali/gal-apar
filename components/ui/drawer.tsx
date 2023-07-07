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

interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitives.Content> {
  side: "top" | "bottom" | "left" | "right";
}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitives.Content>,
  DrawerContentProps
>(({ side, className, ...props }, ref) => {
  const variant = {
    top: "top-0 animate-slideInDown",
    right: "right-0 animate-slideInLeft",
    bottom: "bottom-0 animate-slideInUp",
    left: "left-0 animate-slideInRight",
  };

  return (
    <DialogPrimitives.Content
      ref={ref}
      className={cn(
        "fixed w-full h-full overflow-auto z-[999] bg-background animate-duration-200 animate-ease-linear	",
        variant[side],
        className
      )}
      {...props}
    />
  );
});

DrawerContent.displayName = "@1stmmd/drawer-content";

export { Drawer, DrawerContent, DrawerTrigger, DrawerPortal, DrawerClose };
