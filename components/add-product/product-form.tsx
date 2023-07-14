"use client";

import React, { useState } from "react";
import Input from "../ui/input";
import Textarea from "../ui/textare";
import ProductCategory from "./product-category";
import ProductImageInput from "../product-image-input";
import Button from "../ui/button";
import ProductPrice from "./product-price";

interface ProductType {
  name: string;
  description: string;
  category: string;
  images: string[];
  price: {
    currency: string;
    value: string | number | null;
  };
  quantity: null | string | number;
}

function ProductForm() {
  const [product, setProduct] = useState<ProductType>({
    name: "",
    description: "",
    category: "",
    images: [],
    price: {
      currency: "",
      value: null,
    },
    quantity: null,
  });

  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 relative gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-medium">Name</p>
            <Input
              value={product?.name}
              onChange={(e) => {
                setProduct((prev) => ({ ...prev, name: e.target.value }));
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-medium">Description</p>
            <Textarea
              value={product?.description}
              onChange={(e) => {
                setProduct((prev) => ({
                  ...prev,
                  description: e.target.value,
                }));
              }}
              minRows={2}
            />
          </div>

          <ProductCategory
            category={product.category}
            setCategory={(v) => {
              setProduct((prev) => ({ ...prev, category: v }));
            }}
          />

          <ProductPrice
            currency={product.price.currency}
            value={product.price.value?.toString() || ""}
            setCurrency={(v) => {
              setProduct((prev) => ({
                ...prev,
                price: {
                  ...prev.price,
                  currency: v,
                },
              }));
            }}
            setValue={(v) => {
              setProduct((prev) => ({
                ...prev,
                price: {
                  ...prev.price,
                  value: v,
                },
              }));
            }}
          />

          <div className="flex flex-col gap-2">
            <p className="font-medium">Quantity</p>

            <Input
              value={product.quantity?.toString()}
              onChange={(e) => {
                const v = e.target.value.replaceAll(/\D/g, "");
                setProduct((prev) => ({
                  ...prev,
                  quantity: v,
                }));
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-medium">Product Images</p>

            <ProductImageInput
              images={product.images}
              setImages={(v) => {
                setProduct((prev) => ({
                  ...prev,
                  images: [...prev.images.slice(0, 4), v],
                }));
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex w-full items-center mt-auto">
        <Button>Add Product</Button>
      </div>
    </>
  );
}

export default ProductForm;
