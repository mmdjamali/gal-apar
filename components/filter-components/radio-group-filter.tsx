import React, { FC } from "react";
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from "../ui/radio-group";
import { cn } from "@/lib/utils";

export interface RadioGroupFilterProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroup> {
  options: string[];
  Component?: FC<{ value: string }>;
}

const RadioGroupFilter = ({
  options,
  Component,
  className,
  ...props
}: RadioGroupFilterProps) => {
  return (
    <RadioGroup {...props} className={cn("flex flex-col gap-2", className)}>
      {options.map((value) => (
        <div key={value} className="flex items-center gap-2">
          <RadioGroupItem value={value}>
            <RadioGroupIndicator />
          </RadioGroupItem>

          {Component ? <Component value={value} /> : <p>{value}</p>}
        </div>
      ))}
    </RadioGroup>
  );
};

export default RadioGroupFilter;
