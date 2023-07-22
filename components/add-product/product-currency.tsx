"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Input from "../ui/input";

import { Icons } from "../icons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "../ui/dialog";
import Button from "../ui/button";
import {
  ScrollArea,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "../ui/scroll-area";

interface ProductCurrencyProps {
  currency: string;
  onChange: (v: string) => void;
}

function ProductCurrency({ currency, onChange }: ProductCurrencyProps) {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <Input
          inputClassName="text-start text-ellipsis overflow-hidden"
          value={currency}
          onChange={() => {}}
          placeholder="select-currencies"
          block
          actions={[<Icons.ExpandY className="text-[16px] flex-shrink-0" />]}
        />
      </DialogTrigger>

      <DialogOverlay />

      <DialogPortal>
        <DialogContent className="flex text-foreground p-0 overflow-hidden border-none flex-col animate-slideInUp animate-duration-75 gap-2 h-96 w-[min(80%,600px)] bg-background">
          <ScrollArea className="w-full h-96">
            <ScrollAreaViewport className="block w-full h-full pr-1.5">
              <div className="sticky top-0 p-3 border-b border-border flex gap-3 bg-background z-[2]">
                <DialogClose asChild>
                  <Button variant="text" color="foreground" className="p-2">
                    <Icons.ArrowLeft className="text-[21px]" />
                  </Button>
                </DialogClose>

                <Input block placeholder="search-for-currencies" />
              </div>
              <div className="flex p-3 flex-col gap-1 w-full relative">
                {productCategories.map((option, idx) => (
                  <button
                    onClick={() => {
                      currency === option ? onChange("") : onChange(option);
                    }}
                    key={idx}
                    className="flex gap-2 items-center rounded px-3 py-1.5 hover:bg-foreground/10 justify-start w-full"
                  >
                    <div className="flex items-center justify-center h-4 aspect-square">
                      {currency === option ? (
                        <Icons.Check className="text-[16px]" />
                      ) : (
                        ""
                      )}
                    </div>
                    {option}
                  </button>
                ))}
              </div>
            </ScrollAreaViewport>
            <ScrollAreaScrollbar orientation="vertical" className="z-[3]">
              <ScrollAreaThumb />
            </ScrollAreaScrollbar>
          </ScrollArea>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

export default ProductCurrency;

const productCategories = [
  "United States Dollar (USD)",
  "Turkish Lira (TRY)",
  "Azerbaijani manat (AZN)",
  "Euro (EUR)",
  "Japanese Yen (JPY)",
  "Canadian Dollar (CAD)",
  "British Pound Sterling (GBP)",
  "Australian Dollar (AUD)",
  "Swiss Franc (CHF)",
  "Iranian Rial (IRR)",
];
