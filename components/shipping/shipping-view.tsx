"use client";

import React, { useMemo, useContext, createContext, useState } from "react";

import Link from "next/link";

import Button from "../ui/button";

import ShippingLocation from "./shipping-location";
import { useGetCart } from "@/hooks/cart/use-get-cart";
import { Icons } from "../icons";
import { CartProductType } from "@/types/cart";
import { useGetStoredCurrency } from "@/hooks/use-get-stored-currency";
import { LocationType } from "@/types/location";
import { WithLanguageType } from "@/types/language";

type ShippingContextType = {
  location: LocationType | null;
  setLocation: (state: LocationType) => void;
};

export const ShippingContext = createContext<ShippingContextType>(
  {} as ShippingContextType
);

function ShippingView({ language }: WithLanguageType) {
  const [location, setLocation] = useState<LocationType | null>(null);
  const { data, isLoading } = useGetCart();

  const { currency } = useGetStoredCurrency("tr");

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

  return (
    <ShippingContext.Provider
      value={{
        location,
        setLocation,
      }}
    >
      <div className="grid lg:grid-cols-[1fr_300px] gap-4 w-full relative text-foreground">
        <div className="w-full relative flex flex-col items-center justify-center gap-4">
          <ShippingLocation language={language} />

          <div className="flex flex-col w-full relative rounded border border-border p-5"></div>
        </div>

        <div className="flex lg:sticky lg:top-[69px] relative flex-col p-5 border border-border rounded w-full h-fit">
          <div className="flex w-full items-center justify-between">
            <p>Cart price</p>

            <p className="text-[16px] flex items-center justify-center font-semibold">
              {(() => {
                const Icon =
                  Icons[cart?.currency] ?? Icons[currency ?? "Circle"];

                return <Icon className="h-[14px] aspect-square text-[14px]" />;
              })()}

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

                return (Math.round((price ?? 0) * 100) / 100).toFixed(2);
              })()}
            </p>
          </div>

          <span className="inline-block w-full h-[1px] bg-border my-2" />

          <div className="flex w-full items-center justify-between text-primary">
            <p className="text-[14px]">Your benefit</p>

            <p className="flex items-center justify-center text-[16px] font-semibold">
              0
            </p>
          </div>

          <Link href={"/me/shipping"} className="mt-3">
            <Button block>Complete Order</Button>
          </Link>
        </div>
      </div>
    </ShippingContext.Provider>
  );
}

export default ShippingView;
