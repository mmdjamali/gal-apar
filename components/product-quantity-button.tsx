"use client";

import axios from "axios";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { Icons } from "./icons";
import { useToast } from "./ui/use-toast";
import { cn } from "@/lib/utils";
import { ProductType, VariantType } from "@/types/product";

interface ProductQuantityButtonProps {
  quantity: number;
  product: ProductType;
  variant: VariantType;
  _id: string;
}

function ProductQuantityButton({
  quantity,
  product,
  variant,
  _id,
}: ProductQuantityButtonProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (info: {
      product: string;
      variant: string | null;
      quantity: number;
    }) => {
      return (await axios.post("/api/cart", info)).data;
    },
    onSuccess(data, variables, context) {
      queryClient.setQueryData("cart", data);
    },
  });

  const del_mutation = useMutation({
    mutationFn: async (_id: string) => {
      return (await axios.patch("/api/cart/remove-item", { _id })).data;
    },
    onSuccess(data, variables, context) {
      queryClient.setQueryData("cart", data);
    },
  });

  return (
    <div className="grid grid-cols-3 place-items-center border border-border py-2 px-2 rounded">
      {quantity > 1 ? (
        <button
          onClick={() => {
            if (mutation.isLoading || del_mutation.isLoading) return;

            mutation.mutate({
              product: product?._id ?? "",
              variant: variant?._id ?? "",
              quantity: -1,
            });
          }}
        >
          <Icons.Subtract className="text-[21px] text-primary" />
        </button>
      ) : (
        <button
          onClick={() => {
            if (mutation.isLoading || del_mutation.isLoading) return;
            del_mutation.mutate(_id);
          }}
        >
          <Icons.DeleteBin className="text-[21px] text-primary" />
        </button>
      )}

      {mutation.isLoading || del_mutation.isLoading ? (
        <Icons.Spinner className="text-[21px] text-primary animate-spin animate-infinite" />
      ) : (
        <p>{quantity}</p>
      )}

      <button
        onClick={() => {
          if (mutation.isLoading || del_mutation.isLoading) return;

          if (quantity >= 3) {
            return toast({
              title: "Max amount reached",
              variant: "error",
            });
          }

          mutation.mutate({
            product: product?._id ?? "",
            variant: variant?._id ?? null,
            quantity: 1,
          });
        }}
      >
        <Icons.Add
          className={cn(
            "text-[21px]",
            quantity >= 3 ? "text-primary/50" : "text-primary"
          )}
        />
      </button>
    </div>
  );
}

export default ProductQuantityButton;
