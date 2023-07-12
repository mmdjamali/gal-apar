"use client";

import React, { useEffect, useId, useState } from "react";

import { Icons } from "./icons";
import { cn } from "@/lib/utils";

function ProductImageInput({}) {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      images.forEach((image) => URL.revokeObjectURL(image));
    };
  }, []);

  const id = useId();
  return (
    <div className="flex flex-wrap gap-2">
      <label
        htmlFor={id}
        className="flex items-center justify-center transition-all w-32 aspect-square border border-dashed border-border cursor-pointer hover:bg-foreground/10 rounded"
      >
        <input
          onChange={async (e) => {
            if (!e.target.files) return;
            setLoading(true);

            const file = e.target.files[0];

            if (!file) return setLoading(false);

            await new Promise((resolve) => {
              setTimeout(() => resolve("hello"), 1000);
            });

            const url = URL.createObjectURL(file);
            setImages((prev) => [...prev.slice(0, 4), url]);
            setLoading(false);
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

      <div className="grid relative place-items-center border border-border w-32 aspect-square rounded overflow-hidden">
        {(() => {
          if (images[0])
            return (
              <img
                className="w-full transition-all aspect-square hover:scale-110 object-cover"
                src={images[0]}
              />
            );

          return <Icons.Image className="text-foreground text-[21px]" />;
        })()}
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-1 w-32 aspect-square">
        {images.map((image, idx) => {
          if (idx === 0) return "";

          return (
            <div
              key={image}
              className="gird place-items-center border border-border w-full aspect-square rounded overflow-hidden cursor-pointer"
            >
              <img
                className="w-full transition-all aspect-square hover:scale-110 object-cover"
                src={image}
              />
            </div>
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
