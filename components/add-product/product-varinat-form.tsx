import React from "react";
import ProductColor from "./product-color";
import Input from "../ui/input";
import { type VariantType } from "@/types/product";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "../ui/dialog";
import Button from "../ui/button";
import { Icons } from "../icons";
import { category_options } from "@/constant/category-options";

interface ProductVarinatFormProps {
  variant: VariantType;
  onChange: (k: keyof VariantType, v: string) => void;
  name: string;
  onRemove: () => void;
  variants: VariantType[];
  category: string;
}

function ProductVarinatForm({
  variant,
  onChange,
  name,
  onRemove,
  category,
  variants,
}: ProductVarinatFormProps) {
  return (
    <div className="flex flex-col items-start gap-4 p-4 relative rounded border border-border">
      <div className="flex w-full items-center justify-between">
        <p>{name}</p>

        <Dialog>
          <DialogTrigger asChild>
            <Button type="button" className="p-2" variant="text">
              <Icons.DeleteBin className="text-[21px]" />
            </Button>
          </DialogTrigger>
          <DialogPortal>
            <DialogOverlay />
            <DialogContent className="flex p-6 flex-col bg-background h-fit gap-4 animate-slideInUp animate-duration-75">
              <div className="flex flex-col gap-2">
                <p className="text-[18px] font-bold text-foreground">
                  Removing Variant
                </p>

                <p className="text-[14px] text-foreground/75">
                  Are your sure about removing this Variant? This action cannot
                  be undone.
                </p>
              </div>

              <div className="flex items-center justify-end  gap-2">
                <DialogClose asChild>
                  <Button variant="outlined" color="foreground">
                    Cancel
                  </Button>
                </DialogClose>

                <Button onClick={() => onRemove()}>Remove</Button>
              </div>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </div>
      {[
        ...(category_options[category.toLowerCase()] ?? []),
        ...category_options?.default,
      ]?.map((key, i) => {
        if (key === "_id") return "";

        if (key === "color")
          return (
            <div className="w-full grid gap-2" key={i}>
              <p>{key}</p>
              <ProductColor
                used={variants.reduce((prev, v) => {
                  if (
                    v.size === variant.size &&
                    v.color !== variant.color &&
                    v.color
                  ) {
                    prev.push(v.color);
                  }

                  return prev;
                }, [] as string[])}
                color={variant?.color ?? ""}
                onChange={(v) => {
                  onChange(key, v);
                }}
              />
            </div>
          );

        if (key === "price")
          return (
            <div className="w-full grid gap-2" key={i}>
              <p>{key}</p>
              <Input
                value={variant[key as keyof VariantType]?.toString()}
                onChange={(v) => {
                  onChange(
                    key as keyof VariantType,
                    v.target.value.replaceAll(/[^0-9\.]/g, "")
                  );
                }}
                block
              />
            </div>
          );

        return (
          <div className="w-full grid gap-2" key={i}>
            <p>{key}</p>
            <Input
              value={variant[key as keyof VariantType] ?? ""}
              onChange={(v) => {
                onChange(key as keyof VariantType, v.target.value);
              }}
              block
            />
          </div>
        );
      })}
    </div>
  );
}

export default ProductVarinatForm;
