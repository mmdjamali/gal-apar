"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Input from "./ui/input";

import { Icons } from "./icons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "./ui/dialog";
import Button from "./ui/button";
import {
  ScrollArea,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "./ui/scroll-area";

interface SelectCategoryProps {
  category: string;
  setCategory: (v: string) => void;
}

function SelectCategory({ category, setCategory }: SelectCategoryProps) {
  const [value, setValue] = useState(category ?? "");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outlined"
          color="foreground"
          className="text-start text-ellipsis overflow-hidden justify-start shadow"
          placeholder="select-catrgory"
          block
        >
          {value ? (
            value
          ) : (
            <p className="text-foreground/75">select-category</p>
          )}
        </Button>
      </DialogTrigger>

      <DialogOverlay />

      <DialogPortal>
        <DialogContent className="flex text-foreground p-0 overflow-hidden flex-col animate-slideInUp animate-duration-75 gap-2 h-96 w-[min(80%,600px)] bg-background">
          <ScrollArea className="w-full h-96">
            <ScrollAreaViewport className="block w-full h-full pr-1.5">
              <div className="sticky top-0 p-3 border-b border-border flex gap-3 bg-background z-[2]">
                <DialogClose asChild>
                  <Button variant="text" color="foreground" className="p-2">
                    <Icons.ArrowLeft className="text-[21px]" />
                  </Button>
                </DialogClose>

                <Input block placeholder="search-for-category" />
              </div>
              <div className="flex p-3 flex-col gap-1 w-full relative">
                {productCategories.map((option, idx) => (
                  <button
                    onClick={() => {
                      setValue(option);
                      setCategory(option);
                    }}
                    key={idx}
                    className="flex gap-2 items-center rounded px-3 py-1.5 hover:bg-foreground/10 justify-start w-full"
                  >
                    <div className="flex items-center justify-center h-4 aspect-square">
                      {option === category ? (
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

export default SelectCategory;

const productCategories = [
  "Electronics",
  "Clothing",
  "Beauty and personal care",
  "Home and kitchen appliances",
  "Books and stationery",
  "Sports and fitness equipment",
  "Toys and games",
  "Health and wellness products",
  "Automotive accessories",
  "Furniture and home decor",
  "Groceries and food items",
  "Pet supplies",
  "Jewelry and accessories",
  "Baby and maternity products",
  "Outdoor and camping gear",
];
