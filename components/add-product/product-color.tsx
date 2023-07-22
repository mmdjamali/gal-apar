"use client";

import React, { useState } from "react";
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
import { colors } from "@/constant/colors";

interface ProductColorProps {
  color: string;
  onChange: (v: string) => void;
}

function ProductColor({ color, onChange }: ProductColorProps) {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <Input
          inputClassName="text-start text-ellipsis overflow-hidden"
          value={color}
          onChange={() => {}}
          placeholder="select-color"
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
                {colors.map(({ name, hexCode }, idx) => (
                  <button
                    onClick={() => {
                      color === name ? onChange("") : onChange(name);
                    }}
                    key={idx}
                    className="flex gap-2 items-center rounded px-3 py-1.5 hover:bg-foreground/10 justify-start w-full"
                  >
                    <div className="flex flex-shrink-0 items-center justify-center h-4 aspect-square">
                      {color === name ? (
                        <Icons.Check className="text-[16px]" />
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="flex w-full items-center justify-between">
                      {name}

                      <span
                        style={{
                          backgroundColor: hexCode,
                        }}
                        className="inline w-4 aspect-square rounded-[4px] border border-foreground"
                      />
                    </div>
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

export default ProductColor;
