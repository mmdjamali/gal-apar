"use client";

import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "./ui/dialog";
import {
  ScrollArea,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "./ui/scroll-area";
import Button from "./ui/button";
import { Icons } from "./icons";
import Input from "./ui/input";

interface SelectDialogProps<Option> {
  trigger: React.ReactNode;
  options: Option[];
  render: (option: Option, idx: number) => React.ReactNode;
  inputPlaceholder: string;
}

function SelectDialog<Option>({
  trigger,
  inputPlaceholder,
  options,
  render,
}: SelectDialogProps<Option>) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

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

                <Input block placeholder={inputPlaceholder} />
              </div>
              <div className="flex p-3 flex-col gap-1 w-full relative">
                {options.map(render)}
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

export default SelectDialog;
