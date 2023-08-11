"use client";

import React from "react";
import { RadioGroup } from "../ui/radio-group";
import * as RadioGroupPremitives from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";
import { colors } from "@/constant/colors";

interface ColorVariantOptionsProps {
  options: string[];
  color: string;
  onChange: (value: string) => void;
}

const ColorVariantOptions = ({
  color,
  options,
  onChange,
}: ColorVariantOptionsProps) => {
  return (
    <RadioGroup
      value={color}
      onValueChange={(v) => onChange(v)}
      className="flex items-center gap-3"
    >
      {options.map((c, idx) => {
        return (
          <RadioGroupPremitives.Item
            key={idx}
            style={{
              backgroundColor: colors.filter(
                ({ name }) => name.toLowerCase() === c.toLowerCase()
              )[0].hexCode,
            }}
            className={cn(
              "flex items-center border border-border justify-center w-8 h-8 rounded-full"
            )}
            value={c}
          >
            <RadioGroupPremitives.Indicator className="w-3 aspect-square rounded bg-white border border-border bg-blend-luminosity" />
          </RadioGroupPremitives.Item>
        );
      })}
    </RadioGroup>
  );
};

export default ColorVariantOptions;
