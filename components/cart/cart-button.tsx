"use client";

import React from "react";
import Button from "../ui/button";
import { Icons } from "../icons";
import { useQuery } from "react-query";
import axios from "axios";
import { Bedge } from "../ui/bedge";
import Link from "next/link";
import { CartProductType } from "@/types/cart";

function CartButton() {
  const { data, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axios.get("/api/cart");
      return res.data;
    },
    refetchOnWindowFocus: false,
    cacheTime: 1000,
  });

  if (isLoading)
    return (
      <div className="flex rounded h-[37px] aspect-square bg-foreground/50 animate-pulse animate-infinite" />
    );

  return (
    <Link href="/me/cart">
      <Bedge
        show={
          !!data?.cart?.products?.reduce(
            (prev: number, p : CartProductType) => prev + p.quantity,
            0
          )
        }
        number={
          data?.cart?.products?.reduce(
            (prev: number, p : CartProductType) => prev + p.quantity,
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
