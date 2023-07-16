"use client";

import React, { useEffect, useId, useState } from "react";

import { Icons } from "./icons";
import { cn } from "@/lib/utils";
import ProductImage from "./add-product/product-image";

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
    <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-2">
      <label
        htmlFor={id}
        className="flex items-center justify-center transition-all full aspect-square border border-dashed border-border cursor-pointer hover:bg-foreground/10 hover:border-foreground/50 rounded"
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
              className={cn("text-[21px]", loading ? "animate-twSpin" : "")}
            />
          );
        })()}
      </label>

      {(() => {
        if (images[0])
          return (
            <ProductImage removeImage={() => removeImage(0)} src={images[0]} />
          );

        return (
          <div className="grid place-items-center border border-border w-full aspect-square rounded overflow-hidden">
            <Icons.Image className="text-[16px]" />
          </div>
        );
      })()}

      <div className="grid grid-cols-2 grid-rows-2 gap-1 w-full aspect-square">
        {images.map((image, idx) => {
          if (idx === 0) return "";

          return (
            <ProductImage removeImage={() => removeImage(idx)} src={image} />
          );
        })}
        {(() => {
          const remaining = 5 - (images.length || 1);

          return Array(remaining)
            .fill(" ")
            .map((_, idx) => (
              <div
                key={idx}
                className="grid place-items-center border border-border w-full aspect-square rounded overflow-hidden"
              >
                <Icons.Image className="text-[16px]" />
              </div>
            ));
        })()}
      </div>
    </div>
  );
}

export default ProductImageInput;
