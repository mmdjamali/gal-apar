"use client";

import React, { useState } from "react";
import axios from "axios";

// ui
import Input from "../ui/input";
import Textarea from "../ui/textare";
import Button from "../ui/button";
import { useToast } from "../ui/use-toast";
import { Icons } from "../icons";

// logic components
import ProductCategory from "./product-category";
import ProductImageInput from "../product-image-input";
import ProductPrice from "./product-price";
import ProductCurrency from "./product-currency";

// types
import { type VariantType } from "@/types/product";
import ProductVarinatForm from "./product-varinat-form";
import { category_options } from "@/constant/category-options";

interface ProductType {
  name: string;
  description: string;
  category: string;
  images: string[];
  currency: string;
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
    currency: "",
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

          <div className="flex flex-col gap-2">
            <p className="font-medium">Currencies</p>

            <ProductCurrency
              currency={product.currency}
              onChange={(v: string) => {
                setProduct((prev) => ({
                  ...prev,
                  currency: v,
                }));
              }}
            />
          </div>

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

              <div className="flex flex-col gap-2">
                <p className="font-medium">Quantity</p>

                <Input
                  value={product.quantity ? product.quantity.toString() : ""}
                  onChange={(e) => {
                    const v = e.target.value.replaceAll(/\D/g, "");
                    setProduct((prev) => ({
                      ...prev,
                      quantity: v,
                    }));
                  }}
                />
              </div>
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

      <div className="grid relative w-full gap-2">
        <p className="font-medium">Variants</p>

        {variants?.length ? (
          <div className="grid w-full grid-cols-1 md:grid-cols-2 relative gap-6">
            {variants.map((variant, idx) => (
              <ProductVarinatForm
                category={product.category}
                variants={variants}
                variant={variant}
                name={`Variant ${idx + 1}`}
                key={variant._id}
                onChange={(key, value) => {
                  setVariants((prev) => {
                    const clone = [...prev];
                    clone[idx as number][key] = value;
                    return clone;
                  });
                }}
                onRemove={() => {
                  setVariants((prev) => [...prev.filter((_, i) => i !== idx)]);
                }}
              />
            ))}
          </div>
        ) : (
          ""
        )}

        <div className="flex items-start">
          <Button
            type="button"
            variant="text"
            onClick={() => {
              if (!product.category)
                return toast({
                  title: "You must select a category",
                  variant: "error",
                });

              setVariants((prev) => {
                return [
                  ...prev,
                  {
                    price: prev[prev.length - 1]
                      ? prev[prev.length - 1].price
                      : "",
                    quantity: "",
                    _id: new Date().toString(),
                  },
                ];
              });
            }}
          >
            <Icons.Add className="text-[21px]" /> Add Variant
          </Button>
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
