"use client";

import React, { useMemo, useState } from "react";
import Button from "../ui/button";
import ColorVariantOptions from "./color-variant-options";
import { category_options } from "@/constant/category-options";
import { ProductType, VariantType } from "@/types/product";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { useGetCart } from "@/hooks/cart/use-get-cart";
import ProductQuantityButton from "../product-quantity-button";
import { CartProductType } from "@/types/cart";
import Icon from "../icon";
import Input from "../ui/input";

interface BuyProductProps {
  data: ProductType;
}

const BuyProduct = ({ data }: BuyProductProps) => {
  const queryClient = useQueryClient();

  const [filter, setFilter] = useState(
    Object.fromEntries(
      category_options[data.category.toLowerCase()]?.map((k) => [
        k,
        (data?.variants as VariantType[])[0][k as keyof VariantType],
      ]) ?? []
    )
  );

  const components = {
    color: {
      Component: () => (
        <ColorVariantOptions
          color={(filter?.color as string) ?? ""}
          options={(data?.variants as VariantType[])?.reduce(
            (prev: string[], v: VariantType) => {
              if (
                v.color &&
                !prev.includes(v.color) &&
                v.size === filter.size
              ) {
                prev.push(v.color);
              }

              return prev;
            },
            []
          )}
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
          {(data?.variants as VariantType[])
            .reduce((prev: string[], v) => {
              if (
                v.size &&
                !prev.includes(v.size) &&
                v.color === filter.color
              ) {
                prev.push(v.size);
              }
              return prev;
            }, [])
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

  const { data: cart, isLoading } = useGetCart();

  const mutation = useMutation({
    mutationFn: async (product: {
      product: string;
      variant: string | null;
      quantity: number;
    }) => {
      return (await axios.post("/api/cart", product)).data;
    },
    onSuccess(data, variables, context) {
      queryClient.setQueryData("cart", data);
    },
  });

  const selected_variant = (data?.variants as VariantType[])?.filter((v) =>
    Object.keys(filter).every((k) => v[k as keyof VariantType] === filter[k])
  )[0];

  const in_cart = useMemo(
    () =>
      cart?.cart?.products.filter(({ variant, product }: CartProductType) => {
        return (
          variant?._id === selected_variant?._id && product?._id === data?._id
        );
      })[0],
    [data, filter, cart]
  );

  return (
    <>
      <div className="flex gap-4 flex-col">
        {category_options[data.category.toLowerCase()]?.map((option, idx) => {
          const Component =
            components[option as keyof typeof components]?.Component;

          if (
            Component &&
            (data?.variants as VariantType[])[0][option as keyof VariantType]
          )
            return (
              <div className="flex flex-col gap-1">
                <p className="text-[16px] text-foreground">{option}</p>
                <Component />
              </div>
            );
          return <></>;
        })}
      </div>

      <span className="inline-block w-full h-[1px] bg-border" />

      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 w-full">
        {in_cart ? (
          <div className="w-[111px]">
            <ProductQuantityButton
              _id={in_cart?._id}
              product={in_cart.product}
              variant={in_cart.variant}
              quantity={in_cart.quantity}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2 w-full relative">
            <h3 className="font-semibold">Quantity</h3>
            <Input block />
            <Button
              block
              loading={mutation.isLoading}
              onClick={() => {
                mutation.mutate({
                  product: data._id ?? "",
                  variant:
                    (data.variants as VariantType[]).filter((v) =>
                      Object.keys(filter).every(
                        (k) => v[k as keyof VariantType] === filter[k]
                      )
                    )[0]?._id ?? null,
                  quantity: 1,
                });
              }}
            >
              Add to cart
            </Button>
          </div>
        )}

        <div className="flex items-center justify-end text-[16px] font-semibold">
          <Icon
            className="h-[16px] aspect-square text-[16px] text-foreground"
            name={"try"}
          />
          <p>{data.variants?.length ? selected_variant?.price : data.price}</p>
        </div>
      </div>
    </>
  );
};

export default BuyProduct;
