"use client";

import React, { useState } from "react";
import RadioGroupFilter from "./filter-components/radio-group-filter";
import CheckboxFilter from "./filter-components/checkbox-filter";
import { cn } from "@/lib/utils";
import Button from "./ui/button";

interface FormType {
  title: string;
  component: "radio" | "checkbox";
  options: string[];
  key: string;
}

interface FiltersProps {
  forms: FormType[];
  className?: string;
}

const Filters = ({ forms, className }: FiltersProps) => {
  const [filters, setFilters] = useState<Record<string, any>>({});

  const components: Record<
    string,
    (key: string, options: string[]) => React.JSX.Element
  > = {
    checkbox: (key: string, options: string[]) => {
      return (
        <CheckboxFilter
          changeHandler={(v: string[] | []) => {
            setFilters((prev) => ({
              ...prev,
              [key]: v,
            }));
          }}
          options={options}
          checkedValues={filters[key] || []}
        />
      );
    },
    radio: (key: string, options: string[]) => {
      return (
        <RadioGroupFilter
          options={options}
          value={filters["golden-chest"]}
          onValueChange={(str: string) => {
            setFilters((prev) => ({
              ...prev,
              [key]: str,
            }));
          }}
        />
      );
    },
  };

  return (
    <div
      className={cn(
        "flex flex-col flex-shrink-0 h-fit w-[260px] gap-4 text-[14px] text-foreground",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] font-semibold text-foreground">Filter</h3>
      </div>

      <div className="flex flex-col gap-4">
        {forms.map(({ component, options, title, key }) => {
          return (
            <div key={title} className="flex flex-col gap-3">
              <h4 className="text-[14px] font-medium">{title}</h4>

              {components[component](key, options)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
