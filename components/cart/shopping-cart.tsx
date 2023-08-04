"use client";

import { colors } from "@/constant/colors";
import axios from "axios";
import React, { useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  Table,
  TableBody,
  TableBodyCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "../ui/table";
import { cn } from "@/lib/utils";
import Button from "../ui/button";
import { Icons } from "../icons";
import { useToast } from "../ui/use-toast";
import ProductQuantityButton from "../product-quantity-button";
import Link from "next/link";
import { CartProductType } from "@/types/cart";
import cart from "@/pages/api/cart";

function ShoppingCart() {
  const { data, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axios.get("/api/cart");
      return res.data;
    },
    refetchOnWindowFocus: false,
    cacheTime: 1000,
  });

  const cart = useMemo(
    () =>
      data?.cart?.products?.reduce(
        (prev: { products: CartProductType[] }, p: CartProductType) => {
          if (p.product) {
            prev.products.push(p);
          }

          return prev;
        },
        {
          ...data.cart,
          products: [],
        }
      ),
    [data]
  );

  if (isLoading)
    return (
      <div className="grid lg:grid-cols-[1fr_300px] gap-4 w-full relative">
        <div className="relative w-full border border-border rounded flex items-start flex-col overflow-hidden">
          <div className="flex w-full justify-between items-center px-6 py-3">
            <div className="flex flex-col gap-1">
              <span className="h-[18px] w-[120px] rounded bg-foreground/25 animate-pulse" />

              <span className="h-[16px] w-[80px] rounded bg-foreground/25 animate-pulse" />
            </div>

            <Button variant="text" className="p-2" color="foreground">
              <Icons.More className="text-[21px]" />
            </Button>
          </div>

          {Array(4)
            .fill("")
            .map((_, idx, list) => (
              <div
                key={idx}
                className={cn(
                  "w-full relative",
                  idx < list.length - 1 ? "border-b border-border" : ""
                )}
              >
                <div className="grid grid-cols-[116px_1fr] items-start w-full gap-4 overflow-hidden p-4 px-6">
                  <div className="w-full aspect-square bg-foreground/25 animate-pulse" />

                  <div className="flex w-full max-w-full relative flex-col gap-1 overflow-hidden">
                    <span className="h-[16px] w-[160px] rounded bg-foreground/25 animate-pulse" />
                  </div>

                  {/* buy button */}
                  <div className="h-[37px] rounded bg-foreground/25 animate-pulse" />

                  <div className="flex items-center justify-center h-full w-fit">
                    <span className="h-[16px] w-[80px] rounded bg-foreground/25 animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="flex lg:sticky lg:top-[69px] relative flex-col p-5 border gap-3 border-border rounded w-full h-fit">
          <div className="flex w-full items-center justify-between">
            <span className="h-[14px] w-[70px] rounded bg-foreground/25 animate-pulse" />

            <span className="h-[14px] w-[50px] rounded bg-foreground/25 animate-pulse" />
          </div>

          <div className="flex w-full items-center justify-between">
            <span className="h-[14px] w-[70px] rounded bg-foreground/25 animate-pulse" />

            <span className="h-[14px] w-[50px] rounded bg-foreground/25 animate-pulse" />
          </div>

          <div className="flex w-full items-center justify-between">
            <span className="h-[14px] w-[70px] rounded bg-foreground/25 animate-pulse" />

            <span className="h-[14px] w-[50px] rounded bg-foreground/25 animate-pulse" />
          </div>

          <div className="flex h-[37px] bg-foreground/25 rounded w-full animate-pulse" />
        </div>
      </div>
    );
  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-4 w-full relative text-foreground">
      <div
        dir="ltr"
        className="relative w-full border border-border rounded flex items-start flex-col overflow-hidden"
      >
        <div className="flex w-full justify-between items-center px-6 py-3">
          <div className="flex flex-col gap-1">
            <p className="text-[16px] font-semibold">Your Shopping Cart</p>
            <p className="text-[14px] text-foreground/75">{`${
              cart?.products?.reduce(
                (prev: number, p: CartProductType) => prev + p.quantity,
                0
              ) ?? 0
            } Products`}</p>
          </div>

          <Button variant="text" className="p-2" color="foreground">
            <Icons.More className="text-[21px]" />
          </Button>
        </div>

        {data &&
          cart.products?.map(
            (
              { product, variant, quantity, _id }: CartProductType,
              idx: number,
              list: CartProductType[]
            ) => {
              return (
                <div
                  key={`${product?._id} --- ${variant?._id}`}
                  className={cn(
                    "w-full relative",
                    idx < list.length - 1 ? "border-b border-border" : ""
                  )}
                >
                  <div className="grid grid-cols-[116px_1fr] items-start w-full gap-4 overflow-hidden p-4 px-6">
                    <Link href={`/product/${product?._id}`}>
                      <img
                        className="w-full aspect-square"
                        src={product?.images[0] ?? ""}
                      />
                    </Link>

                    <div className="flex w-full max-w-full relative flex-col gap-1 overflow-hidden">
                      <p className="text-[14px] mb-1 flex-shrink w-full whitespace-normal text-ellipsis overflow-hidden text-foreground font-medium">
                        {product.name}
                      </p>

                      {variant?.color ? (
                        <div className="flex items-center gap-1 text-foreground/75">
                          <span
                            style={{
                              backgroundColor: colors.filter(
                                ({ name }) => name === variant?.color
                              )[0]?.hexCode,
                            }}
                            className="w-4 aspect-square rounded-full border"
                          />

                          <p className="text-[12px] text-foreground/75 font-medium">
                            {variant?.color}
                          </p>
                        </div>
                      ) : (
                        <></>
                      )}

                      {variant?.size ? (
                        <div className="flex items-center gap-1">
                          <Icons.Ruler className="text-[16px] text-foreground/75" />

                          <p className="text-[12px] font-medium leading-none text-foreground/75">
                            {variant?.size}
                          </p>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>

                    <ProductQuantityButton
                      _id={_id}
                      product={product}
                      quantity={quantity}
                      variant={variant}
                    />

                    <div className="flex items-center justify-center h-full w-fit">
                      <div className="flex items-center justify-center">
                        {(() => {
                          const Icon =
                            Icons[product?.currency] ?? Icons["Circle"];

                          return (
                            <Icon className="h-[14px] aspect-square text-[14px] text-foreground" />
                          );
                        })()}

                        {(() => {
                          if (product?.price) {
                            const price = product?.price * quantity;
                            return (
                              <p className="text-[16px] font-semibold">
                                {price}
                              </p>
                            );
                          }

                          if (
                            variant?.price &&
                            typeof variant.price === "number"
                          ) {
                            const price = variant.price * quantity;
                            return (
                              <p className="text-[16px] font-semibold">
                                {price}
                              </p>
                            );
                          }

                          return <p>???</p>;
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
      </div>

      <div className="flex lg:sticky lg:top-[69px] relative flex-col gap-3 p-5 border border-border rounded w-full h-fit">
        <div className="flex w-full items-center justify-between">
          <p>
            Total price{" "}
            <span className="text-[12px]">{`(${
              cart?.products?.reduce(
                (prev: number, p: CartProductType) => prev + p.quantity,
                0
              ) ?? 0
            })`}</span>
          </p>

          <p className="text-[16px] font-semibold text-foreground/75">
            {(() => {
              const price = cart?.products?.reduce(
                (
                  prev: number,
                  { variant, product, quantity }: CartProductType
                ) => {
                  if (variant?.price && typeof variant.price === "number") {
                    return prev + (variant?.price ?? 0) * quantity;
                  }

                  if (product?.price) {
                    return prev + (product?.price ?? 0) * quantity;
                  }

                  return prev;
                },
                0
              );

              return (Math.round(price * 100) / 100).toFixed(2);
            })()}
          </p>
        </div>

        <div className="flex w-full items-center justify-between">
          <p>Total cart price</p>

          <p className="text-[16px] font-semibold">
            {(() => {
              const price = cart?.products?.reduce(
                (
                  prev: number,
                  { variant, product, quantity }: CartProductType
                ) => {
                  if (variant?.price && typeof variant.price === "number") {
                    return prev + variant.price * quantity;
                  }

                  if (product?.price) {
                    return prev + (product?.price ?? 0) * quantity;
                  }

                  return prev;
                },
                0
              );

              return (Math.round(price * 100) / 100).toFixed(2);
            })()}
          </p>
        </div>

        <div className="flex w-full items-center justify-between text-primary">
          <p className="text-[14px]">Total benefit</p>

          <p className="text-[16px] font-semibold">0</p>
        </div>

        <Button>Complete Order</Button>
      </div>
    </div>
  );
}

export default ShoppingCart;
