"use client";

import React, { useEffect, useId, useState } from "react";

import { Icons } from "./icons";
import { cn } from "@/lib/utils";
import Button from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "./ui/dialog";

interface ProductImageInputProps {
  images: string[];
  setImages: (v: string) => void;
  removeImage: (v: number) => void;
}

function ProductImageInput({
  images,
  setImages,
  removeImage,
}: ProductImageInputProps) {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      images.forEach((image) => URL.revokeObjectURL(image));
    };
  }, []);

  const id = useId();
  return (
    <div className="flex flex-col w-full relative gap-4">
      <label
        htmlFor={id}
        className="flex items-center justify-center transition-all full aspect-video border border-dashed border-primary/50 cursor-pointer hover:bg-primary/5 hover:border-primary/50 hover:text-primary rounded"
      >
        <input
          disabled={loading}
          onChange={async (e) => {
            if (!e.target.files) return;
            setLoading(true);

            try {
              const file = e.target.files[0];

              if (!file) return setLoading(false);

              const formData = new FormData();
              formData.append("image", file);

              const res = await fetch("http://localhost:3001/upload", {
                method: "POST",
                body: formData,
              });

              const { url } = await res.json();

              setImages("http://localhost:3001/" + url);
              setLoading(false);
            } catch (err) {
              setLoading(false);
            }
          }}
          className="hidden"
          id={id}
          type="file"
          accept="image/*"
        />

        {(() => {
          const Icon = loading ? Icons.Spinner : Icons.ImageAdd;

          return (
            <Icon
              className={cn("text-[21px]", loading ? "animate-spin" : "")}
            />
          );
        })()}
      </label>

      <div className="flex flex-col gap-4 w-full">
        {images.map((image, idx) => (
          <div
            key={image}
            className="flex items-center p-2 justify-between w-full h-16 rounded border border-border "
          >
            <img className="rounded h-full aspect-square" src={image} />

            <Dialog>
              <DialogTrigger asChild>
                <Button type="button" className="p-2" variant="text">
                  <Icons.DeleteBin className="text-[21px]" />
                </Button>
              </DialogTrigger>
              <DialogPortal>
                <DialogOverlay />
                <DialogContent className="flex p-6 flex-col bg-background h-fit gap-4 animate-slideInUp animate-duration-75">
                  <div className="flex flex-col gap-2">
                    <p className="text-[18px] font-bold text-foreground">
                      Removing image!
                    </p>

                    <p className="text-[14px] text-foreground/75">
                      Are your sure about removing this image? This action
                      cannot be undone.
                    </p>
                  </div>

                  <div className="flex items-center justify-end  gap-2">
                    <DialogClose asChild>
                      <Button variant="outlined" color="foreground">
                        Cancel
                      </Button>
                    </DialogClose>

                    <Button onClick={() => removeImage(idx)}>Remove</Button>
                  </div>
                </DialogContent>
              </DialogPortal>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImageInput;
