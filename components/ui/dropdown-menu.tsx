"use client";

import * as React from "react";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "../../lib/utils";

const DropdownMenu = ({
  onOpenChange,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root>) => (
  <DropdownMenuPrimitive.Root
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

DropdownMenu.displayName = "@1stmmd/dropdown-menu";

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Content
    ref={ref}
    className={cn(
      "relative z-[999] flex flex-col border bg-background border-border rounded min-w-[200px] p-1 my-1",
      className
    )}
    {...props}
  />
));

DropdownMenuContent.displayName = "@radix-ui/dropdown-menu-content";

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex items-center rounded px-2 py-1.5 outline-none data-[disabled]:!text-foreground/50 data-[disabled]:!bg-background data-[disabled]:!cursor-pointer data-[disabled]:!pointer-events-none text-[14px] font-medium text-foreground/80 hover:text-foreground hover:bg-foreground/10 gap-2 transition-all cursor-pointer",
      className
    )}
    {...props}
  />
));

DropdownMenuItem.displayName = "@radix-ui/dropdown-menu-item";

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuSub,
  DropdownMenuTrigger,
};
