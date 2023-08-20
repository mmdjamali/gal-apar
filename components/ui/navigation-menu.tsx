"use client";

import * as React from "react";
import * as NavigationMenuPrimitives from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";
import Icon from "../icon";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitives.Root
    ref={ref}
    className={cn(
      "relative max-w-max flex flex-1 z-[10] items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitives.Root>
));

NavigationMenu.displayName = "";

const NavigationMenuItem = NavigationMenuPrimitives.Item;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitives.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitives.List
    ref={ref}
    className={cn("flex flex-1 items-center space-x-1", className)}
    {...props}
  />
));

NavigationMenuList.displayName = "";

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitives.Trigger
    ref={ref}
    className={cn(
      "group flex items-center gap-1 justify-center text-[14px] font-medium text-foreground py-2 px-4 rounded bg-transparent hover:bg-foreground/10 transition-all",
      className
    )}
    {...props}
  >
    {children}
    <Icon
      name="ArrowDown"
      className="text-[16px] group-data-[state=open]:rotate-180 transition-all"
    />
  </NavigationMenuPrimitives.Trigger>
));

NavigationMenuTrigger.displayName = "";

const NavigationMenuLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitives.Link>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Link>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitives.Link
    ref={ref}
    className={cn(
      "flex items-center gap-1 justify-center text-[14px] text-foreground py-2 px-4 rounded bg-transparent hover:bg-foreground/10 transition-all",
      className
    )}
    {...props}
  />
));

NavigationMenuLink.displayName = "";

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitives.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props}
  />
));

NavigationMenuContent.displayName = "";

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitives.Viewport
      ref={ref}
      className={cn(
        "relative mt-1.5 shadow shadow-foreground/25 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded bg-background border border-border text-foreground md:w-[var(--radix-navigation-menu-viewport-width)]",
        "data-[state=open]:animate-in data-[state=open]:zoom-in-90 data-[state=closed]:animate-out data-[state=closed]:zoom-out-90",
        className
      )}
      {...props}
    />
  </div>
));

NavigationMenuViewport.displayName = "";

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
};
