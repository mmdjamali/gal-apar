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
      const bool =
        document.body.scrollHeight > document.body.clientHeight &&
        !/Mobi/i.test(navigator.userAgent);

      open
        ? bool
          ? document.body.classList.add("mr-[17px]")
          : null
        : document.body.classList.remove("mr-[17px]");

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
    top: "top-0",
    right: "right-0 ",
    bottom: "bottom-0",
    left: "left-0 top-0 bottom-0",
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

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitives.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitives.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-[50] w-full h-full bg-foreground/50",
      className
    )}
    {...props}
  />
));

DrawerOverlay.displayName = "@1stmmd/drawer-overlay";

export {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerPortal,
  DrawerClose,
  DrawerOverlay,
};
