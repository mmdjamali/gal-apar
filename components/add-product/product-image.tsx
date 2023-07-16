"use client";

import React from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "../ui/dialog";
import Button from "../ui/button";

interface ProductImageProps {
  src: string;
  removeImage: () => void;
}

function ProductImage({ src, removeImage }: ProductImageProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="gird place-items-center border border-border w-full aspect-square rounded overflow-hidden cursor-pointer">
          <img
            className="w-full transition-all aspect-square hover:scale-110 object-cover"
            src={src}
          />
        </div>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent className="flex p-6 flex-col bg-background h-fit gap-4 animate-slideInUp animate-duration-75">
          <div className="flex flex-col gap-2">
            <p className="text-[18px] font-bold text-foreground">
              Removing image!
            </p>

            <p className="text-[14px] text-foreground/75">
              Are your sure about removing this image? This action cannot be
              undone.
            </p>
          </div>

          <div className="flex items-center justify-end  gap-2">
            <DialogClose asChild>
              <Button variant="outlined" color="foreground">
                Cancel
              </Button>
            </DialogClose>

            <Button onClick={() => removeImage()}>Remove</Button>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

export default ProductImage;
