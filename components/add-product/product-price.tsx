"use client";

import React from "react";
import Input from "../ui/input";

interface ProductPriceProps {
  value: string;
  onChange: (v: string) => void;
}

function ProductPrice({ value, onChange }: ProductPriceProps) {
  return (
    <div className="w-full relative flex flex-col gap-2">
      <p className="font-medium">Product Price</p>

      <Input
        block
        value={(() => {
          const formatted_value = parseInt(value)?.toLocaleString();
          if (formatted_value === "NaN") return "";
          return formatted_value;
        })()}
        onChange={(e) => {
          const v = e.target.value.replaceAll(/\D/g, "");
          onChange(v);
        }}
      />
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
