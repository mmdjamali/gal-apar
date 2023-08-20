"use client";

import React, { useMemo } from "react";
import Button from "../ui/button";
import { Icons } from "../icons";
import { Bedge } from "../ui/bedge";
import Link from "next/link";
import { CartProductType } from "@/types/cart";
import { useGetCart } from "@/hooks/cart/use-get-cart";
import { WithLanguageType } from "@/types/language";
import { createUrlInitilizer, toPersianNumbers } from "@/lib/utils";
import { useSession } from "next-auth/react";

function CartButton({ language }: WithLanguageType) {
  const session = useSession();
  const createUrl = createUrlInitilizer(language);

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

  if (session.status === "unauthenticated")
    return (
      <Link href={createUrl("/me/cart")}>
        <Button className="p-2" variant="text" color="foreground">
          <Icons.Cart className="text-[21px]" />
        </Button>
      </Link>
    );

  if (isLoading || session.status === "loading")
    return (
      <div className="flex rounded h-[37px] aspect-square bg-foreground/25 animate-pulse animate-infinite" />
    );

  return (
    <Link href={createUrl("/me/cart")}>
      <Bedge
        show={
          !!cart?.products?.reduce(
            (prev: number, p: CartProductType) => prev + p.quantity,
            0
          )
        }
        number={
          language === "fa"
            ? toPersianNumbers(
                cart?.products?.reduce(
                  (prev: number, p: CartProductType) => prev + p.quantity,
                  0
                ) ?? 0
              )
            : cart?.products?.reduce(
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
