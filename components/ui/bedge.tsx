import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const BedgeVariants = cva("flex w-full h-full relative", {
  variants: {},
  defaultVariants: {},
});

const Bedge = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & {
    number?: number | string;
    show?: boolean;
  }
>(({ className, show = true, number, children, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className={cn("relative", className)}>
      {show ? (
        <div
          {...props}
          className={cn(
            "flex z-[2] items-center pointer-events-none justify-center text-white font-semibold w-4 h-4 absolute top-0 right-0 text-[10px] rounded-[4px] aspect-square bg-primary",
            className
          )}
        >
          {number}
        </div>
      ) : (
        ""
      )}
      {children}
    </div>
  );
});

export { Bedge, BedgeVariants };
