"use client";

import React, { useState } from "react";
import Button from "../ui/button";
import Input from "../ui/input";
import { Icons } from "../icons";
import SelectDialog from "../select-dialog";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";

interface Option {
  name: string;
  icon: string;
}

interface ProductPriceProps {
  currency: string;
  value: string;
  setCurrency: (v: string) => void;
  setValue: (v: string) => void;
}

function ProductPrice({
  currency,
  value,
  setCurrency,
  setValue,
}: ProductPriceProps) {
  const currencies: Option[] = [
    { icon: "Dollar", name: "us-dollar" },
    {
      icon: "Rial",
      name: "iran-rial",
    },
  ];

  return (
    <div className="w-full relative flex flex-col gap-2">
      <p className="font-medium">Product Price</p>
      <div className="flex items-center gap-2 w-full relative">
        <SelectDialog<Option>
          trigger={
            <Button className="p-2" variant="outlined" color="foreground">
              {(() => {
                const Icon =
                  Icons[CurrencyIcons[currency]] ?? Icons.QuestionMark;
                return <Icon className="aspect-square h-[21px] text-[21px]" />;
              })()}
            </Button>
          }
          options={currencies}
          inputPlaceholder="select-currency"
          render={({ name, icon }, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrency(name);
              }}
              className={cn(
                "flex gap-2 items-center justify-start rounded text-[14px] px-3 py-1.5 w-full hover:bg-foreground/10 text-foreground",
                name === currency ? "bg-foreground/10" : ""
              )}
              type="button"
            >
              {(() => {
                const Icon = Icons[icon];
                return <Icon className="text-[16px] h-[16px] aspect-square" />;
              })()}
              {name}
            </button>
          )}
        />

        <Input
          block
          value={(() => {
            const formatted_value = parseInt(value)?.toLocaleString();
            if (formatted_value === "NaN") return "";
            return formatted_value;
          })()}
          onChange={(e) => {
            if (!currency) return;

            const v = e.target.value.replaceAll(/\D/g, "");
            setValue(v);
          }}
        />
      </div>
    </div>
  );
}

export default ProductPrice;

const CurrencyIcons: {
  [k: string]: string;
} = {
  "us-dollar": "Dollar",
  "iran-rial": "Rial",
};
