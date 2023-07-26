"use client";

import React, { Component, useMemo, useState } from "react";
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from "../ui/radio-group";
import Button from "../ui/button";
import ColorVariantOptions from "./color-variant-options";
import { category_options } from "@/constant/category-options";
import { VariantType } from "@/types/product";

interface BuyProductProps {
  data: {
    variants: VariantType[];
    category: string;
  };
}

const BuyProduct = ({ data }: BuyProductProps) => {
  const [filter, setFilter] = useState(
    Object.fromEntries(
      category_options[data.category.toLowerCase()]?.map((k) => [
        k,
        data.variants[0][k as keyof VariantType],
      ]) ?? []
    )
  );

  const variant = useMemo(() => {}, [filter]);

  const components = {
    color: {
      Component: () => (
        <ColorVariantOptions
          color={filter.color ?? ""}
          options={data.variants.reduce((prev: string[], v) => {
            if (v.color && !prev.includes(v.color) && v.size === filter.size) {
              prev.push(v.color);
            }
            return prev;
          }, [] as string[])}
          onChange={(v) => {
            setFilter((prev) => ({
              ...prev,
              color: v,
            }));
          }}
        />
      ),
    },
    size: {
      Component: () => (
        <div className="flex flex-wrap items-center gap-2">
          {data.variants
            .reduce((prev: string[], v) => {
              if (
                v.size &&
                !prev.includes(v.size) &&
                v.color === filter.color
              ) {
                prev.push(v.size);
              }
              return prev;
            }, [] as string[])
            .map((size, _idx) => {
              return (
                <Button
                  onClick={() => {
                    if (filter.size === size) return;
                    setFilter((prev) => ({
                      ...prev,
                      size,
                    }));
                  }}
                  className="p-2 text-[12px]"
                  variant={filter.size === size ? "contained" : "outlined"}
                  color="foreground"
                >
                  <div className="min-w-[18px]">{size}</div>
                </Button>
              );
            })}
        </div>
      ),
    },
  };

  return (
    <>
      <div className="flex gap-3 flex-col rounded border border-border p-3">
        {category_options[data.category.toLowerCase()]?.map((option, idx) => {
          const Component =
            components[option as keyof typeof components]?.Component;

          if (Component && data.variants[0][option as keyof VariantType])
            return (
              <div className="flex flex-col gap-1">
                <p className="text-[16px] text-foreground">{option}</p>
                <Component />
              </div>
            );
          return <></>;
        })}
      </div>

      <div className="flex gap-4 items-center w-full">
        <Button>Add to cart</Button>

        <p className="text-[16px] font-semibold">
          {data.variants.filter((v) => v.color === filter.color)[0]?.price}
        </p>
      </div>
    </>
  );
};

export default BuyProduct;
