"use client";

import { cn } from "@/lib/utils";
import * as ToastPrimitives from "@radix-ui/react-toast";
import React from "react";
import { Icons } from "../icons";
import { cva, type VariantProps } from "class-variance-authority";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed flex gap-4 flex-col-reverse p-4 top-0 z-[100] max-h-screen w-full sm:right-0 sm:bottom-0 sm:top-auto sm:flex-col sm:max-w-[380px]",
      className
    )}
    {...props}
  />
));

ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const ToastVarinats = cva(
  "flex relative items-start justify-between border border-border rounded animate-in slide-in-from-top-1 space-x-4 bg-background p-4 w-full",
  {
    variants: {
      variant: {
        success: ["text-success"],
        error: ["text-error"],
        default: ["text-foreground"],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof ToastVarinats>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      className={cn(ToastVarinats({ variant }), className)}
      ref={ref}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => {
  return (
    <ToastPrimitives.Action
      ref={ref}
      className={cn("inline-flex h-8 ", className)}
      {...props}
    />
  );
});
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => {
  return (
    <ToastPrimitives.Close
      ref={ref}
      className={cn(
        "flex items-center justify-center text-foreground ",
        className
      )}
      {...props}
    >
      <Icons.Close className="text-[21px]" />
    </ToastPrimitives.Close>
  );
});
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => {
  return (
    <ToastPrimitives.Title
      ref={ref}
      className={cn("text-[18px] font-semibold", className)}
      {...props}
    />
  );
});
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => {
  return (
    <ToastPrimitives.Description
      ref={ref}
      className={cn("text-[14px] opacity-90", className)}
      {...props}
    />
  );
});
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  type ToastProps,
};
