"use client";
import React, { useState } from "react";
import SelectCategory from "../select-category";

interface ProductCategoryProps {
  category: string;
  setCategory: (v: string) => void;
}

function ProductCategory({ category, setCategory }: ProductCategoryProps) {
  return (
    <div className="realtive flex flex-col items-start gap-2 ">
      <p className="font-medium">Categories</p>

      <SelectCategory
        category={category}
        setCategory={(v) => {
          setCategory(v);
        }}
      />
    </div>
  );
}

export default ProductCategory;
