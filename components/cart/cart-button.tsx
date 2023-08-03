"use client";

import React, { useMemo } from "react";
import Button from "../ui/button";
import { Icons } from "../icons";
import { Bedge } from "../ui/bedge";
import Link from "next/link";
import { CartProductType } from "@/types/cart";
import { useGetCart } from "@/hooks/cart/use-get-cart";

function CartButton() {
  const { data, isLoading } = useGetCart();

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
      <div className="flex rounded h-[37px] aspect-square bg-foreground/50 animate-pulse animate-infinite" />
    );

  return (
    <Link href="/me/cart">
      <Bedge
        show={
          !!cart?.products?.reduce(
            (prev: number, p: CartProductType) => prev + p.quantity,
            0
          )
        }
        number={
          cart?.products?.reduce(
            (prev: number, p: CartProductType) => prev + p.quantity,
            0
          ) ?? 0
        }
      >
        <Button className="p-2" variant="text" color="foreground">
          <Icons.Cart className="text-[21px]" />
        </Button>
      </Bedge>
    </Link>
  );
}

export default CartButton;
