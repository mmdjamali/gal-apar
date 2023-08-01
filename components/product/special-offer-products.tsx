"use client";

import React, { useEffect, useReducer, useRef, useState } from "react";
import { Icons } from "../icons";
import Button from "../ui/button";
import axios from "axios";
import { useQuery } from "react-query";
import { Chip } from "../ui/chip";
import Link from "next/link";
import Image from "next/image";

function SpecialOfferProducts() {
  const [scroll, setScroll] = useState(0);
  const [show, setShow] = useState({
    prev: false,
    next: false,
  });

  const ref = useRef<HTMLDivElement | null>(null);

  const { data, isLoading, isError } = useQuery("special-offers", async () => {
    const res = await axios.get("/api/product");
    return res.data;
  });

  useEffect(() => {
    if (!ref.current) return;

    setShow({
      prev: scroll > 0,
      next: scroll < ref.current.scrollWidth - ref.current.clientWidth,
    });

    ref.current.scrollTo({
      behavior: "smooth",
      left: scroll,
    });
  }, [ref, scroll, data]);

  if (isLoading)
    return (
      <div className="flex rounded w-full h-[264px] bg-foreground/50 animate-pulse animate-infinite" />
    );

  return (
    <div className="flex w-full relative items-center rounded bg-primary px-1 ">
      <div
        ref={ref}
        className="flex relative snap-x snap-proximity items-center gap-1 rounded  py-3 overflow-auto scroll no-scrollbar"
      >
        <div className="flex flex-shrink-0 flex-col snap-center bg-primary items-center justify-center w-[170px] h-[240px]">
          <span className="p-3 rounded-full bg-white">
            <Icons.Cart className="text-[32px] text-primary" />
          </span>
          <p className="text-[14px] text-white font-bold">Populer</p>
        </div>

        {!isLoading && !isError
          ? data.map(
              (
                {
                  images,
                  base_price,
                  _id,
                  currency,
                }: {
                  images: string[];
                  base_price: number;
                  _id: string;
                  currency: string;
                },
                idx: number
              ) => (
                <div
                  key={idx}
                  className="flex items-start gap-1 flex-col relative p-3 flex-shrink-0 snap-center w-[170px] h-[240px] bg-white rounded"
                >
                  <Link
                    href={"/product/" + _id}
                    key={idx}
                    className="w-full relative aspect-square rounded overflow-hidden"
                  >
                    <Image
                      alt=""
                      className="object-cover"
                      fill
                      src={images[0]}
                      unoptimized
                    />
                  </Link>

                  <div className="flex w-full gap-1 items-center">
                    {(() => {
                      const Icon = Icons[currency] ?? Icons["Circle"];
                      return <Icon className="text-[14px] h-[14px]" />;
                    })()}
                    <p className="font-bold text-foreground">{base_price}</p>
                  </div>
                </div>
              )
            )
          : ""}
      </div>

      <div className="hidden md:flex px-2 w-full absolute left-0 right-0 my-auto pointer-events-none">
        {show.prev && (
          <Button
            onClick={() => {
              setScroll((prev) => prev - 170);
            }}
            variant="outlined"
            color="foreground"
            className="p-2 pointer-events-auto bg-background hover:bg-background"
          >
            <Icons.LeftArrow className="text-[21px]" />
          </Button>
        )}

        {show.next && (
          <Button
            onClick={() => {
              setScroll((prev) => prev + 170);
            }}
            variant="outlined"
            color="foreground"
            className="p-2 ml-auto pointer-events-auto bg-background hover:bg-background"
          >
            <Icons.RightArrow className="text-[21px]" />
          </Button>
        )}
      </div>
    </div>
  );
}

export default SpecialOfferProducts;
