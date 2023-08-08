"use client";

import React, { Children } from "react";
import * as AccordionPrimitives from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import Icon from "../icon";

const Accordion = AccordionPrimitives.Root;

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitives.Header className="flex">
    <AccordionPrimitives.Trigger
      ref={ref}
      className={cn(
        "flex font-semibold items-center justify-between w-full group py-2",
        className
      )}
      {...props}
    >
      {children}
      <AccordionIcon />
    </AccordionPrimitives.Trigger>
  </AccordionPrimitives.Header>
));

const AccordionIcon = ({
  name = "ArrowDown",
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Icon>) => (
  <Icon
    name={name}
    className={cn(
      "text-[18px] text-foreground group-data-[state=open]:rotate-180 transition-all",
      className
    )}
    {...props}
  />
);

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitives.Item
    ref={ref}
    className={cn("border-b border-border", className)}
    {...props}
  />
));

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitives.Content
    className={cn(
      "flex data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden",
      className
    )}
    ref={ref}
    {...props}
  >
    <div className="pt-0 pb-4">{children}</div>
  </AccordionPrimitives.Content>
));

export {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionIcon,
  AccordionTrigger,
};
