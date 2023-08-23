"use client";

import React, { useState } from "react";
import axios from "axios";

// ui
import Input from "../ui/input";
import Textarea from "../ui/textarea";
import Button from "../ui/button";
import { useToast } from "../ui/use-toast";
import { Icons } from "../icons";

// logic components
import ProductCategory from "./product-category";
import ProductImageInput from "../product-image-input";
import ProductPrice from "./product-price";

// types
import { type VariantType } from "@/types/product";
import ProductVarinatForm from "./product-varinat-form";

interface ProductType {
  name: string;
  description: string;
  category: string;
  images: string[];
  price: string | number | null;
  quantity: null | string | number;
}

function ProductForm() {
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);

  const [product, setProduct] = useState<ProductType>({
    name: "",
    description: "",
    category: "",
    images: [],
    price: null,
    quantity: null,
  });

  const [variants, setVariants] = useState<VariantType[]>([]);

  return (
    <form
      className="flex flex-col relative w-full gap-6"
      onSubmit={async (e) => {
        e.preventDefault();

        try {
          setLoading(true);

          const req = await axios.post("/api/product", {
            ...product,
            variants,
          });

          setLoading(false);
          toast({
            variant: "success",
            title: "Success!",
            description: "Product Added successfully",
          });
        } catch (err: any) {
          setLoading(false);
          toast({
            title: "Something went wrong!",
            description: `${err?.message}`,
            variant: "error",
          });
        }
      }}
    >
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 relative gap-6">
        <div className="flex flex-col gap-6 h-fit">
          <Input
            label="Name"
            value={product?.name}
            onChange={(e) => {
              setProduct((prev) => ({ ...prev, name: e.target.value }));
            }}
          />

          <Textarea
            label="Description"
            value={product?.description}
            onChange={(e) => {
              setProduct((prev) => ({
                ...prev,
                description: e.target.value,
              }));
            }}
            minRows={2}
          />

          <ProductCategory
            category={product.category}
            setCategory={(v) => {
              setProduct((prev) => ({ ...prev, category: v }));
            }}
          />

          {!variants?.length ? (
            <>
              <ProductPrice
                value={product.price?.toString() || ""}
                onChange={(v) => {
                  setProduct((prev) => ({
                    ...prev,
                    price: v,
                  }));
                }}
              />

              <Input
                label="Quantity"
                value={product.quantity ? product.quantity.toString() : ""}
                onChange={(e) => {
                  const v = e.target.value.replaceAll(/\D/g, "");
                  setProduct((prev) => ({
                    ...prev,
                    quantity: v,
                  }));
                }}
              />
            </>
          ) : (
            ""
          )}
        </div>

        <div className="flex flex-col gap-6 h-fit">
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
              removeImage={(idx) => {
                setProduct((prev) => {
                  const images = [...prev.images].filter((_, i) => idx !== i);
                  return {
                    ...prev,
                    images,
                  };
                });
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-end gap-2 mt-auto">
        <Button loading={loading} type="submit">
          Add Product
        </Button>
      </div>
    </form>
  );
}

export default ProductForm;
