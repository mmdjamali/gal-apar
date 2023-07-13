"use client";
import React, { useEffect, useState } from "react";
import SelectCategory from "./select-category";
import Button from "./ui/button";
import { Icons } from "./icons";

interface Category {
  value: string;
  id: number;
}

function ProductCategories({
  defaultCategories = [],
}: {
  defaultCategories?: string[];
}) {
  const [categories, setCategories] = useState<Category[]>(
    defaultCategories.map((item) => ({
      id: Math.round(Math.random() * 100000),
      value: item,
    }))
  );

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <div className="realtive flex flex-col items-start gap-2 mt-2">
      <p className="font-medium">Categories</p>

      {categories.map(({ value, id }, idx) => (
        <div
          className="flex flex-shrink gap-2 items-center w-full relative"
          key={id}
        >
          <SelectCategory
            category={value}
            setCategory={(v) => {
              setCategories((prev) => {
                const clone = [...prev];
                clone[idx].value = v;
                return clone;
              });
            }}
          />

          <Button
            className="p-2"
            variant="text"
            color="foreground"
            onClick={() => {
              setCategories((prev) => prev.filter((item, i) => i !== idx));
            }}
          >
            <Icons.DeleteBin className="text-[21px]" />
          </Button>
        </div>
      ))}
      {categories.length < 3 ? (
        <Button
          className="gap-2"
          variant="text"
          color="foreground"
          onClick={() => {
            if (categories.length >= 3) return;

            setCategories((prev) => [
              ...prev,
              {
                value: "",
                id: Math.round(Math.random() * new Date().getMilliseconds()),
              },
            ]);
          }}
        >
          <Icons.Add className="text-[16px]" /> Add Category
        </Button>
      ) : (
        ""
      )}
    </div>
  );
}

export default ProductCategories;
