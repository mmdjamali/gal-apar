"use client";

import { cn } from "../../lib/utils";
import React, { useId } from "react";

import ReactTextareaAutoSize from "react-textarea-autosize";

interface props
  extends React.ComponentPropsWithoutRef<typeof ReactTextareaAutoSize> {
  inputClassName?: string;
  variant?: "outlined";
  color?: "primary" | "foreground";
  block?: boolean;
  error?: boolean | string;
  success?: boolean;
  actions?: React.ReactNode[];
  label?: string;
}

const Textarea = React.forwardRef<
  React.ElementRef<typeof ReactTextareaAutoSize>,
  props
>(
  (
    {
      inputClassName,
      className,
      variant = "outlined",
      color = "primary",
      block = false,
      error = false,
      success = false,
      actions,
      label,
      required,
      ...props
    },
    ref
  ) => {
    const variants = {
      outlined: {
        shared: "focus-within:shadow-[0_0_0_2px]",
        primary: "focus-within:!border-primary focus-within:shadow-primary/25",
        foreground:
          "focus-within:!border-foreground focus-within:shadow-foreground/25",
        error: "focus-within:!border-error !border-error !shadow-error/25",
        success:
          "focus-within:!border-success !border-success !shadow-success/25",
      },
    };

    const ID = useId();

    return (
      <div className={cn("flex flex-col", block ? "w-full" : "")}>
        {label ? (
          <label
            htmlFor={ID}
            className="text-[14px] font-medium text-foreground mb-1"
          >
            {label}
            {required ? (
              <>
                {" "}
                <span className="text-error text-[12px]">{"*"}</span>
              </>
            ) : null}
          </label>
        ) : null}

        <div
          className={cn(
            "relative flex hover:border-foreground/50 px-3 py-2 border-foreground/10 border rounded text-[14px] transition-all shadow shadow-foreground/10",
            block ? "w-full" : "",
            variants[variant]["shared"],
            variants[variant][color],
            success ? variants[variant]["success"] : "",
            error ? variants[variant]["error"] : "",
            className
          )}
        >
          <ReactTextareaAutoSize
            id={ID}
            required={required}
            ref={ref}
            className={cn(
              "flex-shrink w-full outline-none text-foreground/75 bg-transparent",
              inputClassName
            )}
            {...props}
          />
        </div>

        {error && typeof error === "string" ? (
          <p className="text-error ">{error}</p>
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = "@1stMmD/textarea";

export default Textarea;
