import React from "react";

import { Checkbox } from "../ui/checkbox";

import { cn } from "@/lib/utils";

export interface CheckboxFilterProps
  extends React.ComponentPropsWithoutRef<"div"> {
  options: string[];
  checkedValues: string[] | [];
  changeHandler: (v: string[] | []) => void;
  Component?: ({ value }: { value: string }) => React.ReactNode;
}

const CheckboxFilter = ({
  options,
  Component,
  checkedValues,
  changeHandler,
  className,
  ...props
}: CheckboxFilterProps) => {
  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      {options.map((value) => (
        <div key={value} className="flex items-center gap-2">
          <Checkbox
            onCheckedChange={(e) => {
              if (!e) {
                changeHandler(checkedValues.filter((item) => item !== value));
                return;
              }

              changeHandler([...checkedValues, value]);
            }}
          />

          {Component ? <Component value={value} /> : <p>{value}</p>}
        </div>
      ))}
    </div>
  );
};

export default CheckboxFilter;
